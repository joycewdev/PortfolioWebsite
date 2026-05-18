import { useState, useEffect } from "react";
import { books } from "/src/data/books.js";

// Dynamically calculate number of columns based on screen width
function ColumnCount() {
  const [cols, setCols] = useState(2);
  useEffect(() => {
    const update = () => {
      if (window.innerWidth >= 768)
        setCols(5); // md breakpoint
      else if (window.innerWidth >= 640)
        setCols(4); // sm breakpoint
      else setCols(2); // default for mobile
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return cols;
}

export default function Bookshelf() {
  const cols = ColumnCount();
  const remainder = books.length % cols;
  const emptySpots = remainder === 0 ? 0 : cols - remainder;
  const placeholders = Array.from({ length: emptySpots });
  const [selectedBook, setSelectedBook] = useState(null);

  return (
    <div className="w-full max-w-3xl mx-auto px-6 pt-16">
      <p className="font-bold mb-4">Bookshelf</p>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-6">
        {books.map((book, i) => {
          const isSelected = selectedBook?.title === book.title;
          return (
            <div key={i} className="group flex flex-col items-center">
              <div
                className="relative w-full aspect-[2/3] overflow-hidden rounded-sm shadow-md transition-all hover:shadow-xl hover:-translate-y-1 hover:cursor-pointer"
                onClick={() => setSelectedBook(isSelected ? null : book)}
              >
                <img
                  src={new URL(`../assets/books/${book.title.split(" ").join("")}.jpg`, import.meta.url).href}
                  alt={`${book.title} Cover`}
                  draggable="false"
                  className="w-full h-full object-cover select-none"
                />
              </div>
              <div className="mt-4 text-center h-5 flex items-center justify-center">
                {isSelected ? (
                  <p className="text-xs text-[#4A4E69]">{book.genres}</p>
                ) : (
                  <div className="mt-4 text-center">
                    <p className="text-xs text-[#4A4E69]">{book.rating} / 5</p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
        {placeholders.map((p, i) => (
          <div key={`empty-${i}`} className="block">
            <div className="flex flex-col items-center justify-center w-full aspect-[2/3] border border-dashed border-[#AAAEC7] rounded-sm bg-[#F5F7FF]">
              <p className="text-xs text-[#AAAEC7]">Next great read.</p>
              <a
                className="text-xs text-[#767BBC] hover:text-[#474C90]"
                href="mailto:wangjoyce@live.com?subject=Book Recommendation"
              >
                Send me a rec!
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
