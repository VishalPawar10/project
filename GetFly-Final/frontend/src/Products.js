import React,{useEffect, useState} from 'react'
import Filters from './components/Filters';
import { useNavigate } from 'react-router-dom';
import "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
import products from './Data';
import './components/style.css';
import ProductCard from './components/ProductCard';
import Navbar from './components/navbar';
import axios from 'axios';


const Products = () => {
    const navigate = useNavigate();
    const [show, setShow] = useState(true);
    const [cart, setCart] = useState([]);
    const [allProducts, setAllProducts] = useState(products)

    useEffect(() => {
        const fetchProducts = async () => {
            const {data: {data}} = await axios.get("http://localhost:8081/products")
            console.log(data, "axios")
            setAllProducts(data)
        }
        fetchProducts()
    }, [])

    return (
        <>
<Navbar setShow={setShow} size={cart.length} />

            <div className='prod'>
                <Filters />
                <div className=' product-container'>
                    <div className='products-wrapper row row-cols-md-3 g-2  '>

                        {allProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}

                    </div>
                </div>
            </div>



        </>)
}
export default Products;