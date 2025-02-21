import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage } from "@inertiajs/react";

export default function Dashboard() {
  const { user } = usePage().props.auth;
  return (
    <AuthenticatedLayout>
      <Head title="Dashboard" />
      <div className="px-12 py-6">
        <h1 className="text-3xl font-bold mb-2">
          Hello welcome!{" "}
          <span className="text-indigo-600 uppercase">{user.name}</span>
        </h1>
        <h1 className="text-lg mb-2">This is my Assessment</h1>
        <p>So the assessment is</p>
      </div>
    </AuthenticatedLayout>
  );
}
