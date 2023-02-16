import { Link } from "@/components/atoms/Link/Link";
import { socialLinks } from "@/content/socials";
import { twMerge } from "tailwind-merge";

export const SocialMenu = ({ className }: { className: string }) => (
  <ul className={twMerge("flex flex-row gap-6", className)}>
    {socialLinks.map(({ label, href, icon: Icon }) => (
      <li key={label}>
        <Link href={href} className="hover:text-green-500 transition-colors">
          <>
            <span className="sr-only">{label}</span>
            <Icon />
          </>
        </Link>
      </li>
    ))}
  </ul>
);
