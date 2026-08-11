import { Routes, Route} from 'react-router-dom'
import Navbar from './Components/Layouts/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Signup from './Pages/Signup'
import Cart from './Pages/Cart'
import Wishlist from './Pages/Wishlist'
import Announcement from './Components/Layouts/Announcement'
import Notfound from "./Pages/Notfound"

function App() {
  return (
    <>
      <Announcement />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/notfound" element={<Notfound/>}/>
      </Routes>
    </>
  )
}

export default App