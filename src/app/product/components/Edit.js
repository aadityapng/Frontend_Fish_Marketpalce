import React, { useState } from "react";

const EditProductModal = ({ productId, onClose, onUpdate }) => {
  // State untuk menyimpan data produk yang akan diubah
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: 0,
    stock: 0,
    image: "",
  });

  // Fungsi untuk menangani perubahan pada input formulir
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Fungsi untuk menangani pengiriman formulir saat mengedit produk
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Mengirim data produk yang diubah ke server
      const response = await fetch(`http://localhost:8000/users/${productId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle kesuksesan, mungkin menampilkan pesan sukses atau menutup modal
        onClose(); // Menutup modal setelah mengedit produk
        onUpdate(); // Memperbarui daftar produk setelah mengedit produk
      } else {
        // Handle kesalahan, mungkin menampilkan pesan kesalahan
        console.error("Failed to edit product");
      }
    } catch (error) {
      console.error("Failed to edit product", error);
    }
  };

  return (
    <div className="flex justify-end mr-11 mt-20">
      <div className="fixed inset-0 z-50 overflow-y-auto bg-gray-900 bg-opacity-50 p-4 md:p-8">
        <div className="mx-auto max-w-2xl rounded-lg shadow-md bg-white">
          <div className="p-4 flex justify-between items-center border-b border-gray-200">
            <h3 className="font-bold text-lg">Edit Product</h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500 focus:outline-none"
            >Close</button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="p-4 space-y-2">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 p-2 border rounded-md w-full"
                />
              </div>
              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700"
                >Description</label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="mt-1 p-2 border rounded-md w-full"
                ></textarea>
              </div>
              <div>
                <label
                  htmlFor="price"
                  className="block text-sm font-medium text-gray-700"
                >Price</label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  className="mt-1 p-2 border rounded-md w-full"
                />
              </div>
              <div>
                <label
                  htmlFor="stock"
                  className="block text-sm font-medium text-gray-700"
                >Stock</label>
                <input
                  type="number"
                  id="stock"
                  name="stock"
                  value={formData.stock}
                  onChange={handleChange}
                  className="mt-1 p-2 border rounded-md w-full"
                />
              </div>
              <div>
                <label
                  htmlFor="image"
                  className="block text-sm font-medium text-gray-700"
                >Image URL</label>
                <input
                  type="text"
                  id="image"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  className="mt-1 p-2 border rounded-md w-full"
                />
              </div>
            </div>
            <div className="p-4 flex justify-end space-x-2">
              <button onClick={onClose} className="btn btn-outline">Cancel</button>
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProductModal;
