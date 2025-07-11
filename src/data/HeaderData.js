import { LinkPreview } from "@/components/Link-preview";
import * as Skill from "@/assets/skills/index";
import Image from "next/image";

// Import restored assets for testimonials and education
import Fiverr from "@/assets/reviews/fiverr.svg";
import LinkedIn from "@/assets/reviews/linkedin.svg";
import UBIT from "@/assets/education/ubit.jpg";
import DJ from "@/assets/education/DJ.jpg";

export const headerData = [
  {
    title: "Labzkit",
    thumbnail: "/projects/labzkit.png",
    link: "https://labzkit.com.au",
  },
  {
    title: "Streamify",
    thumbnail: "/projects/Streamify.png",
    link: "https://www.fiverr.com/fawadkhan366",
  },
  {
    title: "Coach Student Review",
    thumbnail: "/projects/Coach.png",
    link: "https://www.fiverr.com/fawadkhan366",
  },
  {
    title: "Onboarding Flow",
    thumbnail: "/projects/Onboarding.png",
    link: "https://www.fiverr.com/fawadkhan366",
  },
];

export const skills = [
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
    name: "JavaScript",
    image: Skill.JavaScript,
  },
  {
    id: 4,
    name: "React.js",
    image: Skill.React,
  },
  {
    id: 5,
    name: "Redux",
    image: Skill.Redux,
  },
  {
    id: 6,
    name: "Next.js",
    image: Skill.Next,
  },
  {
    id: 7,
    name: "Bootstrap",
    image: Skill.Bootstrap,
  },
  {
    id: 8,
    name: "Framer Motion",
    image: Skill.Framer,
  },
  {
    id: 9,
    name: "AntDesign",
    image: Skill.AntDesign,
  },
  {
    id: 10,
    name: "Material Ui",
    image: Skill.Material,
  },
  {
    id: 11,
    name: "Node.js",
    image: Skill.Node,
  },
  {
    id: 12,
    name: "Express.js",
    image: Skill.Express,
  },
  {
    id: 13,
    name: "MongoDb",
    image: Skill.Mongodb,
  },
  {
    id: 14,
    name: "Sql",
    image: Skill.Sqlite,
  },
  {
    id: 15,
    name: "Tailwind CSS",
    image: Skill.Tailwind,
  },
  {
    id: 16,
    name: "Zustand",
    image: Skill.Zustand,
  },
  {
    id: 17,
    name: "PostgreSQL",
    image: Skill.PostgreSQL, // Using Sqlite image for now, you can add a PostgreSQL icon later
  },
  {
    id: 18,
    name: "NestJS",
    image: Skill.Nestjs, // Using Node image for now, you can add a NestJS icon later
  },
];

export const timelineData = [
  {
    title: "First Steps",
    content: (
      <div className="flex flex-col gap-3">
        <div className="font-semibold text-2xl text-white">Backend Developer</div>
        <div className="font-semibold text-xl">
          <LinkPreview
            visit={"https://teknoloje.com"}
            url={"https://teknoloje.com/about/"}
          >
            <span className="text-[#ff9c00] font-bold">
              Teknoloje Solutions
            </span>
          </LinkPreview>
        </div>
        <div className="font-semibold text-zinc-400 text-sm"> Apr/2023 - Aug/2023</div>
        <p className="text-zinc-400 leading-relaxed text-sm">
          Established technical foundation through intensive backend development experience. 
          Mastered core technologies including Node.js, database management, and API development. 
          This foundational period shaped my commitment to delivering robust, scalable solutions that exceed client expectations.
        </p>
        <div className="flex flex-wrap gap-2 mt-2">
          <span className="px-3 py-1 bg-zinc-800 rounded-full text-xs text-zinc-300">Node.js</span>
          <span className="px-3 py-1 bg-zinc-800 rounded-full text-xs text-zinc-300">JavaScript</span>
          <span className="px-3 py-1 bg-zinc-800 rounded-full text-xs text-zinc-300">Database Design</span>
        </div>
      </div>
    ),
  },
  {
    title: "Stepping Up",
    content: (
      <div className="flex flex-col gap-3">
        <div className="font-semibold text-2xl text-white">
          Junior MERN Stack Developer
        </div>
        <div className="font-semibold text-xl">
          <LinkPreview
            visit={"https://www.cyphion.com"}
            url={
              "https://www.cyphion.com/static/media/logo-cyphion.21168a8289ff4700e30c.png"
            }
          >
            <span className="text-[#1a73e8] font-bold">
              Cyphion
            </span>
          </LinkPreview>
        </div>
        <div className="font-semibold text-zinc-400 text-sm"> Sept/2023 - Aug/2024</div>
        <p className="text-zinc-400 leading-relaxed text-sm">
          Advanced to full-stack development, delivering comprehensive web solutions using the MERN stack. 
          Successfully launched multiple client projects from concept to deployment, establishing expertise in 
          modern development workflows, database architecture, and responsive design principles.
        </p>
        <div className="flex flex-wrap gap-2 mt-2">
          <span className="px-3 py-1 bg-zinc-800 rounded-full text-xs text-zinc-300">React.js</span>
          <span className="px-3 py-1 bg-zinc-800 rounded-full text-xs text-zinc-300">MongoDB</span>
          <span className="px-3 py-1 bg-zinc-800 rounded-full text-xs text-zinc-300">Express.js</span>
          <span className="px-3 py-1 bg-zinc-800 rounded-full text-xs text-zinc-300">Project Management</span>
        </div>
      </div>
    ),
  },
  {
    title: "Going Freelance",
    content: (
      <div className="flex flex-col gap-3">
        <div className="font-semibold text-2xl text-white">Premium Freelance Services</div>
        <div className="font-semibold text-xl">
          <LinkPreview url={"https://www.fiverr.com"}>
            <span className="text-[#1dbf73] font-bold">
              Fiverr Platform
            </span>
          </LinkPreview>
        </div>
        <div className="font-semibold text-zinc-400 text-sm">2023 - Present</div>
        <p className="text-zinc-400 leading-relaxed text-sm">
          Established premium freelance services, delivering high-quality web applications to international clients. 
          Specialized in creating custom React.js solutions with exceptional attention to detail, maintaining 
          perfect client satisfaction ratings and building long-term partnerships through exceptional service delivery.
        </p>
        <div className="flex flex-wrap gap-2 mt-2">
          <span className="px-3 py-1 bg-zinc-800 rounded-full text-xs text-zinc-300">Client Management</span>
          <span className="px-3 py-1 bg-zinc-800 rounded-full text-xs text-zinc-300">Custom Solutions</span>
          <span className="px-3 py-1 bg-zinc-800 rounded-full text-xs text-zinc-300">Quality Assurance</span>
          <span className="px-3 py-1 bg-zinc-800 rounded-full text-xs text-zinc-300">Global Delivery</span>
        </div>
      </div>
    ),
  },
  {
    title: "Building Experience",
    content: (
      <div className="flex flex-col gap-3">
        <div className="font-semibold text-2xl text-white">MERN Stack Developer</div>
        <div className="font-semibold text-xl">
          <LinkPreview url={"https://technoholicas.com/"}>
            <span className="text-[#0000F0] font-bold">
              Technoholic Advanced Solutions
            </span>
          </LinkPreview>
        </div>
        <div className="font-semibold text-zinc-400 text-sm"> Aug/2024 - Mar/2025</div>
                 <p className="text-zinc-400 leading-relaxed text-sm">
           Expanded my expertise in full-stack development, working on scalable applications and backend services. 
           Focused on building efficient APIs, optimizing performance, and implementing best practices in code quality 
           and deployment strategies while collaborating with experienced developers.
         </p>
         <div className="flex flex-wrap gap-2 mt-2">
           <span className="px-3 py-1 bg-zinc-800 rounded-full text-xs text-zinc-300">Full-Stack Development</span>
           <span className="px-3 py-1 bg-zinc-800 rounded-full text-xs text-zinc-300">API Development</span>
           <span className="px-3 py-1 bg-zinc-800 rounded-full text-xs text-zinc-300">Performance Optimization</span>
           <span className="px-3 py-1 bg-zinc-800 rounded-full text-xs text-zinc-300">Team Collaboration</span>
         </div>
      </div>
    ),
  },
  {
    title: "Current Role",
    content: (
      <div className="flex flex-col gap-3">
        <div className="font-semibold text-2xl text-white">Full Stack Developer</div>
        <div className="font-semibold text-xl">
          <LinkPreview url={"https://cygnis.co/"}>
            <span className="text-[#1a73e8] font-bold">
              Cygnis Media
            </span>
          </LinkPreview>
        </div>
        <div className="font-semibold text-zinc-400 text-sm"> Mar/2025 - Present</div>
                 <p className="text-zinc-400 leading-relaxed text-sm">
           Working as a Full Stack Developer at Cygnis Media, contributing to intelligent software solutions 
           and web development projects. Building modern web applications, working with AI integration, 
           and delivering quality solutions for clients across various industries.
         </p>
         <div className="flex flex-wrap gap-2 mt-2">
           <span className="px-3 py-1 bg-zinc-800 rounded-full text-xs text-zinc-300">Modern Web Apps</span>
           <span className="px-3 py-1 bg-zinc-800 rounded-full text-xs text-zinc-300">AI Integration</span>
           <span className="px-3 py-1 bg-zinc-800 rounded-full text-xs text-zinc-300">Client Solutions</span>
           <span className="px-3 py-1 bg-zinc-800 rounded-full text-xs text-zinc-300">Quality Development</span>
         </div>
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

export const educationContent = [
  {
    title: "Bachelor of Software Engineering ",
    description: "UBIT - Umaer Basha Institute of Information Technology",
    duration: "2020 - 2024",
    isCompleted: false,
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src={UBIT}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="UBIT"
        />
      </div>
    ),
  },
  {
    title: "FSC in Pre-Engineering",
    description: "DJ Sindh Govt. Science College",
    duration: "2018 - 2019",
    isCompleted: true,
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={DJ}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="DJ College"
        />
      </div>
    ),
  },
];

export const cards = [
  {
    id: 1,
    className: "md:col-span-2",
    thumbnail: "/projects/prime.png",
    link: "https://primetuition.co.uk/",
    title: "Prime Tution",
    description: (
      <div className="project-description">
        <p>
          As a MERN stack developer, I spearheaded the design and development of
          a robust MERN-based admin panel for managing educational content and
          user interactions. This project involved crafting a user-friendly
          interface with React, building dynamic data handling features with
          Node.js and Express, and implementing efficient database management using
          MongoDB.
        </p>
        <h3>Key Features:</h3>
        <ul>
          <li>
            Content Management: Seamlessly creating, editing,
            and organizing educational materials, categories, and lesson plans.
          </li>
          <li>
            User Interaction Tracking: Monitoring user activity
            and engagement metrics, including student progress and feedback.
          </li>
          <li>
            Role-Based Access Control: Ensuring secure access
            by implementing roles such as admin, moderator, and educator, with
            specific permissions for each role.
          </li>
          <li>
            Real-Time Notifications: Enabling instant updates
            for educators and administrators using WebSocket technology.
          </li>
          <li>
            Scalable Design: Developing reusable components to
            support future expansion and integration with other systems.
          </li>
        </ul>
        <p>
          The solution was optimized for performance and security, ensuring a
          scalable and maintainable platform for the educational organization's
          growing needs.
        </p>
      </div>
    ),
  },
  {
    id: 10,
    className: "md:col-span-1",
    thumbnail: "/projects/labzkit.png",
    link: "https://labzkit.com.au",
    title: "Labzkit",
    description: (
      <div className="project-description">
        <p>
          Labzkit is a comprehensive science product-based
          e-commerce platform, designed to streamline the browsing and
          purchasing process for scientific tools and equipment. This project
          includes a client-facing storefront and an admin panel, offering
          intuitive management and user interaction features. Built with
          React, Material-UI, Tailwind CSS, and Express.js, it
          provides a seamless and modern user experience.
        </p>
        <h3>Key Features:</h3>
        <ul>
          <li>
            Category and Product Management: An intuitive
            system for organizing, adding, editing, and displaying scientific
            products across various categories.
          </li>
          <li>
            Admin Panel: A feature-rich dashboard allowing
            administrators to manage products, categories, and oversee platform
            operations with ease.
          </li>
          <li>
            Email Notification System: Automated email
            notifications for user inquiries, account updates, and other
            critical communications.
          </li>
          <li>
            Modern UI: A sleek and responsive interface built
            with Material-UI and enhanced with Tailwind CSS for a polished,
            user-friendly experience.
          </li>
          <li>
            Backend Efficiency: A robust backend powered by
            Express.js and MongoDB ensures fast and reliable data handling.
          </li>
        </ul>
        <p>
          The platform is designed to provide an efficient and scalable solution
          for showcasing and managing science-related products, catering to both
          customers and administrators.
        </p>
      </div>
    ),
  },
  {
    id: 3,
    className: "col-span-1",
    thumbnail: "/projects/coursehub.png",
    link: "#",
    title: "Coursehub",
    description: (
      <div className="project-description">
        <p>
          Coursehub is a dynamic course-providing platform
          designed to connect learners with a wide range of educational content.
          As a backend developer, I contributed to building a
          robust and scalable backend architecture using
          MongoDB and Express.js.
        </p>
        <h3>Key Features:</h3>
        <ul>
          <li>
            Course Management: Supports the addition, updating,
            and organization of courses with efficient database interactions.
          </li>
          <li>
            User Authentication: Secure user registration,
            login, and role-based access control for learners and
            administrators.
          </li>
          <li>
            API Development: Developed RESTful APIs to
            facilitate seamless communication between the frontend and backend.
          </li>
          <li>
            Data Integrity: Ensured reliable data storage and
            retrieval with MongoDB, incorporating best practices for database
            optimization.
          </li>
          <li>
            Scalable Backend: Designed and implemented a
            scalable backend architecture to support a growing user base and
            large datasets.
          </li>
        </ul>
        <p>
          Coursehub provides an efficient and scalable solution for offering
          educational content, with a focus on secure data management and robust
          backend functionality.
        </p>
      </div>
    ),
  },
  {
    id: 2,
    className: "col-span-2",
    thumbnail: "/projects/softlogic.png",
    link: "https://softlogicapp.com/",
    title: "Softlogic",
    description: (
      <div className="project-description">
        <p>
          Softlogic is a comprehensive service provider
          application that offers a range of professional services, including
          web development, mobile app development, graphic designing, and more. As a
          MERN stack developer, I contributed to the design and
          development of this application, ensuring a seamless experience for
          both service providers and clients.
        </p>
        <h3>Key Features:</h3>
        <ul>
          <li>
            Backend Development: Engineered a robust and
            scalable backend using Express.js and MongoDB to handle user data,
            service requests, and other operations.
          </li>
          <li>
            Interactive Frontend: Created a visually appealing
            and highly functional user interface using React,
            enriched with animations powered by Framer Motion.
          </li>
          <li>
            SCSS for Styling: Utilized SCSS to
            craft a clean, modern, and responsive design, aligning with the
            branding of the application.
          </li>
          <li>
            Service Categorization: Designed a system for
            organizing and browsing services across multiple categories for an
            enhanced user experience.
          </li>
          <li>
            API Integration: Developed and integrated secure
            RESTful APIs for seamless communication between the client and
            server.
          </li>
          <li>
            Responsive Design: Ensured the application performs
            flawlessly across desktops, tablets, and mobile devices.
          </li>
        </ul>
        <p>
          Softlogic serves as a reliable platform for businesses and individuals
          seeking high-quality services, delivering an intuitive interface and a
          powerful backend to support its operations.
        </p>
      </div>
    ),
  },
  {
    id: 5,
    className: "col-span-2",
    thumbnail: "/projects/croom.svg",
    link: "#",
    title: "Croom",
    description: (
      <div className="project-description">
        <p>
          Croom is a real-time chat application designed to
          enable seamless communication between users. This platform provides
          instant messaging capabilities, ensuring an interactive and engaging
          user experience. As a MERN stack developer, I played
          a pivotal role in developing both the backend and frontend of the
          application, focusing on performance, scalability, and user-centric
          design.
        </p>
        <h3>Key Features:</h3>
        <ul>
          <li>
            Real-Time Communication: Implemented real-time chat
            functionality using Socket.IO, enabling instant
            messaging between users.
          </li>
          <li>
            Scalable Backend: Built a secure and efficient
            backend using Express.js
            and MongoDB to manage user data, chat logs, and
            authentication.
          </li>
          <li>
            State Management: Utilized Redux
            and Context API
            to manage application state and ensure a smooth user experience.
          </li>
          <li>
            Modern Frontend: Designed and developed a
            responsive and user-friendly frontend using
            React and styled it with
            Tailwind CSS for a sleek and modern interface.
          </li>
          <li>
            Authentication: Integrated secure authentication
            mechanisms to ensure data privacy and restricted access to
            authorized users.
          </li>
          <li>
            Responsive Design: Ensured the application performs
            optimally across various devices, including desktops and mobile
            devices.
          </li>
          <li>
            Chat Features: Supported individual and group chats
            with features like message timestamps and online/offline indicators.
          </li>
        </ul>
        <p>
          Croom empowers users to connect and communicate in
          real-time, providing a robust platform for personal and professional
          conversations. The use of cutting-edge technologies ensures a seamless
          and reliable messaging experience.
        </p>
      </div>
    ),
  },
  {
    id: 6,
    className: "col-span-1",
    thumbnail: "/projects/taskmate.png",
    link: "#",
    title: "Taskmate",
    description: (
      <div className="project-description">
        <p>
          Taskmate is an advanced to-do application that offers
          robust task management capabilities with role-based features,
          authentication, and an integrated email system. As a
          MERN stack developer, I was instrumental in designing
          and implementing the backend for this project, ensuring secure and
          efficient functionality.
        </p>
        <h3>Key Features:</h3>
        <ul>
          <li>
            Multi-Role Functionality: Supported different user
            roles (e.g., Admin, User) with distinct permissions to manage tasks
            effectively.
          </li>
          <li>
            Task Management: Allowed users to create, edit,
            assign, and manage tasks in a user-friendly interface.
          </li>
          <li>
            Secure Authentication: Implemented secure user
            authentication to safeguard user data and ensure authorized access.
          </li>
          <li>
            Email Notifications: Integrated an email system to
            send task updates and important notifications to users.
          </li>
          <li>
            Backend Architecture: Designed a scalable and
            secure backend using Express.js
            and MongoDB, enabling efficient data handling and
            task management.
          </li>
          <li>
            Data Security: Ensured data protection and privacy
            with strong encryption and secure database management.
          </li>
        </ul>
        <p>
          Taskmate goes beyond a simple to-do app by
          introducing advanced features like role-based functionality and email
          integration. It offers a comprehensive solution for task management
          with a focus on collaboration and efficiency.
        </p>
      </div>
    ),
  },
  {
    id: 9,
    className: "col-span-1",
    thumbnail: "/projects/Coach.png",
    link: "https://www.fiverr.com/fawadkhan366",
    title: "Coach-Connect",
    description: (
      <div className="project-description">
        <p>
          Coach-Connect is a comprehensive
          MERN stack application designed to facilitate
          seamless interactions between students and coaches. The platform
          enables students to schedule meetings with their coaches and provides
          a system for mutual reviews post-meeting, enhancing communication and
          feedback efficiency.
        </p>
        <h3>Key Features:</h3>
        <ul>
          <li>
            Meeting Scheduler: Allows students to book
            one-on-one meetings with their preferred coaches based on
            availability.
          </li>
          <li>
            Two-Way Reviews: Provides a review system where
            both students and coaches can rate and provide feedback after a
            meeting.
          </li>
          <li>
            User-Friendly Dashboard: Features a clean and
            intuitive interface for both students and coaches to manage their
            schedules and interactions.
          </li>
          <li>
            Backend Development: Built with
            Express.js and MongoDB, offering
            efficient data handling and secure operations.
          </li>
          <li>
            Responsive Frontend: Developed using
            React and styled with modern tools for an engaging
            user experience.
          </li>
        </ul>
        <p>
          Coach-Connect bridges the gap between students and
          coaches, making scheduling and feedback processes more accessible and
          streamlined. This project highlights my ability to build feature-rich,
          user-focused applications using the MERN stack.
        </p>
      </div>
    ),
  },
  {
    id: 7,
    className: "md:col-span-1",
    thumbnail: "/projects/Onboarding.png",
    link: "https://www.fiverr.com/fawadkhan366",
    title: "Onboarding Flow",
    description: (
      <div className="project-description">
        <p>
          Onboarding-Flow is a dynamic
          MERN stack application designed to provide a
          customizable user onboarding experience. This platform allows users to
          input their data while offering admin users the ability to modify the
          field positions and shuffle them across different pages. The system
          supports role-based access control with advanced authentication and
          authorization mechanisms, ensuring a personalized and secure user
          experience.
        </p>
        <h3>Key Features:</h3>
        <ul>
          <li>
            Customizable Form Layouts: Admin users have the
            ability to modify, shuffle, and reorder form fields, providing a
            flexible onboarding process.
          </li>
          <li>
            Role-Based Access: The platform supports different
            user roles, with admins having full control over form configurations
            while users can only enter their data.
          </li>
          <li>
            Dynamic Page Management: Admins can manage multiple
            pages and adjust the sequence of fields on each page, offering a
            tailored onboarding flow.
          </li>
          <li>
            Secure Authentication: Implements role-based
            authentication and authorization with secure login and access
            controls, ensuring data privacy and proper access levels.
          </li>
          <li>
            Backend Development: Built with
            Express.js and MongoDB, providing
            scalable data handling and secure, real-time processing.
          </li>
          <li>
            Responsive Frontend: Developed using
            React and Tailwind CSS, ensuring a
            responsive and user-friendly interface for both admins and users.
          </li>
        </ul>
        <p>
          Onboarding-Flow simplifies the onboarding process by
          allowing admins to personalize the layout, creating a highly adaptable
          experience for users. The project demonstrates my expertise in
          building role-based, secure applications using the
          MERN stack.
        </p>
      </div>
    ),
  },
  {
    id: 8,
    className: "col-span-1",
    thumbnail: "/projects/Streamify.png",
    link: "https://www.fiverr.com/fawadkhan366",
    title: "Streamify",
    description: (
      <div className="project-description">
        <p>
          Streamify is a multi-role streaming platform that
          provides real-time controls for stream hosts, allowing them to manage
          users, assign roles, and moderate the chat during live streaming
          events. The platform features a secure authentication system with
          Google Auth and 2FA, allowing users to log in safely while streamers
          and users interact seamlessly. Streamify also includes push
          notifications and email systems to keep users informed about live
          streams and events. The entire platform is managed and controlled by a
          Super Admin.
        </p>
        <h3>Key Features:</h3>
        <ul>
          <li>
            Real-Time Role Management: Hosts can update user
            roles in real-time, giving them the ability to mute, ban, or promote
            users to different roles such as Admin, Viewer, or Moderator.
          </li>
          <li>
            Interactive Chat System: Users can interact through
            live chat, and hosts have full control to mute, ban, or promote
            users based on their actions.
          </li>
          <li>
            Push Notifications and Email Alerts: Notifications
            are sent to users for live stream events and updates, keeping them
            informed even when they're not actively watching the stream.
          </li>
          <li>
            Secure Authentication: Utilizes
            Google Auth and 2FA authentication
            for a secure login process, ensuring that user accounts are
            protected.
          </li>
          <li>
            User Following: Users can follow their favorite
            streamers, receive notifications, and stay updated with their live
            stream schedules and content.
          </li>
          <li>
            Super Admin Control: The platform is fully managed
            by a Super Admin who can monitor and control all activities, manage
            users, and handle system settings.
          </li>
          <li>
            Backend Development: The backend is built with
            Express.js and PostgreSQL,
            ensuring fast and efficient real-time data handling.
          </li>
          <li>
            Responsive Frontend: Developed using React,
            offering a smooth, interactive user interface that supports
            streaming features, notifications, and chat.
          </li>
        </ul>
        <p>
          Streamify is a robust and scalable solution for
          streaming and live interaction, with a strong emphasis on real-time
          communication, user moderation, and secure authentication. It
          showcases my ability to develop complex, real-time applications using
          MERN stack technologies, while also implementing a
          secure and user-friendly experience.
        </p>
      </div>
    ),
  },
  {
    id: 4,
    className: "md:col-span-1",
    thumbnail: "/projects/swiftshop.png",
    link: "#",
    title: "Swiftshop",
    description: (
      <div className="project-description">
        <p>
          Swiftshop is a robust e-commerce platform built with
          the MERN stack, offering both client and admin panels
          for a seamless shopping experience. The platform is designed to handle
          product browsing, customer orders, and payments through PayPal
          integration. As a MERN stack developer, I worked on both the frontend
          and backend, ensuring smooth interactions between users and
          administrators.
        </p>
        <h3>Key Features:</h3>
        <ul>
          <li>
            Client and Admin Panels: Swiftshop includes a
            user-friendly client interface for browsing products, managing
            orders, and making purchases. The admin panel allows store owners to
            manage products, view orders, and monitor customer activity.
          </li>
          <li>
            PayPal Integration: Secure payment handling via
            PayPal integration, allowing customers to make purchases with ease.
          </li>
          <li>
            Real-Time Inventory Management: Admins can add,
            update, and manage products in real-time, ensuring that the
            inventory stays up-to-date.
          </li>
          <li>
            Shopping Cart System: Users can easily add products
            to their cart, view their selections, and proceed to checkout with a
            smooth and responsive flow.
          </li>
          <li>
            Secure Authentication: User authentication allows
            customers to securely log in, view their order history, and manage
            their profiles.
          </li>
          <li>
            Responsive Design: Developed with
            React and Tailwind CSS, Swiftshop
            provides a responsive and modern shopping experience on both desktop
            and mobile devices.
          </li>
          <li>
            State Management: The frontend is enhanced with
            Redux to handle complex state management, ensuring
            smooth interactions, especially in the cart and checkout process.
          </li>
          <li>
            Backend Development: The backend is powered by
            Express.js and MongoDB, ensuring
            fast and efficient data management for product listings, orders, and
            customer information.
          </li>
        </ul>
        <p>
          Swiftshop is a fully functional e-commerce platform
          that streamlines product management, order processing, and secure
          payments. This project showcases my ability to develop scalable,
          real-time applications using the MERN stack, while
          integrating payment gateways and building intuitive, responsive user
          interfaces.
        </p>
      </div>
    ),
  },
  {
    id: 11,
    className: "col-span-2",
    thumbnail: "/projects/spaderent.png",
    link: "https://spaderent.com/",
    title: "Spaderent",
    description: (
      <div className="project-description">
        <p>
          Spaderent is a comprehensive property management software solution 
          offering streamlined property oversight, tenant management, and 
          automated operations. The platform provides property managers with 
          advanced tools for rent collection, maintenance tracking, and tenant 
          communication, all integrated into a single, user-friendly interface.
        </p>
        <h3>Key Features:</h3>
        <ul>
          <li>
            Property Oversight: Complete property management 
            dashboard with real-time monitoring of rental properties, 
            maintenance requests, and tenant activities.
          </li>
          <li>
            Automated Rent Collection: Streamlined payment 
            processing with integrated payment gateways, automated 
            reminders, and detailed financial reporting.
          </li>
          <li>
            Tenant Management: Comprehensive tenant profiles, 
            lease management, and communication tools for efficient 
            property-tenant interactions.
          </li>
          <li>
            Maintenance Board: Organized maintenance request 
            system with priority tracking, vendor management, and 
            completion status updates.
          </li>
          <li>
            Responsive Frontend: Built with React and modern 
            UI frameworks, providing an intuitive interface that 
            works seamlessly across desktop and mobile devices.
          </li>
          <li>
            Scalable Backend: Powered by Node.js and MongoDB, 
            ensuring efficient data handling and secure API 
            integrations for payment processing.
          </li>
        </ul>
        <p>
          Spaderent transforms property management by providing an all-in-one 
          solution that simplifies operations, improves tenant satisfaction, 
          and maximizes property investment returns through efficient management tools.
        </p>
      </div>
    ),
  },
  {
    id: 12,
    className: "col-span-1",
    thumbnail: "/projects/DigitalTenant.png",
    link: "https://digitaltenant.com/",
    title: "Digital Tenant",
    description: (
      <div className="project-description">
        <p>
          Digital Tenant is an advanced tenant-focused property management 
          platform providing automated rent collection, maintenance requests, 
          and tenant communication features. The platform empowers tenants 
          with self-service capabilities while giving property managers 
          comprehensive oversight and control.
        </p>
        <h3>Key Features:</h3>
        <ul>
          <li>
            Automated Rent Collection: Seamless online payment 
            system with automated reminders, payment tracking, and 
            receipt generation for tenants.
          </li>
          <li>
            Maintenance Request System: Easy-to-use interface 
            for tenants to submit maintenance requests with photo 
            uploads, priority settings, and real-time status updates.
          </li>
          <li>
            Tenant Communication Hub: Integrated messaging system 
            for direct communication between tenants and property 
            managers, with notification capabilities.
          </li>
          <li>
            Mobile-Responsive Design: Optimized for mobile devices 
            with React.js, ensuring tenants can access all features 
            from their smartphones or tablets.
          </li>
          <li>
            Real-Time Notifications: Push notifications and email 
            alerts for payment reminders, maintenance updates, and 
            important announcements.
          </li>
          <li>
            Secure Backend Architecture: Built with Node.js and 
            MongoDB, featuring secure authentication, data encryption, 
            and reliable API integrations.
          </li>
        </ul>
        <p>
          Digital Tenant revolutionizes the rental experience by putting 
          powerful tools in tenants' hands while providing property managers 
          with comprehensive insights and automated workflows for efficient 
          property operations.
        </p>
      </div>
    ),
  },
];
