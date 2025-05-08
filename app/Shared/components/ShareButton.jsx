<<<<<<< HEAD
import ShareSvg from "./ShareSvg";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const ShareButton = () => {
  return (
    <div className="absolute inline-flex rounded-md shadow-sm -mt-11 ml-48 z-40">
      <a
        href="#"
        className="relative inline-flex items-center rounded-full bg-white px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
      >
        <span className="sr-only">Open options</span>
        <ShareSvg />
      </a>
    </div>
  )
}

export default ShareButton
=======
import ShareSvg from "./ShareSvg";

const ShareButton = () => {
  return (
    <div className="absolute inline-flex rounded-md shadow-sm -mt-11 ml-48 z-40">
      <a
        href="#"
        className="relative inline-flex items-center rounded-full bg-white px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
      >
        <span className="sr-only">Open options</span>
        <ShareSvg />
      </a>
    </div>
  )
}

export default ShareButton
>>>>>>> c86191d21872bb3414b7df39857ce46c11bc375d
