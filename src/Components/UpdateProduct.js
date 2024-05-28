import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateProduct = () => {
   
    return (
        <div>
            <h2>Update Product</h2>
            <div>
                <input
                    type="text"
                    placeholder="Product Name"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Description"
                    value={productDescription}
                    onChange={(e) => setProductDescription(e.target.value)}
                />
            </div>
            <div>
                <button className='btn btn-success' onClick={handleUpdateProduct}>Update Product</button>
            </div>
        </div>
    );
};

export default UpdateProduct;
