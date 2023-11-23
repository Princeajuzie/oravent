import CustomButton from "../button/CustomButton";
import { FaArrowRight } from "react-icons/fa";

export default function PricingComponent() {
  const starter = "choose starter";
  const Startup = `choose startups`;
  const Enterprise = "Enterprise";
  const icon = <FaArrowRight />;
  return (
    <div>
      <div className="space-y-5 px-4 lg:px-14 py-12">
        <div className="text-center mt-4 lg:mt-8">
          <h2 className="text-3xl md:text-4xl text-left lg:text-center font-bold mb-1">
            Choose the best plan for you
          </h2>
        </div>
        <div className="demo-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="rounded-[30px] md:rounded-[26px] bg-gray-100 overflow-hidden border-[1px] border-gray-200 p-8 relative">
            <div className="h-full">
              <div className="h-full z-10 relative">
                <div className="flex flex-col flex-1 jusptify-between h-full space-y-5">
                  <div className="flex justify-between flex-col">
                    <div className="text-xl md:text-2xl font-bold text-gray-900 flex justify-between">
                      <span>Weddings</span>
                    </div>
                    <div className="pt-5 text-gray-500 font-medium text-base space-y-1">
                      <div className="flex items-center align-bottom">
                        <span className="pt-1.5">$</span>
                        <div className="ml-1 mr-2 text-2xl md:text-3xl font-bold text-gray-900">
                          <span>10</span>
                        </div>
                        <span className="pt-1.5">per month</span>
                      </div>
                      <div className="text-base">billed annually</div>
                    </div>
                    <div className="">
                      <ul className="space-y-2 pt-8">
                        <li className="flex items-center font-medium space-x-2 text-black">
                          <svg
                            className="h-4 w-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                          <span>Everything in Free</span>
                        </li>
                        <li className="flex items-center font-medium space-x-2 text-black">
                          <svg
                            className="h-4 w-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                          <span>5,000 events / month</span>
                        </li>
                        <li className="flex items-center font-medium space-x-2 text-black">
                          <svg
                            className="h-4 w-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                          <span>Unlimited seats</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="pt-2">
                    <CustomButton
                      Value={starter}
                      icon={icon}
                      className="flex items-center gap-2 px-5 py-3 rounded-md hover:shadow-2xl transition-all duration-300 hover:scale-105 appearance-none  font-semibold text-base normal-case"
                    />
                  </div>
                </div>
                <div className="hidden">
                  <ul className="space-y-2 pt-8">
                    <li className="flex items-center font-medium space-x-2 text-black">
                      <svg
                        className="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                      <span>Everything in Free</span>
                    </li>
                    <li className="flex items-center font-medium space-x-2 text-black">
                      <svg
                        className="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                      <span>5,000 events / month</span>
                    </li>
                    <li className="flex items-center font-medium space-x-2 text-black">
                      <svg
                        className="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                      <span>Unlimited seats</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-[30px] md:rounded-[36px] bg-[#FAFAFA] overflow-hidden border-[1px] border-gray-200 p-8 relative">
            <div className="h-full">
              <div className="h-full z-10 relative">
                <div className="flex flex-col flex-1 justify-between h-full space-y-5">
                  <div className="flex justify-between flex-col">
                    <div className="text-xl md:text-2xl font-bold text-gray-900 flex justify-between">
                      <span>Startup</span>
                      <svg
                        className="h-6 w-6 animate-ping-slow text-gray-500"
                        viewBox="0 0 50 50"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M30.5 25C30.5 28.0376 28.0376 30.5 25 30.5C21.9624 30.5 19.5 28.0376 19.5 25C19.5 21.9624 21.9624 19.5 25 19.5C28.0376 19.5 30.5 21.9624 30.5 25Z"
                          stroke="currentColor"
                          stroke-opacity="0.7"
                          stroke-width="4"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M38.75 25C38.75 32.5939 32.5939 38.75 25 38.75C17.4061 38.75 11.25 32.5939 11.25 25C11.25 17.4061 17.4061 11.25 25 11.25C32.5939 11.25 38.75 17.4061 38.75 25Z"
                          stroke="currentColor"
                          stroke-opacity="0.4"
                          stroke-width="4.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M47.5 25C47.5 37.4264 37.4264 47.5 25 47.5C12.5736 47.5 2.5 37.4264 2.5 25C2.5 12.5736 12.5736 2.5 25 2.5C37.4264 2.5 47.5 12.5736 47.5 25Z"
                          stroke="currentColor"
                          stroke-opacity="0.1"
                          stroke-width="5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </div>
                    <div className="pt-5 text-gray-500 font-medium text-base space-y-1">
                      <div className="flex items-center align-bottom">
                        <span className="pt-1.5">$</span>
                        <div className="ml-1 mr-2 text-2xl md:text-3xl font-bold text-gray-900">
                          <span>16</span>
                        </div>
                        <span className="pt-1.5">per month</span>
                      </div>
                      <div className="text-base">billed annually</div>
                    </div>
                    <div className="">
                      <ul className="space-y-2 pt-8">
                        <li className="flex items-center font-medium space-x-2 text-black">
                          <svg
                            className="h-4 w-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                          <span>Everything in Starter</span>
                        </li>
                        <li className="flex items-center font-medium space-x-2 text-black">
                          <svg
                            className="h-4 w-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                          <span>20,000 events / month</span>
                        </li>
                        <li className="flex items-center font-medium space-x-2 text-black">
                          <svg
                            className="h-4 w-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                          <span>Unlimited seats</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div></div>
                  <div className="pt-2">
                    <CustomButton
                      Value={Startup}
                      icon={icon}
                      className="flex items-center gap-2 px-5 py-3 rounded-md hover:shadow-2xl transition-all duration-300 hover:scale-105 appearance-none  font-semibold text-base normal-case"
                    />
                  </div>
                </div>
                <div className="hidden">
                  <ul className="space-y-2 pt-8">
                    <li className="flex items-center font-medium space-x-2 text-black">
                      <svg
                        className="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                      <span>Everything in Starter</span>
                    </li>
                    <li className="flex items-center font-medium space-x-2 text-black">
                      <svg
                        className="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                      <span>20,000 events / month</span>
                    </li>
                    <li className="flex items-center font-medium space-x-2 text-black">
                      <svg
                        className="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                      <span>Unlimited seats</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[30px] md:rounded-[36px] bg-[#FAFAFA] overflow-hidden border-[1px] border-gray-200 p-8 relative sm:col-span-2 lg:col-span-1">
            <div className="h-full">
              <div className="flex flex-col justify-between h-full space-y-5">
                <div className="flex justify-between flex-col">
                  <div className="text-xl md:text-2xl font-bold text-gray-900 flex justify-between">
                    <span>Enterprise</span>
                  </div>
                  <div className="pt-5">
                    Contact us for a custom quote and a custom onboarding
                    process.
                  </div>
                </div>
                <div className="pt-2">
                  <CustomButton
                    Value={Enterprise}
                    icon={icon}
                    className="flex items-center gap-2 px-5 py-3 rounded-md hover:shadow-2xl transition-all duration-300 hover:scale-105 appearance-none  font-semibold text-base normal-case"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
