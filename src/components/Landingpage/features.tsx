import React from "react";
import feature1 from "../../assets/track.png";
import feature2 from "../../assets/task.png";     
import feature3 from "../../assets/mange.png";   

import dashboardImg from "../../assets/hero.png"


const CounterBlock = ({ label, digits }: { label: string; digits: string[][] }) => (
  <div className="flex flex-col items-center justify-start gap-4">
    <div className="flex items-center justify-center flex-wrap gap-x-1">
      {digits.map((group, idx) => (
        <div key={idx} className="overflow-hidden h-[52px] md:h-[52px]">
          <div>
            {group.map((digit, i) => (
              <div
                key={i}
                className="font-bold text-center text-[rgb(88,78,254)] text-4xl md:text-[60px] leading-[1.2] md:leading-[57.6px]"
              >
                {digit}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
    <div className="text-xl md:text-[20px] leading-[28.8px] text-center">{label}</div>
  </div>
);

export default function FeaturesPage() {
  const counters = [
    {
      label: "Tasks Completed",
      digits: [["4", "0"], ["5", "0"], ["0", "0"], ["k"]],
    },
    {
      label: "Active Tasks",
      digits: [["$2", "."], ["7", "0"], ["M"], ["+"]],
    },
    {
      label: "Team Members",
      digits: [["4", "0"], ["4", "0"], ["5", "0"], ["+"]],
    },
    {
      label: "Projects",
      digits: [["4", "0"], ["0", "0"], ["0", "0"], ["+"]],
    },
  ];

  return (
    <div className="grid place-items-center">
    
      <section>
        <div className="pt-0 px-[15px] pb-[120px]">
          <div className="mx-auto w-full max-w-[1140px]">
            <div className="mb-12">
              <div className="mx-auto text-center max-w-[713px]">
                <h2 className="font-bold text-center text-3xl md:text-[48px] leading-[1.2] mb-6">
                  Organize Your Workflow with Our Task Board
                </h2>
                <p className="text-center text-base md:text-lg">
                  Manage tasks efficiently with drag‑and‑drop, priority filters, and
                  activity tracking – all in one place.
                </p>
              </div>
            </div>

           
            <div className="mb-12">
              <div className="relative overflow-hidden rounded-3xl">
               <img
                  alt="Dashboard preview"
                  src={dashboardImg.src}
                  className="inline-block max-w-full align-middle"
                />
                <div className="absolute inset-0 bg-[rgba(27,37,89,0.26)] rounded-3xl" />
                <div className="absolute inset-0 z-[2] flex items-center justify-center">
                  <a
                    href="/"
                    aria-label="Open lightbox"
                    className="flex items-center justify-center w-16 h-16 md:w-[100px] md:h-[100px] bg-white shadow-[rgba(88,78,254,0.3)_10px_15px_44px_0px] rounded-full"
                  >
                    <div className="w-[26px] h-5 overflow-hidden">
                      <img
                        src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fcbfeb8440e0244bd300ce5bb4053b23d2fd3e2d6.svg?generation=1771149971290225&alt=media"
                        className="block w-full h-full"
                        alt="play icon"
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>

           
            <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-4">
              {counters.map((counter, index) => (
                <CounterBlock key={index} label={counter.label} digits={counter.digits} />
              ))}
            </div>
          </div>
        </div>
      </section>

    
      <section>
        <div className="pt-0 px-[15px] pb-[120px]">
          <div className="mx-auto w-full max-w-[1140px]">
            <div className="flex flex-col gap-[120px]">
             
              <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-[113px]">
                <div>
                  <h2 className="font-bold text-3xl md:text-[48px] leading-[1.2] mb-6">
                    Track Tasks & Plan Sprints
                  </h2>
                  <p className="mb-8 text-base md:text-lg">
                    Gain deep insights into your team’s progress, empowering smarter
                    decisions and sustainable growth.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-10">
                    <div className="flex flex-col gap-4">
                      <h3 className="font-semibold text-xl md:text-[24px] leading-[1.16]">
                        Task Overview
                      </h3>
                      <p className="text-base leading-6">
                        Monitor key metrics to ensure deadlines are met and priorities are clear.
                      </p>
                    </div>
                    <div className="flex flex-col gap-4">
                      <h3 className="font-semibold text-xl md:text-[24px] leading-[1.16]">
                        Sprint Planning
                      </h3>
                      <p className="text-base leading-6">
                        Plan sprints effectively by breaking down work and assigning tasks.
                      </p>
                    </div>
                  </div>
                  <a
                    href="/"
                    className="inline-flex font-bold items-center justify-center bg-[rgb(88,78,254)] text-white px-7 py-3.5 rounded-lg"
                  >
                    Get Started
                  </a>
                </div>
               
                <div
                  className="bg-center bg-cover p-6 md:p-[90px_47px] h-86 rounded-[1.25rem]"
                  style={{
                    backgroundImage: `url(${feature1.src})`,
                  }}
                >
                </div>
              </div>

            
              <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-[113px]">
                <div
                >
                  <img
                    alt="Feature"
                    src={feature2.src}
                    className="inline-block max-w-full align-middle rounded-3xl"
                  />
                </div>
                <div className="order-1 md:order-2">
                  <h2 className="font-bold text-3xl md:text-[48px] leading-[1.2] mb-6">
                    Full Control Over Your Tasks
                  </h2>
                  <p className="mb-8 text-base md:text-lg">
                    Simplify and streamline your task management for better control,
                    accuracy, and efficiency.
                  </p>
                  <div className="flex flex-col gap-5 mb-10">
                    {[
                      "Easily manage tasks with intuitive drag‑and‑drop tools.",
                      "Real‑time updates ensure full visibility of your team’s progress.",
                      "Boost efficiency with priority filters and due date tracking.",
                    ].map((text, i) => (
                      <div key={i} className="flex items-start gap-3 max-w-[441px]">
                        <div className="flex items-center justify-center w-5 h-5 mt-1 bg-[rgb(88,78,254)] text-white shrink-0 rounded-full">
                          <div className="w-[10px] h-[9px] overflow-hidden">
                            <img
                              src={`https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F${
                                ["4497c65147effa73db64cecd2aeb84023cf91804", "4393eee10e7f087d7816f78a49ac7243f81cb570", "fbfb3448eaa947c7537f11d80280bbc5c14b4e15"][i]
                              }.svg?generation=177114997${i === 0 ? "1391875" : i === 1 ? "1419214" : "1422828"}&alt=media`}
                              className="block w-full h-full"
                              alt="check"
                            />
                          </div>
                        </div>
                        <p className="text-base leading-6">{text}</p>
                      </div>
                    ))}
                  </div>
                  <a
                    href="/"
                    className="inline-flex font-bold items-center justify-center bg-[rgb(88,78,254)] text-white px-7 py-3.5 rounded-lg"
                  >
                    Get Started
                  </a>
                </div>
              </div>

             
              <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-[113px]">
                <div>
                  <h2 className="font-bold text-3xl md:text-[48px] leading-[1.2] mb-6">
                    Personal Task Management
                  </h2>
                  <div className="mb-10">
                    <p className="mb-6 text-base md:text-lg">
                      Stay on top of your personal to‑dos by tracking tasks, deadlines,
                      and priorities. Make informed decisions and achieve your goals.
                    </p>
                    <p className="text-base md:text-lg">
                      Easily monitor your daily, weekly, and monthly tasks to ensure
                      you’re always moving forward.
                    </p>
                  </div>
                  <a
                    href="/"
                    className="inline-flex font-bold items-center justify-center bg-[rgb(88,78,254)] text-white px-7 py-3.5 rounded-lg"
                  >
                    Get Started
                  </a>
                </div>
                <div
                >
                  <div className="flex flex-col gap-[17px]">
                    <img
                      alt="Feature"
                      src={feature3.src}
                      className="block max-w-full align-middle rounded-3xl"
                    />
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}