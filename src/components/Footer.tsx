"use client";

export default function Footer() {
  return (
    <footer className="max-w-2xl mx-auto px-6 py-8 text-center">
      <p className="text-xs text-muted-foreground">
        Built with curiosity & code &copy; {new Date().getFullYear()} Nandini Dhanrale
      </p>
    </footer>
  );
}
