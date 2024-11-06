package books

import (
	"gorm.io/gorm"
)

type Repository interface {
	CreateBooks(books *Book) error
}

type repository struct {
	db *gorm.DB
}

func NewRepository(db *gorm.DB) Repository {
	return &repository{db}
}

func (r *repository) CreateBooks(books *Book) error {
	return r.db.Create(books).Error
}
