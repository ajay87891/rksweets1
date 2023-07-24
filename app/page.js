import Navbar from "@/components/navbar";
import Header from "@/container/Header";
import Services from "@/container/services";
import Menu from "@/container/menu";
import Footer from "@/container/footer";
import Cake from "@/container/cake";
import About from "@/container/about"

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
      <Services></Services>
      <Cake></Cake>
      <Menu></Menu>
      <About></About>
      <Footer></Footer>

    </>
  );
}
