import image1 from '../assets/gallery_assets/image1.jpg'
import image2 from '../assets/gallery_assets/image2.jpg'
import image3 from '../assets/gallery_assets/image3.jpg'
import image4 from '../assets/gallery_assets/image4.jpg'
import image5 from '../assets/gallery_assets/image5.jpg'
import image6 from '../assets/gallery_assets/image6.jpg'
import image7 from '../assets/gallery_assets/image7.jpg'
import image8 from '../assets/gallery_assets/image8.jpg'
import image9 from '../assets/gallery_assets/image9.jpg'
import image10 from '../assets/gallery_assets/image10.jpg'
import image11 from '../assets/gallery_assets/image11.jpg'
import image12 from '../assets/gallery_assets/image12.jpg'
import image13 from '../assets/gallery_assets/image13.jpg'
import image14 from '../assets/gallery_assets/image14.jpg'
import image15 from '../assets/gallery_assets/image15.jpg'
import image16 from '../assets/gallery_assets/image16.jpg'
import image17 from '../assets/gallery_assets/image17.jpg'
import image18 from '../assets/gallery_assets/image18.jpg'

export const images = [image1, image2, image3, image4, image5, 
                       image6, image7, image8, image9, image10, 
                       image11, image12, image13, image14, image15, 
                       image16, image17, image18
                    ]

const imageByIndex = (index) => images[index % images.length]

export default imageByIndex