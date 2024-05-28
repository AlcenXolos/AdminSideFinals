import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ButtonComponent from './ButtonComponent';

const AddProduct = () => {
    
    return (
        <div>
            <div>
                <h2>Add Product</h2>
            </div>
            <div>
                <input
                    type="text"
                    placeholder="Product Name"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)} 
                />
                <input
                    type="Number"
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)} 
                />
                <input
                    type="Text"
                    placeholder="Description"
                    value={productDescription}
                    onChange={(e) => setProductDescription(e.target.value)}
                />
            </div>
            <div>
               <button className='btn btn-success' onClick={handleAddProduct}>Add Product</button>
            </div>
        </div>
    );
};

export default AddProduct;
