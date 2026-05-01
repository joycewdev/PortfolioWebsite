import { useState } from "react";
import {
  FaBars,
  FaXmark,
  FaLinkedinIn,
  FaGithub,
  FaLink,
} from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#techstack", label: "Tech Stack" },
  { href: "/archive", label: "Archive" },
];

const socialLinks = [
  {
    href: "mailto:wangjoyce@live.com",
    icon: IoMail,
  },
  {
    href: "https://www.linkedin.com/in/w-joyce/",
    icon: FaLinkedinIn,
  },
  {
    href: "https://github.com/joycewdev",
    icon: FaGithub,
  },
  {
    href: "", // add resume link
    icon: FaLink,
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-sm bg-white/80 border-b border-[#4A4E69]">
      <div className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between text-[#4A4E69]">
        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 -ml-2 hover:text-black transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaXmark size={16} /> : <FaBars size={16} />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((navLink) => (
            <a
              key={navLink.href}
              href={navLink.href}
              className="text-sm hover:text-black transition-colors"
            >
              {navLink.label}
            </a>
          ))}
        </div>

        {/* Social Links (always visible) */}
        <div className="flex items-center gap-4">
          {socialLinks.map((socialLink) => {
            const Icon = socialLink.icon;
            return (
              <a
                key={socialLink.href}
                href={socialLink.href}
                target={
                  socialLink.href.startsWith("mailto") ? undefined : "_blank"
                }
                rel="noopener noreferrer"
                className="hover:text-black transition-colors"
              >
                <Icon size={16} />
              </a>
            );
          })}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-64" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-2 px-8 pb-6">
          {navLinks.map((navLink) => (
            <a
              key={navLink.href}
              href={navLink.href}
              onClick={() => setIsOpen(false)}
              className="text-sm text-[#4A4E69] hover:text-black transition-colors"
            >
              {navLink.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
