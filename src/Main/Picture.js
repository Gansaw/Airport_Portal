import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import ImgSlideData from "./ImgSlideData";
import { useState } from 'react';
const Picture = () =>{
    const renderSlides = ImgSlideData.map(image => (
        <div key={image.alt}>
          <img src={image.url} alt={image.alt} />
      </div>
    ));

    const [currentIndex, setCurrentIndex] = useState();
    function handleChange(index) {
      setCurrentIndex(index);
    }
    return(
        <>
            <div className="carousel-container w-[400px] lg:hidden">
                <Carousel
                    showArrows={false}
                    autoPlay={true}
                    infiniteLoop={true}
                    showThumbs={false}
                    selectedItem={ImgSlideData[currentIndex]}
                    onChange={handleChange}
                    className="w-full h-full">
                    {renderSlides}
                </Carousel>
            </div>
        </>
    );
}

export default Picture;