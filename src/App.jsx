import React from "react";
import Button from "./components/Button";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ImageGallary from "./components/ImageGallary/ImageGallary";
import Blogs from "./components/Blogs/ Blogs";
import Hero from "./components/Hero/Hero";
import Faq from "./components/Faq/Faq";
import Hero2 from "./components/Hero2/Hero2";
import CoutDown from "./components/CountDown/CoutDown";

const App = () => {
  return (
   <div>
     <section
      className="h-screen bg-Hero bg-cover
      font-[Poppins] md:bg-top bg-center"
    >
      <Navbar />
      <div className="flex flex-col justify-center text-center items-center h-3/4">
        <h2 className="text-white text-4xl font-bold  hover:text-blue-500 ">GET ON THE RIGHT WAY</h2>
        <h1 className="md:text-5xl text-3xl text-white font-semibold py-5">
        Boosting Relations &Loyalty, Anytime
        </h1>
        <div className="text-xl">
          <Button />
        </div>
      </div>

      
    </section>
    <CoutDown/>
     <Hero/>
    
     <Hero2/>
     <ImageGallary/>

     <Blogs/>
     <Faq/>
    <Footer/>
   </div>
  );
};

export default App;
