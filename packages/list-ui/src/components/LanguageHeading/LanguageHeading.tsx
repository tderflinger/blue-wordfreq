import { FC } from "react";

type LanguageHeadingProps = {
  langName: string;
};

const LanguageHeading: FC<LanguageHeadingProps> = ({ langName }) => {
  return (
    <>
      <h1 style={{ paddingTop: "3rem" }}>Blue Frequency List {langName}</h1>
      <h2 style={{ fontSize: "1rem" }}>
        Top 1000 most frequent words in {langName} with their English
        translation.
      </h2>
    </>
  );
};

export default LanguageHeading;
