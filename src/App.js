import { useState, useEffect } from 'react';
import  MySwiper   from "./comps/slider"
function App() {
  const links = ["home", "about us", "products", "distributors", "gallery"]
  const images = [
    "https://el-hazyglittas.com/static/media/WEBBANNER1resised.2e485b2249e01df1a170.jpg",
    "https://images.pexels.com/photos/5938611/pexels-photo-5938611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/4121087/pexels-photo-4121087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

  ]
  const [currentImageIndex, setCurrentImageIndex] = useState(0);


  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [currentImageIndex, images.length]);


  return (
    <div className="flex flex-col w-full justify-start bg-[#ecf0f1] border-none">
      <nav className="w-full absolute nav bg-transparent text-white font-semibold flex justify-around py-4 items-center">
        <img src="https://el-hazyglittas.com/static/media/trademark.55948748ea1d451fbc4b.png" alt="logo" className="w-20 h-10" />
        <h1 className="text-2xl uppercase custom-font drop-shadow-sm font-bold hidden">El-glittas</h1>
        <ul className="absolute items-center hidden h-full w-full top-0 bg-white lg:bg-transparent lg:w-auto  lg:flex gap-4">
          {
            links.map((item) => {
              return (<li className="uppercase font-normal p-2 hover:bg-[#1abc9c] hover:text-[#f1f2f6] cursor-pointer rounded-md">{item}</li>)
            })
          }
        </ul>
        <button className='p-2 px-4 bg-[#1abc9c] text-white rounded-md'>Login</button>
      </nav>
      <div className="w-full h-screen py-10 flex items-center justify-center">
        <div className='absolute z-20 flex flex-col items-center gap-4 h-full'>
          <h1 className='uppercase text-3xl lg:text-6xl  m-auto text-slate-50 font-bold text-center'>All sorts of <span className='text-[#4aad9b]'>organic</span> <br />products <br /> </h1>
          <button className='shop-btn'>Start Shopping</button>
        </div>
         
        <div className="slide-container h-full w-full absolute z-0">

            <div
              className="slide"
              style={{ backgroundImage: "url(https://el-hazyglittas.com/static/media/WEBBANNER1resised.2e485b2249e01df1a170.jpg)" }}
            />
        </div>
      
        <marquee className="bg-black z-10 text-white flex items-center justify-between text-center absolute bottom-0" width="100%" direction="left" height="50px">
         <p className='inline-flex'> #1 BEST NATURAL HAIR PRODUCT MANUFACTURER </p>
         <p className='inline-flex  ml-[50%]'>...HIGH IN PLANT BASED PROTEIN, VITAMINS, MINERALS AND ANTI-OXIDANTS</p>
        </marquee>

      </div>
      <div className='w-full flex md:h-[90vh]  flex-col md:flex-row  gap-4 p-6 py-8'>
        <div className='h-screen md:h-full relative w-full md:w-[33%] rounded-md card bg-[url("https://el-hazyglittas.com/static/media/PAGEOUTLOOK-min.722be8a9e82f433f692d.png")]'>
          <div className='absolute bottom-4 p-4 flex flex-col gap-4 w-full items-center z-20'>
          <p className='text-slate-500 uppercase font-bold text-xl'>for long hair</p>
          <button className='p-2 w-[50%] bg-[#1abc9c] text-white rounded-md'>View Products</button>
          </div>
        </div>
        <div className='md:h-full relative w-full md:w-[33%] rounded-md card bg-[url("https://el-hazyglittas.com/static/media/IMAGE3-min.a6f7949cc7dae8903cb0.png")]'>
          <div className='absolute bottom-4 p-4 flex flex-col items-center gap-4 w-full'>
        
          <button className='p-2 bg-[#1abc9c] w-[50%] text-white rounded-md'>View Products</button>
          </div>
        </div>
        <div className='h-screen md:h-full relative w-full md:w-[33%] rounded-md card bg-[url("https://el-hazyglittas.com/static/media/IMAGE2-min.a5be82c79b28a797df08.png")]'>
          <div className='absolute bottom-4 p-4 flex flex-col gap-4 items-center w-full'>
          <p className='text-slate-200 uppercase font-bold text-xl'>kiddies friendly</p>
          <button className='p-2 w-[50%] bg-[#1abc9c] text-white rounded-md'>View Products</button>
          </div>
        </div>
      </div>
      <div className='w-full md:h-[75vh] flex flex-col md:flex-row gap-4 px-6 py-0'>
        <div className='h-screen md:h-full relative w-full md:w-[33%] rounded-md card bg-[url("https://el-hazyglittas.com/static/media/IMAGE4-min.4fa6544e3064eddfc925.png")]'>
          <div className='absolute bottom-4 p-4 flex flex-col gap-4 w-full items-center'>
          <p className='text-slate-900 uppercase font-bold text-xl'>for dark full beard</p>
          <button className='p-2 w-[50%] bg-[#1abc9c] text-white rounded-md'>View Products</button>
          </div>
        </div>
        <div className='h-screen md:h-full relative w-full md:w-[33%] rounded-md card bg-[url("https://el-hazyglittas.com/static/media/cc.86ff8692ee4951c63e58.png")]'>
          <div className='absolute bottom-4 p-4 flex flex-col items-center gap-4 w-full'>
          <p className='text-slate-900 uppercase font-bold text-xl'>hair growth combo</p>
          <button className='p-2 bg-[#1abc9c] w-[50%] text-white rounded-md'>View Products</button>
          </div>
        </div>
        <div className='h-screen md:h-full relative w-full md:w-[33%] rounded-md card bg-[url("https://el-hazyglittas.com/static/media/spp.4fa55434f65dfb9c09df.png")]'>
          <div className='absolute bottom-4 p-4 flex flex-col gap-4 items-center w-full'>
          <p className='text-slate-900 uppercase font-bold text-xl'>for radiant skin</p>
          <button className='p-2 w-[50%] bg-[#1abc9c] text-white rounded-md'>View Products</button>
          </div>
        </div>
      </div>
      <div className=" h-screen aspect-video p-8 rounded-md">
      <iframe className="rounded-md" width="100%" height="100%" src="https://www.youtube.com/embed/_KgouiRpzAU" title="Hair Wonder Products" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </div>
  <div className='h-[500px] px-6'>
      <MySwiper />
  </div>
  <div className='px-20 text-center flex flex-col gap-4 items-center'>
    <h1 className='uppercase text-4xl text-[#1abc9c] font-bold'>Our Story</h1>
    <p className='font-semibold text-slate-800'>Our Story is the Story of True Innovative Passsion…<br />
We are a certified result oriented entity, El-Hazy Glittas Limited.
A cosmetics manufacturing company registered in Nigeria, West African region. Over the years we have through thorough research, powered by scientific innovation, identified various hitches associated with healthy hair grooming and growth especially with women. These hair issues are majorly orchestrated by much use of hair products containing harmful synthetic ingredients. Proffering solutions to the ...</p>
<button className='p-2 w-[30%] md:w-[10%] bg-[#1abc9c] text-white rounded-md'>See More</button>
  </div>
  <footer className='m-auto w-full mt-4 bg-[#1abc9c] p-10 text-white flex items-center justify-center'>
          <ul className='w-full flex-col md:flex md:flex-row gap-10 md:gap-5 justify-between'>
            <li className='flex flex-col justify-between'>
              <h1 className='text-2xl font-bold'>News Letter</h1>
              <p>Subscribe to receive updates, access to exclusive deals, and more.</p>
              <form>
                <input className='p-3 rounded-md' type="text" placeholder='Enter your email address'/>
                <button className='p-2 bg-[#1abc9c] block text-white rounded-md uppercase'>Subscribe</button>
              </form>
            </li>
            <li>
              <h1 className='text-xl font-bold'>Learn More</h1>
              <h3>Become a Partner</h3>
              <ul className='text-sm'>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Gallery</li>
                <li>Distribution</li>
              </ul>
            </li>
            <li>
            <h1 className='text-xl font-bold'>Shop</h1>
              <ul className='text-sm'>
                <li>Shampoo</li>
                <li>Shealine</li>
                <li>Natural Oil</li>
                <li>Soap</li>
                <li>Easy Comb</li>
                <li>RICH DAILY MOISTURIZING</li>
              </ul>
            </li>
            <li>
              <h1 className='text-2xl font-bold'>About The Store</h1>
              <p>Availability at the shortest possible time to all hair-care consumer. Race, culture, time and season regardless.</p>
            </li>
          </ul>
  </footer>
    </div>
  );
}

export default App;
