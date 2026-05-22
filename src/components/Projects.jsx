import React, { memo, useMemo } from "react";
import { Code, ExternalLink, FolderKanban } from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const ProjectCard = memo(({ project }) => {
  return (
    <motion.div
      variants={itemVariants}
      className="bg-white/90 dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-700 rounded-2xl shadow p-6 flex flex-col h-full"
    >
      <h3 className="text-xl font-bold text-foreground mb-3 leading-tight">
        {project.title}
      </h3>

      <p className="text-base text-muted-foreground mb-4 flex-grow">
        {project.desc}
      </p>

      <div className="flex flex-wrap gap-2 mb-5 mt-auto">
        {project.tags.map((tag, tagIndex) => (
          <span
            key={tagIndex}
            className="px-3 py-1 rounded-full text-xs font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-300 dark:border-neutral-600"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-5">
        {project.links.map((link, linkIndex) => (
          <button
            key={linkIndex}
            onClick={() => {
              if (link.href !== "#") {
                window.open(link.href, "_blank");
              }
            }}
            className="flex items-center gap-2 cursor-pointer whitespace-nowrap text-primary font-semibold text-sm bg-transparent border-none outline-none hover:underline hover:text-primary transition-colors duration-200"
          >
            {link.type === "code" ? (
              <Code className="w-4 h-4 flex-shrink-0" />
            ) : (
              <ExternalLink className="w-4 h-4 flex-shrink-0" />
            )}

            <span className="leading-none">
              {link.type === "code" ? "Code" : "Demo"}
            </span>
          </button>
        ))}
      </div>
    </motion.div>
  );
});

ProjectCard.displayName = "ProjectCard";

function ProjectsComponent() {
  const projectsData = useMemo(
    () => [
      {
        title: "Hirely",
        desc:
          "Built a MERN-based hiring platform with authentication, role-based access, and responsive dashboards for recruiters and applicants.",
        tags: [
          "MongoDB",
          "Express.js",
          "React",
          "Node.js",
          "JWT",
        ],
        links: [
          {
            type: "demo",
            href: "#",
          },
          {
            type: "code",
            href: "https://github.com/Pratyush-0803/Hirely",
          },
        ],
      },

      {
        title: "Leetrix",
        desc:
          "Created a backend platform that converts LeetCode stats into dynamic SVG visualizations with optimized API handling and caching.",
        tags: [
          "Node.js",
          "TypeScript",
          "GraphQL",
          "Caching",
          "Vercel",
        ],
        links: [
          {
            type: "demo",
            href: "#",
          },
          {
            type: "code",
            href: "https://github.com/Pratyush-0803/Leetrix",
          },
        ],
      },

      {
        title: "Electrothon 7.0",
        desc:
          "Contributed to the official Electrothon 7.0 website by improving UI responsiveness and enhancing overall user experience.",
        tags: [
          "React",
          "JavaScript",
          "Tailwind CSS",
          "Frontend",
          "Responsive UI",
        ],
        links: [
          {
            type: "demo",
            href: "https://electrothon-7-0.vercel.app/",
          },
          {
            type: "code",
            href: "https://github.com/Pratyush-0803/Electrothon_7.0",
          },
        ],
      },

      {
        title: "Spotify Clone",
        desc:
          "Designed a responsive Spotify-inspired music interface with playlists, controls, and modern layouts.",
        tags: [
          "HTML",
          "CSS",
          "JavaScript",
          "Responsive Design",
        ],
        links: [
          {
            type: "demo",
            href: "#",
          },
          {
            type: "code",
            href: "https://github.com/Pratyush-0803/Spotify-Clone",
          },
        ],
      },

      {
        title: "Tic-Tac-Toe Game",
        desc:
          "Built an interactive Tic Tac Toe game featuring turn handling, winner detection, and reset functionality.",
        tags: [
          "HTML",
          "CSS",
          "JavaScript",
          "Game Logic",
        ],
        links: [
          {
            type: "demo",
            href: "#",
          },
          {
            type: "code",
            href: "https://github.com/Pratyush-0803/TicTacToe",
          },
        ],
      },

      {
        title: "Study Sync",
        desc:
          "Developed a modern educational landing page with responsive layouts and clean UI components.",
        tags: [
          "HTML",
          "CSS",
          "JavaScript",
          "Responsive UI",
        ],
        links: [
          {
            type: "demo",
            href: "#",
          },
          {
            type: "code",
            href: "https://github.com/Pratyush-0803/StudySync",
          },
        ],
      },
    ],
    []
  );

  return (
    <div className="w-full min-h-[80vh] flex flex-col items-center justify-center px-4 py-12">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center w-full"
      >
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 flex items-center gap-4 text-foreground">
            <FolderKanban className="w-8 h-8 sm:w-11 sm:h-11 text-primary drop-shadow-sm" />
            Projects
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-center mb-10">
            A collection of projects that reflect my interest in full-stack
            development, problem solving, and building practical applications.
            From modern web platforms to interactive frontend projects, each one
            helped me explore new technologies and strengthen my development
            skills.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default memo(ProjectsComponent);