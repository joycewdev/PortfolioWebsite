import { useState } from "react";
import { IoMdArrowBack } from "react-icons/io";
import { FiRefreshCw } from "react-icons/fi";
import { books } from "/src/data/books.js";

export default function Intro() {
  const [currentBook, setCurrentBook] = useState(books[0]);

  const nextBook = () => {
    const currentIndex = books.findIndex((book) => book.title === currentBook.title);
    const nextIndex = (currentIndex + 1) % books.length;
    setCurrentBook(books[nextIndex]);
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-6 pt-16">
      <a
        href="/"
        className="text-sm group flex items-center mb-8 gap-2 hover:cursor-pointer"
      >
        <div className="transition-transform duration-200 ease-in-out group-hover:-translate-x-1">
          <IoMdArrowBack />
        </div>
        Home
      </a>
      <p className="font-bold mb-4">Beyond the Screen</p>
      <ul className="text-sm list-disc pl-5 gap-2 flex flex-col">
        <li>Running around town, on the road to 10K</li>
        <li>Learning how to play the piano</li>
        <li>Sword fighting for points on the fencing team</li>
        <li>Chasing snow and mountains on my snowboard</li>
        <li>
          Reading (highly recommend{" "}
          <button
            onClick={nextBook}
            className="group italic inline-flex items-center hover:text-[#4A4E69] transition-colors cursor-pointer"
          >
            <span>
              {currentBook.title} by {currentBook.author}
            </span>
            <span className="w-0 opacity-0 group-hover:w-4 group-hover:ml-1.5 group-hover:opacity-100 group-hover:transition-all duration-200">
              <FiRefreshCw size={11} />
            </span>
          </button>
          )
        </li>
        <li>
          Meeting new people and going on adventures{" "}
          <a
            href="https://www.linkedin.com/in/w-joyce/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#767BBC] hover:text-[#474C90] transition-colors"
          >
            ~ let's connect!
          </a>
        </li>
      </ul>
    </div>
  );
}
