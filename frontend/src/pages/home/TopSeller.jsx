import { useEffect, useState } from "react";
import BookCard from "../books/BookCard";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const categories = [
  "Pilih Genre",
  "Business",
  "Fiksi",
  "Horror",
  "Fantasy",
  "Adventure",
  "Drama",
  "Buku",
  "Romance",
  "Marketing",
  "Mystery",
];

export default function TopSeller() {
  const [books, setBooks] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState("Pilih Genre");

  useEffect(() => {
    fetch("books.json").then((res) =>
      res.json().then((data) => setBooks(data))
    );
  }, []);

  const filterBooks =
    selectedCategories === "Pilih Genre"
      ? books
      : books.filter(
          (book) => book.category === selectedCategories.toLowerCase()
        );
  console.log(filterBooks);

  return (
    <div className="py-10">
      <h2 className="text-3xl font-semibold mb-6">Top Sellers</h2>
      {/* category filtering */}
      <div className="flex mb-8 items-center">
        <select
          onClick={(e) => setSelectedCategories(e.target.value)}
          name="category"
          id="category"
          className="border-2 bg-[#EAEAEA] border-b-gray-300 rounded-md py-1 px-4 focus:outline-none"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* slider */}
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1180: {
            slidesPerView: 3,
            spaceBetween: 50,
          }
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {/* books list */}
        {filterBooks.length > 0 && filterBooks.map((book, index) => (
          <SwiperSlide key={index}>
            <BookCard key={index} book={book} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
