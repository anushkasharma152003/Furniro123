"use client";
import { productDetails, shopproducts } from "@/Data/index";
import { useState } from "react";
import { Star, Plus, Minus, Facebook, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";

const ShopHero = ({ product , product1}) => {
  const [selectedSize, setSelectedSize] = useState("L");
  const [selectedColor, setSelectedColor] = useState("purple");
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState(0);


  const [activeTab, setActiveTab] = useState('description');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };


  
  

  const sizes = [
    { label: 'L', value: 'L' },
    { label: 'XL', value: 'XL' },
    { label: 'XS', value: 'XS' }
  ];

  const colors = [
    { label: 'Purple', value: 'purple', class: 'bg-purple-500' },
    { label: 'Black', value: 'black', class: 'bg-black' },
    { label: 'Gold', value: 'gold', class: 'bg-yellow-600' }
  ];

  const productImages = product.image; // Assuming `product.image` is an

  return (

  <section className="lg:w-screen sm:w-[1024px] md:w-[1124px]  w-[960px]  ">

<div className="   ">
      <div className="flex   lg:gap-8 md:gap-6 sm:gap-4 gap-2 mt-[35px]">
        {/* Product Images Section */}
        <div className="space-y-4 flex flex-row-reverse gap-[31px]">
          <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden lg:w-[423px] lg:h-[500px] sm:w-[320px] sm:h-[390px] h-[300px] w-[200px]">
            <Image
              src={product.image[0]}
              alt="Product view"
              className="w-full h-full object-cover"
              height={500}
              width={500}
            />
          </div>
          <div className="flex  flex-col gap-[31px] lg:h-[416px] sm:h-[350px] h-[280px] w-[76px] lg:ml-[99px] sm:ml-[40px]  ">
            {productImages.map((img, index) => (
              <button
                key={index}
                onClick={() => setMainImage(index)}
                className={`aspect-square bg-gray-100 rounded-lg overflow-hidden ${
                  mainImage === index ? "ring-2 ring-black" : ""
                }`}
              >
                <Image
                  src={product.image[0]}
                  alt={`Product view ${index + 1}`}
                  className="w-full h-full object-cover"
                  width={200}
                  height={200}
                />
              </button>

            ))}
          </div>
        </div>

        {/* Product Details Section */}
        <div className="space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold">{product.name} </h1>
          <div className="text-2xl md:text-3xl text-gray-700">
            {product.price}
          </div>

          {/* Rating */}
          <div className="flex items-center space-x-2">
            <div className="flex">
              {[...Array(product.reviews)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-yellow-400 text-yellow-400"
                />
              ))}
              {[...Array(5 - product.reviews)].map((product, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 text-gray-300"
                  strokeWidth={1}
                />
              ))}
            </div>
            <span className="text-gray-500">
              ({product.reviews} Customer Reviews)
            </span>
          </div>

          <p className="text-gray-600 ">{product.description}</p>

          {/* Size Selection */}
          <div className="space-y-2">
            <label className="block text-[#9F9F9F]">Size</label>
            <div className="flex space-x-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-12 h-12 flex items-center justify-center rounded border ${
                    selectedSize === size
                      ? " rounded-[5px] font-normal text-[13px] bg-[#B88E2F] text-white"
                      : "bg-[#F9F1E7] text-[13px]"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="flex space-x-2 flex-col gap-[12px]  ">
          <label className="block text-[#9F9F9F] mt-[18px]">Color</label>
           
           <div className="flex gap-[16px] -ml-[22px] mb-[32px]">
           {colors.map((color) => (
            <button
            key={color.value}
            onClick={() => setSelectedColor(color.value)}
             className={`w-[30px] h-[30px] flex items-center justify-center rounded-full border ${
              selectedColor === color.value
               ? "rounded-[5px] font-normal text-[13px] bg-[#B88E2F] text-white"
               : "bg-[#F9F1E7] text-[13px]"
               } ${color.class}`}
              >
            
            </button>
              ))}
              </div>

             </div>

           
            
           

          {/* Quantity and Add to Cart */}
          <div className=" flex flex-row  space-x-4 ">
            <div className="flex items-center border border-gray-300 rounded-[10px] font-medium text-base py-[20px] ">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-2"
                aria-label="Decrease quantity"
              >
                <Minus className="w-5 h-5" />
              </button>
              <span className="w-12 text-center">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="p-2"
                aria-label="Increase quantity"
              >
                <Plus className="w-5 h-5" />
              </button>
            </div>
            <button className="flex-1 text-black  text-xl font-normal rounded-[15px] border-[1px] px-[48px] border-black">
              Add To Cart
            </button>
            <button className="border-black border-[1px] font-normal text-xl lg:px-[46px] px-[20px] rounded-[15px] hover:bg-gray-50 ">
              + Compare
            </button>
          </div>
          

          {/* Product Info */}
          <div className="space-y-2 pt-6 mt-[60px] text-base font-normal border-t ">
            <div className="flex">
              <span className="w-24 text-gray-500">SKU</span>
              <span>: </span>
            </div>

            <div className="flex">
              <span className="w-24 text-gray-500">Category</span>
              <span>: </span>
            </div>
            
            <div className="flex">
              <span className="w-24 text-gray-500">Tags</span>
              <span>: </span>
            </div>


            <div className="flex items-center">
              <span className="w-24 text-gray-500">Share</span>
              <span className="flex space-x-2">
                <button className="p-2 hover:text-blue-600">
                  <Facebook className="w-5 h-5" />
                </button>
                <button className="p-2 hover:text-blue-600">
                  <Linkedin className="w-5 h-5" />
                </button>
                <button className="p-2 hover:text-blue-600">
                  <Twitter className="w-5 h-5" />
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="flex flex-col-reverse mt-[48px] pt-[48px] pb-[66px] text-[#9F9F9F] border-y-2 ml-[66px] items-center justify-center gap-[52px] md:space-y-0 md:space-x-8 ">
      <div className="lg:w-full sm:w-3/4 w-[1000px] md:w-3/4  lg:pl-[20px] md:pl-[100px] sm:pl-[150px] pl-[100px] ">
      <Image
              src={product1.img1}
              alt="Product view"
              className="  w-[800px] object-cover sm:w-3/4 lg:w-screen  -ml-[50px]"
              height={400}
              width={1000}
            />
      </div>
      <div className="w-3/4 lg:px-[70px] sm:px-[30px]   mx-[28px] bg-slate-00 space-y-4">
        <h2 className="text-2xl font-bold"></h2>
        <div className="flex space-x-4 lg:pl-[108px] sm:pl-[50px] pl-[40px] mb-4">
          <button
            className={`px-4 py-2 rounded-lg border-none   ${
              activeTab === 'description'
                ? ' text-black'
                : ' text-[#9F9F9F]'
            }`}
            onClick={() => handleTabClick('description')}
          >
            Description
          </button>
          <button
            className={`px-4 py-2 rounded-lg ${
              activeTab === 'additional'
               ? ' text-black'
                : 'text-[#9F9F9F]'
            }`}
            onClick={() => handleTabClick('additional')}
          >
            Additional Information
          </button>
          <button
            className={`px-4 py-2 rounded-lg ${
              activeTab === 'reviews'
                ? ' text-black'
                : ' text-gray-600 hover:text-gray-300'
            }`}
            onClick={() => handleTabClick('reviews')}
          >
            Reviews (5)
          </button>
        </div >
        {activeTab === 'description' && (
          <p className="-ml-[100px]">
           {product1.description}
           {product1.description}
          </p>
          
        )}
        {activeTab === 'additional' && (
          <p>
            {product1.add}
          </p>
        )}
        {activeTab === 'reviews' && (
          <div>
            <h3 className="text-lg font-bold">Reviews [5]</h3>
            <p>  {product1.description}</p>
            {/* Placeholder for reviews */}
          </div>
        )}
       
      </div>
    </div>


       
      



  </section>
 
  );
};

export default ShopHero;
