package books

import "time"

type Book struct {
	ID            uint      `gorm:"primaryKey" json:"id"`
	Title         string    `json:"title"`
	Author        string    `json:"author"`
	PublishedData time.Time `json:"published_date"`
	ISBN          string    `json:"isbn"`
	Price         float64   `json:"price"`
	CreatedAt     time.Time `json:"created_at"`
	UpdatedAt     time.Time `json:"updated_at"`
}
