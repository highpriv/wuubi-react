import { SessionProvider } from "next-auth/react";
import Components from "../components";

const Layout = ({ children, session }) => {
  return (
    <div>
      <SessionProvider session={session}>
        <Components.Header />

        {children}

        <Components.Footer />
      </SessionProvider>
    </div>
  );
};

export default Layout;
