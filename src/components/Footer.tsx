import React from "react";
import Container from "./Container";

const Footer = () => {
  return (
    <footer className="bg-lime-100 text-gray-800 pt-10">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Address Section */}
          <div>
            <h3 className="text-xl font-semibold text-lime-700 mb-3">
              Our Address
            </h3>
            <p className="text-sm leading-relaxed text-gray-700">
              Lokhandwala Township, Shop-2, Whispering Palms, Shopping Arcade,
              <br />
              Akurli Road, Kandivali East,
              <br />
              Mumbai, Maharashtra, India - 400101
            </p>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-semibold text-lime-700 mb-3">
              Contact Us
            </h3>
            <p className="text-sm text-gray-700">
              Email:{" "}
              <a
                href="mailto:sales@svselevate.com"
                className="text-lime-700 underline hover:text-lime-900 transition"
              >
                sales@svselevate.com
              </a>
            </p>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="py-5 border-t border-lime-200 text-center text-sm text-gray-600">
          &copy; {new Date().getFullYear()} SVS Elevate. All rights reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
