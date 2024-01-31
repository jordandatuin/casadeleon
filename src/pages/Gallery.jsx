import { useEffect  } from 'react'
import EmblaCarousel from './EmblaCarousel.jsx'
import "../assets/styles.css";



const OPTIONS = { loop: true }
const SLIDE_COUNT = 18
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

function Gallery() 
{

    useEffect(() => 
    {
      document.title = `Gallery page`;
    });
  
    return (
      
     <>
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </div>
     </>
    );
  }
  
  export default Gallery;