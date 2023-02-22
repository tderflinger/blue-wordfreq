import Head from "next/head";
import { Inter } from "@next/font/google";
import LanguageHeading from "@/components/LanguageHeading/LanguageHeading";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Word Frequency List</title>
        <meta name="description" content="Word frequency lists for many languages." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <LanguageHeading langName="Greek" />
        <div style={{ display: "flex" }}>
          <p style={{ width: "10rem", marginTop: "1rem" }}>Choose language:</p>
          <select
            className="form-select"
            style={{ width: "15rem" }}
            aria-label="Default select example"
            id="lang-select"
            onInput="changeLanguage()"
          >
            <option selected>Languages available:</option>
            <option value="cs">Czech</option>
            <option value="fr">French</option>
            <option value="el">Greek</option>
            <option value="zh">Mandarin</option>
            <option value="pl">Polish</option>
            <option value="ro">Romanian</option>
            <option value="es">Spanish</option>
            <option value="sv">Swedish</option>
            <option value="tr">Turkish</option>
            <option value="uk">Ukrainian</option>
          </select>
        </div>
      </main>
    </>
  );
}
