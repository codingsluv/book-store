package main

import (
	"github.com/gofiber/fiber/v2"

	"github.com/codingsluv/book-store/api/internal/routes"
)

func main() {
	app := fiber.New()

	// routes
	routes.BookRoutes(app)

	app.Listen(":3000")
}
