<template>
  <div class="add-book-container">
    <h1 class="title">Add New Book</h1>
    <form @submit.prevent="addBook" class="form">
      <input v-model="book.title" type="text" placeholder="Title" required class="input"/>
      <input v-model="book.author" type="text" placeholder="Author" required class="input"/>
      <input v-model="book.publishedData" type="date" placeholder="Published Date (YYYY-MM-DD)" required class="input"/>
      <input v-model="book.isbn" type="text" placeholder="ISBN" required class="input"/>
      <input v-model="book.price" type="number" placeholder="Price" required class="input"/>
      <button type="submit" class="button">Add Book</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      book: {
        title: '',
        author: '',
        publishedData: '',
        isbn: '',
        price: 0,
      },
    };
  },
  methods: {
    async addBook() {
      try {
        const response = await axios.post('http://localhost:3000/api/v1/books', this.book);
        console.log('Book added:', response.data);
      } catch (error) {
        console.error('Error adding book:', error);
      }
    },
  },
};
</script>

<style>
.add-book-container {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 350px;
  padding: 40px;
  background-color: #f3f4f6;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.title {
  text-align: center;
  font-size: 2rem;
  color: #333;
  margin-bottom: 30px;
  font-family: 'Roboto', sans-serif;
  text-transform: uppercase;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.input {
  padding: 12px;
  border: 2px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.input:focus {
  border-color: #872c8c;
  outline: none;
}

.button {
  padding: 14px;
  background-color: #872c8c;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.button:hover {
  background-color: #45a049;
  animation: bounce 0.3s ease;
}

@keyframes bounce {
  0% {
    transform: scale(1);
  }
  20% {
    transform: scale(1.1);
  }
  40% {
    transform: scale(1);
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .add-book-container {
    width: 90%;
    padding: 25px;
  }

  .title {
    font-size: 1.8rem;
  }

  .form {
    gap: 12px;
  }

  .input {
    padding: 10px;
  }

  .button {
    padding: 12px;
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .add-book-container {
    width: 100%;
    padding: 15px;
  }

  .title {
    font-size: 1.6rem;
  }

  .input {
    padding: 8px;
  }

  .button {
    padding: 10px;
    font-size: 0.9rem;
  }
}

</style>
