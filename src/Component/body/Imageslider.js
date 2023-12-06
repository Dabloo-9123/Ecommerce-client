import React, { useState, useEffect } from 'react';
import './slider.css';

function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    'https://www.jiomart.com/images/cms/aw_rbslider/slides/1701779949_iPhone_15_Desktop.jpg?im=Resize=(1680,320)',
    'https://www.jiomart.com/images/cms/aw_rbslider/slides/1701769068_Get_Set_Party_Ready_Desktop.jpg?im=Resize=(1680,320)',
    'https://www.jiomart.com/images/cms/aw_rbslider/slides/1701797490_Bestever_deals_on_earbuds_soundbars_and_more_Desktop.jpg?im=Resize=(1680,320)',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="image-slider">
      <img
        src={images[currentIndex]}
        alt={`Image ${currentIndex}`}
        className="sliderImgs"
      />
    </div>
  );
}

export default ImageSlider;
