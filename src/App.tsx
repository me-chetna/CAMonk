import Navbar from "./components/navbar"
import BelowNav from "./components/below-nav"
import "./index.css"
import Leftpannel from "./components/left-pannel"
import { Navigate, Route, Routes } from "react-router"
import SplashScreen from "./components/splash-loader"
import { useState, useEffect } from "react"

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)

  return () => clearTimeout(timer)
}, [])
if (loading) {
    return <SplashScreen />
  }

  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />

      <Route path="/home" element={
          <>
            <BelowNav />
          </>
        } />

        <Route path="*" element={<div className="text-2xl text-blue-900 mt-30 text-center">This Page will be soon available...</div>} />
      </Routes>
    </>
  )
}


export default App
