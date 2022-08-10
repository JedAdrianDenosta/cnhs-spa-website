import React from "react";
import Link from "next/link";
import { FiMusic as Music } from "react-icons/fi";
import { IoBrushOutline as Visual } from "react-icons/io5";
import { AiOutlineCamera as Media } from "react-icons/ai";
import { BsPencil as Creative } from "react-icons/bs";
import { FaTheaterMasks as Theater } from "react-icons/fa";
import { IoAccessibilityOutline as Dance } from "react-icons/io5";

const ProgramSection = () => {
  return (
    <>
      <div
        id="#programs"
        className="bg-gradient-to-tl from-blue-100 via-blue-300 to-blue-500 text-white h-full"
      >
        <div className="mt-10 mx-auto max-w-7xl px-8 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 py-32 space-y-16">
          <h1 className="text-4xl font-bold">💡Programmes we offer</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-content-center gap-16 mt-10 mx-auto max-w-7xl px-8 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            {/* Music (Voice/Instrument) */}
            <div className="hover:shadow-lg space-y-8 flex flex-col justify-center bg-white p-16 rounded-lg">
              <Music className="h-32 w-auto text-blue-400" />
              <h1 className="text-lg font-medium text-center text-slate-600">
                Music (Voice/Instrument)
              </h1>
              <p className="text-slate-400">
                A specialization committed to mold learners to become creative,
                responsible and competitive musicians.
              </p>
              <span className="flex justify-start">
                <Link href="/music">
                  <a className=" w-auto p-4 bg-blue-500 font-medium text-white rounded-lg hover:bg-blue-600">
                    Learn More
                  </a>
                </Link>
              </span>
            </div>

            {/* Visual Arts */}
            <div className="hover:shadow-lg space-y-8 flex flex-col justify-center bg-white p-16 rounded-lg">
              <Visual className="h-32 w-auto text-blue-400" />
              <h1 className="text-lg font-medium text-center text-slate-600">
                Visual Arts
              </h1>
              <p className="text-slate-400">
                A specialization committed to mold learners to become creative,
                responsible and competitive visual artists.
              </p>
              <span className="flex justify-start">
                <Link href="/visualArts">
                  <a className=" w-auto p-4 bg-blue-500 font-medium text-white rounded-lg hover:bg-blue-600">
                    Learn More
                  </a>
                </Link>
              </span>
            </div>

            {/* Media Arts */}
            <div className="hover:shadow-lg space-y-8 flex flex-col justify-center bg-white p-16 rounded-lg">
              <Media className="h-32 w-auto text-blue-400" />
              <h1 className="text-lg font-medium text-center text-slate-600">
                Media Arts
              </h1>
              <p className="text-slate-400">
                A specialization committed to mold learners to become creative,
                responsible and competitive media artists.
              </p>
              <span className="flex justify-start">
                <Link href="/mediaArts">
                  <a className=" w-auto p-4 bg-blue-500 font-medium text-white rounded-lg hover:bg-blue-600">
                    Learn More
                  </a>
                </Link>
              </span>
            </div>

            {/* Creative Writing */}
            <div className="hover:shadow-lg space-y-8 flex flex-col justify-center bg-white p-16 rounded-lg">
              <Creative className="h-32 w-auto text-blue-400" />
              <h1 className="text-lg font-medium text-center text-slate-600">
                Creative Writing
              </h1>
              <p className="text-slate-400">
                A specialization committed to mold learners to become creative,
                responsible and competitive writers.
              </p>
              <span className="flex justify-start">
                <Link href="/creativeWriting">
                  <a className=" w-auto p-4 bg-blue-500 font-medium text-white rounded-lg hover:bg-blue-600">
                    Learn More
                  </a>
                </Link>
              </span>
            </div>

            {/* Theater Arts */}
            <div className="hover:shadow-lg space-y-8 flex flex-col justify-center bg-white p-16 rounded-lg">
              <Theater className="h-32 w-auto text-blue-400" />
              <h1 className="text-lg font-medium text-center text-slate-600">
                Theater Arts
              </h1>
              <p className="text-slate-400">
                A specialization committed to mold learners to become creative,
                responsible and competitive theater practitioners.
              </p>
              <span className="flex justify-start">
                <Link href="/theaterArts">
                  <a className=" w-auto p-4 bg-blue-500 font-medium text-white rounded-lg hover:bg-blue-600">
                    Learn More
                  </a>
                </Link>
              </span>
            </div>

            {/* Dance */}
            <div
              href=""
              className="hover:shadow-lg space-y-8 flex flex-col justify-center bg-white p-16 rounded-lg"
            >
              <Dance className="h-32 w-auto text-blue-400" />
              <h1 className="text-lg font-medium text-center text-slate-600">
                Dance
              </h1>
              <p className="text-slate-400">
                A specialization committed to mold learners to become creative,
                responsible and competitive dance artists.
              </p>
              <span className="flex justify-start">
                <Link href="/dance">
                  <a className=" w-auto p-4 bg-blue-500 font-medium text-white rounded-lg hover:bg-blue-600">
                    Learn More
                  </a>
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgramSection;
