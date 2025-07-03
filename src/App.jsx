import { Footer } from "./components/footer";
import { Nav } from "./components/nav"
import { Outlet } from "react-router-dom";
import ScrollToTop from './scrolltotop';
function App() {
  return (
    <>
    <ScrollToTop/>
      <Nav />
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
