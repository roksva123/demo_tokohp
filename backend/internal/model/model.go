package model

import "time"

type Product struct {
	ID          int     `json:"id"`
	Slug        string  `json:"slug"`
	Name        string  `json:"name"`
	Category    string  `json:"category"`
	Price       int     `json:"price"`
	OldPrice    int     `json:"oldPrice,omitempty"`
	Installment int     `json:"installment"`
	Rating      float64 `json:"rating"`
	Reviews     int     `json:"reviews"`
	Badge       string  `json:"badge,omitempty"`
	Description string  `json:"description"`
	Image       string  `json:"image"`
	ImageAlt    string  `json:"imageAlt"`
	Colors      []Color `json:"colors"`
	Specs       []Spec  `json:"specs"`
	Stock       int     `json:"stock"`
	Featured    bool    `json:"featured"`
}

type Color struct {
	Name string `json:"name"`
	Hex  string `json:"hex"`
}

type Spec struct {
	Label string `json:"label"`
	Value string `json:"value"`
}

type CartItem struct {
	ProductID int      `json:"productId"`
	Quantity  int      `json:"quantity"`
	Product   *Product `json:"product,omitempty"`
}

type Cart struct {
	ID       string     `json:"id"`
	Items    []CartItem `json:"items"`
	Subtotal int        `json:"subtotal"`
	Shipping int        `json:"shipping"`
	Total    int        `json:"total"`
	FreeLeft int        `json:"freeLeft"`
}

type CheckoutRequest struct {
	CartID   string `json:"cartId"`
	Name     string `json:"name"`
	Email    string `json:"email"`
	Phone    string `json:"phone"`
	Address  string `json:"address"`
	Shipping string `json:"shipping"`
}

type Order struct {
	ID        string    `json:"id"`
	OrderNo   string    `json:"orderNo"`
	Name      string    `json:"name"`
	Total     int       `json:"total"`
	CreatedAt time.Time `json:"createdAt"`
}
