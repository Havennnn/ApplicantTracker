import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage } from "@inertiajs/react";

export default function Dashboard() {
  const { user } = usePage().props.auth;
  return (
    <AuthenticatedLayout>
      <Head title="Dashboard" />
      <div className="px-12 py-6">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <h1>Hello welcome {user.name}</h1>
      </div>
    </AuthenticatedLayout>
  );
}
