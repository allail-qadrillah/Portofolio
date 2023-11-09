import React from 'react'

export function SkeletonCard() {
  return (

    <section class="bg-white dark:bg-gray-900">
      <div class="container px-6 py-10 mx-auto animate-pulse">

        <div class="grid grid-cols-1 gap-8 mt-2 xl:mt-12 xl:gap-12 sm:grid-cols-2 ">
          <div class="w-full ">
            <div class="w-full h-64 bg-gray-300 rounded-lg md:h-72 dark:bg-gray-600"></div>

            <h1 class="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
            <p class="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
          </div>

          <div class="w-full ">
            <div class="w-full h-64 bg-gray-300 rounded-lg md:h-72 dark:bg-gray-600"></div>

            <h1 class="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
            <p class="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
          </div>

          <div class="w-full ">
            <div class="w-full h-64 bg-gray-300 rounded-lg md:h-72 dark:bg-gray-600"></div>

            <h1 class="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
            <p class="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
          </div>
        </div>
      </div>
    </section>

  )
}

export function SkeletonContent() {
  return (
    <section class="bg-white dark:bg-gray-900">
      <div class="container px-6 py-8 mx-auto animate-pulse">
        <div class="text-center">
          <p class="w-32 h-2 mx-auto bg-gray-200 rounded-lg dark:bg-gray-700"></p>

          <div class="flex flex-wrap justify-center gap-4 mt-10">
            <p class="w-24 h-2 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
            <p class="w-24 h-2 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
            <p class="w-24 h-2 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
            <p class="w-24 h-2 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
            <p class="w-24 h-2 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
          </div>

        </div>

        <hr class="my-6 border-gray-200 md:my-10 dark:border-gray-700" />

        <div class="flex flex-col items-center sm:flex-row sm:justify-between">
          <p class="w-24 h-2 bg-gray-200 rounded-lg dark:bg-gray-700"></p>

          <p class="w-64 h-2 bg-gray-200 rounded-lg dark:bg-gray-700 mt-4"></p>
        </div>
        
        <div role="status" class="p-4 animate-pulse md:p-6 dark:border-gray-700">
          <div class="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
            <svg class="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
              <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
              <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
            </svg>
          </div>
          <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>

          <span class="sr-only">Loading...</span>
        </div>

      </div>
    </section>
  )
}

