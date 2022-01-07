import { Menu, Transition } from "@headlessui/react";
import { DotsVerticalIcon } from "@heroicons/react/outline";
import React, { Fragment } from "react";

const Index = () => {
  const projects = [
    {
      id: 1,
      title: "GraphQL API",
      initials: "GA",
      team: "Engineering",
      members: [
        {
          name: "Courtney Henry",
          handle: "courtneyhenry",
          imageUrl:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
        {
          name: "Tom Cook",
          handle: "tomcook",
          imageUrl:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
      ],
      totalMembers: 2,
      pinned: true,
      bgColorClass: "bg-pink-600",
    },
    {
      id: 2,
      title: "GraphQL API",
      initials: "GA",
      team: "Engineering",
      members: [
        {
          name: "Courtney Henry",
          handle: "courtneyhenry",
          imageUrl:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
        {
          name: "Tom Cook",
          handle: "tomcook",
          imageUrl:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
      ],
      totalMembers: 2,
      pinned: true,
      bgColorClass: "bg-blue-600",
    },
  ];

  const pinnedProjects = projects.filter((project) => project.pinned);

  function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <>
      <div className="relative border-4 border-dashed border-gray-200 rounded-lg h-96">
        <div
          className="absolute bg-cover min-h-full rounded-md min-w-full"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=806&q=80)`,
          }}
        >
          <h1 className="absolute text-2xl md:text-4xl font-bold text-white top-6 md:top-8 left-4">Welcome back</h1>
        </div>
      </div>

      <div className=" mt-6">
        <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide">
          Pinned Projects
        </h2>
        <ul className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 2xl:grid-cols-4 mt-3">
          {pinnedProjects.map((project) => (
            <li
              key={project.id}
              className="relative col-span-1 flex shadow-sm rounded-md"
            >
              <div
                className={classNames(
                  project.bgColorClass,
                  "flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md"
                )}
              >
                {project.initials}
              </div>
              <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                <div className="flex-1 px-4 py-2 text-sm truncate">
                  <a
                    href="#"
                    className="text-gray-900 font-medium hover:text-gray-600"
                  >
                    {project.title}
                  </a>
                  <p className="text-gray-500">
                    {project.totalMembers} Members
                  </p>
                </div>
                <Menu as="div" className="flex-shrink-0 pr-2">
                  {({ open }) => (
                    <>
                      <Menu.Button className="w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                        <span className="sr-only">Open options</span>
                        <DotsVerticalIcon
                          className="w-5 h-5"
                          aria-hidden="true"
                        />
                      </Menu.Button>
                      <Transition
                        show={open}
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items
                          static
                          className="z-10 mx-3 origin-top-right absolute right-10 top-3 w-48 mt-1 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 focus:outline-none"
                        >
                          <div className="py-1">
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "block px-4 py-2 text-sm"
                                  )}
                                >
                                  View
                                </a>
                              )}
                            </Menu.Item>
                          </div>
                          <div className="py-1">
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "block px-4 py-2 text-sm"
                                  )}
                                >
                                  Removed from pinned
                                </a>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "block px-4 py-2 text-sm"
                                  )}
                                >
                                  Share
                                </a>
                              )}
                            </Menu.Item>
                          </div>
                        </Menu.Items>
                      </Transition>
                    </>
                  )}
                </Menu>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Index;
