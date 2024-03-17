"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { MdOutlineDoubleArrow } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";

const Newproduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:8000/users?limit=8"); // ini nama nya Query String
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await response.json();
      // console.log(data); CEK DATA ADA ATAU TIDAK
      setProducts(data.data); // Set data produk ke state
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <h1 className="text-center text-2xl font-bold pt-14 pb-14">
        New Product
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products?.map((product, index) => (
          <div
            key={index}
            className="card w-full sm:w-auto bg-gray-100 shadow-2xl"
          >
            <figure>
              <img
                src={
                  product?.image ? `http://localhost:8000${product.image}` : ""
                }
                alt="Product"
                className="w-full"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {product.name}
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>{product.description}</p>
              <div className="flex justify-between items-center mt-4">
                <button className="btn btn-primary px-20">Buy</button>
                <button className="btn bg-green-500 text-white items-center">
                  <FaShoppingCart />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <Link href="/product">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-">
            <span className="flex items-center justify-center">
              View All Products
              <MdOutlineDoubleArrow className="ml-2" />
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Newproduct;
