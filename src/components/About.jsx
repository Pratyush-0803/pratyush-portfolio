import { motion } from "framer-motion";
import { useMemo, memo } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from "react-icons/fa";
import { GraduationCap } from "lucide-react";

const SocialLink = memo(({ href, icon, title, className }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" title={title} className={className}>
    {icon}
  </a>
));

const SOCIAL_LINKS = [
  {
    href: "https://github.com/Pratyush-0803",
    icon: <FaGithub className="text-xl" />,
    title: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/pratyush-dixit-63a3a32ab/",
    icon: <FaLinkedin className="text-xl" />,
    title: "LinkedIn",
  },
  {
    href: "mailto:pratyushdixit385@gmail.com",
    icon: <FaEnvelope className="text-xl" />,
    title: "Email",
  },
];

const RESUME_URL =
  "https://drive.google.com/file/d/1-u0uCzgbR5JDwYJ21Mj4GceUeE058hb2/view?usp=drive_link";

export default memo(function About() {
  const socialLinksElements = useMemo(
    () =>
      SOCIAL_LINKS.map(({ href, icon, title }) => (
        <SocialLink
          key={title}
          href={href}
          icon={icon}
          title={title}
          className="w-11 h-11 flex items-center justify-center rounded-xl border border-border bg-card text-foreground hover:text-primary hover:border-primary/50 hover:shadow-md hover:shadow-primary/10 transition-all duration-200 no-underline"
        />
      )),
    []
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full flex items-center justify-center"
    >
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 w-fit max-w-5xl px-4 py-12">

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-40 h-40 sm:w-56 sm:h-56 rounded-full overflow-hidden border border-border shadow-md bg-card"
        >
          <img
            src="/assets/MyPhotograph.png"
            alt="Pratyush Dixit"
            className="object-cover w-full h-full"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center md:items-start"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted border border-border mb-4">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wide">
              About Me
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-3 text-foreground text-center md:text-left">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-foreground via-foreground/80 to-foreground/60 dark:from-white dark:via-white/80 dark:to-white/60 bg-clip-text text-transparent">
              Pratyush Dixit
            </span>
          </h1>

          <div className="flex items-center justify-center md:justify-start gap-2 text-muted-foreground text-sm mb-2">
            <GraduationCap className="w-4 h-4" />
            <span>BTech. NIT Hamirpur</span>
          </div>

          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl mb-5 text-center md:text-left">
            I'm a final-year student passionate about{" "}
            <span className="text-foreground font-medium">
              full-stack development, competitive programming, and problem solving
            </span>.
            I enjoy building scalable web applications while continuously improving my development skills.
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            {socialLinksElements}

            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 flex items-center justify-center rounded-xl border border-border bg-card text-foreground hover:text-primary hover:border-primary/50 hover:shadow-md hover:shadow-primary/10 transition-all duration-200 no-underline"
            >
              <FaFileAlt className="text-xl" />
            </a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
});