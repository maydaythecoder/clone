"use client";
import React from "react";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import {
  FaceSmileIcon,
  HeartIcon,
  ChevronDownIcon,
} from "@heroicons/react/20/solid";
import ShareSvg from "@/app/Shared/components/ShareSvg";
import PinUserTag from "../../Shared/components/PinUserTag";
import ThreeDotSvg from "@/app/Shared/components/ThreeDotSvg";


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function PinInfo({ pinDetail }) {

  return (
    <div className=" align-middle min-h-fit">
      <button
        className="p-2 text-[23px] -mt-11 absolute rounded-full  transition-all" onClick={() => window.open(pinDetail.link)} >
        <ShareSvg/>
      </button>

      <Menu as="div" className=" inline-block text-left absolute -mt-20">
        <div>
          <Menu.Button
            className="p-2 text-[23px] mt-10 absolute ml-10 rounded-full  transition-all">
            <ThreeDotSvg />
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


      <Menu as="div" className=" inline-block text-left absolute -mt-11 ml-72 ">
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
        className=" absolute -mt-11 ml-96 rounded-full bg-red-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
      >
        Save
      </button>

      <div className="mt-16 ">
        <h2 className="text-[30px] font-bold mb-5 w-96">{pinDetail.title || pinDetail.alt_description}</h2>
        <h2 className="mb-10 w-96">{pinDetail.desc || pinDetail.description}</h2>
      <PinUserTag pinId={pinDetail.id} />
      </div>
    </div>
  );
}

export default PinInfo;
