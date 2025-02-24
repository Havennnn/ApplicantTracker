import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";

export default function GuestLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col items-center bg-gray-100 sm:justify-center ">
      <section className="bg-white w-full">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
          <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </aside>

          <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
            <div className="max-w-xl lg:max-w-3xl">
              <Link href="/" className="flex items-center gap-1">
                <ApplicationLogo />
                <h1 className="text-lg sm:text-xl font-bold font-poppins text-[#1e1e1e]">
                  Lats
                  <span className="text-md sm:text-2xl text-[#AAAAAA]">
                    Marbls
                  </span>
                </h1>
              </Link>

              <h1 className="mt-8 text-2xl font-bold sm:text-3xl md:text-4xl font-poppins text-[#1e1e1e]">
                <span className="text-indigo-600">Applicant</span> Tracker
              </h1>

              <p className="mt-2 leading-relaxed text-gray-500">
                Note: This will send a verification to your email
              </p>

              <div className="mt-4">{children}</div>
            </div>
          </main>
        </div>
      </section>
    </div>
  );
}
