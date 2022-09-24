import { Fragment } from "react";
import Link from "next/link";
import { Popover, Transition } from "@headlessui/react";
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  ShieldCheckIcon,
  SupportIcon,
  XIcon,
} from "@heroicons/react/outline";
import { BsMessenger as Messenger } from "react-icons/bs";
import { AiFillInstagram as Instagram } from "react-icons/ai";
import { AiFillFacebook as Facebook } from "react-icons/ai";
import { ChevronDownIcon } from "@heroicons/react/solid";

const about = [
  {
    name: "About Us",
    description:
      "This section is dedicated to the purpose of providing information about the school and its history.",
    href: "/",
    icon: ChartBarIcon,
  },
  {
    name: "Mission",
    description:
      "This section is dedicated to the purpose of providing information about the school's mission.",
    href: "/",
    icon: CursorClickIcon,
  },
  {
    name: "Vision",
    description:
      "This section is dedicated to the purpose of providing information about the school's vision.",
    href: "/",
    icon: ShieldCheckIcon,
  },
  // {
  //   name: "Integrations",
  //   description: "Connect with third-party tools that you're already using.",
  //   href: "/",
  //   icon: ViewGridIcon,
  // },
  // {
  //   name: "Automations",
  //   description:
  //     "Build strategic funnels that will drive your customers to convert",
  //   href: "/",
  //   icon: RefreshIcon,
  // },
];
const callsToAction = [{ name: "Contact Us", href: "/", icon: PhoneIcon }];
const resources = [
  {
    name: "Help Center",
    description:
      "Get all of your questions answered in our forums or contact support.",
    href: "/",
    icon: SupportIcon,
  },
  {
    name: "Guides",
    description:
      "Learn how to maximize our platform to get the most out of it.",
    href: "/",
    icon: BookmarkAltIcon,
  },
  {
    name: "Events",
    description:
      "See what meet-ups and other events we might be planning near you.",
    href: "/",
    icon: CalendarIcon,
  },
  {
    name: "Security",
    description: "Understand how we take your privacy seriously.",
    href: "/",
    icon: ShieldCheckIcon,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Nav() {
  return (
    <Popover className="relative bg-white shadow-xl shadow-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start flex-grow lg:w-0 lg:flex-1">
            <Link href="/" className="flex flex-xol items-center">
              <img
                className="h-12 w-auto sm:h-16"
                src="data:image/jpeg;base64,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"
                alt=""
              />
            </Link>
          </div>
          {/* Mobile Navbar */}
          {/* <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div> */}
          <Popover.Group as="nav" className="hidden md:flex space-x-10">
            <Link href="/">
              <span className="text-base font-medium text-gray-500 hover:text-gray-900 hover:cursor-pointer">
                Home
              </span>
            </Link>

            {/* <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? "text-gray-900" : "text-gray-500",
                      "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    )}
                  >
                    <span className=" hover:cursor-not-allowed">About</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? "text-gray-600" : "text-gray-400",
                        "ml-2 h-5 w-5 group-hover:text-gray-500"
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {about.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                            >
                              <item.icon
                                className="flex-shrink-0 h-6 w-6 text-blue-600"
                                aria-hidden="true"
                              />
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">
                                  {item.name}
                                </p>
                                <p className="mt-1 text-sm text-gray-500">
                                  {item.description}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover> */}

            <Link href="/">
              <span className="text-base font-medium text-gray-500 hover:text-gray-900 hover:cursor-not-allowed">
                About
              </span>
            </Link>

            {/* Programmes Oferred */}
            <Link href="/">
              <span className="text-base font-medium text-gray-500 hover:text-gray-900 hover:cursor-not-allowed">
                Programmes Offered
              </span>
            </Link>
            {/* Faculty and Staff */}
            <Link href="/">
              <span className="text-base font-medium text-gray-500 hover:text-gray-900 hover:cursor-not-allowed">
                Faculty and Staff
              </span>
            </Link>
          </Popover.Group>
          <div className="hidden lg:flex items-center justify-end lg:flex-1 lg:w-0 space-x-6 text-2xl">
            <Link
              href="/"
              className="hover:bg-blue-500 hover:p-1.5 hover:rounded-lg hover:text-white opacity-75"
            >
              <Facebook />
            </Link>
            <Link
              href="/"
              className="hover:bg-blue-500 hover:p-1.5 hover:rounded-lg hover:text-white opacity-75"
            >
              <Messenger />
            </Link>
            <Link
              href="/"
              className="hover:bg-blue-500 hover:p-1.5 hover:rounded-lg hover:text-white opacity-75"
            >
              <Instagram />
            </Link>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-blue-600.svg"
                    alt="Workflow"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {about.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                      <item.icon
                        className="flex-shrink-0 h-6 w-6 text-blue-600"
                        aria-hidden="true"
                      />
                      <span className="ml-3 text-base font-medium text-gray-900">
                        {item.name}
                      </span>
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <Link
                  href="/"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Pricing
                </Link>

                <Link
                  href="/"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Docs
                </Link>
                {resources.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
