package routes

import (
	"github.com/gofiber/fiber/v2"

	"github.com/codingsluv/book-store/api/database"
	"github.com/codingsluv/book-store/api/internal/books"
)

func BookRoutes(app *fiber.App) {
	db := database.InitDB()
	repository := books.NewRepository(db)
	service := books.NewService(repository)
	handler := books.NewHandler(service)

	api := app.Group("/api/v1")
	booksGroup := api.Group("/books")

	booksGroup.Post("/", handler.CreateBooks)
}
