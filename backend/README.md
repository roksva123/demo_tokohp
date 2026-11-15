# NOVA GEAR API

REST API demo toko gadget dengan Go + chi. Data seed disimpan in-memory agar demo bisa langsung jalan tanpa setup database.

## Menjalankan

```bash
cd backend
go mod tidy
go run ./cmd/server
```

API tersedia di `http://localhost:8080`.

## Endpoint

- `GET /products?category=Smartphone&search=aura&sort=price-asc`
- `GET /products/{slug}`
- `GET /cart` (header opsional `X-Cart-ID`)
- `POST /cart/items` body `{ "productId": 1, "quantity": 1 }`
- `PATCH /cart/items/{id}` body `{ "quantity": 2 }`
- `POST /checkout` body `{ "cartId":"guest", "name":"...", "email":"...", "phone":"...", "address":"..." }`
