import { useEffect  } from 'react'

import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import FacebookIcon from '@mui/icons-material/Facebook';

function Inquire() 
{

    useEffect(() => 
    {
      document.title = `Inquire page`;
    });
  
    return (
     <>
        <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100">
          <div className="card card_design" style={{width: "50rem",height:"25rem"}}>
            <div className="card-body">
              <h5 className="card-title display-6 text-center m-3">CONTACT US</h5>
              <div className="row">
                <div className="col text-center">
                  <p className="card-text m-3"><LocalPhoneIcon fontSize='medium'/> 09154482182 / MISS MARIZ</p>
                  <p className="card-text m-3"><LocalPhoneIcon fontSize='medium'/> 09069033697 / MISS ROSE</p>
                </div>
              </div>
              <h5 className="card-title display-6 text-center m-3">OR</h5>
              <h5 className="card-title display-6 text-center m-3">VISIT OUR OFFICIAL FACEBOOK PAGE</h5>
              <div className="row">
                <div className="col d-flex justify-content-center align-content-center ">
                  <a
                    href="https://www.facebook.com/profile.php?id=100078546289782"
                    className="btn btn-dark card-link"
                    target="_blank"
                  >
                    <FacebookIcon /> CASA DE LEON
                  </a>                
                </div>
              </div>
            </div>
          </div>
        </div>
     </>
    )
  }
  
  export default Inquire;