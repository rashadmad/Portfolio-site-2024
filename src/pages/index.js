import * as React from "react"
import Banner from './Banner'
import Data from './data.json'
import PortfolioCard from './PortfolioCard'
import Seo from "../components/seo"
import logo from "./shrinkedLogo.png"


const IndexPage = ({ title, description, img, imgAlt, tech, live, source }) => {

  return (
  <div class="flex-grow flex flex-col min-h-screen">
    <Banner firstItem="Grand re-opening!" secondItem="Open to software engineering opportunities" buttonText="Get in touch"></Banner>
    <div class="bg-gray-900 py-20">
        <div class="container mx-auto px-6 md:px-12">
            <div class="flex flex-col md:flex-row items-center">
                <div class="md:w-1/2 lg:w-2/3">
                    <h1 class="text-4xl md:text-6xl lg:text-7xl text-white font-bold mb-6">
                        Welcome to our <br class="hidden md:block" />
                        <span class="text-indigo-500">Awesome</span> Website
                    </h1>
                    <p class="text-lg md:text-xl lg:text-2xl text-gray-400 mb-8">
                        We create beautiful and functional websites for businesses of all sizes.
                    </p>
                    <div class="flex gap-2">
                        <a href="#" class="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-6 rounded-md">Get
                            Started
                        </a>
                        <a href="#" class="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-md">Learn
                            More
                        </a>
                    </div>
                </div>
                <div className="md:w-1/2 lg:w-1/3 mt-8 md:mt-0">
                    <img className="w-64" src={logo} alt="Hero Image" class="rounded-lg shadow-lg" />
                </div>
            </div>
        </div>
    </div>
    <div className="main bg-white py-24 sm:py-32 flex-grow">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Portfolio</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Take a look at my work. Most of my work is created in Vanilla JavaScript. At the moment I am taking the time to update everything in a different frontend framework. I am discussing 
            my journey in my blog you are welcome to join me in my jour
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {Data.map((data) => (
            <PortfolioCard title={data.title} description={data.description} img={data.img} tech={data.tech}></PortfolioCard>
          ))}
        </div>
      </div>
    </div>
      <footer class="bg-gray-800 text-white py-4">
          <div class="container mx-auto text-center">
              <p>&copy; 2024 Rashad J Madison. All rights reserved.</p>
          </div>
      </footer>
  </div>
  )
}

export const Head = () => <Seo title="Home" />

export default IndexPage