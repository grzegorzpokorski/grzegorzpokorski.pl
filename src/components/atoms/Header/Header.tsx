import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type HeaderProps = {
  subtitle?: string;
  title: string;
  description?: ReactNode;
  centered?: boolean;
  titleAsH1?: boolean;
  children?: ReactNode;
  className?: string;
};

export const Header = ({
  subtitle,
  title,
  description,
  centered,
  titleAsH1,
  children,
  className,
}: HeaderProps) => {
  return (
    <header
      className={twMerge(
        "w-full mr-auto flex flex-col gap-4",
        centered && "text-center mx-auto md:w-4/6",
        className,
      )}
    >
      {subtitle && (
        <span className="uppercase font-bold text-green-500">{subtitle}</span>
      )}
      {titleAsH1 ? (
        <h1 className="font-bold text-3xl md:text-4xl text-zinc-800">
          {title}
        </h1>
      ) : (
        <h2 className="font-bold text-2xl md:text-3xl text-zinc-800">
          {title}
        </h2>
      )}
      {description && <div className="prose max-w-none">{description}</div>}
      {children}
    </header>
  );
};
