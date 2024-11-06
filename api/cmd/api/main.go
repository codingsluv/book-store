package main

import (
	"github.com/gofiber/fiber/v2"

	"github.com/codingsluv/book-store/api/database"
	"github.com/codingsluv/book-store/api/internal/routes"
)

func main() {
	app := fiber.New()
	// database
	database.InitDB()
	// routes
	routes.BookRoutes(app)

	app.Listen(":3000")
}
