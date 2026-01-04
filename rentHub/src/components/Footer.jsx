import { Link } from "react-router-dom";

import youtube from "../assets/icons/youtube.svg";
import facebook from "../assets/icons/facebook.svg";
import instagram from "../assets/icons/instagram.svg";
import tiktok from "../assets/icons/tiktok.svg";
import x from "../assets/icons/x.svg";

export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-200 mt-auto">
            <div className="max-w-7xl mx-auto px-6 py-8">

                {/* Social Media Section */}
                <div className="flex justify-center items-center gap-6 mb-6">
                    <a href="#" className="text-gray-500 hover:text-gray-700 transition-colors">
                        <img src={youtube} alt="YouTube" className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-gray-500 hover:text-gray-700 transition-colors">
                        <img src={facebook} alt="Facebook" className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-gray-500 hover:text-gray-700 transition-colors">
                        <img src={instagram} alt="Instagram" className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-gray-500 hover:text-gray-700 transition-colors">
                        <img src={tiktok} alt="TikTok" className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-gray-500 hover:text-gray-700 transition-colors">
                        <img src={x} alt="X" className="w-5 h-5" />
                    </a>
                </div>

                {/* Navigation Links */}
                <nav className="mb-6">
                    <ul className="flex flex-wrap justify-center items-center gap-2 text-sm">
                        <li>
                            <Link
                                to="#"
                                className="text-gray-600 hover:text-gray-900 transition-colors px-2"
                            >
                                Site Map
                            </Link>
                        </li>
                        <li className="text-gray-300">•</li>
                        <li>
                            <Link
                                to="#"
                                className="text-gray-600 hover:text-gray-900 transition-colors px-2"
                            >
                                Help
                            </Link>
                        </li>
                        <li className="text-gray-300">•</li>
                        <li>
                            <Link
                                to="#"
                                className="text-gray-600 hover:text-gray-900 transition-colors px-2"
                            >
                                Privacy Policy
                            </Link>
                        </li>
                    </ul>
                </nav>

                {/* Copyright Section */}
                <div className="text-center text-xs text-gray-500 leading-relaxed">
                    <p className="mb-1">
                        © 2025 RentHub Group Limited. All rights reserved.
                    </p>
                    <p>
                        Scraping of content is prohibited. More details{" "}
                        <Link
                            to="#"
                            className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                        >
                            here
                        </Link>.
                    </p>
                </div>
            </div>
        </footer>
    );
}