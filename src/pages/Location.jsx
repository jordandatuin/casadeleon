import { useEffect  } from 'react'

function Location() 
{

    useEffect(() => 
    {
      document.title = `Location page`;
    });
  
    return (
     <>
        <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100">
          <iframe className="container-fluid d-flex justify-content-center align-items-center p-5 min-vh-100" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=523&amp;height=400&amp;hl=en&amp;q=Casa%20De%20Leon%20at%20Greenland,%20Lot%2021&amp;23,%20Greenland%20Subdivision,%20Phase%203B%20Coral%20Bells%20Street,%20Cainta,%201900%20Rizal%20Cainta+(CASA%20DE%20LEON)&amp;t=k&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
        </div>
     </>
    )
  }
  
  export default Location;