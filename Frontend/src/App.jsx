import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import Contact from "./Pages/Contact"
import Home from "./Pages/Home"
import ScroolToTop from "./Components/ScroolToTop"
import { Suspense, useRef } from "react"
import CategorySidebar from "./Components/CategorySidebar"
import CategoryProducts from "./Pages/CategoryProducts"
import SubCategoryProducts from "./Pages/SubCategoryProducts"

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>} >

        <Router>
          <Navbar />
          {/* <CategorySidebar /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contacts" element={<Contact />} />
            <Route path="/:id" element={<CategoryProducts />} />
            <Route path="/:id/:id" element={<SubCategoryProducts />} />
          </Routes>
          <ScroolToTop />
          <Footer />
        </Router>
      </Suspense>
    </>
  )
}

export default App
