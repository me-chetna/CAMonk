import Navbar from "./components/navbar"
import BelowNav from "./components/below-nav"
import "./index.css"
import Leftpannel from "./components/left-pannel"
import { Navigate, Route, Routes } from "react-router"


function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />

      <Route path="/home" element={
          <>
            <BelowNav />
            <Leftpannel />
          </>
        } />

        <Route path="*" element={<div className="text-2xl text-blue-900 mt-30 text-center">Page Not Found</div>} />
      </Routes>
    </>
  )
}


export default App
