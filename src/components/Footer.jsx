import { FaLinkedinIn, FaGithub } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
// import { IoDocumentText } from "react-icons/io5";

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
  // {
  //   href: "", // add resume link
  //   icon: IoDocumentText,
  // },
];

export default function Footer() {
  return (
    <footer className="w-full max-w-3xl mx-auto px-6 pt-8 pb-10 flex items-center justify-between">
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
              className="hover:text-black transition-colors text-[#4A4E69]"
            >
              <Icon size={17} />
            </a>
          );
        })}
      </div>

      <p className="text-sm text-[#4A4E69]">
        &copy; {new Date().getFullYear()} Joyce Wang
      </p>
    </footer>
  );
}
