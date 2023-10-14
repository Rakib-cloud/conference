import React from 'react'
import Design01 from './Design01';

const ImageGallary = () => {
    const images = [
        // Add the URLs of your images here
        'https://icisn.com/wp-content/gallery/gallery/thumbs/thumbs_img1.jpg',
        'https://icisn.com/wp-content/gallery/gallery/thumbs/thumbs_img3.jpg',
        'https://icisn.com/wp-content/gallery/gallery/thumbs/thumbs_img4.jpg',
        'https://icisn.com/wp-content/gallery/gallery/thumbs/thumbs_img2.jpg',
        'https://icisn.com/wp-content/gallery/gallery/thumbs/thumbs_img6.jpg',
        'https://icisn.com/wp-content/gallery/gallery/thumbs/thumbs_img5.jpg',
        'https://icisn.com/wp-content/gallery/gallery/thumbs/thumbs_img1.jpg',
        'https://icisn.com/wp-content/gallery/gallery/thumbs/thumbs_img1.jpg',
      ];
  return (
  <div className='container mx-auto mt-3'>
    <div>
        <h4 className='flex items-center justify-center  text-2xl font-bold  text-[#6ec1e4]'>Our Keynotes Speakers</h4>
        <h4 className='flex items-center justify-center  text-5xl font-bold  text-[#6ec1e4]'>CO-ORGANIGER</h4>
    </div>
    <div className='flex items-center justify-center'>
    <img
            src='https://icdret.uiu.ac.bd/wp-content/uploads/2023/08/ICDRET-2024-Co-organizer-768x68.jpg'
            alt='alt'
            className="w-full h-full object-cover"
          />
    </div>
    <section className="pb-8">
      <div className="max-w-[400px] mx-auto relative text-center">
        <Design01/>
        <h2 className="text-lg lg:text-3xl font-bold roboto text-[#6ec1e4] ">
        Images Gallary
        </h2>
        <h2 className="text-lg lg:text-3xl font-bold roboto text-[#6ec1e4] ">
         Meet Up 2023
        </h2>
       
      </div>
    </section>
      <div className="grid lg:grid-cols-4 grid-cols-2 md:grid-cols-3  gap-4 mt-2">
      {images.map((image, index) => (
        <div key={index} className="">
          <img
            src={image}
            alt={`Image ${index + 1}`}
            className="w-full h-full object-cover"
          />
         
        </div>
      ))}
    </div>
  </div>
  )
}

export default ImageGallary