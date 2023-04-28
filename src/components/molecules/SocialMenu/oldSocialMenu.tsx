import { Link } from "@/components/atoms/Link/Link";
import { socialLinks } from "@/content/socials";
import { twMerge } from "tailwind-merge";

const SocialMenu = ({ className }: { className?: string }) => (
  <ul className={twMerge("list-none p-0 m-0 flex flex-row gap-6", className)}>
    {socialLinks.map(({ label, href, icon: Icon }) => (
      <li key={label}>
        <Link href={href} buttonStyle="social-menu-link">
          <>
            <span className="sr-only">{label}</span>
            <Icon aria-hidden="true" />
          </>
        </Link>
      </li>
    ))}
  </ul>
);
