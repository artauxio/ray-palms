import React from "react";
import Container from "./Container";

const Footer = () => {
  return (
    <footer className="bg-[#e4e2dc] text-[#485e4c] pt-10">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Address Section */}
          <div>
            <h3 className="text-xl font-semibold text-[#5b6c55] mb-4 tracking-wider drop-shadow-sm">
              Head Office
            </h3>
            <p className="text-sm leading-relaxed text-[#7d927b] max-w-xs">
              Lokhandwala Township, Shop-2, Whispering Palms, Shopping Arcade,
              <br />
              Akurli Road, Kandivali East,
              <br />
              Mumbai, Maharashtra, India - 400101
            </p>
          </div>

          {/* Site Location Section */}
          <div>
            <h3 className="text-xl font-semibold text-[#5b6c55] mb-4 tracking-wider drop-shadow-sm">
              Site Location
            </h3>
            <p className="text-sm leading-relaxed text-[#7d927b] max-w-xs">
              Survey no-37/2/D/ Plot no.1, village - Navli, adjoining to lokmanya nagar,
              <br />
              Palghar West district Palghar 401404
            </p>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-semibold text-[#5b6c55] mb-4 tracking-wider drop-shadow-sm">
              Contact Us
            </h3>
            <p className="text-sm text-[#7d927b]">
              Email:{" "}
              <a
                href="mailto:sales@svselevate.com"
                className="text-[#485e4c] underline hover:text-[#485e4c] hover:brightness-90 transition"
              >
                sales@svselevate.com
              </a>
            </p>
            <p className="text-sm text-[#7d927b]">
              Phone Number:{" "}
              <span
                
                className="text-[#485e4c] underline hover:text-[#485e4c] hover:brightness-90 transition"
              >
                +91 8691914545
              </span>
            </p>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="py-6 border-t border-[#bebfbc] text-center text-sm text-[#9ca098] mt-10 select-none">
          &copy; {new Date().getFullYear()} SVS Elevate. All rights reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
