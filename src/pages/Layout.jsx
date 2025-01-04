import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
// import Snowfall from 'react-snowfall'


function Layout() 
{
  return (
    <>
    <main className="d-flex flex-column min-vh-100" style={{backgroundColor:'#2B2B2B'}}>
        <Navbar />
        <div className="container-fluid p-0">
          {/* <Snowfall
            style={{
              position: 'fixed',
              width: '100vw',
              height: '100vh',
            }} 
            color="#dee4fd"
            snowflakeCount={100}
            speed={[0.5][3.0]}
            wind={[-0.5][2.0]}
            radius={[0.5][5]}
          />  */}
          <Outlet></Outlet>
        </div>
        <Footer />
      </main>
    </>
  )
}

export default Layout;