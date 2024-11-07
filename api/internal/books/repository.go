package books

import (
	"gorm.io/gorm"
)

type Repository interface {
	CreateBooks(books *Book) error
	GetBooks(id int) (*Book, error)
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

func (r *repository) GetBooks(id int) (*Book, error) {
	var book Book
	if err := r.db.First(&book, id).Error; err != nil {
		return nil, err
	}
	return &book, nil
}
