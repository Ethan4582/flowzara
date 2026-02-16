import React from "react";


const testimonials = [
  {
    name: "Alex Morgan",
    title: "Product Manager",
    image:
      "https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F86076cad9b8a16f8e0e5f005def8eb40d1b932f8.svg?generation=1771149971754079&alt=media",
    quote:
      "Cluster has completely transformed how our team manages projects. The drag‑and‑drop board is intuitive, and the activity log keeps everyone accountable. Highly recommended!”",
  },
  {
    name: "Jamie Lee",
    title: "Lead Developer",
    image:
      "https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F381542b1b68d31455332a37668c28794e86729ff.svg?generation=1771149971777093&alt=media",
    quote:
      "“The ability to filter by priority and search tasks instantly saves us hours. Cluster’s clean interface makes sprint planning effortless.”",
  },
  {
    name: "Taylor Smith",
    title: "Operations Lead",
    image:
      "https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F9752a3ca387e255a034127c6175ee090c45278fb.svg?generation=1771149971763959&alt=media",
    quote:
      "“We love the due date sorting and the way tasks persist across refreshes. It’s become the single source of truth for our daily standups.”",
  },
  {
    name: "Jordan Brooks",
    title: "UX Designer",
    image:
      "https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F5065d63ad6c2a342c9932aefcd721e5f4605819a.svg?generation=1771149971861731&alt=media",
    quote:
      "“Creating and editing tasks is a breeze. The tags and descriptions help us keep everything organized without clutter.”",
  },
  {
    name: "Casey Zhang",
    title: "Scrum Master",
    image:
      "https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F35be5d6cbfedc9698ebcd20b08f86ca2fab1fd9f.svg?generation=1771149971799227&alt=media",
    quote:
      "“The activity log is a game changer – we can track every change and movement. It brings full transparency to our workflow.”",
  },
  {
    name: "Riley Johnson",
    title: "Startup Founder",
    image:
      "https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fcb9218801782e442d76ef3c52916b295da2d21a5.svg?generation=1771149971888962&alt=media",
    quote:
      "“Simple, fast, and reliable. Cluster’s ‘Remember Me’ and persistent state mean I never lose my board, even after a browser restart.”",
  },
  {
    name: "Morgan Casey",
    title: "Remote Team Lead",
    image:
      "https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F73312274ce15e877fc3dd539dcc9bba37854f8fe.svg?generation=1771149971917835&alt=media",
    quote:
      "“Moving tasks between Todo, Doing, and Done feels natural. The board updates instantly and the search works like a charm.”",
  },
  {
    name: "Avery Quinn",
    title: "Product Owner",
    image:
      "https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fbfd589441d450d47fd4dfe866b5c2f4819767295.svg?generation=1771149971884126&alt=media",
    quote:
      "“We evaluated several tools, but Cluster’s clean design and no‑backend approach won us over. It’s exactly what a small agile team needs.”",
  },
  {
    name: "Blair Kennedy",
    title: "Freelance Developer",
    image:
      "https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F8e81704c128a9535e4bf130a673651ec8d828429.svg?generation=1771149971919866&alt=media",
    quote:
      "“I use CLuster for both work and personal projects. The due date handling and priority filters keep me on top of deadlines.”",
  },
];

export default function AboutPage() {
  return (
    <div style={{ display: "grid", placeItems: "center" }}>
    
      <section className="relative z-[3] w-full">
        <div className="px-4 py-0 md:px-[15px] md:pb-[120px]">
          <div className="mx-auto w-full max-w-[1140px]">
          
            <div
              className="table content-['']"
              style={{ gridArea: "1 / 1 / 2 / 2" }}
            ></div>

            <div className="mb-12 md:mb-[60px]">
              <div className="mx-auto max-w-[538px] text-center">
                <h2 className="text-4xl font-bold leading-tight md:text-5xl md:leading-[57.6px]">
                  What Users Say About Clsuter
                </h2>
              </div>
            </div>

          
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
              {testimonials.map((t, index) => (
                <div
                  key={index}
                  className="rounded-2xl bg-white px-6 py-8 md:px-[30px]"
                >
                  <div className="mb-6">
                    <div className="flex items-center justify-start gap-2.5">
                      <img
                        alt={t.name}
                        src={t.image}
                        loading="lazy"
                        decoding="async"
                        className="block h-[45px] w-[45px] max-w-full rounded-full align-middle"
                        style={{ objectFit: "cover" }}
                      />
                      <div>
                        <div className="mb-[2px] font-bold">{t.name}</div>
                        <div className="text-sm font-medium leading-[19.88px]">
                          {t.title}
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-lg font-semibold italic leading-relaxed md:text-xl md:leading-[28px]">
                    {t.quote}
                  </p>
                </div>
              ))}
            </div>

            <div
              className="table content-['']"
              style={{ gridArea: "1 / 1 / 2 / 2" }}
            ></div>
          </div>
        </div>

     
        <div className="absolute bottom-[223px] left-[8%] z-[-1] h-[576px] w-[584px] rounded-[21.375rem] bg-[rgba(88,78,254,0.32)] blur-[250px]"></div>
        <div className="absolute bottom-[223px] right-[18%] z-[-1] h-[537px] w-[558px] rounded-[21.375rem] bg-[rgba(60,135,255,0.43)] blur-[250px]"></div>
      </section>
    </div>
  );
}