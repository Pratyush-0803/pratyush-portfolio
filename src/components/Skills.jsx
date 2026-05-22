import React, { useState, useCallback, useMemo, memo } from "react";
import { Code, Layers, Terminal, Sparkles, Settings2 } from "lucide-react";
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

const SkillTag = memo(({ tag, className, onMouseEnter, onMouseLeave }) => (
  <span
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap border transition-all duration-200 cursor-default ${className}`}
  >
    {tag}
  </span>
));
SkillTag.displayName = "SkillTag";

const SkillSection = memo(({ section, hoveredTag, onTagHover, onTagLeave }) => {
  const { icon, title, tags } = section;

  const tagElements = useMemo(
    () =>
      tags.map((tag, i) => {
        const tagId = `${title}-${i}`;
        const isHovered = hoveredTag === tagId;

        return (
          <SkillTag
            key={tag}
            tag={tag}
            className={
              isHovered
                ? "bg-primary/10 text-foreground border-primary/30"
                : "bg-muted text-muted-foreground border-border hover:bg-muted/80"
            }
            onMouseEnter={() => onTagHover(tagId)}
            onMouseLeave={onTagLeave}
          />
        );
      }),
    [tags, title, hoveredTag, onTagHover, onTagLeave]
  );

  return (
    <motion.div
      variants={itemVariants}
      className="bg-card text-card-foreground border border-border/60 rounded-2xl shadow-sm hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 p-6 flex flex-col"
    >
      <div className="flex items-center gap-3 mb-5">
        <div className="p-3 rounded-xl bg-muted text-foreground border border-border">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-foreground">
          {title}
        </h3>
      </div>

      <div className="flex flex-wrap gap-3">{tagElements}</div>
    </motion.div>
  );
});
SkillSection.displayName = "SkillSection";

const SKILLS_SECTIONS = [
  {
    icon: <Code className="w-6 h-6" />,
    title: "Programming Languages",
    tags: ["C", "C++", "JavaScript", "TypeScript", "Python", "HTML5", "CSS3", "SQL"],
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: "Frameworks & Libraries",
    tags: ["Express.js", "Node.js", "React", "Tailwind", "Bootstrap"],
  },
  {
    icon: <Terminal className="w-6 h-6" />,
    title: "Tools & Platforms",
    tags: ["MongoDB", "GitHub", "VS Code", "REST APIs", "Vercel"],
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Interests",
    tags: ["Competitive Programming", "DSA", "MERN Stack", "Artificial Intelligence"],
  },
];

const SkillsComponent = memo(function Skills() {
  const [hoveredTag, setHoveredTag] = useState(null);

  const handleTagHover = useCallback((tagId) => setHoveredTag(tagId), []);
  const handleTagLeave = useCallback(() => setHoveredTag(null), []);

  return (
    <div className="w-full min-h-[80vh] flex flex-col items-center justify-center px-4 py-12">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center w-full"
      >
        <motion.div variants={itemVariants} className="text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 flex items-center gap-4 text-foreground justify-center">
            <Settings2 className="w-8 h-8 sm:w-11 sm:h-11 text-primary" />
            Skills & Interests
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            This section gives a quick look at the skills I’ve picked up so far and the areas I enjoy working in. Most of these come from building projects and exploring things while learning.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {SKILLS_SECTIONS.map((section) => (
            <SkillSection
              key={section.title}
              section={section}
              hoveredTag={hoveredTag}
              onTagHover={handleTagHover}
              onTagLeave={handleTagLeave}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
});

SkillsComponent.displayName = "Skills";

export default SkillsComponent;