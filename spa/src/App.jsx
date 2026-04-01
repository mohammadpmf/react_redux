import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

import HomePage from "./pages/HomePage"
import CoursesPage from "./pages/CoursesPage"
import AboutUsPage from "./pages/AboutUsPage"
import PageNotFound from "./pages/404"
import ProductsPage from "./pages/ProductsPage"
import ProductDetailsPage from "./pages/ProductDetailsPage"
import Programmers from "./pages/components/Programmers"

function App() {
  return (
    <>
      {/* <BrowserRouter> */}
      <Routes>
        <Route index element={<HomePage />} />
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/landing" element={<Navigate to="/" replace />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductDetailsPage />} />
        <Route path="/about-us" element={<AboutUsPage />}>
          <Route path="programmers" element={<Programmers />} />
          <Route path="users" element={<div>users</div>} />
        </Route>
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      {/* </BrowserRouter> */}
    </>
  )
}

export default App
