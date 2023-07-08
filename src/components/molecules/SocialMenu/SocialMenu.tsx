import { Link } from "@/components/atoms/Link/Link";
import { socialLinks } from "@/content/socials";
import { twMerge } from "tailwind-merge";

export const SocialMenu = ({
  inMobileMenu = false,
}: {
  inMobileMenu?: boolean;
}) => (
  <ul className={twMerge("list-none p-0 m-0 flex flex-row gap-6")}>
    {socialLinks.map(({ label, href, icon: Icon }) => (
      <li key={label}>
        <Link
          href={href}
          variant={
            inMobileMenu ? "social-menu-link-mobile-nav" : "social-menu-link"
          }
        >
          <>
            <span className="sr-only">{label}</span>
            <Icon aria-hidden="true" />
          </>
        </Link>
      </li>
    ))}
  </ul>
);
