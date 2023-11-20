import React from 'react'

export default function ServicesComponent() {
  return (
    <div>
    <div class="text-center py-8 px-4 lg:p-8">
      <h2 class="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
        What we OFFER?
      </h2>

      <div class="flex flex-wrap items-center justify-center mt-10 text-center shadow-me py-10 rounded-xl">
        <div class="w-full md:w-3/5 lg:w-fit px-4 lg:px-4">
          <img src="https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="gem" class="inline-block rounded-xl shadow-lg border border-merino-400 object-cover lg:w-[40vw]"  />
        </div>
        <div class="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12">
          <h3 class="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
            Wedding Parties
          </h3>
          <p class="sm:text-lg mt-6">
            Use the LocaleData gem to download translations directly into your Ruby on Rails
            projects using the provided command line interface. Just create a project and follow
            the step-by-step instructions.
          </p>
        </div>
      </div>

      <div class="flex flex-wrap items-center mt-10 justify-center text-center shadow-me py-10 rounded-xl">
        <div class="w-full md:w-3/5 lg:w-1/2 px-4">
          <img src="https://images.pexels.com/photos/1857157/pexels-photo-1857157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="project members" class="inline-block rounded-xl shadow-lg border border-merino-400 object-cover lg:w-[40vw]" />
        </div>
        <div class="w-full md:w-2/5 lg:w-1/2 px-4 md:order-first text-center md:text-left lg:pr-12">
          <h3 class="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
            Birthday Parties
          </h3>
          <p class="sm:text-lg mt-6">
            All LocaleData projects are private. Each project can have multiple collaborators
            with different roles and access permissions. You determine who can see and edit
            your translations. Just add admins, developers, translators and configure their
            access rights.
          </p>
        </div>
      </div>

      <div class="flex flex-wrap items-center mt-10 justify-center text-center shadow-me py-10 rounded-xl">
        <div class="w-full md:w-3/5 lg:w-1/2 px-4">
          <img src="https://img.freepik.com/free-photo/wonderful-wedding-ceremony-place-near-sea-decorated-by-flowers_8353-9869.jpg?w=900&t=st=1700156115~exp=1700156715~hmac=81126afd03096bb9dce7730734a24329061f2cc24d0de5f6a1feda71c4a1ce9f" alt="editor" class="inline-block rounded-xl shadow-lg border border-merino-400 object-cover lg:w-[40vw]" />
        </div>
        <div class="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12">
          <h3 class="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
          Anniverssaries
          </h3>
          <p class="sm:text-lg mt-6">
            LocaleData provides you easy import/export functions for your YAML files.
            Use a simple editor with many predefined languages to manage your locales.
            LocaleData also supports multiple translation types, such as simple text, plural forms,
            numbers, booleans, symbols, arrays, ...
          </p>
        </div>
      </div>

      <div class="flex flex-wrap items-center mt-10 justify-center text-center shadow-me py-10 rounded-xl">
        <div class="w-full md:w-3/5 lg:w-1/2 px-4">
          <img src="https://picsum.photos/400/240" alt="bulk editing" class="inline-block rounded-xl shadow-lg border border-merino-400 object-cover lg:w-[40vw]" />
        </div>
        <div class="w-full md:w-2/5 lg:w-1/2 px-4 md:order-first text-center md:text-left lg:pr-12">
          <h3 class="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
          Surprise Party
          </h3>
          <p class="sm:text-lg mt-6">
            Do you need to change the path of many translation keys at once? No problem, just
            use the bulk editing feature and enjoy the results.
          </p>
        </div>
      </div>

    </div>
  </div>
  )
}
