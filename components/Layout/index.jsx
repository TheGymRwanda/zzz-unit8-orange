import Header from "./Header";
import Footer from "./Footer";
const Layout = ({ children }) => {
  return (
    <div className="font-neuf">
      <Header />
      <Footer />
      {children}
    </div>
  );
};

export default Layout;
