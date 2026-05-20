import React, { useMemo, memo } from "react";
import { GraduationCap } from "lucide-react";
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

const EducationCard = memo(({ education }) => {
  const { logo, alt, title, institutionLink, program, programLink, year, scoreLabel, score } =
    education;

  return (
    <motion.div
      variants={itemVariants}
      className="bg-white/90 dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-700 rounded-2xl shadow p-6 flex items-start gap-6"
    >
      <a
        href={institutionLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-shrink-0 flex items-center justify-center hover:scale-105 transition-all duration-200"
      >
        <img
          src={logo}
          alt={alt}
          className="max-w-[80px] max-h-[80px] object-contain rounded-lg"
          loading="lazy"
          decoding="async"
        />
      </a>

      <div className="flex flex-col text-left gap-1">
        <a
          href={institutionLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg sm:text-xl font-semibold text-foreground hover:text-primary transition-colors duration-200"
        >
          {title}
        </a>
        {programLink ? (
          <a
            href={programLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-primary hover:underline hover:text-foreground dark:hover:text-primary-foreground/70 font-medium transition-colors duration-200"
          >
            {program}
          </a>
        ) : (
          <p className="text-sm text-primary font-medium">{program}</p>
        )}
        <div className="flex items-center gap-6 text-sm text-muted-foreground mt-3">
          <p>
            <span className="font-medium text-foreground/80">Year:</span> {year}
          </p>

          <p>
            <span className="font-medium text-foreground/80">
              {scoreLabel}:
            </span>{" "}
            {score}
          </p>
        </div>
      </div>
    </motion.div>
  );
});

EducationCard.displayName = "EducationCard";

const ACADEMICS_DATA = [
  {
    logo: "/assets/logos/nith.png",
    alt: "NITH Logo",
    title: "National Institute of Technology, Hamirpur",
    institutionLink: "https://nith.ac.in/",
    program: "B.Tech in Electrical Engineering",
    programLink: "https://nith.ac.in/electrical-engineering",
    year: "2023 - 2027",
    scoreLabel: "CGPA",
    score: "8.23/10",
  },
  {
    logo: "/assets/logos/jps_knj.png",
    alt: "JPS Kannauj Logo",
    title: "Jagran Public School, Kannauj",
    institutionLink: "https://jagranpublicschoolkannauj.co.in/",
    program: "CBSE Class XII",
    programLink: null,
    year: "2021 - 2022",
    scoreLabel: "Percentage",
    score: "90.00%",
  },
  {
    logo: "/assets/logos/jps_knj.png",
    alt: "JPS Kannauj Logo",
    title: "Jagran Public School, Kannauj",
    institutionLink: "https://jagranpublicschoolkannauj.co.in/",
    program: "CBSE Class X",
    programLink: null,
    year: "2019 - 2020",
    scoreLabel: "Percentage",
    score: "95.00%",
  },
];

const AcademicsComponent = memo(function Academics() {
  const educationCards = useMemo(
    () =>
      ACADEMICS_DATA.map((education, index) => (
        <EducationCard
          key={`${education.title}-${index}`}
          education={education}
        />
      )),
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
            <GraduationCap className="w-8 h-8 sm:w-11 sm:h-11 text-primary drop-shadow-sm" />
            Education
          </h2>

          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            My academic journey has been shaped by curiosity, consistency, and
            a strong interest in learning new things. From school academics to
            engineering, each step has contributed to both my
            technical and personal growth.
          </motion.p>
        </motion.div>

        {/* Education Cards */}
        <motion.div
          variants={containerVariants}
          className="w-full max-w-2xl flex flex-col gap-8"
        >
          {educationCards}
        </motion.div>
      </motion.div>
    </div>
  );
});

AcademicsComponent.displayName = "Academics";

export default AcademicsComponent;