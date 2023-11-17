"use client";
import React from "react";
import CustomButton from "../button/CustomButton";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import ReactiveButton from "reactive-button";

export default function BookAppointment() {

  const [loads, setLoads] = useState(true);
  const [state, setState] = useState("idle");

  const form = useRef(null);
  const loading = () => toast.loading("loading..");
  const HandleSubmit = async (e) => {
    e.preventDefault();

    setState("loading");
    await emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICEID,
        process.env.NEXT_PUBLIC_TEMPLATEID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLICKEY
      )

      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          setTimeout(() => {
            setState("success");
          }, 2000);
          //   toast.dismiss(loading)
          toast.success("Appointment booked sucessfully");
        },
        function (error) {
          // toast.dismiss(loading)
          console.log("FAILED...", error);
          toast.error(`an error occured ${error}`);
        }
      );
  };

  return (
    <div class="flex items-center justify-center py-7 px-4 lg:p-12 flex-col">
      <h1 className="font-bold text-3xl lg:text-4xl mb-7 lg:mb-10">
        Book Appointment
      </h1>
      <div class="mx-auto w-full max-w-[550px] bg-white px-4 py-5 lg:p-10 rounded-[10px] shadow-lg">
        <form ref={form} onSubmit={HandleSubmit}>
          <div class="mb-5">
            <label
              for="name"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              Full Name
            </label>
            <input
              type="text"
              name="full_name"
              id="name"
              required
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div class="mb-5">
            <label
              for="phone"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              Phone Number
            </label>
            <input
              type="number"
              name="phone_number"
              id="phone"
              required
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div class="mb-5">
            <label
              for="email"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div class="-mx-3 flex flex-wrap">
            <div class="w-full px-3 sm:w-1/2">
              <div class="mb-5">
                <label
                  for="date"
                  class="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Date
                </label>
                <input
                  type="date"
                  name="date_of_birth"
                  id="date"
                  required
                  class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
            <div class="w-full px-3 sm:w-1/2">
              <div class="mb-5">
                <label
                  for="time"
                  class="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Time
                </label>
                <input
                  type="time"
                  name="time"
                  id="time"
                  required
                  class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
          </div>

          <div className="mb-5">
            <label className="block text-base font-medium text-[#07074D] mb-3">
              Appointment Type
            </label>
            <div className="flex space-x-4">
              <label htmlFor="online">
                <input
                  type="radio"
                  id="online"
                  name="appointment"
                  value="online"
                  className="mr-2"
                  // Add logic here to handle the state of the radio button
                />
                Online
              </label>
              <label htmlFor="offline">
                <input
                  type="radio"
                  id="offline"
                  name="appointment"
                  value="offline"
                  className="mr-2"
                  // Add logic here to handle the state of the radio button
                />
                Offline
              </label>
            </div>
          </div>

          <div class="mb-5 pt-3">
            <label class="mb-5 block text-base font-semibold text-[#07074D] sm:text-xl">
              Address Details
            </label>
            <div class="-mx-3 flex flex-wrap">
              <div class="w-full px-3 sm:w-1/2">
                <div class="mb-5">
                  <input
                    type="text"
                    name="area"
                    id="area"
                    placeholder="Enter area"
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
              <div class="w-full px-3 sm:w-1/2">
                <div class="mb-5">
                  <input
                    type="text"
                    name="city"
                    id="city"
                    required
                    placeholder="Enter city"
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
              <div class="w-full px-3 sm:w-1/2">
                <div class="mb-5">
                  <input
                    type="text"
                    name="state"
                    id="state"
                    required
                    placeholder="Enter state"
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
              <div class="w-full px-3 sm:w-1/2">
                <div class="mb-5">
                  <input
                    type="text"
                    name="country"
                    id="country"
                    required
                    placeholder="country"
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mb-5">
            <label className="block text-base font-medium text-[#07074D] mb-3">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="4"
              required
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] resize-none outline-none focus:border-[#6A64F1] focus:shadow-md"
            ></textarea>
          </div>
          <div>
        

            <ReactiveButton
              buttonState={state}
               height="40px"
              width="100%"
                style={{backgroundColor : "#212121"}}
              rounded={20}
              
              idleText="Book Appointment"
              loadingText="Booking"
              successText="Done"
              onClick={HandleSubmit}
            />
            <Toaster />
          </div>
        </form>
      </div>
    </div>
  );
}
