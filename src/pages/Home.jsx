import { useEffect  } from 'react'
import home_background from '../assets/home_assets/house.jpg'



function Home() 
{

    useEffect(() => 
    {
      document.title = `Home page`;
    });
  
    return (
     <>
        <main className="d-flex justify-content-center align-items-center min-vh-100">
          <img 
          src={home_background} 
          alt="Logo"
          className="img-fluid home_image"
          />
            <div className="d-flex justify-content-center align-items-center z-3 position-absolute">
              <div className="card home_text_background">
                <div className="card-body ">
                  <h1 className="home-title text-center txt_welcome">
                  <span>Welcome To Casa De Leon.</span>
                  <span>"Your home away from home."</span>
                  </h1>
                </div>
              </div>
            
            </div>
        </main>
     </>
    )
  }
  
  export default Home;
  