import { FaChevronDown } from "react-icons/fa6";
import Carousel from "../components/Carousel";
import Button from "../ui/Button";
import images from "../utils/images";
import type { ReactNode } from "react";
import Separator from "../components/Separator";

interface FeatureBoxProps {
  image: string;
  altText: string;
  title: string;
  children: ReactNode;
}

const Home = () => {
  return (
    <div className="w-full h-full">
      <Page1 />
      <Separator />
      <Page2 />
      <Separator />
      <Page3 />
      <Separator />
      <Page4 />
    </div>
  );
};

const HomeActionButtons = ({
  btnText1,
  btnText2,
}: {
  btnText1: string;
  btnText2: string;
}) => {
  return (
    <>
      <a href="/campusx/appinstall">
        <Button
          className="text-lg font-semibold tracking-wider bg-indigo-700 hover:bg-indigo-600 font-urban"
          type="primary"
        >
          {btnText1}
        </Button>
      </a>
      <a href="#feedback-form">
        <Button
          className="px-[18px!important] font-urban text-sm font-bold tracking-widest"
          type="secondary"
        >
          {btnText2}
        </Button>
      </a>
    </>
  );
};

const Page1 = () => {
  return (
    <div className="h-[calc(100vh-2rem*2)] w-full flex flex-col md:justify-center items-center gap-4 px-5 lg:flex-row lg:items-center lg:gap-12 xl:gap-32 pt-2 relative">
      <Carousel
        className="xl:scale-125 transition-all shadow-xl shadow-black/20 max-h-[720px] md:w-[60vh] lg:w-96 w-full md:h-[50vh] h-80"
        images={[images.banner1, images.banner2]}
        headings={[
          [
            "Insights",
            "Learn something new with insights and grow with everyone",
          ],
          ["Forums", "Discuss your thoughts with everyone else"],
        ]}
      />
      <div className="ml-auto lg:m-0 flex flex-col lg:items-end gap-2 md:gap-4 items-end mx-auto">
        <h1 className="text-4xl sm:text-6xl font-extrabold lg:text-7xl lg:font-black text-shadow-xs">
          Thoughts
          <span className="text-orange-500 font-space-grotesk">Hub</span>
        </h1>
        <p className="text-lg text-slate-200 tracking-wide w-full text-right lg:text-2xl">
          A place to share thoughts and learn something new.
        </p>
        <HomeActionButtons btnText1="Download Now" btnText2="Give Feedback" />
      </div>

      <FaChevronDown className="absolute bottom-6 animate-bounce text-gray-300" />
    </div>
  );
};

const Page2 = () => {
  return (
    <div className="-mx-2">
      <div className="w-full h-full md:p-18 p-6 mx-auto md:space-y-20 space-y-12 overflow-hidden -p-2 bg-black/55">
        <div>
          <h1 className="md:text-6xl text-4xl font-black text-orange-100 text-center">
            Welcome to ThoughtsHub
          </h1>
          <p className="md:text-2xl text-lg text-gray-400 mt-3 font-light text-center">
            More than just an app, It's a{" "}
            <span className="font-bold tracking-wide text-gray-200">
              Student Movement
            </span>
            !
          </p>
        </div>

        <div className="relative overflow-hidden rounded-md bg-black max-w-6xl mx-auto font-manrope">
          <img
            src={images.image1}
            alt="Students space"
            className="absolute w-full h-full object-cover object-center top-0 left-0 opacity-75 z-10"
          />

          <p className="md:text-3xl text-2xl font-manrope md:w-[60%] md:ml-auto md:text-right bg-gradient-to-l from-black/55 from-65% to-black/55 md:to-transparent p-3 mt-64 relative z-20 md:pr-7 md:py-5">
            Have you{" "}
            <span className="font-bold text-orange-300 tracking-wide md:text-4xl text-3xl">
              ever wished
            </span>{" "}
            there was one space that truly understood what students need not
            just academically, but personally and globally ?
          </p>
        </div>

        <p className="md:text-4xl text-3xl text-center font-thin tracking-wide relative py-6">
          <span className="bg-black h-full w-[150vw] absolute -left-48 top-0 z-0 border border-gray-700"></span>
          <span className="relative z-10">
            That's exactly what{" "}
            <span className="font-semibold">ThoughtsHub</span> is built for.
          </span>
        </p>

        <div className="flex gap-4 h-fit flex-col relative bg-black md:static md:flex-row md:bg-transparent rounded-md overflow-hidden lg:mx-24">
          <img
            src={images.icon}
            alt=""
            className="rounded-md aspect-square w-full object-cover opacity-75 md:opacity-100 md:h-40 lg:h-30 xl:h-25 md:w-auto"
          />
          <div className="md:text-2xl sm:text-3xl text-xl font-light text-gray-300 absolute bottom-0 w-full h-full p-4 pt-8 bg-gradient-to-t from-black/75 from-55% to-transparent flex justify-end flex-col md:static md:bg-transparent md:h-fit md:p-0 ">
            <p>
              ThoughtsHub is a powerful, student-first platform created to bring
              college students together from across the country and eventually
              the world.
            </p>
            <p>
              Here, <span className="font-bold">students</span> don't just
              scroll, they <span className="font-bold">grow</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Page3 = () => {
  return (
    <div className="-m-2">
      <div className="md:p-18 p-6 md:space-y-15 space-y-12 bg-black">
        <div>
          <h1 className="lg:text-4xl text-3xl">
            What can you expect inside ThoughtsHub?
          </h1>
        </div>

        <div className="flex flex-wrap gap-10 items-center justify-center">
          <FeatureBox
            image={images.image2}
            altText="bite-size learning"
            title="Bite-sized learning"
          >
            <p>
              Read smart, sharp articles (in English + Hindi) across history,
              science, business, psychology, tech, and more all in 60-100 words.
            </p>
            <p>Learn faster, retain longer.</p>
          </FeatureBox>

          <FeatureBox
            image={images.image3}
            altText="networking"
            title="Global networking"
          >
            <p>
              Connect with curious minds, share ideas, ask questions, and build
              your voice through discussions and forums.
            </p>
          </FeatureBox>

          <FeatureBox image={images.image4} altText="talk" title="Real talk">
            <p>
              No clutter, no pressure just real content, real students, real
              thoughts.
            </p>
          </FeatureBox>

          <FeatureBox
            image={images.image5}
            altText="plant growing"
            title="A growth mindset"
          >
            <p>
              Every swipe is meant to add value to your thinking, your career,
              or your awareness.
            </p>
          </FeatureBox>
        </div>
      </div>
    </div>
  );
};

const Page4 = () => {
  return (
    <div className="md:p-18 p-6 md:space-y-15 space-y-12 max-w-2xl ml-auto">
      <p className="md:text-xl text-lg">
        Whether you're preparing for exams, exploring a new topic, or just want
        something meaningful to scroll through - ThoughtsHub is your go-to
        space.
      </p>

      <div className="space-y-8">
        <div>
          <p className="md:text-2xl text-xl">
            So tell us: What does Thoughts Hub mean to you? What do you want to
            see here?
          </p>
          <p className="text-gray-400">Drop your thoughts below</p>
        </div>

        <form
          className="flex flex-col gap-2"
          id="feedback-form"
          method="POST"
          action={"https://api.thoughtshub.agency/feedback"}
          target="_blank"
        >
          <textarea
            name="message"
            id="feedback"
            className="bg-gray-300/95 w-full h-30 rounded-md p-4 text-black outline-none md:text-lg"
            placeholder="Write your thoughts!"
          ></textarea>
          <Button text="Send" type="primary" className="ml-auto" />
        </form>
      </div>
    </div>
  );
};

const FeatureBox = ({ image, altText, title, children }: FeatureBoxProps) => {
  return (
    <div className="md:h-72 md:max-w-full w-fit max-w-84 space-y-3 md:flex gap-5 md:gap-2">
      <div className="overflow-hidden md:min-w-auto aspect-square relative rounded-sm bg-black select-none">
        <img
          src={image}
          alt={altText}
          className="relative z-0 w-full h-full object-cover object-center opacity-80"
        />
        <p className="absolute bottom-0 z-10 text-center w-full bg-indigo-800 font-extralight tracking-wide text-xl py-2.5 text-gray-200">
          {title}
        </p>
      </div>
      <div className="md:text-left text-center mx-2 leading-6 text-lg md:w-64 flex flex-col justify-end pb-6">
        {children}
      </div>
    </div>
  );
};

export default Home;
