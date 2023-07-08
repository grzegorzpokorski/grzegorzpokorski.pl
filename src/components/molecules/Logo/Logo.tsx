import { Heading } from "@/components/atoms/Heading/Heading";
import { Link } from "@/components/atoms/Link/Link";

type LogoProps = {
  isHome?: boolean;
  isTitle?: boolean;
};

export const Logo = ({ isHome, isTitle }: LogoProps) => {
  return (
    <Link
      href={`${isHome ? "#" : "/"}`}
      className="transition hover:opacity-60 motion-reduce:transition-none"
    >
      {isTitle ? (
        <Heading as="h1" size="logo">
          <span className="text-green-500">Grzegorz </span>
          <span className="text-zinc-800 dark:text-white">Pokorski</span>
        </Heading>
      ) : (
        <>
          <span className="text-lg font-bold text-green-500">Grzegorz </span>
          <span className="text-lg font-bold text-zinc-800 dark:text-white">
            Pokorski
          </span>
        </>
      )}
    </Link>
  );
};
