package service

import (
	"fmt"
	"time"

	"github.com/google/uuid"
	"nova-gear/internal/model"
	"nova-gear/internal/repository"
)

type Service struct{ repo *repository.Repository }

func New(repo *repository.Repository) *Service { return &Service{repo: repo} }
func (s *Service) Products(category, search, sort string, min, max int) []model.Product {
	return s.repo.ListProducts(category, search, sort, min, max)
}
func (s *Service) Product(slug string) (model.Product, bool) { return s.repo.GetProduct(slug) }
func (s *Service) Add(cart string, id, qty int) error {
	_, err := s.repo.AddCart(cart, id, qty)
	return err
}
func (s *Service) Update(cart string, id, qty int) { s.repo.UpdateCart(cart, id, qty) }
func (s *Service) Cart(cart string) model.Cart {
	items := s.repo.CartItems(cart)
	subtotal := 0
	for i := range items {
		if p, ok := s.repo.GetProductByID(items[i].ProductID); ok {
			items[i].Product = &p
			subtotal += p.Price * items[i].Quantity
		}
	}
	shipping := 0
	if subtotal < 1000000 && subtotal > 0 {
		shipping = 35000
	}
	free := 1000000 - subtotal
	if free < 0 {
		free = 0
	}
	return model.Cart{ID: cart, Items: items, Subtotal: subtotal, Shipping: shipping, Total: subtotal + shipping, FreeLeft: free}
}
func (s *Service) Checkout(req model.CheckoutRequest) (model.Order, error) {
	c := s.Cart(req.CartID)
	if len(c.Items) == 0 {
		return model.Order{}, fmt.Errorf("cart is empty")
	}
	s.repo.ClearCart(req.CartID)
	return model.Order{ID: uuid.NewString(), OrderNo: "NG-" + uuid.NewString()[:8], Name: req.Name, Total: c.Total, CreatedAt: time.Now()}, nil
}
