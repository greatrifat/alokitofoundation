import React from "react";


export default function SingleCarddd (
  {image,
  Button,
  CardDescription,
  CardTitle,
  titleHref,
  btnHref}
    ){
        return(
            <div className="mb-1 overflow-hidden rounded-lg bg-blue-200 shadow-lg duration-300 hover:shadow-xl dark:bg-dark-2 dark:shadow-card dark:hover:shadow-3">
        <img src={image} alt="pp" className="" />
        <div className="p-6 text-center sm:p-7 md:p-3 xl:p-4">
          <h3>
            <a
              href={titleHref ? titleHref : "/#"}
              className="mb-2 block text-xl font-semibold text-dark hover:text-blue-600 dark:text-white sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
            >
              {CardTitle}
            </a>
          </h3>
          <p className="mb-2 text-black leading-relaxed dark:text-dark-6">
            {CardDescription}
          </p>

          {Button && (
            <a
              href={btnHref ? btnHref : "#"}
              className="inline-block rounded-full border border-gray-600 px-7 py-2 font-medium text-black transition hover:border-blue-600 hover:bg-blue-600 hover:text-white dark:border-dark-3 dark:text-dark-6"
            >
              {Button}
            </a>
          )}
        </div>
      </div>
        )
    
    }