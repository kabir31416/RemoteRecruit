import { CheckCircle, XCircle } from "lucide-react";

import check from "../assets/check.png"

function Feature({ text, active }) {
  return (
    <div className="flex items-center gap-3">

      {active ? (
        <CheckCircle
          size={18}
          className="text-[#2E73D3]"
        />
      ) : (
        <XCircle
          size={18}
          className="text-gray-400"
        />
      )}

      <span className={`${active ? "text-[#1F2438]" : "text-gray-400"}`}>
        {text}
      </span>

    </div>
  );
}

export default function PricingSection() {
  return (
    <section className="bg-[#f8f8f8] py-20 px-6">
      <div className="max-w-[1200px] mx-auto">

        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#15182E] mb-14">
          Help Is One Click Away
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Free Plan */}

          <div className="bg-white rounded-3xl p-6 shadow-lg">

            <div className="flex gap-6">

              <div className="w-32 h-32 rounded-2xl bg-[#EEF2F9] flex flex-col justify-center items-center">
                <h3 className="text-4xl font-bold text-[#56B7E8]">
                  Free
                </h3>
                <p className="text-gray-500">
                  Basic
                </p>
              </div>

              <div className="space-y-4 flex-1">

                <Feature
                  text="1 Active Job"
                  active
                />

                <Feature
                  text="Basic List Placement"
                  active
                />

                <Feature
                  text="Unlimited Job Applicants"
                />

                <Feature
                  text="Invite Anyone to Apply to Your Jobs"
                />

              </div>

            </div>

            <button className="w-full mt-8 h-14 rounded-2xl border-2 border-[#2E73D3] text-[#214E97] font-semibold hover:bg-[#2E73D3] hover:text-white duration-300">
              Get Started
            </button>

          </div>

          {/* Premium */}

          <div className="bg-white rounded-3xl p-6 shadow-lg relative">

            <span className="absolute left-6 -top-3 bg-[#D8F2F4] px-5 py-2 rounded-full text-[#276F7B] font-semibold">
              Premium
            </span>

            <div className="flex gap-6">

              <div className="w-32 h-32 rounded-2xl bg-[#EEF2F9] flex flex-col justify-center items-center">
                <h3 className="text-4xl font-bold text-[#56B7E8]">
                  $79.99
                </h3>
                <p className="text-gray-500">
                  Per Month
                </p>
              </div>

              <div className="space-y-4 flex-1">

                <Feature
                  text="Unlimited Job Posts"
                  active
                />

                <Feature
                  text="Instant Job Post Approval"
                  active
                />

                <Feature
                  text="Premium List Placement"
                  active
                />

                <Feature
                  text="Unlimited Job Applicants"
                  active
                />

              </div>

            </div>

            <button className="w-full mt-8 h-14 rounded-2xl bg-gradient-to-r from-[#2F79D7] to-[#214E97] text-white font-semibold hover:opacity-90">
              Get Started
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}

