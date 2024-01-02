import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "@/components/atoms/Icons";

type SnsLink = {
  name: string;
  href: string;
  icon: React.ReactElement;
  ariaLabel: string;
};

const SNS_LINKS: SnsLink[] = [
  {
    name: "EMail",
    href: "mailto:kaz.redhot1201@gmail.com",
    icon: <FaEnvelope />,
    ariaLabel: "email-link",
  },
  {
    name: "X",
    href: "https://twitter.com/kazizi55",
    icon: <FaTwitter />,
    ariaLabel: "x-link",
  },
  {
    name: "GitHub",
    href: "https://github.com/kazizi55",
    icon: <FaGithub />,
    ariaLabel: "github-link",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/kazuya-iijima-21b051227/",
    icon: <FaLinkedin />,
    ariaLabel: "linkedin-link",
  },
] as const;

export const Footer: React.FC = () => {
  return (
    <footer className="my-8 flex flex-col items-center">
      <ul className="mb-1">
        {SNS_LINKS.map((snsLink) => (
          <li key={snsLink.name} className="inline-block mx-4">
            <a
              href={snsLink.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={snsLink.ariaLabel}
            >
              {snsLink.icon}
            </a>
          </li>
        ))}
      </ul>
      <p>© 2024 Kazuya Iijima</p>
    </footer>
  );
};
