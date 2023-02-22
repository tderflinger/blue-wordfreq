import { readFile } from "fs/promises";
import Table from "react-bootstrap/Table";
import Dropdown from "react-bootstrap/Dropdown";
import { languageNames } from "../lib/languageDefinitions";
import { FC } from "react";

type LanguagePageProps = {
  wordsList: Array<WordListType>;
  languageName: string;
  languageCode: string;
};

type WordListType = {
  word: string;
  "en-us": string;
};

const LanguagePage: FC<LanguagePageProps> = ({
  wordsList,
  languageName,
  languageCode,
}) => {
  return (
    <div>
      <h1 style={{ paddingTop: "3rem" }}>Frequency List {languageName}</h1>
      <h2 style={{ fontSize: "1rem" }}>
        Top 1000 most frequent words in {languageName} with their English
        translation.
      </h2>
      <div style={{ display: "flex" }}>
        <p style={{ width: "10rem", marginTop: "1rem" }}>Choose language:</p>
        <Dropdown style={{ marginTop: "0.5rem" }}>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Languages Available:
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {Object.keys(languageNames).map((lang, index) => {
              return (
                <Dropdown.Item key={index} href={`/${lang}`}>
                  {languageNames[lang]}
                </Dropdown.Item>
              );
            })}
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <Table striped bordered hover responsive>
        <thead style={{ backgroundColor: "#1A56C5", color: "white" }}>
          <tr>
            <th>#</th>
            <th>{languageName}</th>
            <th>English</th>
            <th>Links</th>
          </tr>
        </thead>
        <tbody>
          {wordsList.map((word: WordListType, index: number) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{word?.word}</td>
              <td>{word["en-us"]}</td>
              <td>
                <a
                  href={`https://${languageCode}.wiktionary.org/wiki/${word?.word}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {languageName} Wiktionary
                </a>
                <a
                  style={{ marginLeft: "1em" }}
                  href={`https://en.wiktionary.org/wiki/${word?.word}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  English Wiktionary
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export async function getStaticPaths() {
  const paths: any[] = [];
  Object.keys(languageNames).forEach((lang) => {
    paths.push({ params: { langCode: lang } });
  });

  return {
    paths,
    fallback: false,
  };
}

type ParamsType = {
  langCode: string;
};

export async function getStaticProps({ params }: { params: ParamsType }) {
  const { langCode } = params;

  if (!langCode) {
    return {
      redirect: {
        destination: "/cs",
        permanent: true,
      },    
    };
  }

  const contents = await readFile(`../../word-lists/${langCode}-list.json`);
  const jsonList = JSON.parse(contents.toString());

  return {
    props: {
      wordsList: jsonList,
      languageName: languageNames[langCode],
      languageCode: langCode,
    },
  };
}

export default LanguagePage;
