// src/components/BookList.vue

<template>
  <div class="book-list-container">
    <h1 class="title">Books List</h1>
    <ul class="book-list">
      <li v-for="book in books" :key="book.id" class="book-item">
        <h2 class="book-title">{{ book.title }}</h2>
        <p><strong>Author:</strong> {{ book.author }}</p>
        <p><strong>Published:</strong> {{ book.publishedData }}</p>
        <p><strong>ISBN:</strong> {{ book.isbn }}</p>
        <p><strong>Price:</strong> ${{ book.price }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      books: [],
    };
  },
  mounted() {
    this.fetchBooks();
  },
  methods: {
    async fetchBooks() {
      try {
        const response = await axios.get('http://localhost:3000/api/v1/books');
        this.books = response.data;
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    },
  },
};
</script>

<style scoped>
/* src/assets/css/BookList.css */

/* Style Umum */
/* src/assets/css/BookList.css */

/* Style Umum */
.book-list-container {
  max-width: 900px;
  margin: 50px auto;
  padding: 30px;
  background-color: #f3f4f6;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.title {
  text-align: center;
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 25px;
  font-family: 'Roboto', sans-serif;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.book-list {
  list-style: none;
  padding: 0;
}

.book-item {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.book-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.book-title {
  font-size: 1.6rem;
  color: #4caf50;
  font-weight: bold;
  margin-bottom: 15px;
}

.book-item p {
  font-size: 1rem;
  color: #555;
  margin: 5px 0;
}

.book-item p strong {
  color: #333;
}

/* Responsive Design */
@media (max-width: 768px) {
  .book-list-container {
    padding: 20px;
  }

  .title {
    font-size: 2rem;
  }

  .book-item {
    padding: 15px;
  }

  .book-title {
    font-size: 1.4rem;
  }
}

@media (max-width: 480px) {
  .book-list-container {
    padding: 15px;
  }

  .title {
    font-size: 1.6rem;
  }

  .book-item {
    padding: 12px;
  }

  .book-title {
    font-size: 1.2rem;
  }
}
</style>
