import { Link } from "@/components/atoms/Link/Link";
import { menuItems } from "@/content/menu";

export const FooterMenu = () => (
  <ul className="flex flex-col md:flex-row items-center gap-3">
    {menuItems &&
      menuItems.map((item, i) => (
        <li key={`footer-nav-item-${i}`}>
          <Link href={item.href} variant="footer-link">
            {item.label}
          </Link>
        </li>
      ))}
  </ul>
);
