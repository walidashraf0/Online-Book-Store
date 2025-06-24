import { Star } from "lucide-react";
import React from "react";
import Book1 from "../../assets/books/book1.jpg";
import Book2 from "../../assets/books/book2.jpg";
import Book3 from "../../assets/books/book3.jpg";

const booksData = [
  {
    id: 1,
    img: Book1,
    title: "Who's there",
    rating: 5.0,
    author: "Someone",
  },
  {
    id: 2,
    img: Book2,
    title: "His Life",
    rating: 4.5,
    author: "John",
  },
  {
    id: 3,
    img: Book3,
    title: "Lost boys",
    rating: 4.7,
    author: "Lost Girl",
  },
  {
    id: 4,
    img: Book2,
    title: "His Life",
    rating: 4.4,
    author: "Someone",
  },
  {
    id: 5,
    img: Book1,
    title: "Who's There",
    rating: 4.5,
    author: "Someone",
  },
];

const AllBooks = () => {
  return (
    <>
      <div className="py-10">
        <div className="container">
          <div className="dark:text-white text-center mx-auto max-w-[400px] mb-20">
            <p className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-2">
              Best Books
            </p>
            <h1 className="text-3xl font-bold sm:text-4xl">Top Books</h1>
            <p className="text-gray-500 dark:text-gray-400 text-xs">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa
              iure, corporis
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {booksData.map((book) => (
              <div key={book.id}>
                <img
                  className="max-w-[300px] h-[250px] rounded-lg mb-3"
                  src={book.img}
                  alt={book.title}
                />
                <h2 className="font-bold">{book.title}</h2>
                <p className="text-gray-400 text-sm">{book.author}</p>
                <div className="flex items-center gap-2">
                  <Star className="text-yellow-400" size={16} />
                  <span>{book.rating}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <button className="px-5 py-2 rounded-full cursor-pointer bg-gradient-to-r from-primary to-secondary text-white">
              View All Books
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllBooks;
