import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage } from "@inertiajs/react";

export default function Dashboard() {
  const { user } = usePage().props.auth;
  return (
    <AuthenticatedLayout>
      <Head title="Dashboard" />
      <div className="px-12 py-4">
        <div className="flex gap-5">
          <div className="w-2/4 h-[620px] px-5 pt-5 rounded-xl bg-slate-100 shadow-xl">
            <h1 className="text-3xl font-bold mb-2">
              Hello welcome!{" "}
              <span className="text-indigo-600 uppercase">{user.name}</span> 👋
            </h1>
            <h1 className="text-lg mb-2">
              This is my submission for{" "}
              <span className="font-semibold">Laravel Project</span> Assessment
            </h1>
            <h1 className="text-indigo-600 font-semibold">Assessment Task:</h1>
            <p>Create a Laravel project for managing applicants.</p>
            <div>
              <h1 className="text-indigo-600 font-semibold mt-2">
                Framework Options:
              </h1>
              <p>Laravel + Blade & Alpine</p>
              <p>Laravel + Livewire</p>
              <p>Laravel + Filament</p>
              <p>Laravel + Vue</p>
              <p>Laravel + React.js</p>
            </div>
            <div>
              <h1 className="text-indigo-600 font-semibold mt-2">
                Applicant Management:
              </h1>
              <p>
                Implement Create, Read, Update, and Delete (CRUD) functionality
                for applicant records
              </p>
            </div>
            <div>
              <h1 className="text-indigo-600 font-semibold mt-2">
                Applicant Status Tags:
              </h1>
              <p>
                <p>Unviewed</p>
                <p>Interviewed</p>
                <p>Hired</p>
                <p>Onboarding</p>
                <p>Resign</p>
              </p>
            </div>
            <div>
              <h1 className="text-indigo-600 font-semibold mt-2">
                Authentication:
              </h1>
              <p>
                <p>Ensure the system has authentication for secure access.</p>
              </p>
            </div>
          </div>
          <div className="w-3/4 p-2">
            <h1 className="text-2xl font-semibold mt-2">INSTRUCTION:</h1>
            <p>Click the applicant tab for the managing the application CRUD</p>
            <h1 className="text-2xl font-semibold mt-2">
              MY APPROACH{" "}
              <span className="text-indigo-600 text-lg">
                {" (LARAVEL + REACT) "}
              </span>
              :
            </h1>
            <div>
              <h1 className="text-indigo-600 font-semibold mt-2">
                Framework Reasoning:
              </h1>
              <p>
                I want to improve my skills, and since I’ve already learned both
                frameworks, I decided to take it a step further by using Laravel
                for the backend and React for the frontend. I believe this
                combination is a great choice for building modern web
                applications.
              </p>
            </div>
            <div>
              <h1 className="text-indigo-600 font-semibold mt-4">
                Authentication:
              </h1>
              <p>
                Laravel Breeze has a built-in authentication, so I used it as a
                starting point. To make authentication i needed login, register,
                and email verification. And I want to make it when a user
                registers, they will receive a verification email. They must
                verify their email before they can fully access the system.
              </p>
            </div>
            <h1 className="font-semibold mt-4 text-2xl">
              CRUD Implementation:
            </h1>
            <div>
              <h1 className="text-indigo-600 text-xl font-semibold mt-2">
                Backend {"(Laravel)"}:
              </h1>
              <p className="font-bold text-md mt-2">
                Controller {"("}
                <span className="highlight">{"ApplicantController.php"}</span>
                {"):"}
              </p>
              <div className="px-6">
                <p>
                  <span className="highlight">{"index()"}</span> - Fetches all
                  applicants from the database and passes them to the frontend.
                </p>
                <p>
                  <span className="highlight">{"create()"}</span> - Returns the
                  form to add a new applicant.
                </p>
                <p>
                  <span className="highlight">{"store()"}</span> - Validates and
                  stores new applicant data in the database.
                </p>
                <p>
                  <span className="highlight">{"edit()"}</span> - Returns the
                  edit form with existing applicant details.
                </p>
                <p>
                  <span className="highlight">{"update()"}</span> - Validates
                  and updates an applicant's details in the database.
                </p>
                <p>
                  <span className="highlight">{"destroy()"}</span> - Deletes an
                  applicant from the database.
                </p>
              </div>
            </div>
            <div>
              <p className="font-bold text-md mt-2">
                Model {"("}
                <span className="highlight">{"Applicant.php"}</span>
                {"):"}
              </p>
              <div className="px-6">
                <p>
                  Defines the <span className="highlight">applicants</span>{" "}
                  table structure and allows mass assignment for fields like
                  <span className="highlight">name</span>,{" "}
                  <span className="highlight">email</span>,{" "}
                  <span className="highlight">phone</span>,{" "}
                  <span className="highlight">company</span>,{" "}
                  <span className="highlight">position</span>, and{" "}
                  <span className="highlight">status</span>.
                </p>
              </div>
            </div>
            <div>
              <p className="font-bold text-md mt-2">
                Routes {"("}
                <span className="highlight">{"web.php"}</span>
                {"):"}
              </p>
              <div className="px-6">
                <li>
                  Uses resource routing {"("}
                  <span className="highlight">
                    Route::resource('applicants', ApplicantController::class)
                  </span>
                  {")"} to handle CRUD operations efficiently.
                </li>
                <li>
                  <span className="highlight">Routes</span> are protected using
                  auth middleware, ensuring only authenticated users can manage
                  applicants.
                </li>
              </div>
            </div>
            <div>
              <p className="font-bold text-md mt-2">
                Migration {"("}
                <span className="highlight">{"applicants_table"}</span>
                {"):"}
              </p>
              <div className="px-6">
                <p>
                  Defines the table schema with fields like{" "}
                  <span className="highlight">name</span>,{" "}
                  <span className="highlight">email</span>,{" "}
                  <span className="highlight">phone</span>,{" "}
                  <span className="highlight">company</span>,{" "}
                  <span className="highlight">position</span>, and a default{" "}
                  <span className="highlight">status</span> of "Unviewed.".
                </p>
              </div>
            </div>
            <h1 className="text-indigo-600 text-xl font-semibold mt-2">
              Frontend {"(React)"}:
            </h1>
            <div>
              <li>
                Uses Inertia.js to communicate with Laravel backend seamlessly.
              </li>
              <li>
                State Management with React Hooks (useState, useForm) to handle
                form inputs and submission.
              </li>
              <li>CRUD Operations:</li>
              <div className="px-12">
                <li>
                  Create – Opens a modal (AddApplicantModal) to input new
                  applicant details.
                </li>
                <li>Read – Displays all applicants in a table.</li>
                <li>
                  Update – Allows inline editing of applicant details using
                  input fields and dropdowns.
                </li>
                <li>
                  Delete – Uses a confirmation dialog before deleting an
                  applicant.
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
