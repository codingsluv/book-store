<template>
  <div class="book-list-container">
    <h1 class="title">Book List</h1>
    <ul class="book-list">
      <li v-for="book in books" :key="book.id" @click="showBookDetails(book)">
        <div class="book-item">
          <h3>{{ book.title }}</h3>
          <p>{{ book.author }}</p>
        </div>
      </li>
    </ul>

    <!-- Show book details modal -->
    <div v-if="selectedBook" class="book-details-modal">
      <div class="modal-content">
        <h2>{{ selectedBook.title }}</h2>
        <p><strong>Author:</strong> {{ selectedBook.author }}</p>
        <p><strong>Published Date:</strong> {{ selectedBook.publishedData }}</p>
        <p><strong>ISBN:</strong> {{ selectedBook.isbn }}</p>
        <p><strong>Price:</strong> {{ selectedBook.price }}</p>

        <!-- Edit Button -->
        <button @click="editBook">Edit</button>
        <button @click="deleteBook">Delete</button>
        <button @click="closeModal">Close</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      books: [],  // Daftar buku
      selectedBook: null, // Buku yang sedang dipilih untuk melihat detail
    };
  },
  methods: {
    fetchBooks() {
      // Ambil data buku dari API
      fetch("http://localhost:3000/api/v1/books")
        .then((response) => response.json())
        .then((data) => {
          this.books = data;  // Set daftar buku ke data yang diterima dari API
        });
    },

    showBookDetails(book) {
      // Menampilkan detail buku ketika salah satu judul diklik
      this.selectedBook = book;
    },

    closeModal() {
      // Menutup modal detail buku
      this.selectedBook = null;
    },

    editBook() {
      // Mengarahkan ke halaman edit buku dengan ID buku yang dipilih
      this.$router.push(`/edit/${this.selectedBook.id}`);
    },

    deleteBook() {
      // Hapus buku dari API
      fetch(`http://localhost:3000/api/v1/books/${this.selectedBook.id}`, {
        method: "DELETE",
      })
        .then(() => {
          this.books = this.books.filter(
            (book) => book.id !== this.selectedBook.id
          );  // Hapus buku dari daftar yang ada
          this.closeModal();  // Tutup modal setelah penghapusan
        })
        .catch((error) => console.error("Error deleting book:", error));
    },
  },
  mounted() {
    this.fetchBooks();  // Ambil daftar buku saat komponen pertama kali dimuat
  },
};
</script>

<style scoped>
/* Styling untuk daftar buku dan detail modal */
.book-list-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
}

.book-list {
  list-style-type: none;
  padding: 0;
}

.book-item {
  background-color: #6200ea;
  color: white;
  padding: 15px;
  border-radius: 5px;
  margin-bottom: 10px;
  cursor: pointer;
}

.book-item:hover {
  background-color: #3700b3;
}

.book-details-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 300px;
}

button {
  background-color: #6200ea;
  color: white;
  padding: 10px;
  margin-top: 10px;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #3700b3;
}
</style>
