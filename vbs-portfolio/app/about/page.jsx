import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiMysql,
  SiMongodb,
  SiGithub,
  SiPostman,
  SiNextdotjs,
} from "react-icons/si";

const About = () => {
  return (
    <section className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6 text-center">
        About <span className="text-accent">Me</span>
      </h1>
      <p className="text-lg leading-relaxed mb-4">
        I am a passionate web developer with expertise in modern frameworks such
        as React JS, Angular JS, and Node JS. This framework allows me to create
        a dynamic website that could fulfill the needs of both users and
        clients.
      </p>

      <div className="flex flex-col lg:flex-row justify-center space-y-4 lg:space-y-0 lg:space-x-4 mt-28">
        <div className="w-full lg:w-1/2">
          <h1 className="text-3xl mb-6 text-center lg:text-left">
            <span className="text-accent">E</span>ducation
          </h1>
          <div className="relative z-10">
            {/* MCA */}

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-accent">Darshan University</h3>
              <p className="text-white">
                Master&apos;s of Computer Application
              </p>
              <p className="text-white">2023 - 2025</p>
            </div>

            {/* BCA */}

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-accent">
                R. P. Bhalodia College of Commerce
              </h3>
              <p className="text-white">
                Bachelor&apos;s of Computer Application
              </p>
              <p className="text-white">2020 - 2023</p>
            </div>

            {/* HSC */}

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-accent">Dholakiya School</h3>
              <p className="text-white">HSC</p>
              <p className="text-white">2019 - 2020</p>
            </div>

            {/* SSC */}

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-accent">Dholakiya School</h3>
              <p className="text-white">SSC</p>
              <p className="text-white">2018 - 2019</p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <h1 className="text-3xl mb-6 text-center lg:text-left">
            <span className="text-accent">S</span>kills
          </h1>

          <p className="text-lg mb-10">
            I know many programming languages and frameworks like React JS,
            HTML, tailwind, etc. Using these languages, I made a website and can
            write clean, understandable, and maintainable code.
          </p>

          {/* programming languages */}

          <div className="flex gap-2 items-center mb-4">
            <h5 className="text-lg">Programming Languages -</h5>
            <FaHtml5 className="text-xl" />
            <FaCss3 className="text-xl" />
            <SiJavascript className="text-xl" />
          </div>

          {/* frameworks */}

          <div className="flex gap-2 items-center mb-4">
            <h5 className="text-lg">Frameworks -</h5>
            <FaReact className="text-xl" />
            <FaBootstrap className="text-xl" />
            <SiTailwindcss className="text-xl" />
            <SiNextdotjs className="text-xl" />
          </div>

          {/* database */}

          <div className="flex gap-2 items-center mb-4">
            <h5 className="text-lg">Databases -</h5>
            <SiMysql className="text-xl" />
            <SiMongodb className="text-xl" />
          </div>

          {/* Tools */}

          <div className="flex gap-2 items-center mb-4">
            <h5 className="text-lg">Tools -</h5>
            <SiGithub className="text-xl" />
            <SiPostman className="text-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
