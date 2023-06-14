import { useRouter } from "next/router";
import { SessionProvider } from "next-auth/react";
import Components from "@components";

const Layout = ({ children, session }) => {
  const router = useRouter();
  const isHidden =
    router.pathname === "/kesfet" || router.pathname === "/mesajlar";

  return (
    <div>
      <SessionProvider session={session}>
        {!isHidden && <Components.Header />}

        {children}

        {!isHidden && <Components.Footer />}
      </SessionProvider>
    </div>
  );
};

export default Layout;
