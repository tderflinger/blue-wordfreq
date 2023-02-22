import { FC } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

type LayoutProps = {
  children?: React.ReactNode
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div
      style={{
        maxWidth: "75rem",
        marginLeft: "auto",
        marginRight: "auto",
        paddingLeft: "2rem",
        paddingRight: "2rem",
      }}
    >
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
