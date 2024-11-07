package books

type BookService interface {
	ServiceCreateBooks(input InputBook) (*Book, error)
}

type bookService struct {
	repository Repository
}

func NewService(repository Repository) BookService {
	return &bookService{repository}
}

func (s *bookService) ServiceCreateBooks(input InputBook) (*Book, error) {
	book := &Book{
		Title:         input.Title,
		Author:        input.Author,
		PublishedData: input.PublishedData,
		ISBN:          input.ISBN,
		Price:         input.Price,
	}
	if err := s.repository.CreateBooks(book); err != nil {
		return nil, err
	}
	return book, nil
}
