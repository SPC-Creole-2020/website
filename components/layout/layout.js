import Header from "./header";
import Scripts from "./scripts";
import Footer from "./footer";

function Layout({ children, title, ...props }) {
  return (
    <div id="wrap">
      <Header title={title} {...props} />
      {children}
      <Footer />
      <Scripts />
    </div>
  );
}

export default Layout;
