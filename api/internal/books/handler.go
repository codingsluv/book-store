package books

import (
	"net/http"
	"strconv"

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

func (h *Handler) HandlerGetBooksById(c *fiber.Ctx) error {
	id, err := strconv.Atoi(c.Params("id"))
	if err != nil || id <= 0 {
		return c.Status(http.StatusBadRequest).JSON(fiber.Map{
			"error": "Invalid book ID",
		})
	}

	book, err := h.Service.ServiceGetBooksById(id)
	if err != nil {
		return c.Status(http.StatusNotFound).JSON(fiber.Map{
			"error": "Book not found",
		})
	}

	return c.JSON(fiber.Map{
		"success": "book retrieved successfully",
		"data":    book,
	})
}
