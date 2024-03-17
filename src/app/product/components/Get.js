"use client";

import React, { useState, useEffect } from "react";
import { FaEdit, FaTrash, FaShoppingCart } from "react-icons/fa";
import { deleteProduct } from "./Delete";
import EditProductModal from "./Edit";

const AllProduct = () => {
  const [products, setProducts] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:8000/users");
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await response.json();
      setProducts(data.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleDelete = async (productId) => {
    const deleted = await deleteProduct(productId);
    if (deleted) {
      // Jika penghapusan berhasil, ambil kembali daftar produk
      fetchProducts();
    }
  };

  const handleUpdate = () => {
    // Memuat ulang daftar produk setelah edit
    fetchProducts();
    setIsModalOpen(false); // Tutup modal setelah produk diperbarui
  };

  return (
    <div className="mt-10 mb-32 mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products?.map((product, index) => (
          <div key={index} className="card bg-gray-100 shadow-2xl relative">
            <div className="absolute top-0 right-0 p-2">
              <button
                className="icon-button bg-blue-500 text-white rounded-full p-2"
                onClick={() => {
                  setSelectedProductId(product.id);
                  setIsModalOpen(true);
                }}
              >
                <FaEdit />
              </button>
              <button
                onClick={() => handleDelete(product.id)}
                className="icon-button bg-red-500 text-white rounded-full p-2 ml-2"
              >
                <FaTrash />
              </button>
            </div>
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
              <h2 className="card-title">{product ? product.name : null}</h2>
              <p>{product.description}</p>
              <p className="text-lg font-semibold mt-2">Rp. {product.price}</p>
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

      {/* Modal edit produk */}
      {isModalOpen && (
        <EditProductModal
          productId={selectedProductId}
          onClose={() => setIsModalOpen(false)}
          onUpdate={handleUpdate} // Mengirimkan prop onUpdate
        />
      )}
    </div>
  );
};

export default AllProduct;
