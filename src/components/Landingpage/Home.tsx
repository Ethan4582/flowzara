"use client";

import React, { useState } from 'react';
import heroImage from '../../assets/mobile.png'; 

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Features', href: '/#Feature' },
  { label: 'About', href: '/#About' },
  { label: 'Pricing', href: '/#Pricing' },
  { label: 'Contact', href: '/#Cta' },
];

const MARQUEE_ROW_1 = [
  'https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fa19f01935e239deabdf0422ca83c17b79b54ffda.svg?generation=1771149971121366&alt=media',
  'https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F24af44a8e40a32eb7fd351314d562a429bd0620a.svg?generation=1771149971141150&alt=media',
  'https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F1ccf60608ff63d7745020668d7766020e8cf8414.svg?generation=1771149971198428&alt=media',
  'https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fd483f04dd116d5e77d49035cc24ecbc98ab53729.svg?generation=1771149971194811&alt=media',
  'https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fd2625de32deb9522865a7d024e0bb78a7cfedce0.svg?generation=1771149971217372&alt=media',
];

const MARQUEE_ROW_2 = [
  'https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F8c9c78dfaab617542730070029c60b19619dcc06.svg?generation=1771149971245720&alt=media',
  'https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F5e35b2bbcb0bb7becdbd6fcf31b5ec6fad23abee.svg?generation=1771149971241651&alt=media',
  'https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F954e18cb73e8de5a35c6a61661d6f1a7f7b15400.svg?generation=1771149971254863&alt=media',
  'https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F891561ca5bf117e6873e5ab410c6fae7fd7208e8.svg?generation=1771149971262544&alt=media',
  'https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fee772313c6396da47ed18063711b804b44fd93c8.svg?generation=1771149971284715&alt=media',
];

const HeroImages = () => (
 
  <div className="flex justify-center md:justify-end">
    <img
      alt="Hero Image"
      src={heroImage.src}
      className="inline-block max-w-full h-150 align-middle rounded-[0.625rem]"
    />
  </div>
);

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      className="h-full w-full max-w-[100vw] overflow-x-hidden text-black text-[16px] leading-[normal]"
      style={{ fontFamily: 'sans-serif', textDecoration: 'none', margin: 'auto' }}
    >
      <div
        className="min-h-full bg-white text-[rgb(30,_30,_30)] text-[18px] leading-[25.92px]"
        style={{ fontFamily: 'Dmsans, Arial, sans-serif' }}
      >
        <div className="w-full overflow-x-hidden overflow-y-visible">
          {/* Header */}
          <div className="absolute w-full left-0 top-8 right-0 pt-0 px-[15px] pb-0 z-[19]">
            <div className="mx-auto w-full bg-white/50 max-w-[1164px] p-3 rounded-lg">
              <div role="banner" className="relative z-[1000]">
                <div className="flex items-center justify-between gap-4">
                  {/* Logo */}
                  <div className="flex-shrink-0">
                    <a href="/" aria-label="home" className="block text-[rgb(51,_51,_51)]">
                      <img
                        alt="Logo"
                        src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F539449bde20209dda1b0a4149fd3b3389c452bfc.svg?generation=1771149970869240&alt=media"
                        className="inline-block max-w-full overflow-clip"
                      />
                    </a>
                  </div>

                  {/* Desktop Navigation */}
                  <nav
                    role="navigation"
                    className="hidden md:flex items-center gap-[40px]"
                  >
                    {NAV_ITEMS.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="block font-medium text-left align-top leading-[23.94px] whitespace-nowrap"
                        style={{
                          color:
                            item.label === 'Home'
                              ? 'rgb(88, 78, 254)'
                              : item.label === 'Contact'
                              ? 'rgb(65, 59, 161)'
                              : 'rgb(34, 34, 34)',
                        }}
                      >
                        {item.label}
                      </a>
                    ))}
                  </nav>

                  {/* Login/Signup Button - hidden on mobile */}
                  <div className="hidden md:block flex-shrink-0">
                    <a
                      href="/login"
                      className="inline-flex font-bold items-center justify-center max-w-full overflow-hidden relative bg-[rgb(30,_30,_30)] text-white gap-0 leading-[23.94px] pt-[14px] pr-7 pb-[14px] pl-7 z-[2] rounded-lg hover:bg-gray-800 transition-colors"
                    >
                      <div>Login / Sign Up</div>
                    </a>
                  </div>

                  {/* Hamburger icon */}
                  <button
                    className="block md:hidden text-2xl focus:outline-none"
                    onClick={() => setMenuOpen(!menuOpen)}
                  >
                    {menuOpen ? '✕' : '☰'}
                  </button>
                </div>

                {/* Mobile menu dropdown with login link */}
                {menuOpen && (
                  <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4 flex flex-col gap-3">
                    {NAV_ITEMS.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="block font-medium py-2 px-3 hover:bg-gray-100 rounded"
                        style={{
                          color:
                            item.label === 'Home'
                              ? 'rgb(88, 78, 254)'
                              : item.label === 'Contact'
                              ? 'rgb(65, 59, 161)'
                              : 'rgb(34, 34, 34)',
                        }}
                        onClick={() => setMenuOpen(false)}
                      >
                        {item.label}
                      </a>
                    ))}
                    <a
                      href="/login"
                      className="block font-medium py-2 px-3 hover:bg-gray-100 rounded text-[rgb(30,30,30)]"
                      onClick={() => setMenuOpen(false)}
                    >
                      Login / Sign Up
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>

          <header className="relative pt-[120px] md:pt-[188px] pr-0 pb-[60px] md:pb-[100px] pl-0 z-[6]">
            <div className="mx-auto w-full max-w-[1170px] pt-0 px-[15px] pb-0">
              <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-[90px]">
                <div>
                  <h1 className="font-bold mb-4 md:mb-[24px] text-3xl md:text-[64px] leading-tight md:leading-[75.52px]">
                    Empower Your Tasks with Smart Kanban
                  </h1>
                  <div className="mb-6 md:mb-[32px] text-base md:text-[18px]">
                    Organize, prioritize, and track your work with our intuitive drag-and-drop board. Built for modern teams.
                  </div>
                  <div className="flex mb-8 md:mb-[40px]">
                    <a
                      href="/#Pricing"
                      className="inline-flex font-bold items-center justify-center max-w-full overflow-hidden relative bg-[rgb(88,_78,_254)] text-white gap-0 leading-[23.94px] pt-[14px] pr-7 pb-[14px] pl-7 z-[2] rounded-lg hover:bg-indigo-700 transition-colors"
                    >
                      <div>Start 14 days free trial</div>
                    </a>
                  </div>

                  <div className="flex flex-wrap items-center justify-start gap-2 md:gap-[8px]">
                    <div className="flex">
                      <img
                        alt="User Image"
                        src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F884367ff676e8432af38cb850cf5a44529305d45.png?generation=1771149970875644&alt=media"
                        className="inline-block max-w-full overflow-clip align-middle w-10 h-10 md:w-12 md:h-12 border-white border-[1.6px] rounded-full"
                      />
                      <img
                        alt="User Image"
                        src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F23c49764faca4ca57e119ce561b4cced1ac3ceb2.png?generation=1771149970892078&alt=media"
                        className="inline-block max-w-full overflow-clip align-middle w-10 h-10 md:w-12 md:h-12 -ml-2 border-white border-[1.6px] rounded-full"
                      />
                      <img
                        alt="User Image"
                        src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F233e17c029c482480031859512b84295a38b3585.png?generation=1771149971050263&alt=media"
                        className="inline-block max-w-full overflow-clip align-middle w-10 h-10 md:w-12 md:h-12 -ml-2 border-white border-[1.6px] rounded-full"
                      />
                    </div>
                    <div>
                      <div className="flex items-center justify-start gap-[4px]">
                        <div className="flex items-center justify-start gap-[5px]">
                          {[...Array(5)].map((_, i) => (
                            <div
                              key={i}
                              className="fill-none overflow-hidden w-3 h-3 md:w-[14px] md:h-[14px] text-[rgb(255,_177,_60)]"
                            >
                              <img
                                src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Ff1e7e6ebd824cc3d02fef3184802ae3acb188cde.svg?generation=1771149971011809&alt=media"
                                className="block w-full h-full"
                                alt="star"
                              />
                            </div>
                          ))}
                        </div>
                        <div className="font-medium text-sm md:text-[16px] leading-[20px]">5.0</div>
                      </div>
                      <div className="font-medium mt-1 md:mt-[10px] text-sm md:text-[16px] leading-[20px]">
                        From 600+ reviews.
                      </div>
                    </div>
                  </div>
                </div>

                <HeroImages />
              </div>
            </div>

            {/* Background decorative elements */}
            <div className="hidden md:block pointer-events-none absolute w-[558px] h-[537px] top-[13px] right-[18%] bg-[rgba(60,135,255,0.43)] blur-[250px] z-[-1] rounded-[21.375rem]"></div>
            <div className="hidden md:block pointer-events-none absolute w-[558px] h-[537px] left-[8%] top-0 bg-[rgba(88,78,254,0.32)] blur-[250px] z-[-1] rounded-[21.375rem]"></div>
            <div className="hidden md:flex items-center justify-end pointer-events-none absolute top-[110px] right-0 max-w-[666px] z-[-1]">
              <img
                alt="Shape Image"
                src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F3ff66c7152cef6f9399bfa7febdb79db1968d197.png?generation=1771149971119411&alt=media"
                className="block max-w-full overflow-clip pointer-events-none align-middle"
              />
            </div>
          </header>

          <main className="w-full">
            <div>
              <div className="pt-0 px-[15px] pb-[60px] md:pb-[120px]">
                <div className="mx-auto w-full max-w-[1140px]">
                  <div className="mb-6 md:mb-[32px]">
                    <div className="font-medium text-center text-sm md:text-[16px] leading-[24px]">
                      Join 4,000+ businesses driving productivity.
                    </div>
                  </div>

                  <div className="flex flex-col overflow-hidden gap-4 md:gap-[24px]">
                    {/* Row 1 */}
                    <div className="marquee">
                      <div className="marquee-track">
                        {MARQUEE_ROW_1.map((src, idx) => (
                          <img
                            key={`r1-${idx}`}
                            src={src}
                            alt="Marquee Image"
                            className="block max-w-full overflow-clip align-middle w-16 md:w-40"
                          />
                        ))}
                        {MARQUEE_ROW_1.map((src, idx) => (
                          <img
                            key={`r1d-${idx}`}
                            src={src}
                            alt="Marquee Image"
                            className="block max-w-full overflow-clip align-middle w-16 md:w-40"
                          />
                        ))}
                      </div>
                    </div>

                    {/* Row 2 */}
                    <div className="marquee">
                      <div className="marquee-track reverse">
                        {MARQUEE_ROW_2.map((src, idx) => (
                          <img
                            key={`r2-${idx}`}
                            src={src}
                            alt="Marquee Image"
                            className="block max-w-full overflow-clip align-middle w-16 md:w-40"
                          />
                        ))}
                        {MARQUEE_ROW_2.map((src, idx) => (
                          <img
                            key={`r2d-${idx}`}
                            src={src}
                            alt="Marquee Image"
                            className="block max-w-full overflow-clip align-middle w-16 md:w-40"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}