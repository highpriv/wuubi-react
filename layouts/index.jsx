import Components from "../components";

const Layout = ({ children }) => {
  return (
    <div>
      <Components.Header />

      {children}

      <Components.Footer />
    </div>
  );
};

export default Layout;
