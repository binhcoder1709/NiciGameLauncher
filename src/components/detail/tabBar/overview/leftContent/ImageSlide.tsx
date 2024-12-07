import { useState } from "react";
import vid1 from "../../../../../assets/dev/blade-of-god-x-14r6p.png";
import vid2 from "../../../../../assets/dev/blade-of-god-x-1eq1s.png";
import vid3 from "../../../../../assets/dev/blade-of-god-x-1v2p9.png";
import vid4 from "../../../../../assets/dev/blade-of-god-x-72o6d.png";
import vid5 from "../../../../../assets/dev/blade-of-god-x-b65kz.png";
import vid6 from "../../../../../assets/dev/blade-of-god-x-zhw4z.png";

export default function ImageSlide() {
  const images: string[] = [vid1, vid2, vid3, vid4, vid5, vid6, vid1];
  const [currentImage, setCurrentImage] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const imagesPerPage = 6;

  const totalPages = Math.ceil(images.length / imagesPerPage);

  const handleSelectImage = (index: number): void => {
    setCurrentImage(index);
  };

  const handleNextPage = (): void => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : prev));
  };

  const handlePrevPage = (): void => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const getVisibleImages = () => {
    const start = currentPage * imagesPerPage;
    return images.slice(start, start + imagesPerPage);
  };

  return (
    <div className="w-full flex flex-col gap-4">
      <div>
        <img
          className="w-full rounded-lg h-[450px] object-cover"
          src={images[currentImage]}
          alt="Selected"
        />
      </div>
      <div className="w-full flex items-center gap-3 justify-between">
        <button
          onClick={handlePrevPage}
          className={`w-[40px] h-[40px] rounded-full bg-[#404044]`}
        >
          <svg
            className={`text-gray-800 ${
              currentPage > 0 ? "" : "text-white/50"
            }`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m14 8-4 4 4 4"
            />
          </svg>
        </button>
        <div className="w-full flex items-center justify-center gap-2">
          {getVisibleImages().map((item, index) => {
            const actualIndex = currentPage * imagesPerPage + index;
            return (
              <img
                onClick={() => handleSelectImage(actualIndex)}
                className={`w-[calc((100%-150px)/6)] ${
                  currentImage === actualIndex ? "border-2 border-white/70" : ""
                } rounded-sm h-[60px] object-cover cursor-pointer`}
                key={actualIndex}
                src={item}
                alt=""
              />
            );
          })}
        </div>
        <button
          onClick={handleNextPage}
          className={`w-[40px] h-[40px] rounded-full bg-[#404044] ${
            currentPage < totalPages - 1 ? "" : "hidden"
          }`}
        >
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m10 16 4-4-4-4"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}