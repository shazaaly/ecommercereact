import React from 'react'
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';
import { LeftButton } from './LeftButton';
import { RightButton } from './RightButton';
import mobile from "../../../images/mobile.png"

const images = [
  {
    original: `${mobile}`,
  },
  {
    original: `${mobile}`,
  }
];

export const ProductGallery = () => {
  return (
    <div className='pt-2 product-gallary-card d-flex justify-content-center alighn-items-center'>

      <ImageGallery items={images}
        showBullets={false}
        showFullscreenButton={false}
        showPlayButton={false}
        isRTL={true}
        showThumbnails={false}
        renderRightNav={LeftButton}
        renderLeftNav={RightButton}

      />
    </div>
  )
}
