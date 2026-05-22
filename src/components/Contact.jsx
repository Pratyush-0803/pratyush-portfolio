import React, { useState, memo } from "react";
import { Mail, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

const sectionContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const formContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const StatusMessage = ({ status, message }) => {
  if (status === "idle") return null;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: -10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -10, scale: 0.95 }}
      transition={{ duration: 0.25 }}
      className={`flex items-center gap-2 p-3 rounded-xl text-sm font-medium border ${
        status === "success"
          ? "bg-green-500/10 text-green-500 border-green-500/20"
          : status === "error"
          ? "bg-red-500/10 text-red-500 border-red-500/20"
          : "bg-blue-500/10 text-blue-500 border-blue-500/20"
      }`}
    >
      {status === "loading" && <Loader2 className="w-4 h-4 animate-spin" />}
      {status === "success" && <CheckCircle2 className="w-4 h-4" />}
      {status === "error" && <AlertCircle className="w-4 h-4" />}
      {message}
    </motion.div>
  );
};

function ContactComponent() {
  const [formState, setFormState] = useState({
    status: "idle",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState({ status: "loading", message: "Sending, please wait..." });

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://formspree.io/f/mldnaeeb", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setFormState({
          status: "success",
          message: "Thank you! Your message has been sent successfully.",
        });
        e.target.reset();
        setTimeout(() => setFormState({ status: "idle", message: "" }), 5000);
      } else {
        throw new Error("Failed");
      }
    } catch (error) {
      setFormState({
        status: "error",
        message: "An error occurred. Please try again or email me directly.",
      });
      setTimeout(() => setFormState({ status: "idle", message: "" }), 5000);
    }
  };

  return (
    <div className="w-full min-h-[80vh] flex flex-col items-center justify-center px-4 py-12">
      <motion.div
        variants={sectionContainerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center gap-8 w-full max-w-xl"
      >
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground flex items-center gap-3">
            <Mail className="w-8 h-8 text-primary" />
            Contact
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
            If you’d like to connect, discuss a project, or just talk about ideas, feel free to reach out.
          </p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <a
            href="mailto:pratyushdixit385@gmail.com"
            className="flex items-center gap-2 text-primary text-lg font-medium hover:underline transition"
          >
            <Mail className="w-5 h-5" />
            pratyushdixit385@gmail.com
          </a>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          variants={formContainerVariants}
          className="w-full p-6 sm:p-8 bg-card text-card-foreground border border-border/60 rounded-2xl shadow-sm hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 space-y-4"
        >
          <AnimatePresence>
            <StatusMessage
              status={formState.status}
              message={formState.message}
            />
          </AnimatePresence>

          <Input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            disabled={formState.status === "loading"}
          />

          <Input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            disabled={formState.status === "loading"}
          />

          <Textarea
            rows={4}
            name="message"
            placeholder="Your Message"
            required
            disabled={formState.status === "loading"}
            className="resize-y"
          />

          <Button
            type="submit"
            disabled={formState.status === "loading"}
            className="w-full text-lg font-semibold py-3 flex items-center justify-center gap-2"
          >
            {formState.status === "loading" ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                Send Message <Send className="w-4 h-4" />
              </>
            )}
          </Button>
        </motion.form>
      </motion.div>
    </div>
  );
}

export default memo(ContactComponent);