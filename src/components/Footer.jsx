import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Brand Section */}
        <div>
          <h3 className="text-2xl font-bold mb-4">ManikaMehndi<span className="text-green-500">Art</span></h3>
          <p className="text-gray-400">
            Celebrating the beauty of Mehndi through intricate designs and creative artistry.
          </p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:underline text-gray-400">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:underline text-gray-400">
                About Us
              </a>
            </li>
            <li>
              <a href="/gallery" className="hover:underline text-gray-400">
                Gallery
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline text-gray-400">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Contact</h4>
          <p className="text-gray-400">
            Email:{" "}
            <a href="mailto:info@mehndiartexample.com" className="hover:underline">
             singhmanika409@gmail.com
            </a>
          </p>
          <p className="text-gray-400">Phone: +91 9990147462</p>
          <p className="text-gray-400">Location: New Delhi, India</p>
        </div>

        {/* Social Media Section */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-500"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-600"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="text-center text-gray-500 mt-8 border-t border-gray-700 pt-4">
        <p>© {new Date().getFullYear()} ManikaMehndiArt. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
