import { useEffect, useState } from "react";

type CarouselProps = {
  imageUrls: string[];
  reverse?: boolean;
};

const Carousel = ({ imageUrls, reverse = false }: CarouselProps) => {
  const [index, setIndex] = useState(0);

  const carouselinfiniteScroll = () => {
    if (reverse) {
      if (index === 0) {
        setIndex(imageUrls.length - 1);
      } else {
        setIndex(index - 1);
      }
    } else {
      if (index === imageUrls.length - 1) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      carouselinfiniteScroll();
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [index]);

  return (
    <div className="relative w-full mx-auto overflow-hidden aspect-video border-4 border-black bg-gray-900 rounded-3xl flex flex-nowrap">
      {imageUrls.map((image) => (
        <img
          src={image}
          className="object-cover min-w-full h-full w-full transition-all "
          style={{ transform: `translate(-${index * 100}%)` }}
        />
      ))}
    </div>
  );
};

export default Carousel;

/*
const Carousel = ({imageUrls}: CarouselProps) => {
    const [[index, direction], setIndex] = useState([0, 0]);


    const paginate = (newDirection: number) => {
        const length = imageUrls?.length;
        setIndex([
            (index + newDirection + length) % length,
            newDirection,
        ]);
    };

    return (
        <div className="relative w-full mx-auto overflow-hidden aspect-video border-4 border-black bg-gray-900 rounded-3xl">
          <AnimatePresence custom={direction}>
            <motion.img
              key={index}
              src={imageUrls[index]}
              custom={direction}
              initial={{
                x: direction > 0 ? 300 : -300,
                opacity: 0,
                position: "absolute",
              }}
              animate={{
                x: 0,
                opacity: 1,
                position: "relative",
              }}
              exit={
                {
                    x: direction > 0 ? -300 : 300,
                    opacity: 0,
                    position: "absolute",
                  }
              }
              transition={{ 
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="w-full h-full object-cover"
            />
          </AnimatePresence>
    
          <div className="absolute inset-0 flex items-center justify-between px-2">
            <button
              onClick={() => paginate(-1)}
              className="bg-white/70 hover:bg-white text-black px-2 py-1 font-bold border border-black cursor-pointer"
            >
              ‹
            </button>
            <button
              onClick={() => paginate(1)}
              className="bg-white/70 hover:bg-white text-black px-2 py-1 font-bold border border-black cursor-pointer"
            >
              ›
            </button>
          </div>
        </div>
      );

}
*/
