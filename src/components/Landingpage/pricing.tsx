export default function PricingPage() {
  return (
    <section className="relative z-[2]">
      <div className="px-4 py-0 pb-[120px] md:px-[15px]">
        <div className="mx-auto w-full max-w-[1140px]">
          {/* Header */}
          <div className="mx-auto mb-[60px] max-w-[708px] text-center">
            <h2 className="text-center text-4xl font-bold leading-tight md:text-[48px] md:leading-[57.6px]">
              Simple, Transparent Pricing for Task Masters
            </h2>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-3">
            {/* Standard Plan */}
            <div className="rounded-2xl bg-white/70 backdrop-blur-[54px] px-6 py-10 md:px-[30px]">
              <div className="mb-[22px]">
                <div className="mb-4">
                  <div>Basic Task Board</div>
                </div>
                <div className="mb-1 flex items-end justify-start">
                  <h3 className="text-5xl font-bold leading-[65.52px] md:text-[56px]">
                    $199
                  </h3>
                  <div className="ml-[2px] mb-[10px]">USD</div>
                </div>
                <div className="text-sm leading-[21.98px]">Billed monthly</div>
              </div>

              <div className="border-t border-black/16 pt-8">
                <div className="mb-4">
                  <h4 className="mb-2.5 mt-2.5 text-2xl font-semibold leading-[27.84px]">
                    What’s included
                  </h4>
                </div>
                <div className="mb-9 space-y-2">
                  <FeatureItem
                    icon="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fbf386c017f1637c651671c84dcbd61b931ce25d5.svg?generation=1771149971502153&alt=media"
                    text="Task creation and management"
                  />
                  <FeatureItem
                    icon="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F78c2c22176b7d547a847982d95035ac1a69b7593.svg?generation=1771149971542665&alt=media"
                    text="Basic reporting and analytics"
                  />
                  <FeatureItem
                    icon="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fa3d890d099cf9f82445889251936c5d803d7e664.svg?generation=1771149971540391&alt=media"
                    text="Email support"
                  />
                  <FeatureItem
                    icon="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F87eb4571d9a021b3359b6ee07ef56b200ab3bd1f.svg?generation=1771149971566020&alt=media"
                    text="Mobile access"
                  />
                  <FeatureItem
                    icon="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fed5457bcde0b90d1ff942141c63644755a23ed41.svg?generation=1771149971578485&alt=media"
                    text="Secure data"
                  />
                </div>
                <div>
                  <a
                    href="/"
                    className="inline-block w-full rounded-lg border border-[#584EFE] bg-white p-3 text-center font-bold text-[#584EFE] no-underline transition hover:bg-[#584EFE] hover:text-white"
                  >
                    Choose Plan
                  </a>
                </div>
              </div>
            </div>

            {/* Premium Plan (Highlighted) */}
            <div className="rounded-2xl bg-[#584EFE] px-6 py-10 text-white backdrop-blur-[54px] md:px-[30px]">
              <div className="mb-[22px]">
                <div className="mb-4">
                  <div>Pro Task Board</div>
                </div>
                <div className="mb-1 flex items-end justify-start">
                  <h3 className="text-5xl font-bold leading-[65.52px] md:text-[56px]">
                    $259
                  </h3>
                  <div className="ml-[2px] mb-[10px]">USD</div>
                </div>
                <div className="text-sm leading-[21.98px]">Billed monthly</div>
              </div>

              <div className="border-t border-white/24 pt-8">
                <div className="mb-4">
                  <h4 className="mb-2.5 mt-2.5 text-2xl font-semibold leading-[27.84px]">
                    What’s included
                  </h4>
                </div>
                <div className="mb-9 space-y-2">
                  <FeatureItem
                    icon="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F25172bae4245f661ea6b47f0c2315ef31c66b59e.svg?generation=1771149971589055&alt=media"
                    text="Advanced tools and features"
                    light
                  />
                  <FeatureItem
                    icon="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fb756a0a953925d231cd41e3f1aa3c14ecb1ae717.svg?generation=1771149971578544&alt=media"
                    text="Detailed analytics and reporting"
                    light
                  />
                  <FeatureItem
                    icon="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F1e7a0349f9c236a2fe8d1888576e66d669fb2ce0.svg?generation=1771149971590527&alt=media"
                    text="Priority email support"
                    light
                  />
                  <FeatureItem
                    icon="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F44be632defe3209086465471f5e147b72d9e1f1d.svg?generation=1771149971610547&alt=media"
                    text="Priority customer support"
                    light
                  />
                  <FeatureItem
                    icon="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fbdeebc739065c52808245ef3d11ca7d1ba8da64f.svg?generation=1771149971647329&alt=media"
                    text="Mobile and desktop access"
                    light
                  />
                  <FeatureItem
                    icon="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fe1379a2a999a8406df68b7b6707d5611a289de32.svg?generation=1771149971648732&alt=media"
                    text="24/7 monitoring"
                    light
                  />
                </div>
                <div>
                  <a
                    href="/"
                    className="inline-block w-full rounded-lg border border-[#584EFE] bg-white p-3 text-center font-bold text-[#584EFE] no-underline transition hover:bg-[#584EFE] hover:text-white"
                  >
                    Choose Plan
                  </a>
                </div>
              </div>
            </div>

            {/* Agency Plan */}
            <div className="rounded-2xl bg-white/70 px-6 py-10 backdrop-blur-[54px] md:px-[30px]">
              <div className="mb-[22px]">
                <div className="mb-4">
                  <div>Enterprise Task Board</div>
                </div>
                <div className="mb-1 flex items-end justify-start">
                  <h3 className="text-5xl font-bold leading-[65.52px] md:text-[56px]">
                    $699
                  </h3>
                  <div className="ml-[2px] mb-[10px]">USD</div>
                </div>
                <div className="text-sm leading-[21.98px]">Billed monthly</div>
              </div>

              <div className="border-t border-black/16 pt-8">
                <div className="mb-4">
                  <h4 className="mb-2.5 mt-2.5 text-2xl font-semibold leading-[27.84px]">
                    What’s included
                  </h4>
                </div>
                <div className="mb-9 space-y-2">
                  <FeatureItem
                    icon="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F017600fed45703131200a54d7735ae4c35d5e569.svg?generation=1771149971704276&alt=media"
                    text="Advanced tools and features"
                  />
                  <FeatureItem
                    icon="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fa2bd1805ca93bf3798b3b6e810e937b6cb81b424.svg?generation=1771149971705681&alt=media"
                    text="Detailed analytics"
                  />
                  <FeatureItem
                    icon="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F01289d1403e79a741da4f3dcd7bec78d4923d991.svg?generation=1771149971725788&alt=media"
                    text="Priority customer support"
                  />
                  <FeatureItem
                    icon="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F35a434d1e7fcab5294909fe74982797be97d1400.svg?generation=1771149971737703&alt=media"
                    text="Mobile and desktop access"
                  />
                  <FeatureItem
                    icon="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F63302afcc9ec889b959c49a5efe1630de6f22d0b.svg?generation=1771149971736345&alt=media"
                    text="24/7 monitoring"
                  />
                </div>
                <div>
                  <a
                    href="/"
                    className="inline-block w-full rounded-lg border border-[#584EFE] bg-white p-3 text-center font-bold text-[#584EFE] no-underline transition hover:bg-[#584EFE] hover:text-white"
                  >
                    Choose Plan
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background blur elements (unchanged) */}
      <div className="absolute bottom-[116px] left-[8%] -z-10 h-[576px] w-[584px] rounded-[21.375rem] bg-[rgba(88,78,254,0.32)] blur-[250px]"></div>
      <div className="absolute bottom-[116px] right-[18%] -z-10 h-[537px] w-[558px] rounded-[21.375rem] bg-[rgba(60,135,255,0.43)] blur-[250px]"></div>
    </section>
  );
}

// Reusable feature item component
function FeatureItem({
  icon,
  text,
  light = false,
}: {
  icon: string;
  text: string;
  light?: boolean;
}) {
  const bgColor = light ? 'bg-white' : 'bg-[#584EFE]';
  const textColor = light ? 'text-[#584EFE]' : 'text-white';

  return (
    <div className="flex items-center justify-start gap-3 py-2">
      <div className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${bgColor} ${textColor}`}>
        <div className="h-[9px] w-[10px] overflow-hidden fill-none">
          <img src={icon} alt="" className="block h-full w-full" />
        </div>
      </div>
      <p className="text-base leading-6">{text}</p>
    </div>
  );
}