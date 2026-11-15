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
		{ID: 1, Slug: "aura-phone-12", Name: "Aura Phone 12", Category: "Smartphone", Price: 14999000, OldPrice: 16999000, Installment: 624958, Rating: 4.9, Reviews: 128, Badge: "Terlaris", Description: "Flagship yang terasa ringan. Kamera Pro 48MP, layar 120Hz, dan satu hari penuh tanpa kompromi.", Image: img("photo-1598327105666-5b89351aff97"), ImageAlt: "Aura Phone 12", Colors: black, Specs: []model.Spec{{"Layar", "6.7\" OLED · 120Hz"}, {"Kamera", "48MP Pro · 4K Video"}}, Stock: 7, Featured: true, Type: "phone"},
		{ID: 2, Slug: "pulse-watch-4", Name: "Pulse Watch 4", Category: "Smartwatch", Price: 4799000, Installment: 199958, Rating: 4.8, Reviews: 86, Badge: "Baru", Description: "Data kesehatan yang jujur, desain yang tidak berisik.", Image: img("photo-1544117519-31a4b719223d"), ImageAlt: "Pulse Watch 4", Colors: []model.Color{color("Orange", "#FF4A1C")}, Specs: []model.Spec{{"Display", "1.9\" AMOLED"}}, Stock: 12, Featured: true, Type: "watch"},
		{ID: 3, Slug: "arc-buds-pro", Name: "Arc Buds Pro", Category: "Audio", Price: 2899000, OldPrice: 3299000, Installment: 120792, Rating: 4.7, Reviews: 214, Description: "Noise cancelling adaptif dalam siluet sekecil itu.", Image: img("photo-1606220945770-b5b6c2c55bf1"), ImageAlt: "Arc Buds Pro", Colors: black, Specs: []model.Spec{{"ANC", "Adaptive ANC"}}, Stock: 4, Featured: true, Type: "earbuds"},
		{ID: 4, Slug: "framebook-air-14", Name: "Framebook Air 14", Category: "Laptop", Price: 18999000, Installment: 791625, Rating: 4.9, Reviews: 52, Description: "Tenaga kerja kreatif. Beratnya seperti buku.", Image: img("photo-1496181133206-80ce9b88a853"), ImageAlt: "Framebook Air 14", Colors: black, Specs: []model.Spec{{"Processor", "M4 · 10-core"}}, Stock: 8, Featured: true, Type: "laptop"},
		{ID: 5, Slug: "snap-charger-65", Name: "Snap Charger 65W", Category: "Aksesoris", Price: 699000, Installment: 29125, Rating: 4.6, Reviews: 41, Description: "Kecil di tas, besar di daya.", Image: img("photo-1609592424672-6dd0f4a9312c"), ImageAlt: "Snap Charger 65W", Specs: []model.Spec{{"Output", "65W GaN"}}, Stock: 20, Type: "charger"},
		{ID: 6, Slug: "aura-phone-case", Name: "Aura Case / Clay", Category: "Aksesoris", Price: 549000, Installment: 22875, Rating: 4.8, Reviews: 67, Description: "Perlindungan tipis dengan warna yang terasa hidup.", Image: img("photo-1556656793-08538906a9f8"), ImageAlt: "Aura Case Clay", Colors: []model.Color{color("Clay", "#C96F4A")}, Specs: []model.Spec{{"Material", "Recycled TPU"}}, Stock: 14, Type: "case"},
		{ID: 7, Slug: "studio-speaker-mini", Name: "Studio Speaker Mini", Category: "Audio", Price: 2199000, OldPrice: 2499000, Installment: 91625, Rating: 4.7, Reviews: 39, Description: "Suara penuh dari sudut paling tenang di ruangan.", Image: img("photo-1608043152269-423dbba4e7e1"), ImageAlt: "Studio Speaker Mini", Colors: black, Specs: []model.Spec{{"Audio", "360° spatial"}}, Stock: 9, Type: "speaker"},
		{ID: 8, Slug: "loop-powerbank", Name: "Loop Powerbank 10K", Category: "Aksesoris", Price: 899000, Installment: 37458, Rating: 4.5, Reviews: 103, Description: "Daya cadangan yang selalu siap.", Image: img("photo-1609592424672-6dd0f4a9312c"), ImageAlt: "Loop Powerbank", Specs: []model.Spec{{"Capacity", "10.000 mAh"}}, Stock: 18, Type: "powerbank"},
		{ID: 9, Slug: "aura-phone-12-sage", Name: "Aura Phone 12 Sage", Category: "Smartphone", Price: 14999000, Installment: 624958, Rating: 4.9, Reviews: 24, Description: "Sage green, karakter yang lebih lembut.", Image: img("photo-1601784551446-20c9e07cdbdb"), ImageAlt: "Aura Phone 12 Sage", Colors: []model.Color{color("Sage", "#A9B6A0")}, Specs: []model.Spec{{"Layar", "6.7\" OLED · 120Hz"}}, Stock: 6, Type: "phone"},
		{ID: 10, Slug: "desk-mat", Name: "Desk Mat / Terra", Category: "Aksesoris", Price: 429000, Installment: 17875, Rating: 4.6, Reviews: 28, Description: "Permukaan kerja yang bikin fokus terasa mudah.", Image: img("photo-1622560480605-d83c853bc5c3"), ImageAlt: "Desk Mat Terra", Specs: []model.Spec{{"Surface", "Vegan leather"}}, Stock: 15, Type: "deskmat"},
		{ID: 11, Slug: "aura-phone-mini", Name: "Aura Phone Mini", Category: "Smartphone", Price: 10999000, OldPrice: 11999000, Installment: 458292, Rating: 4.7, Reviews: 74, Badge: "Baru", Description: "Kecil di tangan, serius di performa.", Image: img("photo-1511707171634-5f897ff02aa9"), ImageAlt: "Aura Phone Mini", Specs: []model.Spec{{"Layar", "6.1\" OLED"}}, Stock: 10, Type: "phone"},
		{ID: 12, Slug: "arc-buds-air", Name: "Arc Buds Air", Category: "Audio", Price: 1799000, OldPrice: 2099000, Installment: 74958, Rating: 4.6, Reviews: 61, Description: "Suara terbuka untuk hari yang bergerak.", Image: img("photo-1590658268037-6bf12165a8df"), ImageAlt: "Arc Buds Air", Specs: []model.Spec{{"Playtime", "24 jam"}}, Stock: 5, Type: "earbuds"},
		{ID: 13, Slug: "pulse-band", Name: "Pulse Band", Category: "Smartwatch", Price: 1299000, Installment: 54125, Rating: 4.5, Reviews: 33, Description: "Ritme harian, dibuat sederhana.", Image: img("photo-1557935728-e6d1eaabe558"), ImageAlt: "Pulse Band", Specs: []model.Spec{{"Battery", "10 hari"}}, Stock: 11, Type: "watch"},
		{ID: 14, Slug: "framebook-stand", Name: "Framebook Stand", Category: "Aksesoris", Price: 799000, Installment: 33292, Rating: 4.6, Reviews: 18, Description: "Sudut kerja yang lebih rapi.", Image: img("photo-1524758631624-e2822e304c36"), ImageAlt: "Framebook Stand", Specs: []model.Spec{{"Material", "Aluminium"}}, Stock: 13, Type: "laptop"},
		{ID: 15, Slug: "snap-charger-duo", Name: "Snap Charger Duo", Category: "Aksesoris", Price: 899000, Installment: 37458, Rating: 4.7, Reviews: 45, Description: "Satu charger untuk dua kebiasaan.", Image: img("photo-1583863788434-e58a36330cf0"), ImageAlt: "Snap Charger Duo", Specs: []model.Spec{{"Output", "65W dual"}}, Stock: 3, Type: "charger"},
		{ID: 16, Slug: "studio-speaker-bar", Name: "Studio Speaker Bar", Category: "Audio", Price: 3299000, Installment: 137458, Rating: 4.8, Reviews: 27, Description: "Ruang kecil, suara yang penuh.", Image: img("photo-1545454675-3531b543be5d"), ImageAlt: "Studio Speaker Bar", Specs: []model.Spec{{"Audio", "Wide stereo"}}, Stock: 7, Type: "speaker"},
	}
}
