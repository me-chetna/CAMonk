import { Link } from "react-router";
import CreateBlog from "../components/create-blog";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <nav>
        <div className="flex p-2 bg-blue-800 text-black justify-between items-center fixed w-full top-0">
            <h1 className="italic bold text-white font-bold text-2xl">CAMonk</h1>
            <ul className="flex gap-8 text-white">
                <li className = " hover:text-white hover:bg-blue-400 rounded-full p-2 cursor-pointer hover:border-1 hover:border-white"><Link to="/home">Home</Link></li>
                <li className = " hover:text-white hover:bg-blue-400 rounded-full p-2 cursor-pointer hover:border-1 hover:border-white"><Link to="/services">Services</Link></li>
                <li className = " hover:text-white hover:bg-blue-400 rounded-full p-2 cursor-pointer hover:border-1 hover:border-white"><Link to="/about">About Us</Link></li>
                <li className = " hover:text-white hover:bg-blue-400 rounded-full p-2 cursor-pointer hover:border-1 hover:border-white"><Link to="/contact">Contact Us</Link></li>
            </ul>
            <button
            onClick={() => setOpen(true)}
            className="border-2 border-blue-100 bg-blue-800 text-white rounded-full px-4 py-2 hover:bg-blue-400"
          >
            Create Blog
          </button>
        </div>
        <hr/>
        <CreateBlog open={open} onClose={() => setOpen(false)} />
    </nav>
  )
}
