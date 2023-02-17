import { Link } from "@/components/atoms/Link/Link";
import { siteUrl } from "@/content/seo";
import { FaTwitter, FaFacebook, FaLinkedin, FaEnvelope } from "react-icons/fa";

type SharePostLinks = {
  slug: string;
  title: string;
};

export const SharePostLinks = ({ slug, title }: SharePostLinks) => {
  const postUrl = `${siteUrl}/blog/${slug}`;

  return (
    <ul className={`list-none flex flex-wrap gap-3`}>
      <li>
        <Link
          href={`https://www.facebook.com/sharer/sharer.php?u=${postUrl}`}
          buttonStyle="share-social"
        >
          <span className="sr-only">Udostepnij na Facebooku.</span>
          <FaFacebook />
        </Link>
      </li>
      <li>
        <Link
          href={`https://twitter.com/intent/tweet?url=${postUrl}`}
          buttonStyle="share-social"
        >
          <span className="sr-only">Udostepnij na Twitterze.</span>
          <FaTwitter />
        </Link>
      </li>
      <li>
        <Link
          href={`https://www.linkedin.com/shareArticle?mini=true&url=${postUrl}`}
          buttonStyle="share-social"
        >
          <span className="sr-only">Udostepnij na Linkedin.</span>
          <FaLinkedin />
        </Link>
      </li>
      <li>
        <Link
          href={`mailto:?subject=${title}&body=${postUrl}`}
          buttonStyle="share-social"
        >
          <span className="sr-only">Udostepnij emailem.</span>
          <FaEnvelope />
        </Link>
      </li>
    </ul>
  );
};
