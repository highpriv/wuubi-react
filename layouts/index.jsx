import { useRouter } from "next/router";
import { SessionProvider } from "next-auth/react";
import Components from "../components";

const Layout = ({ children, session }) => {
  const router = useRouter();
  const isExplorePage = router.pathname === "/kesfet";

  return (
    <div>
      <SessionProvider session={session}>
        {!isExplorePage && <Components.Header />}

        {children}

        {!isExplorePage && <Components.Footer />}
      </SessionProvider>
    </div>
  );
};

export default Layout;
