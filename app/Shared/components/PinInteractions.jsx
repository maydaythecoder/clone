import React from 'react'
import {
    FaceSmileIcon,
    HeartIcon,
    ChevronDownIcon,
  } from "@heroicons/react/20/solid";

const PinInteractions = () => {
  return (
    <div>
              <div className=" justify-between space-x-4  shadow-t -ml-12 pl-5 w-[532px]">
        <div className="flex-shrink-0">
          <img
            className=" absolute mt-[70px] -ml-3 h-10 w-10 rounded-full"
            src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </div>

        <div className="min-w-0 flex-1 w-[420px] h-20 mt-16">
          <form action="#" className="relative h-20">
            <div className="overflow-hidden rounded-full  shadow-sm ring-1 ring-inset ring-gray-300 ml-7 -mr-5">
              <label htmlFor="comment" className="sr-only">
                Add your comment
              </label>
              <textarea
                rows={3}
                name="comment"
                id="comment"
                className="rounded-2xl block w-full p-3 mt-2 resize-none border-none bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6 h-12 no-outline"
                placeholder="Add your comment..."
                defaultValue={""}
              />
              <div className="absolute inset-x-0 bottom-0 flex justify-between py-2 pl-3 pr-2">
                <div className="flex items-center space-x-5">
                  <div className="flex items-center">
                    <button
                      type="button"
                      className="-m-2.5 flex h-10 w-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="h-12 w-12 font-bold bg-gray-300 p-2 rounded-full absolute ml-[780px] -mt-48 text-black"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="flex items-center">
                    <FaceSmileIcon
                      className="h-7 w-7 absolute ml-[300px] -mt-16 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <button
                    type="submit"
                    className="absolute -mt-11 -ml-5 items-center rounded-full bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 h-10"
                  >
                    <svg
                      aria-hidden="true"
                      aria-label=""
                      className=""
                      height="18"
                      role="img"
                      viewBox="0 0 24 24"
                      width="18"
                      fill="#FFFFFF"
                    >
                      <path d="m.46 2.43-.03.03c-.4.42-.58 1.06-.28 1.68L3 10.5 16 12 3 13.5.15 19.86c-.3.62-.13 1.26.27 1.67l.05.05c.4.38 1 .56 1.62.3l20.99-8.5q.28-.12.47-.3l.04-.04c.68-.71.51-2-.51-2.42L2.09 2.12Q1.79 2 1.49 2q-.61.01-1.03.43"></path>
                    </svg>
                  </button>

                  <HeartIcon className="h-7 w-7 text-red-500 absolute -mt-24 -ml-24" />
                  <div className=" text-xs font-bold absolute -mt-[88px] -ml-14">
                    53
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default PinInteractions
