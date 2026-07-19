import { FiHeart, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const socials = [
  { icon: FiGithub, href: "https://github.com/MinazurRahman", label: "GitHub" },
  {
    icon: FiLinkedin,
    href: "https://linkedin.com/in/minazur-rahman-290131239",
    label: "LinkedIn",
  },
  { icon: FiMail, href: "mailto:minhazur077@gmail.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <a
              href="#home"
              className="text-xl font-bold gradient-text hover:opacity-80 transition-opacity"
            >
              Minazur Rahman
            </a>
            <p className="text-sm text-gray-500 mt-1">
              <FiHeart size={12} className="inline text-red-500" /> Built with
              React + Tailwind CSS
            </p>
          </div>

          <div className="flex gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={label !== "Email" ? "_blank" : undefined}
                rel={label !== "Email" ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="p-2.5 rounded-lg glass glass-hover text-gray-400 hover:text-white transition-all duration-200"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 text-center">
          <p className="text-sm text-gray-600">
            &copy; {new Date().getFullYear()} Minazur Rahman. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
