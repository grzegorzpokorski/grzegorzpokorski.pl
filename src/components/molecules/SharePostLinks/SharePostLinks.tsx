import { Link } from "@/components/atoms/Link/Link";
import { siteUrl } from "@/content/seo";
import { FaTwitter, FaFacebook, FaLinkedin, FaEnvelope } from "react-icons/fa";

type SharePostLinksProps = {
  slug: string;
  title: string;
};

export const SharePostLinks = ({ slug, title }: SharePostLinksProps) => {
  const postUrl = `${siteUrl}/blog/${slug}`;

  return (
    <ul className={`list-none flex flex-wrap gap-3`} role="list">
      <li>
        <Link
          href={`https://www.facebook.com/sharer/sharer.php?u=${postUrl}`}
          variant="share-social"
        >
          <span className="sr-only">Udostepnij na Facebooku.</span>
          <FaFacebook className="dark:text-zinc-800" />
        </Link>
      </li>
      <li>
        <Link
          href={`https://twitter.com/intent/tweet?url=${postUrl}`}
          variant="share-social"
        >
          <span className="sr-only">Udostepnij na Twitterze.</span>
          <FaTwitter className="dark:text-zinc-800" />
        </Link>
      </li>
      <li>
        <Link
          href={`https://www.linkedin.com/shareArticle?mini=true&url=${postUrl}`}
          variant="share-social"
        >
          <span className="sr-only">Udostepnij na Linkedin.</span>
          <FaLinkedin className="dark:text-zinc-800" />
        </Link>
      </li>
      <li>
        <Link
          href={`mailto:?subject=${title}&body=${postUrl}`}
          variant="share-social"
        >
          <span className="sr-only">Udostepnij emailem.</span>
          <FaEnvelope className="dark:text-zinc-800" />
        </Link>
      </li>
    </ul>
  );
};
