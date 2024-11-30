import PrimeTution from "@/assets/projects/prime.png";
import Coursehub from "@/assets/projects/coursehub.png";
import Croom from "@/assets/projects/croom.svg";
import Softlogic from "@/assets/projects/softlogic.png";
import Swiftshop from "@/assets/projects/swiftshop.png";
import Taskmate from "@/assets/projects/taskmate.png";
import Streamify from "@/assets/projects/Streamify.png";
import Coach from "@/assets/projects/Coach.png";
import Labzkit from "@/assets/projects/labzkit.png";
import Onboarding from "@/assets/projects/Onboarding.png";
import Fiverr from "@/assets/reviews/fiverr.svg";
import LinkedIn from "@/assets/reviews/linkedin.svg";
import { LinkPreview } from "@/components/Link-preview";
import * as Skill from "@/assets/skills/index";

export const headerData = [
  {
    title: "Prime Tuition",
    thumbnail: PrimeTution,
    link: "https://primetuition.co.uk/",
  },
  {
    title: "Softlogic",
    thumbnail: Softlogic,
    link: "https://softlogicapp.com/",
  },
  {
    title: "Coursehub",
    thumbnail: Coursehub,
    link: "#",
  },
  {
    title: "Swiftshop",
    thumbnail: Swiftshop,
    link: "#",
  },
  {
    title: "Croom",
    thumbnail: Croom,
    link: "#",
  },
  {
    title: "Taskmate",
    thumbnail: Taskmate,
    link: "#",
  },
  {
    title: "Onboarding flow",
    thumbnail: Onboarding,
    link: "https://www.fiverr.com/fawadkhan366",
  },
  {
    title: "Streamify",
    thumbnail: Streamify,
    link: "https://www.fiverr.com/fawadkhan366",
  },
  {
    title: "Coach Student review",
    thumbnail: Coach,
    link: "https://www.fiverr.com/fawadkhan366",
  },
  {
    title: "Labzkit",
    thumbnail: Labzkit,
    link: "https://labzkit.com.au",
  },
];

export const frontend = [
  {
    id: 1,
    name: "Html",
    image: Skill.HTML,
  },
  {
    id: 2,
    name: "CSS",
    image: Skill.CSS,
  },
  {
    id: 3,
    name: "React.js",
    image: Skill.React,
  },
  {
    id: 4,
    name: "Next.js",
    image: Skill.Next,
  },
  {
    id: 5,
    name: "Framer Motion",
    image: Skill.Framer,
  },
  {
    id: 6,
    name: "AntDesign",
    image: Skill.AntDesign,
  },
  {
    id: 7,
    name: "Material Ui",
    image: Skill.Material,
  },
];

export const people = [
  {
    id: 1,
    name: "Javascript",
    image: Skill.CSS,
  },
  {
    id: 2,
    name: "Node.js",
    image: Skill.Node,
  },
  {
    id: 3,
    name: "Express.js",
    image: Skill.Express,
  },
  {
    id: 4,
    name: "MongoDb",
    image: Skill.Mongodb,
  },
  {
    id: 5,
    name: "Sql",
    image: Skill.Sqlite,
  },
];

export const timelineData = [
  {
    title: "Internship",
    content: (
      <div>
        <div className="font-semibold text-2xl">
          Internship as a Backend Developer
        </div>
        <div className="font-semibold text-xl">
          <LinkPreview
            visit={"https://teknoloje.com"}
            url={"https://teknoloje.com/about/"}
          >
            <a href="https://teknoloje.com/">Teknoloje Solutions</a>
          </LinkPreview>
        </div>
        <p className="text-neutral-600 dark:text-neutral-400">
          My journey into development began with an internship at Teknoloje
          Solutions. During this time, I gained a solid understanding of backend
          technologies and foundational web development skills, including HTML,
          CSS, and JavaScript. This experience ignited my passion for building
          web applications and set the stage for my career.
        </p>
      </div>
    ),
  },
  {
    title: "Landed My First Job",
    content: (
      <div>
        <div className="font-semibold text-2xl">
          Junior MERN Stack Developer
        </div>
        <div className="font-semibold text-xl">
          <LinkPreview
            visit={"https://www.cyphion.com"}
            url={
              "https://www.cyphion.com/static/media/logo-cyphion.21168a8289ff4700e30c.png"
            }
          >
            <a href="https://www.cyphion.com">Cyphion</a>
          </LinkPreview>
        </div>
        <p className="text-neutral-600 dark:text-neutral-400">
          After completing my internship, I secured my first job as a Junior
          MERN Stack Developer at Cyphion. This role allowed me to launch my
          first personal project—a portfolio website—and provided hands-on
          experience with full-stack development. I learned valuable skills in
          project management, deployment, and front-end development, which were
          critical in shaping my professional growth.
        </p>
      </div>
    ),
  },
  {
    title: "Freelancing",
    content: (
      <div>
        <div className="font-semibold text-2xl">
          Started Freelancing on Fiverr
        </div>
        <div className="font-semibold text-xl">
          <LinkPreview url={"https://www.fiverr.com"}>
            <a href="https://www.fiverr.com">Fiverr</a>
          </LinkPreview>
        </div>
        <p className="text-neutral-600 dark:text-neutral-400">
          As a freelancer, I expanded my skills by working with clients globally
          on Fiverr. I focused on building dynamic, responsive, and scalable web
          applications using React.js, helping businesses bring their ideas to
          life. This experience honed my technical abilities and deepened my
          understanding of client relations and project delivery.
        </p>
      </div>
    ),
  },
  {
    title: "Current Designation",
    content: (
      <div>
        <div className="font-semibold text-2xl">MERN Stack Developer</div>
        <div className="font-semibold text-xl">
          <LinkPreview url={"https://technoholicas.com/"}>
            <a href="https://technoholicas.com/">
              Technoholic Advanced Solutions
            </a>
          </LinkPreview>
        </div>
        <p className="text-neutral-600 dark:text-neutral-400">
          Currently, as a MERN Stack Developer at Technoholic Advanced
          Solutions, I’ve further developed my expertise in full-stack
          development. I’ve mastered technologies such as Node.js and MongoDB,
          building efficient APIs and backend services. I work on creating
          robust and scalable applications that meet both client needs and
          technical requirements.
        </p>
      </div>
    ),
  },
];

export const testimonialsData = [
  {
    src: Fiverr,
    name: "Mango Melissa",
    designation: "Fiverr Client",
    quote:
      "Fawad exceeded my expectations! His deep knowledge of the MERN stack, quick turnaround, and attention to detail made the project a success. Highly professional and easy to work with. Highly recommended!",
  },
  {
    src: Fiverr,
    name: "Alex Carry",
    designation: "Fiverr Client",
    quote:
      "Fawad Khan delivered exceptional work on my MERN stack project, meeting tight deadlines with high-quality results and clear communication. Highly recommend his services on Fiverr!",
  },
  {
    src: Fiverr,
    name: "Thomas",
    designation: "Fiverr Client",
    quote:
      "It was a pleasure working with Fawad Khan on Fiverr! He delivered my project quickly, communicated excellently, and ensured I was fully satisfied. His professionalism and dedication made the experience smooth and enjoyable. Highly recommend Fawad for top-notch service and results! Five stars!",
  },
  {
    src: LinkedIn,
    name: "Uzair Ur Rahim",
    designation: "Full Stack Developer",
    quote:
      "Fawad Anwar at Technoholic Advance Solutions is a key asset. His MERN stack expertise and problem-solving skills are exceptional. Always ready to tackle challenges, he simplifies complex issues and is a great teammate who cares about the work and team. Excited to see his career grow!",
  },
];
