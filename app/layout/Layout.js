import Footer from "../components/common/Footer";
import Header from "../components/home/home-1/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
