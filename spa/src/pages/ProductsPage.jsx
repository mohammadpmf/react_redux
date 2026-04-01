import { Link, useNavigate, useSearchParams } from "react-router-dom"
import NavBar from "./components/Navbar"

const products = [
    { id: 1, name: "Product 1" },
    { id: 2, name: "Product 2" },
    { id: 3, name: "Product 3" },
    { id: 4, name: "Product 4" },
]


function ProductsPage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();
    const sortBy = searchParams.get("sortBy");
    const order = searchParams.get("order");

    const sortHandler = () => {
        setSearchParams({order: "asc", sortBy:"sale"});
    }

    const homeHandler = () => {
        // navigate(-1) // برای رفتن به صفحه قبل (انگار دکمه بک زده شده)
        // navigate(1) // برای رفتن به صفحه بعد (انگار اون یکی دکمه کنار بک که مثل ریدو عمل میکنه زده شده)
        navigate("/")
    }

    return (
        <div>
            <NavBar />
            <button onClick={sortHandler}>sort</button>
            <ul>
                {products.map((product) =>
                    <li key={product.id}>
                        <Link to={`/products/${product.id}`}>{product.name}</Link>
                    </li>)}
            </ul>
            <button onClick={homeHandler}>Go Home</button>
        </div>
    )
}

export default ProductsPage