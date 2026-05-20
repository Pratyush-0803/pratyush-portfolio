import { memo } from "react";

// Social links data outside the component for efficiency

const Footer = memo(() => {
  return (
    <footer className="w-full bg-muted/30 border-t border-border pt-4 pb-5 mt-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-8 flex flex-col items-center text-center gap-5">
        <div className="text-sm text-muted-foreground">
          © 2026 Pratyush Dixit. All rights reserved.
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;