import React from "react";

const Footer = () => {
  return (
    <div className="grid place-items-center">
      <footer className="pt-0 pr-0 pb-[30px] pl-0">
        <div className="mx-auto w-full max-w-[1170px] px-[15px]">
        
          <div className="mb-[60px]">
            
            <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-[130px]">
            
              <div className="w-full max-w-[310px]">
                <div className="mb-6">
                  <a href="/" className="inline-block max-w-full">
                    <img
                      alt="Clsuter Logo"
                      src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F539449bde20209dda1b0a4149fd3b3389c452bfc.svg?generation=1771149970869240&amp;alt=media"
                      className="block max-w-full"
                    />
                  </a>
                </div>
                <div className="mb-6">
                  <p className="text-gray-600">
                    Organize your tasks efficiently with TaskFlow. The intuitive
                    Kanban board helps you manage projects, track progress, and
                    collaborate seamlessly.
                  </p>
                </div>
                
                <div className="flex items-center justify-start mb-9 gap-6">
                  <a
                    href="https://ash-cv.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-start gap-6"
                  >
                    <div className="w-6 h-6 overflow-hidden">
                      <img
                        src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Ff0fbeecc7b2b07a1ba6f79bb8a09aac8faf7520a.svg?generation=1771149971915093&amp;alt=media"
                        alt="Instagram"
                        className="w-full h-full block"
                      />
                    </div>
                  </a>
                  
                  <a
                    href="https://x.com/SinghAshir65848"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-start gap-6"
                  >
                    <div className="w-6 h-6 overflow-hidden">
                      <img
                        src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fa2b14a847086f74bb51184ea381dfda09133717b.svg?generation=1771149971943755&amp;alt=media"
                        alt="X"
                        className="w-full h-full block"
                      />
                    </div>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ashirwad08singh/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-start gap-6"
                  >
                    <div className="w-6 h-6 overflow-hidden">
                      <img
                        src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fe8dfc5f39146c8db5d2ac438aa78b14a3aeae2f5.svg?generation=1771149971970806&amp;alt=media"
                        alt="LinkedIn"
                        className="w-full h-full block"
                      />
                    </div>
                  </a>
                </div>
           
                <a
                  href="/signup"
                  className="inline-flex items-center font-bold justify-center max-w-full overflow-hidden relative bg-[#584EFE] text-white gap-0 leading-[23.94px] py-[14px] px-7 z-[2] rounded-lg"
                >
                  <span>Start Free Trial &nbsp;</span>
                </a>
              </div>

              <div className="flex flex-col sm:flex-row justify-between w-full gap-8 sm:gap-[80px] max-w-[700px]">
             
                <div className="w-full max-w-[154px]">
                  <div className="font-semibold mb-4 leading-[27.9px]">
                    Company
                  </div>
                  <div className="flex flex-col gap-3">
                    <a href="/" className="block text-base leading-7">
                      Home
                    </a>
                    <a href="/about" className="block text-base leading-7">
                      About Us
                    </a>
                    <a href="/features" className="block text-base leading-7">
                      Features
                    </a>
                    <a href="/pricing" className="block text-base leading-7">
                      Pricing
                    </a>
                    <a href="/contact" className="block text-base leading-7">
                      Contact
                    </a>
                  </div>
                </div>

               
                <div className="w-full max-w-[154px]">
                  <div className="font-semibold mb-4 leading-[27.9px]">
                    Resources
                  </div>
                  <div className="flex flex-col gap-3">
                    <a href="/docs" className="block text-base leading-7">
                      Documentation
                    </a>
                    <a href="/support" className="block text-base leading-7">
                      Support
                    </a>
                    <a href="/api" className="block text-base leading-7">
                      API
                    </a>
                    <a href="/changelog" className="block text-base leading-7">
                      Changelog
                    </a>
                    <a href="/status" className="block text-base leading-7">
                      Status
                    </a>
                  </div>
                </div>

             
                <div className="w-full max-w-[230px]">
                  <div className="font-semibold mb-4 leading-[27.9px]">
                    Contact
                  </div>
                  <div className="flex flex-col gap-3">
                    <span className="block text-base leading-7">
                      8421933430
                    </span>
                    <a
                      href="mailto:singhashirwad2003@gmail.com"
                      className="block text-base leading-7"
                    >
                      singhashirwad2003@gmail.com
                    </a>
                    <p className="text-base leading-7 max-w-[229px]">
                      Mumbai , India
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

      
          <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-[30px] text-sm text-gray-600">
            <div>
              © 2025 Clsuter. All rights reserved.{" "}
              <a
                href="https://github.com/Ethan4582"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Ashirwad Singh
              </a>
            </div>
            
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;