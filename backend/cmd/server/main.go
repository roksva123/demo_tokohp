package main

import (
	"log"
	"net/http"

	"github.com/rs/cors"
	"nova-gear/internal/handler"
	"nova-gear/internal/repository"
	"nova-gear/internal/service"
)

func main() {
	repo := repository.New()
	svc := service.New(repo)
	h := handler.New(svc)
	api := cors.New(cors.Options{AllowedOrigins: []string{"*"}, AllowedMethods: []string{"GET", "POST", "PATCH", "DELETE", "OPTIONS"}, AllowedHeaders: []string{"*"}}).Handler(h.Routes())
	log.Println("NOVA GEAR API listening on http://localhost:8080")
	log.Fatal(http.ListenAndServe(":8080", api))
}
