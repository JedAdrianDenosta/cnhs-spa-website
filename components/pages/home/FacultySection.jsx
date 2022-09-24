import React from "react";
import Image from "next/image";

const FacultySection = () => {
  return (
    <div
      id="#faculty"
      className="mt-10 mx-auto max-w-7xl px-8 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 text-slate-700 space-y-8"
    >
      <h1 className="text-4xl font-bold">✏️ Faculty and Staff</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 mt-10 mx-auto max-w-7xl px-8 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        {/* Mr. Ramie F. Capuyan */}
        <div className="shadow-xl hover:shadow-blue-500/60 hover:shadow-2xl space-y-8 flex flex-col justify-center bg-white p-16 rounded-lg max-w-md">
          <Image
            layout="intrinsic"
            src="/ramie.png"
            alt="Mr. Ramie F. Capuyan Photo"
            width={300}
            height={300}
            className="rounded-full w-auto h-10"
          />
          <h1 className="text-xl font-semibold text-slate-600">
            Mr. Ramie F. Capuyan
          </h1>
          <p className="text-slate-400 text-sm">
            Bachelor of Science in Development Communication, Diploma in
            Teaching, Master of Arts in Education - Teaching in the Challenge
            Areas (on-going)
          </p>
          <div className="gap-2 flex flex-wrap">
            <div className="text-sm bg-blue-500 w-auto h-auto grow-0 text-center py-1 px-3 font-medium rounded-full text-white ">
              SPA Coordinator
            </div>
            <div className="text-sm bg-blue-500 w-auto h-auto grow-0 text-center py-1 px-3 font-medium rounded-full text-white ">
              Music
            </div>
            <div className="text-sm bg-blue-500 w-auto h-auto grow-0 text-center py-1 px-3 font-medium rounded-full text-white ">
              Media Arts
            </div>
          </div>
        </div>

        {/* Mrs. Cute V. Candelario */}
        <div className="shadow-xl hover:shadow-blue-500/60 hover:shadow-2xl space-y-8 flex flex-col justify-center bg-white p-16 rounded-lg max-w-md">
          <Image
            layout="intrinsic"
            src="/cute.png"
            alt="Mrs. Cute V. Candelario Photo"
            width={300}
            height={300}
            className="rounded-full w-auto h-10"
          />
          <h1 className="text-xl font-semibold text-slate-600">
            Mrs. Cute V. Candelario
          </h1>
          <p className="text-slate-400 text-sm">
            Bachelor of Secondary Education - MAPEH, Masters of Arts in
            Education - MAPEH
          </p>
          <div className="gap-2 flex flex-wrap">
            <div className="text-sm bg-blue-500 w-auto h-auto grow-0 text-center py-1 px-3 font-medium rounded-full text-white ">
              Grade 7 - Gamayo Adviser
            </div>
            <div className="text-sm bg-blue-500 w-auto h-auto grow-0 text-center py-1 px-3 font-medium rounded-full text-white ">
              Music
            </div>
          </div>
        </div>

        {/* Ms. Caren F. Palonpon */}
        <div className="shadow-xl hover:shadow-blue-500/60 hover:shadow-2xl space-y-8 flex flex-col justify-center bg-white p-16 rounded-lg max-w-md">
          <Image
            layout="intrinsic"
            src="/caren.png"
            alt="Ms. Caren F. Palonpon Photo"
            width={300}
            height={300}
            className="rounded-full w-auto h-10"
          />
          <h1 className="text-xl font-semibold text-slate-600">
            Ms. Caren F. Palonpon
          </h1>
          <p className="text-slate-400 text-sm">
            Bachelor of Secondary Education - English, Masters of Arts in
            Teaching - English
          </p>
          <div className="gap-2 flex flex-wrap">
            <div className="text-sm bg-blue-500 w-auto h-auto grow-0 text-center py-1 px-3 font-medium rounded-full text-white ">
              Grade 8 - Saclag Adviser
            </div>
            <div className="text-sm bg-blue-500 w-auto h-auto grow-0 text-center py-1 px-3 font-medium rounded-full text-white ">
              Theater Arts
            </div>
          </div>
        </div>

        {/* Mrs. Rachel Jane D. Fajilan */}
        <div className="shadow-xl hover:shadow-blue-500/60 hover:shadow-2xl space-y-8 flex flex-col justify-center bg-white p-16 rounded-lg max-w-md">
          <Image
            layout="intrinsic"
            src="/rachel.png"
            alt="Mrs. Rachel Jane D. Fajilan Photo"
            width={300}
            height={300}
            className="rounded-full w-auto h-10"
          />
          <h1 className="text-xl font-semibold text-slate-600">
            Mrs. Rachel Jane D. Fajilan
          </h1>
          <p className="text-slate-400 text-sm">
            Bachelor of Physical Education, Master of Arts in Education - MAPEH
          </p>
          <div className="gap-2 flex flex-wrap">
            <div className="text-sm bg-blue-500 w-auto h-auto grow-0 text-center py-1 px-3 font-medium rounded-full text-white ">
              Grade 9 - Caballero Adviser
            </div>
            <div className="text-sm bg-blue-500 w-auto h-auto grow-0 text-center py-1 px-3 font-medium rounded-full text-white ">
              Dance
            </div>
          </div>
        </div>

        {/* Mrs. Roda G. Henorga */}
        <div className="shadow-xl hover:shadow-blue-500/60 hover:shadow-2xl space-y-8 flex flex-col justify-center bg-white p-16 rounded-lg max-w-md">
          <Image
            layout="intrinsic"
            src="/roda.png"
            alt="Mrs. Roda G. Henorga Photo"
            width={300}
            height={300}
            className="rounded-full w-auto h-10"
          />
          <h1 className="text-xl font-semibold text-slate-600">
            Mrs. Roda G. Henorga
          </h1>
          <p className="text-slate-400 text-sm">
            Bachelor of Secondary Education - Religious Education, Master of
            Arts in Education - Religious and Values Education
          </p>
          <div className="gap-2 flex flex-wrap">
            <div className="text-sm bg-blue-500 w-auto h-auto grow-0 text-center py-1 px-3 font-medium rounded-full text-white ">
              Grade 10 - Garcia Adviser
            </div>
            <div className="text-sm bg-blue-500 w-auto h-auto grow-0 text-center py-1 px-3 font-medium rounded-full text-white ">
              Visual Arts
            </div>
          </div>
        </div>

        {/* Mr. Mar Sebastian B. Palonpon */}
        <div className="shadow-xl hover:shadow-blue-500/60 hover:shadow-2xl space-y-8 flex flex-col justify-center bg-white p-16 rounded-lg max-w-md">
          <Image
            layout="intrinsic"
            src="/mar.png"
            alt="Mr. Mar Sebastian B. Palonpon Photo"
            width={300}
            height={300}
            className="rounded-full w-auto h-10"
          />
          <h1 className="text-xl font-semibold text-slate-600">
            Mr. Mar Sebastian B. Palonpon
          </h1>
          <p className="text-slate-400 text-sm">
            Bachelor in Physical Education, Master of Arts in Education - MAPEH
          </p>
          <div className="gap-2 flex flex-wrap">
            <div className="text-sm bg-blue-500 w-auto h-auto grow-0 text-center py-1 px-3 font-medium rounded-full text-white ">
              Dance
            </div>
          </div>
        </div>

        {/* Ms. Sheila M. Villabeto */}
        <div className="shadow-xl hover:shadow-blue-500/60 hover:shadow-2xl space-y-8 flex flex-col justify-center bg-white p-16 rounded-lg max-w-md">
          <Image
            layout="intrinsic"
            src="/sheila.png"
            alt="Ms. Sheila M. Villabeto Photo"
            width={300}
            height={300}
            className="rounded-full w-auto h-10"
          />
          <h1 className="text-xl font-semibold text-slate-600">
            Ms. Sheila M. Villabeto
          </h1>
          <p className="text-slate-400 text-sm">To be update</p>
          <div className="gap-2 flex flex-wrap">
            <div className="text-sm bg-blue-500 w-auto h-auto grow-0 text-center py-1 px-3 font-medium rounded-full text-white ">
              Dance
            </div>
          </div>
        </div>

        {/* Mrs. Jeycel F. Huenda */}
        <div className="shadow-xl hover:shadow-blue-500/60 hover:shadow-2xl space-y-8 flex flex-col justify-center bg-white p-16 rounded-lg max-w-md">
          <Image
            layout="intrinsic"
            src="/jeycel.png"
            alt="Mrs. Jeycel F. Huenda Photo"
            width={300}
            height={300}
            className="rounded-full w-auto h-10"
          />
          <h1 className="text-xl font-semibold text-slate-600">
            Mrs. Jeycel F. Huenda
          </h1>
          <p className="text-slate-400 text-sm">
            Bachelor of Secondary Edcation - MAPEH, Master of Arts in Education
            - MAPEH
          </p>
          <div className="gap-2 flex flex-wrap">
            <div className="text-sm bg-blue-500 w-auto h-auto grow-0 text-center py-1 px-3 font-medium rounded-full text-white ">
              Dance
            </div>
            <div className="text-sm bg-blue-500 w-auto h-auto grow-0 text-center py-1 px-3 font-medium rounded-full text-white ">
              Music
            </div>
          </div>
        </div>

        {/* Ms. Lady Mae M. Miranda */}
        <div className="shadow-xl hover:shadow-blue-500/60 hover:shadow-2xl space-y-8 flex flex-col justify-center bg-white p-16 rounded-lg max-w-md">
          <Image
            layout="intrinsic"
            src="/lady.png"
            alt="Ms. Lady Mae M. Miranda Photo"
            width={300}
            height={300}
            className="rounded-full w-auto h-10"
          />
          <h1 className="text-xl font-semibold text-slate-600">
            Ms. Lady Mae M. Miranda
          </h1>
          <p className="text-slate-400 text-sm">
            Bachelor in Secondary Edcation - English, Master of Arts in
            Education - Language Teaching in English
          </p>
          <div className="gap-2 flex flex-wrap">
            <div className="text-sm bg-blue-500 w-auto h-auto grow-0 text-center py-1 px-3 font-medium rounded-full text-white ">
              Theater Arts
            </div>
          </div>
        </div>

        {/* Ms. Bea Xianne B. Bermejo */}
        <div className="shadow-xl hover:shadow-blue-500/60 hover:shadow-2xl space-y-8 flex flex-col justify-center bg-white p-16 rounded-lg max-w-md">
          <Image
            layout="intrinsic"
            src="/bea.png"
            alt="Ms. Bea Xianne B. Bermejo Photo"
            width={300}
            height={300}
            className="rounded-full w-auto h-10"
          />
          <h1 className="text-xl font-semibold text-slate-600">
            Ms. Bea Xianne B. Bermejo
          </h1>
          <p className="text-slate-400 text-sm">
            Bachelor of Science in Biology
          </p>
          <div className="gap-2 flex flex-wrap">
            <div className="text-sm bg-blue-500 w-auto h-auto grow-0 text-center py-1 px-3 font-medium rounded-full text-white ">
              Visual Arts
            </div>
          </div>
        </div>

        {/* Ms. Ma. Ira F. Fantilanan */}
        <div className="shadow-xl hover:shadow-blue-500/60 hover:shadow-2xl space-y-8 flex flex-col justify-center bg-white p-16 rounded-lg max-w-md">
          <Image
            layout="intrinsic"
            src="/ira.png"
            alt="Ms. Ma. Ira F. Fantilanan Photo"
            width={300}
            height={300}
            className="rounded-full w-auto h-10"
          />
          <h1 className="text-xl font-semibold text-slate-600">
            Ms. Ma. Ira F. Fantilanan
          </h1>
          <p className="text-slate-400 text-sm">
            Bachelor of Secondary Education - English, Master of Arts in
            Teaching - English
          </p>
          <div className="gap-2 flex flex-wrap">
            <div className="text-sm bg-blue-500 w-auto h-auto grow-0 text-center py-1 px-3 font-medium rounded-full text-white ">
              Media Arts
            </div>
          </div>
        </div>

        {/* Mrs. Annie G. Dimaala */}
        <div className="shadow-xl hover:shadow-blue-500/60 hover:shadow-2xl space-y-8 flex flex-col justify-center bg-white p-16 rounded-lg max-w-md">
          <Image
            layout="intrinsic"
            src="/annie.png"
            alt="Mrs. Annie G. Dimaala Photo"
            width={300}
            height={300}
            className="rounded-full w-auto h-10"
          />
          <h1 className="text-xl font-semibold text-slate-600">
            Mrs. Annie G. Dimaala
          </h1>
          <p className="text-slate-400 text-sm">
            Bachelor of Science in Secondary Education - Values Education,
            Master of Arts in Education - Guidance and Counselling
          </p>
          <div className="gap-2 flex flex-wrap">
            <div className="text-sm bg-blue-500 w-auto h-auto grow-0 text-center py-1 px-3 font-medium rounded-full text-white ">
              Creative Writing
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacultySection;
