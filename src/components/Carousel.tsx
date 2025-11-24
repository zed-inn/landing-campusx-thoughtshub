import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

interface CarouselProps {
  images: string[];
  headings?: string[][];
  className?: string;
}

interface CarouselActionButtonProps {
  side: string;
  action: Function;
}

interface CarouselIndexesProps {
  values: any;
  currentImage: number;
  setCurrentImage: Function;
}

const Carousel = ({ images, headings, className }: CarouselProps) => {
  const values = convertHeadingsAndImages({ images, headings });

  const [currentImage, setCurrentImage] = useState(0);

  const forward = () => setCurrentImage((currentImage + 1) % values.length);
  const backward = () =>
    setCurrentImage(
      currentImage === 0
        ? values.length - 1
        : (currentImage - 1) % values.length
    );

  return (
    <div
      className={
        "h-[50vh] min-h-96 w-96 rounded-xl overflow-hidden relative group *:transition-all " +
        className
      }
    >
      <CarouselActionButton side="left" action={backward} />
      <CarouselActionButton side="right" action={forward} />

      <CarouselImage val={values[currentImage]} />

      <CarouselIndexes
        values={values}
        currentImage={currentImage}
        setCurrentImage={setCurrentImage}
      />
    </div>
  );
};

const CarouselIndexes = ({
  values,
  currentImage,
  setCurrentImage,
}: CarouselIndexesProps) => {
  return (
    <div className="absolute bottom-2 w-full flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75">
      <div className="flex gap-2 bg-slate-300/25 px-2.5 py-1.5 rounded-full shadow">
        {values.map((_: any, i: number) => {
          return (
            <button
              key={i}
              className={
                "cursor-pointer w-2 h-2 rounded-full transition-colors " +
                (i === currentImage ? "bg-white" : "bg-slate-900")
              }
              onClick={() => setCurrentImage(i)}
            ></button>
          );
        })}
      </div>
    </div>
  );
};

const CarouselActionButton = ({ side, action }: CarouselActionButtonProps) => {
  return (
    <div
      className={
        "p-0 absolute h-full flex items-center z-20 bg-transparent m-2 opacity-0 group-hover:opacity-100 scale-75 " +
        (side === "left" ? "left-0" : "right-0")
      }
    >
      <button
        className="p-1 bg-black/55 rounded-full w-7 h-7 flex items-center justify-center text-sm cursor-pointer shadow hover:bg-black"
        onClick={() => action()}
      >
        {side === "left" ? <FaChevronLeft /> : <FaChevronRight />}
      </button>
    </div>
  );
};

const CarouselImage = ({ val }: { val: any }) => {
  return (
    <div className="h-full w-full relative transition-all">
      <img
        src={val.image}
        alt=""
        className="object-cover h-full w-full object-center transition-all select-none"
      />
      {val.title && (
        <div className="absolute h-full w-full top-0 left-0 bg-gradient-to-t from-black/90 from-10% via-black/45 to-transparent flex flex-col gap-2 pb-9 px-6">
          <div className="bg-gray-200 w-[18%] h-2 mt-auto mb-2"></div>
          <h4 className="font-bold tracking-wide text-4xl text-gray-50">
            {val.title}
          </h4>
          <p className="text-lg/5.5 text-gray-300">{val.subtitle}</p>
        </div>
      )}
    </div>
  );
};

const convertHeadingsAndImages = ({ images, headings }: CarouselProps) => {
  const values = [];
  let i = 0;
  for (let im of images) {
    const imVal = {
      image: im,
      title: i >= (headings?.length ?? 0) ? null : headings?.[i][0],
      subtitle: i >= (headings?.length ?? 0) ? null : headings?.[i][1],
    };
    values.push(imVal);
    i++;
  }

  return values;
};

export default Carousel;
