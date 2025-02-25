import React from "react";
import { useForm } from "@inertiajs/react";
import SecondaryButton from "./SecondaryButton";
import PrimaryButton from "./PrimaryButton";

export default function AddApplicantModal({ isOpen, onClose }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: "",
    email: "",
    phone: "",
    company: "",
    position: "",
    status: "Unviewed",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    post("/applicants", {
      onSuccess: () => {
        reset();
        onClose();
      },
    });
  };

  const handleCancel = () => {
    reset();
    onClose();
  };

  const jobPositions = {
    CNX: ["Customer Support", "Technical Support", "Sales Representative"],
    FNDVR: ["Software Engineer", "Web Developer", "QA Tester"],
    ACCTRE: ["Accountant", "Financial Analyst", "Payroll Specialist"],
    IQOR: ["Call Center Agent", "Operations Manager", "Team Leader"],
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Add Applicant</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              value={data.name}
              onChange={(e) => setData("name", e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
            {errors.name && (
              <p className="text-sm text-red-500">{errors.name}</p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              value={data.email}
              onChange={(e) => setData("email", e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email}</p>
            )}
          </div>

          {/* Phone Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone
            </label>
            <input
              type="text"
              value={data.phone}
              onChange={(e) => setData("phone", e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
            {errors.phone && (
              <p className="text-sm text-red-500">{errors.phone}</p>
            )}
          </div>

          {/* Company Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Company
            </label>
            <select
              value={data.company}
              onChange={(e) => setData("company", e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            >
              <option value="">Select a Company</option>
              <option value="CNX">CNX</option>
              <option value="FNDVR">FNDVR</option>
              <option value="ACCTRE">ACCTRE</option>
              <option value="IQOR">IQOR</option>
            </select>
            {errors.company && (
              <p className="text-sm text-red-500">{errors.company}</p>
            )}
          </div>

          {/* Job Position Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Job Position
            </label>
            <select
              value={data.position}
              onChange={(e) => setData("position", e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              disabled={!data.company}
            >
              <option value="">Select a job position</option>
              {data.company &&
                jobPositions[data.company]?.map((position) => (
                  <option key={position} value={position}>
                    {position}
                  </option>
                ))}
            </select>
            {errors.position && (
              <p className="text-sm text-red-500">{errors.position}</p>
            )}
          </div>

          {/* Status Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Status
            </label>
            <select
              value={data.status}
              onChange={(e) => setData("status", e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            >
              <option value="Unviewed">Unviewed</option>
              <option value="Interviewed">Interviewed</option>
              <option value="Hired">Hired</option>
              <option value="Onboarding">Onboarding</option>
              <option value="Resign">Resign</option>
            </select>
            {errors.status && (
              <p className="text-sm text-red-500">{errors.status}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex justify-end space-x-2">
            <SecondaryButton type="button" onClick={handleCancel}>
              Cancel
            </SecondaryButton>
            <PrimaryButton type="submit" disabled={processing}>
              {processing ? "Adding..." : "Add Applicant"}
            </PrimaryButton>
          </div>
        </form>
      </div>
    </div>
  );
}
