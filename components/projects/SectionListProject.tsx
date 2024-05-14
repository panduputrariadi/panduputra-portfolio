import React from "react";
import { motion } from "framer-motion";
import { projects } from "@/constant/constant";
import Image from "next/image";
import Link from "next/link";

const SectionListProject = () => {
  return (
    <div className="bg-cover w-full flex justify-center items-center">
      <div className="w-full  p-5  ">
        <div className="w-12/12 mx-auto rounded-2xl  p-5 bg-opacity-40 backdrop-filter backdrop-blur-lg">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-center px-2 mx-auto"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {projects.map((project) => (
              <div
                key={project.id}
                className="p-6 mb-6 shadow transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer border"
              >
                <Link
                  target="_blank"
                  href={`${project.href}`}
                  className="absolute opacity-0 top-0 right-0 left-0 bottom-0"
                ></Link>
                <div className="relative mb-4 rounded-2xl">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    width={500}
                    height={500}
                  />
                  <Link
                    className="flex justify-center items-center bg-blue-600 bg-opacity-80 z-10 absolute top-0 left-0 w-full h-full text-white opacity-0 transition-all duration-300 transform group-hover:scale-10 text-xl group-hover:opacity-100"
                    href={`${project.href}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Go To Source Code
                    <svg
                      className="ml-2 w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 5l7 7-7 7M5 5l7 7-7 7"
                      ></path>
                    </svg>
                  </Link>
                </div>
                <div className="flex justify-between items-center w-full pb-4 mb-auto">
                  <div className="flex items-center">
                    <div className="pr-3">
                      <Image
                        className="h-12 w-12 rounded-full object-cover"
                        src={project.author.imageUrl}
                        alt=""
                        width={100}
                        height={100}
                      />
                    </div>
                    <div className="flex flex-1">
                      <div className="">
                        <p className="text-sm font-semibold ">
                          {project.author.name}
                        </p>
                        <p className="text-sm text-gray-500">
                          Published on {project.publishedDate}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="text-sm flex items-center text-gray-500 ">
                      {project.type}
                      <svg
                        className="ml-1 w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <h3 className="font-medium text-xl leading-8">
                  <Link
                    href={`${project.href}`}
                    className="block relative group-hover:text-blue-600 transition-colors duration-200"
                    target="_blank"
                  >
                    {project.title}
                  </Link>
                </h3>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SectionListProject;
