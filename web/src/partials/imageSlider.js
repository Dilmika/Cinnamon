import React from "react";
import SimpleImageSlider from "react-simple-image-slider";


let images = [
  { url: 'images/img1.jpg' },
  { url: 'images/img2.jpg' },
  { url: 'images/img3.jpg' },
  { url: 'images/img4.jpg' },
  { url: 'images/img6.jpg' }
];

// let imagesTemp = images;

export default function ImageSlider() {

  // setInterval(() => {
  //   console.log('Interval');
  //   if(images.length > 0)
  //     images.reverse().pop();
  //   else
  //     images = imagesTemp;
  //   console.log(images);
  // },2000);

  return (
    <div >
      <SimpleImageSlider
        width='100%'
        height={700}
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </div>
  );
}
