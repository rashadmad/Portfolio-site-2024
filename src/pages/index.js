import * as React from "react"
import Banner from './Banner'
import Data from './data.json'

import Seo from "../components/seo"


const IndexPage = () => {
  return (
  <>
    <Banner firstItem="Grand re-opening!" secondItem="Open to software engineering opportunities" buttonText="Get in touch"></Banner>
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Portfolio</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Take a look at my work. Most of my work is created in Vanilla JavaScript. At the moment I am taking the time to update everything in a diffrent frontend framework. I am discussing 
            my journey in my blog you are welcome to join me in my journey.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {Data.map((img, imageAlt, tech, title, description) => (
            <article key={Data.id} className="flex max-w-xl flex-col items-start justify-between">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={img}
                  alt={imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="flex items-center gap-x-4 text-xs">
                <a
                  href={tech[0]}
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {title}
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href='#'>
                    <span className="absolute inset-0" />
                    {title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
    <div class="flex flex-col min-h-screen">
    <main class="flex-grow">
    </main>
      <footer class="bg-gray-800 text-white py-4">
          <div class="container mx-auto text-center">
              <p>&copy; 2024 Rashad J Madison. All rights reserved.</p>
          </div>
      </footer>
    </div>
  </>
  )
}

export const Head = () => <Seo title="Home" />

export default IndexPage