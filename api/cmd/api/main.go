package main

import (
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"

	"github.com/codingsluv/book-store/api/database"
	"github.com/codingsluv/book-store/api/internal/routes"
)

func main() {
	app := fiber.New()
	// CORS middleware
	app.Use(cors.New(cors.Config{
		AllowOrigins: "http://localhost:5173",
		AllowHeaders: "Origin, Content-Type, Accept, Authorization",
		AllowMethods: "GET, POST, PUT, DELETE, OPTIONS",
	}))
	// database
	database.InitDB()
	// routes
	routes.BookRoutes(app)
	// port
	app.Listen(":3000")
}
