import React, { useState } from "react";

export const AddPrPage = ({ onSendMessage2 }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isConfirmed, setIsConfirmed] = useState(null); // State for showing the alert
  const [productName, setProductName] = useState(""); // State for product name
  const [productPrice, setProductPrice] = useState(""); // State for product price
  const [category, setCategory] = useState(""); // State for category
  const [status, setStatus] = useState(""); // State for status
  
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const handleCloseAction = () => {
    onSendMessage2({ type: 'close', value: 'false' }); // Send close action
};

const handleConfirm = () => {
    if (
        selectedImage &&
        productName &&
        !isNumeric(productName) &&
        productPrice &&
        isNumeric(productPrice) &&
        category &&
        status
    ) {
        const params = {
            type: 'confirm', // Type identifier
            data: {
                id: Date.now(),
                image: selectedImage,
                name: productName,
                price: productPrice,
                category: category,
                status: status,
            },
        };
        
        onSendMessage2(params); // Send params to parent
        setIsConfirmed(true);
        handleCloseAction();
        resetForm();
    } else {
        setIsConfirmed(false);
    }

    setTimeout(() => {
        setIsConfirmed(null);
    }, 2500);
};


  const isNumeric = (value) => !isNaN(parseFloat(value)) && isFinite(value);

  

  const resetForm = () => {
    setProductName("");
    setProductPrice("");
    setCategory("");
    setStatus("");
    setSelectedImage(null);
  };

  return (
    <div className="w-11/12 h-5/6 rounded-xl ml-12 mt-5 select-none gap-4 pr-4 flex justify-start items-center">
      {isConfirmed === true && (
        <div role="alert" className="alert alert-success w-2/3 mt-4 fixed top-0 left-72 z-50">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>The product has been added successfully</span>
        </div>
      )}
      {isConfirmed === false && (
        <div role="alert" className="alert alert-warning w-2/3 mt-4 fixed top-0 left-72 z-50">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <span>Missing or Invalid parameters!</span>
        </div>
      )}
      <div className="flex flex-col gap-4 items-center justify-center w-1/3 h-full">
        <input
          id="fileInput"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          style={{ display: "none" }}
        />
        {selectedImage && (
          <img
            src={selectedImage}
            className="w-full h-2/3 object-cover border-2 border-slate-300 rounded-2xl"
            alt="Product Preview"
          />
        )}

        <label htmlFor="fileInput" className="btn btn-active btn-primary">
          Choose Image
        </label>
      </div>
      <div className="divider lg:divider-horizontal"></div>
      <div className="flex flex-col gap-8 justify-center items-center p-14 w-2/3 h-full">
        <div className="flex justify-around gap-4 items-center w-full ">
          <input
            type="text"
            placeholder="Product Name"
            className="input input-bordered input-primary w-full max-w-xs"
            value={productName}
            onChange={(e) => setProductName(e.target.value)} // Update product name
          />
          <input
            type="text"
            placeholder="Product Price"
            className="input input-bordered input-primary w-full max-w-xs"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)} // Update product price
          />
        </div>
        <div className="flex justify-around gap-4 items-center w-full ">
          <select
            className="select select-primary w-full max-w-xs"
            value={category}
            onChange={(e) => setCategory(e.target.value)} // Update category
          >
            <option disabled value="">Category</option>
            <option>Mens</option>
            <option>Women</option>
            <option>Kids</option>
          </select>
          <select
            className="select select-primary w-full max-w-xs cursor-pointer"
            value={status}
            onChange={(e) => setStatus(e.target.value)} // Update status
          >
            <option disabled value="">Status</option>
            <option>In Stock</option>
            <option>Out of Stock</option>
            <option>Discontinued</option>
            <option>Coming Soon</option>
            <option>Limited Stock</option>
            <option>Draft</option>
          </select>
        </div>
        <div className="flex justify-around gap-4 items-center w-full">
          <button className="btn btn-active btn-primary" onClick={handleConfirm}>
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};
