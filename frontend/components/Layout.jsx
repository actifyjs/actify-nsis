import { Divider } from "actify";
import Main from "@/components/Main";
import Footer from "@/components/Footer";

export default function ({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Divider className="sticky top-0" />
      <Main>{children}</Main>
      <Divider className="sticky top-0" />
      <Footer />
    </div>
  );
}
