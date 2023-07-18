import Navbar from "@/components/navbar";
import Header from "@/container/Header";
import Services from "@/container/services";
import Menu from "@/container/menu";
import Footer from "@/container/footer";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
      <Services></Services>
      <Menu></Menu>
      <Footer></Footer>
    </>
  );
}
