import { Link } from "react-router-dom";

import youtube from "../assets/icons/youtube.svg";
import facebook from "../assets/icons/facebook.svg";
import instagram from "../assets/icons/instagram.svg";
import tiktok from "../assets/icons/tiktok.svg";
import x from "../assets/icons/x.svg";

export default function Footer() {
  return (
      <footer className="bg-gray-50 border-t py-6 mt-8">
        <div className="max-w-7xl mx-auto px-4 text-center">

          {/* Social Icons */}
          <div className="flex justify-center gap-4 mb-4">
            <img src={youtube} alt="YouTube" className="w-6 h-6" />
            <img src={facebook} alt="Facebook" className="w-6 h-6" />
            <img src={instagram} alt="Instagram" className="w-6 h-6" />
            <img src={tiktok} alt="TikTok" className="w-6 h-6" />
            <img src={x} alt="X" className="w-6 h-6" />
          </div>

          {/* Footer Links */}
          <ul className="flex justify-center gap-3 text-sm text-gray-600">
            <li><Link to="/sitemap">Site Map</Link></li>
            <li>|</li>
            <li><Link to="/help">Help</Link></li>
            <li>|</li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
          </ul>

        </div>
        {/* Copyright */}
        <p className="text-center text-gray-500 text-sm">
          © 2025 Rightmove Group Limited. All rights reserved. <br />
          Scraping of content is prohibited. More details <Link to="/policy" className="text-indigo-600 hover:underline">here</Link>.
        </p>
      </footer>
  );
}
