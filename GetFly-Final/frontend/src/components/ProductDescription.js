import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../Data';
import './ProductDescription.css';


const ProductDescription = () => {
    const { id } = useParams();

    // Find the product with the matching ID
    const product = products.data.find((product) => product.id === parseInt(id));

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        // <div className="product-description">
        //     <h1 className="product-name">{product.productName}</h1>
        //     <img src={product.image} alt={product.productName} />
        //     <p className="product-description-text">{product.description}</p>
        //     <p>Category: {product.category}</p>
        //     <p className="product-price">Price: ${product.price}</p>
        // </div>

        <div className="product-description">
            <div className="product-image">
                <img src={product.img} alt={product.Name} />
            </div>
            <div className="product-details">
                <h1 className="product-name">{product.Name}</h1>
                <p className="product-description-text">
                    {product.desc}
                </p>
                {/* <div className="product-colors">
         <h3>Available Colors:</h3>
         <ul>
           <li>Red</li>
           <li>Blue</li>
           <li>Green</li>
         </ul>
       </div> */}
                {/* <div className="product-rating">
         <h3>Customer Reviews:</h3>
         <div className="star-rating">
           You can use a rating component or custom CSS to display star rating
         </div>
       </div> */}
                <div className="product-price">
                    <h2>{product.price}</h2>
                </div>
                <div className="product-actions">
                    <button className="add-to-cart-btn" to="/cart">Add to Cart</button>

                </div>
            </div>
        </div>

    );
};

export default ProductDescription;
