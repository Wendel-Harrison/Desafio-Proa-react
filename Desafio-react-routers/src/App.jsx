
import Footer from "./components/Footer"
import Header from "./components/Header"
import Aruba from "./pages/Aruba"
import Home from "./pages/Home"

import { Route, Routes } from "react-router-dom"
import Canyon from "./pages/Canyon"
import China from "./pages/China"
import Escocia from "./pages/Escocia"

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/aruba" element={<Aruba/>} />
        <Route path="/canyon" element={<Canyon/>} />
        <Route path="/china" element={<China/>} />
        <Route path="/escocia" element={<Escocia/>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
