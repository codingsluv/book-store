<template>
  <div class="edit-book-container">
    <h1>Edit Book</h1>
    <form @submit.prevent="updateBook">
      <input type="text" v-model="book.title" placeholder="Title" class="input" />
      <input type="text" v-model="book.author" placeholder="Author" class="input" />
      <input type="date" v-model="book.publishedData" placeholder="Published Date" class="input" />
      <input type="text" v-model="book.isbn" placeholder="ISBN" class="input" />
      <input type="number" v-model="book.price" placeholder="Price" class="input" />
      <button type="submit" class="button">Update Book</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      book: {
        id: null,
        title: '',
        author: '',
        publishedData: '',
        isbn: '',
        price: ''
      }
    };
  },
  methods: {
    fetchBookDetails() {
      const bookId = this.$route.params.id;
      fetch(`http://localhost:3000/api/v1/books/${bookId}`)
        .then((response) => response.json())
        .then((data) => {
          this.book = data; // Isi form dengan data buku
        });
    },

    updateBook() {
      const bookId = this.$route.params.id;
      fetch(`http://localhost:3000/api/v1/books/${bookId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(this.book)
      })
        .then(() => {
          this.$router.push("/"); // Kembali ke halaman utama setelah update
        })
        .catch((error) => console.error("Error updating book:", error));
    }
  },
  mounted() {
    this.fetchBookDetails(); // Ambil detail buku berdasarkan ID saat halaman dimuat
  }
};
</script>

<style scoped>
/* Styling untuk form edit buku */
.edit-book-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.input {
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border: 2px solid #6200ea;
  border-radius: 5px;
}

.button {
  background-color: #6200ea;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.button:hover {
  background-color: #3700b3;
}
</style>
