import React from "react";

function GlobalFooter() {
  return (
    <footer className="w-full bg-gray-800 text-white py-6 px-3">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex flex-col">
          <p className="text-sm">© 2024 Hospital Management System</p>
          <p className="text-sm">All rights reserved.</p>
        </div>
        <div className="flex gap-4">
          <a href="/privacy-policy" className="text-sm hover:underline">
            Privacy Policy
          </a>
          <a href="/terms-of-service" className="text-sm hover:underline">
            Terms of Service
          </a>
          <a href="/contact-us" className="text-sm hover:underline">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
}

export default GlobalFooter;
