package books

import (
	"net/http"

	"github.com/gofiber/fiber/v2"
)

type Handler struct {
	Service BookService
}

func NewHandler(service BookService) *Handler {
	return &Handler{Service: service}
}

func (h *Handler) CreateBooks(c *fiber.Ctx) error {
	var input InputBook
	if err := c.BodyParser(&input); err != nil {
		return c.Status(http.StatusBadRequest).JSON(fiber.Map{
			"error": "Invalid input data",
		})
	}

	book, err := h.Service.CreateBooks(input)
	if err != nil {
		return c.Status(http.StatusCreated).JSON(
			fiber.Map{
				"success": "false",
				"data":    book,
			},
		)
	}
	return nil
}
