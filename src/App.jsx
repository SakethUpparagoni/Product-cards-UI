import { useState } from 'react'
import './App.css'

export default function App() {
  const [count, setCount] = useState(0)
  const products = [
    {
      id: 1,
      name: "iPhone 15",
      price: 79999,
      description: "Apple smartphone with A16 Bionic chip and advanced camera.",
    },
    {
      id: 2,
      name: "Samsung Galaxy S24",
      price: 74999,
      description: "Flagship Samsung phone with AMOLED display and AI features.",
    },
    {
      id: 3,
      name: "MacBook Air M3",
      price: 119999,
      description: "Lightweight Apple laptop powered by M3 chip.",
    },
    {
      id: 4,
      name: "Dell XPS 13",
      price: 99999,
      description: "Premium ultrabook with InfinityEdge display.",

    },
    {
      id: 5,
      name: "Sony WH-1000XM5",
      price: 29999,
      description: "Noise-cancelling wireless headphones with rich sound.",

    },
    {
      id: 6,
      name: "Apple Watch Series 9",
      price: 45999,
      description: "Smartwatch with health tracking and fitness features.",

    },
    {
      id: 7,
      name: "iPad Air",
      price: 59999,
      description: "Powerful tablet with Liquid Retina display.",

    },
    {
      id: 8,
      name: "Canon EOS R50",
      price: 68999,
      description: "Mirrorless camera ideal for photography and vlogging.",

    },
    {
      id: 9,
      name: "Logitech MX Master 3S",
      price: 9999,
      description: "Advanced wireless productivity mouse.",

    },
    {
      id: 10,
      name: "Mechanical Keyboard",
      price: 5499,
      description: "RGB mechanical keyboard with blue switches.",

    },
    {
      id: 11,
      name: "ASUS ROG Laptop",
      price: 135000,
      description: "Gaming laptop with RTX graphics and high refresh display.",

    },
    {
      id: 12,
      name: "Boat Rockerz 450",
      price: 1999,
      description: "Affordable wireless headphones with deep bass.",

    },
    {
      id: 13,
      name: "OnePlus 12",
      price: 64999,
      description: "High-performance smartphone with fast charging.",

    },
    {
      id: 14,
      name: "HP Pavilion",
      price: 72999,
      description: "Versatile laptop suitable for students and professionals.",

    },
    {
      id: 15,
      name: "Amazon Echo Dot",
      price: 4499,
      description: "Smart speaker with Alexa voice assistant.",

    },
    {
      id: 16,
      name: "Mi Smart TV 5A",
      price: 24999,
      description: "43-inch Full HD smart television with Android TV.",

    },
    {
      id: 17,
      name: "JBL Flip 6",
      price: 8999,
      description: "Portable Bluetooth speaker with powerful sound.",

    },
    {
      id: 18,
      name: "Nike Air Max",
      price: 12999,
      description: "Comfortable and stylish running shoes.",

    },
    {
      id: 19,
      name: "Puma Hoodie",
      price: 2999,
      description: "Warm and trendy hoodie for casual wear.",

    },
    {
      id: 20,
      name: "Samsung 1.5 Ton AC",
      price: 38999,
      description: "Energy-efficient inverter air conditioner.",

    }
  ];

 return (
  <div className="min-h-screen bg-gray-100 p-8">

    <h1 className="text-4xl font-bold text-center mb-10">
      Product Store
    </h1>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

      {products.map((product) => (

        <div
          key={product.id}
          className="
            bg-white
            rounded-3xl
            overflow-hidden
            shadow-md
            hover:shadow-2xl
            hover:-translate-y-2
            transition-all
            duration-300
            p-5
            flex
            flex-col
          "
        >

          {/* IMAGE */}
          <div className="h-52 flex items-center justify-center bg-gray-50 rounded-2xl mb-4">
            <img
              src={`/images/${product.name}.png`}
              alt={product.name}
              className="
                h-44
                object-contain
                transition-transform
                duration-300
                hover:scale-105
              "
            />
          </div>

          {/* CONTENT */}
          <div className="flex flex-col grow">

            <h2 className="text-xl font-bold text-gray-800 mb-2">
              {product.name}
            </h2>

            <p className="text-gray-600 text-sm mb-4 grow">
              {product.description}
            </p>

            <div className="flex items-center justify-between mt-auto">

              <p className="text-2xl font-bold text-blue-600">
                ₹{product.price}
              </p>

              <button
                className="
                  bg-black
                  text-white
                  px-4
                  py-2
                  rounded-xl
                  hover:bg-gray-800
                  transition
                "
              >
                Buy
              </button>

            </div>

          </div>

        </div>

      ))}

    </div>

  </div>
)
}
