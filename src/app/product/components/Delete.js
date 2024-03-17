const deleteProduct = async (productId) => {
  try {
    const response = await fetch(`http://localhost:8000/users/${productId}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Failed to delete product");
    }
    // Jika penghapusan berhasil, kembalikan true
    return true;
  } catch (error) {
    console.error("Error deleting product:", error);
    // Jika terjadi kesalahan, kembalikan false
    return false;
  }
};

export { deleteProduct }; // Export fungsi deleteProduct
