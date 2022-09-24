import React from "react";
import Image from "next/image";

const theaterArts = () => {
  return (
    <div className="mt-10 mx-auto max-w-6xl px-8 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 flex flex-row">
      <div className="sm:text-center lg:text-left">
        <h1 className="text-2xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-5xl">
          <span className="block xl:inline">Special Program in the Arts -</span>
          <span className="block text-blue-500 xl:inline">Theater Arts</span>
        </h1>
        <div className="mt-6 space-y-2 max-w-lg">
          <h2 className="text-2xl font-semibold text-slate-800">Vision</h2>
          <p className="text font-light">
            A specialization committed to mold learners to become creative,
            responsible and competitive theater practitioners, bearing the
            Filipino values, culture and tradition, bringing pride and honor to
            the community and to God Almighty.
          </p>
        </div>
        <div className="mt-6 space-y-2 max-w-lg">
          <h2 className="text-2xl font-semibold text-slate-800">Mission</h2>
          <p className="text font-light">
            We aim to produce theater practitioners who excel in their artistic
            expressions, realizing their skills, talents and potentials and
            maximizing their artistic abilities towards living as vital
            contributors to the community's development.
          </p>
        </div>
        <div className="mt-6 space-y-2 max-w-lg">
          <h1 className="text-2xl font-semibold text-slate-800">Objectives</h1>
          <p className="text font-light">
            Cuartero NHS SPA is committed to the development of responsible,
            creative and competitive young artists molding them to be cultural
            bearers by providing quality secondary education and artistic
            experiences and opportunities in the field of media arts. To uphold
            this commitment, this specialization shall:
          </p>
          <ul className=" list-disc list-inside mt-3 text font-light space-y-2">
            <li>
              Establish an environment conducive to artistic and culture-based
              education;
            </li>
            <li>
              Build strong relationships with stakeholders and community
              partners;
            </li>
            <li>
              Assess performance of learners to identify areas for improvement;
            </li>
            <li>
              Respect the age, gender, health, socio-economic, cultural, and
              religious concerns of the people;
            </li>
            <li>
              Foster excellence and love of country among the learners, teachers
              and stakeholders
            </li>
            <li>
              Create innovative programs and projects ensuring inclusive and
              quality art and culture-based education integrative to lifelong
              learning.
            </li>
          </ul>
        </div>
      </div>
      {/* Image */}
      <div className="pt-8 hidden lg:flex">
        <Image
          layout="intrinsic"
          src="/programs-assets/theater-arts.svg"
          alt="Hero Image"
          width={650}
          height={650}
        />
      </div>
    </div>
  );
};

export default theaterArts;
