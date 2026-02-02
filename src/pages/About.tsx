import { FaChevronDown } from "react-icons/fa6";
import type { ReactNode } from "../lib/reactNode";
import images from "../utils/images";

const About = () => {
  return (
    <div className="w-full h-full flex flex-col items-center md:gap-32 gap-16 font-space-grotesk *:text-right overflow-hidden scroll-smooth">
      <AboutSection className="w-full relative bg-black rounded-md overflow-hidden">
        <img
          src={images.about1}
          alt="about"
          className="w-full object-cover rounded-lg aspect-video opacity-95 shadow-xl object-center"
        />
        <FaChevronDown className="absolute bottom-6 mx-auto animate-bounce w-full text-2xl sm:opacity-100 opacity-0" />
      </AboutSection>

      <AboutSection>
        <h1 className="md:text-6xl text-4xl font-bold">
          Hi, We are CampusX Team
        </h1>

        <p className="md:text-3xl lg:w-[80%] sm:text-2xl text-xl w-full text-right">
          We are a passionate group of people trying to provide information in
          byte sized chunks for ease of access and consumption.
        </p>
      </AboutSection>

      <AboutSection className="items-start *:text-left relative *:z-10 py-16">
        <span className="w-[150vw] absolute top-0 h-full -left-48 bg-black/55 z-0"></span>

        <h2 className="md:text-4xl text-3xl font-bold">
          Dream of the CampusX App?
        </h2>

        <div className="-mx-2 relative md:text-2xl text-xl py-8 font-light">
          <span className="w-[150vw] absolute top-0 h-full -left-48 bg-black z-0 border border-gray-700"></span>
          <p className="relative z-10 max-w-4xl">
            What if one app could become your college, your mentor, your notice
            board, your job portal, and your space to express one?
          </p>
          <p className="relative z-10 max-w-4xl">All in one?</p>
        </div>

        <p className="md:text-3xl text-2xl text-orange-400 font-bold tracking-wider">
          That's the dream behind CampusX.
        </p>

        <hr className="max-w-48 w-full border-gray-400" />

        <div className="md:text-2xl text-xl space-y-3">
          <p>
            We started as a platform to help students read short, meaningful
            content. But we're building much more.
          </p>
          <p>
            Our dream is to become a global university without walls student,
            everywhere. built for every student, everywhere.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="md:text-2xl text-xl font-light text-purple-300">
            Here's what's coming:
          </h3>

          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-evenly">
            <div className="space-y-1">
              <FutureBox>
                A learning hub powered by Al-base language tools so anyone can
                learn languages with ease.
              </FutureBox>
              <FutureBox>
                A digital space for every college where students can connect,
                and colleges can post updates, events, and opportunities.
              </FutureBox>
              <FutureBox>
                A full library where students can access books, notes, and
                useful resources in one place.
              </FutureBox>
              <FutureBox>
                An internship & job portal both government and private sector
                jobs, with smart notifications and application tracking.
              </FutureBox>
              <FutureBox>
                Real-time messaging & announcements so no student misses out on
                what matters.
              </FutureBox>
            </div>

            <div className="md:text-2xl text-xl font-light space-y-4 lg:w-[50%] mx-auto">
              <p>
                And most importantly a platform for{" "}
                <span className="md:text-3xl text-2xl font-black text-orange-400">
                  expression
                </span>
                . A place where students can share, discuss, ask, and grow
                together.
              </p>
              <p>
                In a world that often overlooks student voices, CampusX is built
                to{" "}
                <span className="md:text-3xl text-2xl font-black text-purple-400">
                  amplify
                </span>{" "}
                such voices.
              </p>
            </div>
          </div>
        </div>

        <hr className="max-w-48 w-full border-gray-400" />

        <div className="md:text-3xl text-2xl font-extralight space-y-2">
          <p>We're not just making another app.</p>
          <p>
            We're creating the future of student life, learning, and community
            all in one place.
          </p>
        </div>
      </AboutSection>

      <AboutSection>
        <h2 className="md:text-4xl text-3xl font-bold">Members</h2>

        <div className="flex gap-12 flex-wrap items-center justify-center">
          <TeamMemberPic pic={images.pfp.dinesh_pfp} name="Dinesh Bhati" />
          <TeamMemberPic pic={images.pfp.kartikey_pfp} name="Kartikey Kumar" />
          <TeamMemberPic pic={images.pfp.ashish_pfp} name="Aashish Kumar" />
        </div>
      </AboutSection>

      <AboutSection className="items-start text-left">
        <h2 className="md:text-4xl text-3xl font-bold">Contact Us</h2>

        <p className="md:text-lg">
          Email:{"  "}
          <span className="font-black tracking-wider">
            <a href="mailto:biz.kartikey@gmail.com">biz.kartikey@gmail.com</a>
          </span>
        </p>
      </AboutSection>
    </div>
  );
};

const AboutSection = ({
  className,
  children,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={"flex flex-col gap-12 items-end w-[80%] " + className}>
      {children}
    </div>
  );
};

const TeamMemberPic = ({ pic, name }: { pic: string; name: string }) => {
  return (
    <figure className="md:w-84 md:h-84 h-auto w-full aspect-square  flex gap-2 flex-col">
      <img
        src={pic}
        alt="dinesh"
        className="w-full h-full object-cover rounded-md shadow-xl"
      />
      <figcaption className="font-semibold tracking-wide font-manrope px-4">
        {name}
      </figcaption>
    </figure>
  );
};

const FutureBox = ({ children }: { children: ReactNode }) => {
  return (
    <div className="p-4 lg:max-w-96 rounded-md border border-gray-800 bg-black">
      <p className="text-xl">{children}</p>
    </div>
  );
};

export default About;
