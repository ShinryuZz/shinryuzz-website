import React from "react";

export const List = ({ children }: { children: React.ReactNode }) => {
  return (
    <ul className="flex flex-col gap-3 list-disc list-inside ml-2 text-red">
      {children}
    </ul>
  );
};

export const ListItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <li>
      <span className="text-darker dark:text-light">{children}</span>
    </li>
  );
};

export const LinkItem = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <a
      href={href}
      className="text-darker dark:text-light hover:opacity-70 break-keep"
    >
      {children}
    </a>
  );
};

export const ListItemLink = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <ListItem>
      <a
        href={href}
        target="_blank"
        className="text-darker dark:text-light hover:opacity-70"
      >
        {children}
      </a>
    </ListItem>
  );
};
