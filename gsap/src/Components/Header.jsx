import React from 'react'
import { Navigate } from 'react-router-dom'
import Gallery from './Gallery/Gallery'

function Header() {
    
    return (
        <>
            <nav className="bg-gradient-to-r from-gray-900 via-gray-800 to-black p-4 flex justify-between items-center"> 
                <div className="text-white text-lg font-bold">
                    Bhupen
                </div>
                <ul className="flex space-x-4 mt-2">
                    <li><a href="#" className="text-gray-300 hover:text-white">Home</a></li>
                    <li><a href="#" className="text-gray-300 hover:text-white">About</a></li>
                    <li><a href="/gallery" className="text-gray-300 hover:text-white">Gallery</a></li>
                    <li><a href="#" className="bg-slate-400 w-8 h-6 pl-3 pr-3 pt-2 pb-2 rounded-md text-gray-300 hover:text-white">Login</a></li>
                    <li><a href="#" className="bg-slate-600 w-8 h-6 pl-3 pr-3 pt-2 pb-2 rounded-md text-gray-300 hover:text-white"> Register </a></li>
                </ul>
            </nav>
        </>
    )
}

export default Header