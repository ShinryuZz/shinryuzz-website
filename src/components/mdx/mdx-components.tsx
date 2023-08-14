interface IProps {
  children?: React.ReactNode;
}

export const Heading = {
  H1: ({ children }: IProps) => (
    <h1 className="text-2xl font-bold my-5">{children}</h1>
  ),
  H2: ({ children }: IProps) => (
    <h2 className="text-xl font-bold my-3">{children}</h2>
  ),
  H3: ({ children }: IProps) => (
    <h2 className="text-lg font-bold my-1">{children}</h2>
  ),
};

export const Text = ({ children }: IProps) => {
  return <p className="my-3 text-base">{children}</p>;
};

export const Code = ({ children }: IProps) => {
  return <pre>{children}</pre>;
};

export const UnorderedList = ({ children }: IProps) => {
  return <ul className="list-disc ml-5 my-2 list-outside">{children}</ul>;
};
