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

func (h *Handler) HandlerCreateBooks(c *fiber.Ctx) error {
	var input InputBook
	if err := c.BodyParser(&input); err != nil {
		return c.Status(http.StatusBadRequest).JSON(fiber.Map{
			"error": "Invalid input data",
		})
	}

	book, err := h.Service.ServiceCreateBooks(input)
	if err != nil {
		return err
	}
	return c.Status(http.StatusCreated).JSON(
		fiber.Map{
			"success": "book created successfully",
			"data":    book,
		},
	)
}
