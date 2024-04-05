import React, { useState } from "react";
import { XMarkIcon } from "@heroicons/react/20/solid";

const Card = ({title, img, imgAlt, live, source, description, tech }) => {
  const [visible, setIsVisible] = useState(true);

  const closeBanner = () => {
    setIsVisible(!visible);
  };

  return (
    <div>
      <div className="flex px-3 py-3">
        <div className="rounded-b-lg max-w-sm rounded overflow-hidden shadow-lg">
          <img className="rounded-t-lg h-full w-full max-h-64 ..."
            src={img}
            alt={imgAlt}
          />
          <div className="px-6 py-2">
            <h2 className="font-bold text-xl mb-2">{title}</h2>
            {tech.map((item,index) => (
              <span key={index} className="m-2 inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                {item}
              </span>
            ))} 
          </div>
          <div className="px-6 py-2">
            <p class="text-gray-700 text-base">{description}</p>
          </div>
          <div className="px-6 py-4 flex items-center justify-center">
            <button href={live} class="w-9/12 m-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Demo
            </button>
            <button href={source} class="w-9/12 m-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Repo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
