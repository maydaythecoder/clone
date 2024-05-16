"use client";
import React from "react";
import { Fragment, useState } from "react";
import { Listbox, Menu, Transition } from "@headlessui/react";
import {
  FaceFrownIcon,
  FaceSmileIcon,
  FireIcon,
  HandThumbUpIcon,
  HeartIcon,
  PaperClipIcon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/20/solid";
import UserTag from "../UserTag";
import Accordion from "../accordian";
const accordionData = [
  {
    title: "Comments",
    content: `
      Great post 😁!
    `,
  },

];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function PinInfo({ pinDetail }) {
  const user = {
    name: pinDetail.userName,
    email: pinDetail.email,
    image: pinDetail.userImage,
  };
  return (
    <div className=" align-middle">
      <button
        className="p-2 text-[23px]
      mt-10 absolute rounded-full  transition-all"
        onClick={() => window.open(pinDetail.link)}
      >
        <svg
          aria-hidden="true"
          aria-label=""
          className=""
          height="20"
          role="img"
          viewBox="0 0 24 24"
          width="20"
        >
          <path d="M10 7.66 8.81 8.84a2 2 0 0 1-2.84-2.82l6-6.02L18 6.01a2 2 0 0 1-2.82 2.83l-1.2-1.19v6.18a2 2 0 0 1-4 0zM19 16a2 2 0 0 1 4 0v6a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-6a2 2 0 0 1 4 0v4h14z"></path>
        </svg>
      </button>

      <Menu as="div" className=" inline-block text-left absolute mt-1">
        <div>
          <Menu.Button
            className="p-2 text-[23px]
      mt-10 absolute ml-10 rounded-full  transition-all"
          >
            <svg
              aria-hidden="true"
              aria-label=""
              className=""
              height="20"
              role="img"
              viewBox="0 0 24 24"
              width="20"
            >
              <path d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6M3 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6m18 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6"></path>
            </svg>
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-50 top-20 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    Account settings
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    Support
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    License
                  </a>
                )}
              </Menu.Item>
              <form method="POST" action="#">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      type="submit"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block w-full px-4 py-2 text-left text-sm"
                      )}
                    >
                      Sign out
                    </button>
                  )}
                </Menu.Item>
              </form>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>

      <Menu as="div" className=" inline-block text-left absolute mt-11 ml-72 ">
        <div>
          <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 mb-2 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900">
            Board
            <ChevronDownIcon
              className="-mr-1 h-5 w-5 text-black font-bold"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    Account settings
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    Support
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    License
                  </a>
                )}
              </Menu.Item>
              <form method="POST" action="#">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      type="submit"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block w-full px-4 py-2 text-left text-sm"
                      )}
                    >
                      Sign out
                    </button>
                  )}
                </Menu.Item>
              </form>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>

      <button
        type="button"
        className=" absolute mt-11 ml-96 rounded-full bg-red-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
      >
        Save
      </button>
      
      <div className="mt-28 absolute">
        <h2 className="text-[30px] font-bold mb-5 w-96">{pinDetail.title}</h2>
        <h2 className="mb-10 w-96">{pinDetail.desc}</h2>
        <UserTag user={user} />
        <button
          type="button"
          className=" absolute -mt-9 ml-80 rounded-full bg-gray-100 px-4 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          Follow
        </button>
      </div>
         {/* add comment */}
      <div className="absolute justify-between space-x-4 mt-[700px] shadow-t -ml-10 pl-5 w-[534px]">
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

      {/* comment accordian */}
      <Accordion className="" sections={accordionData} />
    </div>
  );
}

export default PinInfo;
