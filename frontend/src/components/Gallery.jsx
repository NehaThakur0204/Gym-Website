import React from "react";

const Gallery = () => {
  const gallery = [
    "img2.jpg",
    "/img7.jpg",
    "/img4.jpg",
    "/gym7.jpg",
    "img1.webp"
   
  ];
  return (
    <section className="gallery">
      <h1>BETTER BEATS BEST</h1>
      
      {/* Add a paragraph here */}
      <p>"At GOLD'S GYM, we believe in transforming lives through strength, resilience, and determination. Our goal is not just to help you reach your fitness targets, but to instill a mindset of continual growth. We’re here to empower you, to push you beyond limits, and to make fitness a way of life. It's not just about working out—it's about building a stronger, healthier, and more confident version of yourself."</p>
      
      <div className="images">
        <div>
          {gallery.slice(0, 3).map((element, index) => (
            <img key={index} src={element} alt="galleryImage" />
        
          ))}
        </div>
        <div>
          {gallery.slice(3, 6).map((element, index) => (
            <img key={index} src={element} alt="galleryImage" />
          ))}
        </div>
        <div>
          {gallery.slice(6, 9).map((element, index) => (
            <img key={index} src={element} alt="galleryImage" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
