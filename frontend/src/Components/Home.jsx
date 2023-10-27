import { useDispatch } from "react-redux";

import{useGetAllProductsQuery} from "../features/productAPI";
import { addtocart } from "../features/cartSlice";

const Home = () => {
    const {data, error, isLoading}= useGetAllProductsQuery();
    const dispatch = useDispatch();

    const handleAddtocart = (product) =>{
        dispatch(addtocart(product));
    };

    return <div className="home_container">
        { isLoading ? (
        <p>Loading...</p> 
        ): error ? (
        <p>An error...</p> 
        ):(
            <>
            <h2>Our Products</h2>
            <div className="products">
                {data?.map(product => <div key={product.id} className="product">
                    <h3>{product.name}</h3>
                    <img src={product.image} alt={product.name} />
                    <div className="details">
                        <span>₱{product.price}</span>
                    </div>
                    <button onClick={() => handleAddtocart(product)}>Add to Cart</button>
                </div>)}
            </div>
            </> 
    )}
    </div>
};
 
export default Home;