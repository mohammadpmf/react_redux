import React from 'react'
import NavBar from './components/Navbar'
import { useParams } from 'react-router-dom'

function ProductDetailsPage() {
    const { id } = useParams();
    return (
        <div>
            <NavBar />
            ProductDetailsPage - Product # {id}
        </div>
    )
}

export default ProductDetailsPage