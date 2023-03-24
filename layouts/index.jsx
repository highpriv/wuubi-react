import Components from "../components";

const Layout = ({ children }) => {
  return (
    <>
      <Components.Header />
      {children}
      <Components.Footer />
    </>
  );
};

export default Layout;
