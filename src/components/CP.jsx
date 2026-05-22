import React, { memo, useMemo } from "react";
import { ExternalLink, Swords } from "lucide-react";
import { motion } from "framer-motion";

const sectionContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const listContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const PlatformCard = React.memo(({ platform }) => (
  <motion.div
    variants={itemVariants}
    whileHover={{ y: -4 }}
    className="bg-card text-card-foreground border border-border/60 rounded-2xl shadow-sm hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 p-6 flex flex-col items-center text-center h-full"
  >
    <div className="w-16 h-16 rounded-xl overflow-hidden flex items-center justify-center bg-background shadow border border-border/60 mb-4">
      <img
        src={platform.logo}
        alt={`${platform.name} Logo`}
        className={`w-full h-full object-contain ${
          platform.name === "CodeChef" ? "dark:invert" : ""
        }`}
        loading="lazy"
      />
    </div>

    <a
      href={platform.profileUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="text-lg font-semibold text-foreground hover:text-primary transition-colors duration-200"
    >
      {platform.name}
    </a>

    <div className="text-sm text-muted-foreground mt-1 mb-1">
      <span className="text-foreground/80">Handle:</span>{" "}
      <a
        href={platform.profileUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary hover:text-primary/80 transition-colors"
      >
        {platform.handle}
      </a>
    </div>

    <div className="flex flex-col gap-[2px] text-sm text-muted-foreground mb-3">
      {platform.stats.map((stat, i) => (
        <div key={i}>
          {stat.label}:{" "}
          <span className="font-medium text-foreground/80">
            {stat.value}
          </span>
        </div>
      ))}
    </div>

    <a
      href={platform.profileUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-auto pt-3 flex items-center gap-1 text-primary font-medium text-sm hover:underline transition"
    >
      <ExternalLink className="w-4 h-4" />
      View Profile
    </a>
  </motion.div>
));

PlatformCard.displayName = "PlatformCard";

const HighlightItem = React.memo(({ item }) => (
  <motion.li variants={itemVariants} className="leading-relaxed">
    {item.text}
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-primary hover:underline font-medium transition"
    >
      {item.linkText}
    </a>
    {item.rest}
  </motion.li>
));

HighlightItem.displayName = "HighlightItem";

function CompetitiveProgrammingComponent() {
  const cpPlatforms = useMemo(
    () => [
      {
        name: "LeetCode",
        logo: "/assets/logos/leetcode.png",
        handle: "pratyushdixit385",
        profileUrl: "https://leetcode.com/u/pratyushdixit385/",
        stats: [
          { label: "Max Rating", value: "1573" },
          { label: "Badges", value: "15" },
        ],
      },
      {
        name: "CodeChef",
        logo: "/assets/logos/codechef.svg",
        handle: "pratyushdixit",
        profileUrl: "https://www.codechef.com/users/pratyushdixit",
        stats: [
          { label: "Max Rating", value: "1456" },
          { label: "Rank", value: "2-Star" },
        ],
      },
      {
        name: "Codeforces",
        logo: "/assets/logos/codeforces.png",
        handle: "pratyushdixit385",
        profileUrl: "https://codeforces.com/profile/pratyushdixit385",
        stats: [
          { label: "Max Rating", value: "1171" },
          { label: "Rank", value: "Newbie" },
        ],
      },
      {
        name: "GeeksforGeeks",
        logo: "/assets/logos/gfg.png",
        handle: "pratyushdixit038",
        profileUrl: "https://www.geeksforgeeks.org/user/pratyushdixit038/",
        stats: [
          { label: "Coding Score", value: "398" },
          { label: "Rank", value: "356" },
        ],
      },
    ],
    []
  );

  const highlights = useMemo(
    () => [
      {
        text: "Solved more than ",
        linkText: "1000+ coding problems",
        href: "https://codolio.com/profile/pratyushdixit",
        rest: " across various platforms, strengthening my problem-solving and algorithmic skills.",
      },
      {
        text: "Selected as the ",
        linkText: "GeeksforGeeks Campus Ambassador",
        href: "https://www.geeksforgeeks.org/gfg-campus-mantri-program",
        rest: ", representing the coding community and promoting technical initiatives on campus.",
      },
      {
        text: "Actively participated in ",
        linkText: "30+ coding contests",
        href: "https://codolio.com/profile/pratyushdixit",
        rest: " across multiple competitive programming platforms.",
      },
      {
        text: "Secured a ",
        linkText: "Global Rank within Top 1000",
        href: "https://www.codechef.com/START192D",
        rest: " in CodeChef Starters 192 (Div. 4).",
      },
    ],
    []
  );

  return (
    <div className="w-full min-h-[80vh] flex flex-col items-center justify-center px-4 py-12">
      <motion.div
        variants={sectionContainerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center w-full space-y-16"
      >
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center text-center max-w-2xl"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 flex items-center gap-3 text-foreground">
            <Swords className="w-8 h-8 text-primary" />
            Competitive Programming
          </h2>

          <p className="text-lg text-muted-foreground">
            Competitive programming has helped me strengthen my problem-solving skills,
            logical thinking, and consistency through regular contests and practice.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="w-full max-w-5xl">
          <motion.div
            variants={listContainerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {cpPlatforms.map((platform) => (
              <PlatformCard key={platform.name} platform={platform} />
            ))}
          </motion.div>
        </motion.div>

        <motion.div variants={itemVariants} className="w-full max-w-3xl">
          <div className="bg-card text-card-foreground border border-border/60 rounded-2xl shadow-sm p-6">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Key Highlights
            </h3>

            <motion.ul
              variants={listContainerVariants}
              className="list-disc ml-5 space-y-2 text-base text-muted-foreground"
            >
              {highlights.map((item, index) => (
                <HighlightItem key={index} item={item} />
              ))}
            </motion.ul>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default memo(CompetitiveProgrammingComponent);