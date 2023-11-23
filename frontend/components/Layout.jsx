import Main from "@/components/Main";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Main>{children}</Main>
      <Footer />
    </div>
  );
}
