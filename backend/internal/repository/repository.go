package repository

import (
	"fmt"
	"sort"
	"strings"
	"sync"

	"nova-gear/internal/model"
)

type Repository struct {
	mu       sync.RWMutex
	products []model.Product
	carts    map[string][]model.CartItem
}

func New() *Repository {
	return &Repository{products: seedProducts(), carts: make(map[string][]model.CartItem)}
}

func (r *Repository) ListProducts(category, search, sortBy string, min, max int) []model.Product {
	r.mu.RLock()
	defer r.mu.RUnlock()
	out := make([]model.Product, 0)
	q := strings.ToLower(strings.TrimSpace(search))
	for _, p := range r.products {
		if category != "" && category != "all" && !strings.EqualFold(p.Category, category) {
			continue
		}
		if q != "" && !strings.Contains(strings.ToLower(p.Name+" "+p.Description), q) {
			continue
		}
		if min > 0 && p.Price < min {
			continue
		}
		if max > 0 && p.Price > max {
			continue
		}
		out = append(out, p)
	}
	switch sortBy {
	case "price-asc":
		sort.Slice(out, func(i, j int) bool { return out[i].Price < out[j].Price })
	case "price-desc":
		sort.Slice(out, func(i, j int) bool { return out[i].Price > out[j].Price })
	case "rating":
		sort.Slice(out, func(i, j int) bool { return out[i].Rating > out[j].Rating })
	}
	return out
}

func (r *Repository) GetProduct(slug string) (model.Product, bool) {
	r.mu.RLock()
	defer r.mu.RUnlock()
	for _, p := range r.products {
		if p.Slug == slug {
			return p, true
		}
	}
	return model.Product{}, false
}
func (r *Repository) GetProductByID(id int) (model.Product, bool) {
	r.mu.RLock()
	defer r.mu.RUnlock()
	for _, p := range r.products {
		if p.ID == id {
			return p, true
		}
	}
	return model.Product{}, false
}
func (r *Repository) AddCart(cartID string, productID, quantity int) ([]model.CartItem, error) {
	r.mu.Lock()
	defer r.mu.Unlock()
	var product *model.Product
	for i := range r.products {
		if r.products[i].ID == productID {
			product = &r.products[i]
			break
		}
	}
	if product == nil {
		return nil, fmt.Errorf("product not found")
	}
	if quantity < 1 {
		quantity = 1
	}
	items := r.carts[cartID]
	found := false
	for i := range items {
		if items[i].ProductID == productID {
			items[i].Quantity += quantity
			found = true
		}
	}
	if !found {
		items = append(items, model.CartItem{ProductID: productID, Quantity: quantity})
	}
	r.carts[cartID] = items
	return items, nil
}
func (r *Repository) UpdateCart(cartID string, productID, quantity int) []model.CartItem {
	r.mu.Lock()
	defer r.mu.Unlock()
	items := r.carts[cartID]
	if quantity <= 0 {
		for i := range items {
			if items[i].ProductID == productID {
				items = append(items[:i], items[i+1:]...)
				break
			}
		}
	} else {
		for i := range items {
			if items[i].ProductID == productID {
				items[i].Quantity = quantity
			}
		}
	}
	r.carts[cartID] = items
	return items
}
func (r *Repository) ClearCart(cartID string) {
	r.mu.Lock()
	defer r.mu.Unlock()
	delete(r.carts, cartID)
}
func (r *Repository) CartItems(cartID string) []model.CartItem {
	r.mu.RLock()
	defer r.mu.RUnlock()
	return append([]model.CartItem(nil), r.carts[cartID]...)
}

func color(name, hex string) model.Color { return model.Color{Name: name, Hex: hex} }
func seedProducts() []model.Product {
	img := func(id string) string {
		return "https://images.unsplash.com/" + id + "?auto=format&fit=crop&w=900&q=85"
	}
	black := []model.Color{color("Obsidian", "#141414"), color("Sage", "#A9B6A0")}
	return []model.Product{
		{1, "aura-phone-12", "Aura Phone 12", "Smartphone", 14999000, 16999000, 624958, 4.9, 128, "Terlaris", "Flagship yang terasa ringan. Kamera Pro 48MP, layar 120Hz, dan satu hari penuh tanpa kompromi.", img("photo-1598327105666-5b89351aff97"), "Aura Phone 12 hitam", black, []model.Spec{{"Layar", "6.7\" OLED · 120Hz"}, {"Kamera", "48MP Pro · 4K Video"}, {"Baterai", "4.800 mAh"}}, 7, true},
		{2, "pulse-watch-4", "Pulse Watch 4", "Smartwatch", 4799000, 0, 199958, 4.8, 86, "Baru", "Data kesehatan yang jujur, desain yang tidak berisik.", img("photo-1544117519-31a4b719223d"), "Pulse Watch 4", []model.Color{color("Orange", "#FF4A1C"), color("Ink", "#141414")}, []model.Spec{{"Display", "1.9\" AMOLED"}, {"Sensor", "Heart · SpO₂ · Sleep"}, {"Baterai", "14 hari"}}, 12, true},
		{3, "arc-buds-pro", "Arc Buds Pro", "Audio", 2899000, 3299000, 120792, 4.7, 214, "Stok terbatas", "Noise cancelling adaptif dalam siluet sekecil itu.", img("photo-1606220945770-b5b6c2c55bf1"), "Arc Buds Pro", black, []model.Spec{{"Driver", "11mm Dynamic"}, {"ANC", "Adaptive ANC"}, {"Playtime", "36 jam + case"}}, 4, true},
		{4, "framebook-air-14", "Framebook Air 14", "Laptop", 18999000, 0, 791625, 4.9, 52, "", "Tenaga kerja kreatif. Beratnya seperti buku.", img("photo-1496181133206-80ce9b88a853"), "Framebook Air 14", []model.Color{color("Silver", "#C4C4C4"), color("Black", "#141414")}, []model.Spec{{"Processor", "M4 · 10-core"}, {"Display", "14.2\" Liquid Retina"}, {"Battery", "18 jam"}}, 8, true},
		{5, "snap-charger-65", "Snap Charger 65W", "Aksesoris", 699000, 0, 29125, 4.6, 41, "", "Kecil di tas, besar di daya.", img("photo-1609592424672-6dd0f4a9312c"), "Snap Charger 65W", []model.Color{color("White", "#F2EEE6")}, []model.Spec{{"Output", "65W GaN"}, {"Ports", "2x USB-C · 1x USB-A"}}, 20, false},
		{6, "aura-phone-case", "Aura Case / Clay", "Aksesoris", 549000, 0, 22875, 4.8, 67, "", "Perlindungan tipis dengan warna yang terasa hidup.", img("photo-1556656793-08538906a9f8"), "Aura Case Clay", []model.Color{color("Clay", "#C96F4A")}, []model.Spec{{"Material", "Recycled TPU"}, {"Protection", "2m drop tested"}}, 14, false},
		{7, "studio-speaker-mini", "Studio Speaker Mini", "Audio", 2199000, 2499000, 91625, 4.7, 39, "", "Suara penuh dari sudut paling tenang di ruangan.", img("photo-1608043152269-423dbba4e7e1"), "Studio Speaker Mini", black, []model.Spec{{"Audio", "360° spatial"}, {"Battery", "20 jam"}}, 9, false},
		{8, "loop-powerbank", "Loop Powerbank 10K", "Aksesoris", 899000, 0, 37458, 4.5, 103, "", "Daya cadangan yang selalu siap.", img("photo-1609592424672-6dd0f4a9312c"), "Loop Powerbank", []model.Color{color("Lime", "#D8F24A")}, []model.Spec{{"Capacity", "10.000 mAh"}, {"Output", "30W USB-C"}}, 18, false},
		{9, "aura-phone-12-sage", "Aura Phone 12 Sage", "Smartphone", 14999000, 0, 624958, 4.9, 24, "", "Sage green, karakter yang lebih lembut.", img("photo-1601784551446-20c9e07cdbdb"), "Aura Phone 12 Sage", []model.Color{color("Sage", "#A9B6A0")}, []model.Spec{{"Layar", "6.7\" OLED · 120Hz"}, {"Kamera", "48MP Pro"}}, 6, false},
		{10, "desk-mat", "Desk Mat / Terra", "Aksesoris", 429000, 0, 17875, 4.6, 28, "", "Permukaan kerja yang bikin fokus terasa mudah.", img("photo-1622560480605-d83c853bc5c3"), "Desk Mat Terra", []model.Color{color("Terra", "#B56545")}, []model.Spec{{"Surface", "Vegan leather"}, {"Size", "90 × 40 cm"}}, 15, false},
	}
}
