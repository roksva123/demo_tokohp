package handler

import (
	"encoding/json"
	"net/http"
	"strconv"

	"github.com/go-chi/chi/v5"
	"nova-gear/internal/model"
	"nova-gear/internal/service"
)

type Handler struct{ svc *service.Service }

func New(svc *service.Service) *Handler { return &Handler{svc: svc} }
func (h *Handler) Routes() chi.Router {
	r := chi.NewRouter()
	r.Get("/products", h.products)
	r.Get("/products/{slug}", h.product)
	r.Post("/cart/items", h.add)
	r.Patch("/cart/items/{id}", h.update)
	r.Get("/cart", h.cart)
	r.Post("/checkout", h.checkout)
	return r
}
func write(w http.ResponseWriter, status int, v any) {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(status)
	_ = json.NewEncoder(w).Encode(v)
}
func (h *Handler) products(w http.ResponseWriter, r *http.Request) {
	q := r.URL.Query()
	min, _ := strconv.Atoi(q.Get("min"))
	max, _ := strconv.Atoi(q.Get("max"))
	write(w, 200, map[string]any{"data": h.svc.Products(q.Get("category"), q.Get("search"), q.Get("sort"), min, max)})
}
func (h *Handler) product(w http.ResponseWriter, r *http.Request) {
	p, ok := h.svc.Product(chi.URLParam(r, "slug"))
	if !ok {
		write(w, 404, map[string]string{"error": "product not found"})
		return
	}
	write(w, 200, map[string]any{"data": p})
}
func cartID(r *http.Request) string {
	id := r.Header.Get("X-Cart-ID")
	if id == "" {
		id = "guest"
	}
	return id
}
func (h *Handler) add(w http.ResponseWriter, r *http.Request) {
	var in struct {
		ProductID int `json:"productId"`
		Quantity  int `json:"quantity"`
	}
	if json.NewDecoder(r.Body).Decode(&in) != nil {
		write(w, 400, map[string]string{"error": "invalid body"})
		return
	}
	if err := h.svc.Add(cartID(r), in.ProductID, in.Quantity); err != nil {
		write(w, 404, map[string]string{"error": err.Error()})
		return
	}
	write(w, 201, map[string]any{"data": h.svc.Cart(cartID(r))})
}
func (h *Handler) update(w http.ResponseWriter, r *http.Request) {
	id, _ := strconv.Atoi(chi.URLParam(r, "id"))
	var in struct {
		Quantity int `json:"quantity"`
	}
	_ = json.NewDecoder(r.Body).Decode(&in)
	h.svc.Update(cartID(r), id, in.Quantity)
	write(w, 200, map[string]any{"data": h.svc.Cart(cartID(r))})
}
func (h *Handler) cart(w http.ResponseWriter, r *http.Request) {
	write(w, 200, map[string]any{"data": h.svc.Cart(cartID(r))})
}
func (h *Handler) checkout(w http.ResponseWriter, r *http.Request) {
	var in model.CheckoutRequest
	if json.NewDecoder(r.Body).Decode(&in) != nil {
		write(w, 400, map[string]string{"error": "invalid body"})
		return
	}
	if in.CartID == "" {
		in.CartID = cartID(r)
	}
	order, err := h.svc.Checkout(in)
	if err != nil {
		write(w, 400, map[string]string{"error": err.Error()})
		return
	}
	write(w, 201, map[string]any{"data": order})
}
