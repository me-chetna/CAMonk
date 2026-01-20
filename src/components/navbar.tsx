import { Link } from "react-router";
import CreateBlog from "../components/create-blog";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <nav>
        <div className="flex p-2 bg-blue-100 text-black justify-between items-center fixed w-full top-0">
            <h1 className="italic bold text-blue-800 font-bold text-2xl">CAMonk</h1>
            <ul className="flex gap-8">
                <li className = " hover:text-white hover:bg-blue-800 rounded-full p-2 active:text-white active:bg-blue-800 cursor-pointer"><Link to="/home">Home</Link></li>
                <li className = " hover:text-white hover:bg-blue-800 rounded-full p-2 active:text-white active:bg-blue-800 cursor-pointer"><Link to="/services">Services</Link></li>
                <li className = " hover:text-white hover:bg-blue-800 rounded-full p-2 active:text-white active:bg-blue-800 cursor-pointer"><Link to="/about">About Us</Link></li>
                <li className = " hover:text-white hover:bg-blue-800 rounded-full p-2 active:text-white active:bg-blue-800 cursor-pointer"><Link to="/contact">Contact Us</Link></li>
            </ul>
            <button
            onClick={() => setOpen(true)}
            className="border-2 border-blue-500 bg-blue-500 text-white rounded-full px-4 py-2 hover:bg-blue-700"
          >
            Create Blog
          </button>
        </div>
        <CreateBlog open={open} onClose={() => setOpen(false)} />
    </nav>
  )
}
