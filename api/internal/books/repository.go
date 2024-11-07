package books

import (
	"gorm.io/gorm"
)

type Repository interface {
	CreateBooks(books *Book) error
	GetBooksById(id int) (*Book, error)
	GetAllBooks() ([]Book, error)
}

type repository struct {
	db *gorm.DB
}

func NewRepository(db *gorm.DB) *repository {
	return &repository{db}
}

func (r *repository) CreateBooks(books *Book) error {
	return r.db.Create(books).Error
}

func (r *repository) GetBooksById(id int) (*Book, error) {
	var book Book
	if err := r.db.Find(&book, id).Error; err != nil {
		return nil, err
	}
	return &book, nil
}

func (r *repository) GetAllBooks() ([]Book, error) {
	var books []Book
	if err := r.db.Find(&books).Error; err != nil {
		return nil, err
	}
	return books, nil
}
