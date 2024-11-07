package books

type BookService interface {
	ServiceCreateBooks(input InputBook) (*Book, error)
	ServiceGetBooksById(id int) (*Book, error)
	ServiceGetAllBooks() ([]Book, error)
	ServiceUpdateBooks(input InputBook) (*Book, error)
	ServiceDeleteBooks(id int) error
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

func (s *bookService) ServiceGetBooksById(id int) (*Book, error) {
	return s.repository.GetBooksById(id)
}

func (s *bookService) ServiceGetAllBooks() ([]Book, error) {
	return s.repository.GetAllBooks()
}

func (s *bookService) ServiceUpdateBooks(input InputBook) (*Book, error) {
	book := &Book{
		Title:         input.Title,
		Author:        input.Author,
		PublishedData: input.PublishedData,
		ISBN:          input.ISBN,
		Price:         input.Price,
	}
	if err := s.repository.UpdateBooks(book); err != nil {
		return nil, err
	}
	return book, nil
}

func (s *bookService) ServiceDeleteBooks(id int) error {
	return s.repository.DeleteBooks(id)
}
