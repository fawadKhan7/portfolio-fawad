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
import UBIT from "@/assets/education/ubit.jpg";
import DJ from "@/assets/education/DJ.jpg";
import { LinkPreview } from "@/components/Link-preview";
import * as Skill from "@/assets/skills/index";
import Image from "next/image";

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
  {
    id: 8,
    name: "Javascript",
    image: Skill.JavaScript,
  },
  {
    id: 9,
    name: "Node.js",
    image: Skill.Node,
  },
  {
    id: 10,
    name: "Express.js",
    image: Skill.Express,
  },
  {
    id: 11,
    name: "MongoDb",
    image: Skill.Mongodb,
  },
  {
    id: 12,
    name: "Sql",
    image: Skill.Sqlite,
  },
  {
    id: 13,
    name: "Bootstrap",
    image: Skill.Bootstrap,
  },
  {
    id: 14,
    name: "Redux",
    image: Skill.Redux,
  },
  {
    id: 15,
    name: "Zustand",
    image: Skill.Zustand,
  },
];

export const timelineData = [
  {
    title: "Internship",
    content: (
      <div className="flex flex-col gap-1">
        <div className="font-semibold text-2xl">Backend Developer</div>
        <div className="font-semibold text-xl">
          <LinkPreview
            visit={"https://teknoloje.com"}
            url={"https://teknoloje.com/about/"}
          >
            <a
              href="https://teknoloje.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ff9c00] font-bold"
            >
              Teknoloje Solutions
            </a>
          </LinkPreview>
        </div>
        <div className="font-semibold"> Apr/2023 - Aug/2023</div>
        <p className="text-neutral-600 dark:text-neutral-400">
          My journey into software development commenced with an internship at
          Teknoloje Solutions. During this period, I acquired a strong
          foundation in backend technologies alongside essential web development
          skills such as HTML, CSS, and JavaScript. This hands-on experience not
          only deepened my technical knowledge but also ignited my passion for
          crafting impactful web applications, laying a solid groundwork for my
          career ahead.
        </p>
      </div>
    ),
  },
  {
    title: "Secured My First Job",
    content: (
      <div className="flex flex-col gap-1">
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
            <a
              href="https://www.cyphion.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#002942] font-bold"
            >
              Cyphion
            </a>
          </LinkPreview>
        </div>
        <div className="font-semibold"> Sept/2023 - Aug/2024</div>
        <p className="text-neutral-600 dark:text-neutral-400">
          Following my internship, I embarked on my professional career as a
          Junior MERN Stack Developer at Cyphion. This role provided me with
          invaluable full-stack development experience, including the
          opportunity to launch my first personal project—a portfolio website. I
          honed my skills in project management, deployment strategies, and
          front-end development, significantly contributing to my technical and
          professional growth.
        </p>
      </div>
    ),
  },
  {
    title: "Freelancing",
    content: (
      <div className="flex flex-col gap-1">
        <div className="font-semibold text-2xl">Freelancing on Fiverr</div>
        <div className="font-semibold text-xl">
          <LinkPreview url={"https://www.fiverr.com"}>
            <a
              href="https://www.fiverr.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1dbf73] font-bold"
            >
              Fiverr
            </a>
          </LinkPreview>
        </div>
        <p className="text-neutral-600 dark:text-neutral-400">
          Transitioning into freelancing, I collaborated with clients globally
          on Fiverr, focusing on designing and developing dynamic, responsive,
          and scalable web applications using React.js. This experience enhanced
          my technical expertise while refining my client communication, project
          management, and delivery skills—key attributes in achieving successful
          project outcomes.
        </p>
      </div>
    ),
  },
  {
    title: "Current Role",
    content: (
      <div className="flex flex-col gap-1">
        <div className="font-semibold text-2xl">MERN Stack Developer</div>
        <div className="font-semibold text-xl">
          <LinkPreview url={"https://technoholicas.com/"}>
            <a
              href="https://technoholicas.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0000F0] font-bold"
            >
              Technoholic Advanced Solutions
            </a>
          </LinkPreview>
        </div>
        <div className="font-semibold"> Aug/2024 - Present</div>
        <p className="text-neutral-600 dark:text-neutral-400">
          As a MERN Stack Developer at Technoholic Advanced Solutions, I
          continue to expand my expertise in full-stack development. My role
          involves building robust, scalable applications and optimizing backend
          services with Node.js and MongoDB. I take pride in creating efficient
          APIs and delivering solutions that align with both client expectations
          and technical best practices.
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
          alt="linear board demo"
        />
      </div>
    ),
  },
];

export const cards = [
  {
    id: 1,
    className: "md:col-span-2",
    thumbnail: PrimeTution,
    link: "https://primetuition.co.uk/",
    title: "Prime Tution",
    description: (
      <div class="project-description">
        <p>
          As a MERN stack developer, I spearheaded the design and development of
          a robust MERN-based admin panel for managing educational content and
          user interactions. This project involved crafting a user-friendly
          interface with React, building dynamic data handling
          features with
          Node.js and Express, and
          implementing efficient database management using
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
    thumbnail: Labzkit,
    link: "https://labzkit.com.au",
    title: "Labzkit",
    description: (
      <div class="project-description">
        <p>
          Labzkit is a comprehensive science product-based
          e-commerce platform, designed to streamline the browsing and
          purchasing process for scientific tools and equipment. This project
          includes a client-facing storefront and an admin panel, offering
          intuitive management and user interaction features. Built with
          React, Material-UI,
          Tailwind CSS, and Express.js, it
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
    thumbnail: Coursehub,
    link: "#",
    title: "Coursehub",
    description: (
      <div class="project-description">
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
    thumbnail: Softlogic,
    link: "https://softlogicapp.com/",
    title: "Softlogic",
    description: (
      <div class="project-description">
        <p>
          Softlogic is a comprehensive service provider
          application that offers a range of professional services, including
          web development,
          mobile app development,
          graphic designing, and more. As a
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
    thumbnail: Croom,
    link: "#",
    title: "Croom",
    description: (
      <div class="project-description">
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
    thumbnail: Taskmate,
    link: "#",
    title: "Taskmate",
    description: (
      <div class="project-description">
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
    thumbnail: Coach,
    link: "https://www.fiverr.com/fawadkhan366",
    title: "Coach-Connect",
    description: (
      <div class="project-description">
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
    thumbnail: Onboarding,
    link: "https://www.fiverr.com/fawadkhan366",
    title: "Onboarding Flow",
    description: (
      <div class="project-description">
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
    thumbnail: Streamify,
    link: "https://www.fiverr.com/fawadkhan366",
    title: "Streamify",
    description: (
      <div class="project-description">
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
            informed even when they’re not actively watching the stream.
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
    thumbnail: Swiftshop,
    link: "#",
    title: "Swiftshop",
    description: (
      <div class="project-description">
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
];
