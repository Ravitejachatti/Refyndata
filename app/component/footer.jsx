import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="mt-12 py-14 z-100 bg-[#F2F5F8]">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-10 md:gap-x-20 lg:gap-x-[100px] px-10 md:px-10 lg:px-5">
          {/* Column 1 */}
          <div className="  mb-4 md:mb-0">
            <h3 className=" text-2xl font-semibold mb-2">Refyndata</h3>
            <img
              src="/footer/verify.png"
              alt="company_verification"
              className="py-2 transform transition-transform hover:translate-y-[-2px]"
            />
            <p className="text-sm transform transition-transform hover:translate-y-[-2px]">
              With lots of unique blocks, you can easily build a page without
              coding. Build your next landing page.
            </p>
          </div>

          {/* Column 2 */}
          <div className="mb-4 md:mb-0 text-[#0B1320]">
            <h3 className="text-xl font-semibold mb-2">Company</h3>
            <div className="flex flex-col">
              <a href="#" className=" mb-2 transform transition-transform hover:translate-y-[-2px]">
                About Us
              </a>
              <a href="#" className=" mb-2 transform transition-transform hover:translate-y-[-2px]">
                Services
              </a>
              <a href="#" className=" mb-2 transform transition-transform hover:translate-y-[-2px]">
                Clients
              </a>
              <a href="#" className=" transform transition-transform hover:translate-y-[-2px]">
                Career
              </a>
            </div>
          </div>

          {/* Column 3 */}
          <div className="mb-4 md:mb-0 text-[#0B1320]">
            <h3 className="text-xl font-semibold mb-2">Contact</h3>
            <p className="mb-2 transform transition-transform hover:translate-y-[-2px]">Email: info@gmail.com</p>
            <p className="mb-2 transform transition-transform hover:translate-y-[-2px]">Contact: +91898888</p>
            <a href="#" className="transform transition-transform hover:translate-y-[-2px] mb-2 "> Write to Us
            </a>
          </div>

          {/* Column 4 */}
          <div className="mb-4 md:mb-0 text-[#0B1320] ">
            <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
            <div className="">
              <a
                href="#"
                className=" block mb-2 transform transition-transform hover:translate-y-[-2px]"
              >
                Twitter
              </a>
              <a href="#" className=" block mb-2 transform transition-transform hover:translate-y-[-2px]">
                LinkedIn
              </a>
              <a href="#" className=" block transform transition-transform hover:translate-y-[-2px]">
                Facebook
              </a>
            </div>
          </div>
        </div>
        {/* Line below the footer */}
        <div className="border-t border-gray-600 my-4 mx-5">
          <div className="container mx-auto">
            <div className="flex justify-between items-center text-[#0B1320]">
              <p className="text-xs ">Refyndata @ 2024 All rights reserved</p>
              <div className="flex space-x-4">
                <a href="#" className=" text-xs">
                  Terms and Conditions
                </a>
                <a href="#" className="text-xs">
                  Privacy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
