import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

function Layout() {
  return (
    <>
      <main className="d-flex flex-column min-vh-100" style={{backgroundColor:'#2B2B2B'}}>
        <Navbar />
        <div className="container-fluid p-0">
          <Outlet></Outlet>
        </div>
        <Footer />
      </main>
    </>
  )
}

export default Layout;