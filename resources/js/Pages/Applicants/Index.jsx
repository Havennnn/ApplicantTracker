import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import AddApplicantModal from "@/Components/AddApplicantModal";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";

export default function Index({ applicants }) {
  const { delete: destroy, processing } = useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const { data, setData, put, reset } = useForm({});

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete this applicant?")) {
      destroy(`/applicants/${id}`);
    }
  };

  const enableEdit = (applicant) => {
    setEditingId(applicant.id);
    setData({
      name: applicant.name,
      email: applicant.email,
      phone: applicant.phone,
      company: applicant.company,
      position: applicant.position,
      status: applicant.status,
    });
  };

  const handleEditSubmit = (id) => {
    put(`/applicants/${id}`, {
      onSuccess: () => {
        setEditingId(null);
        reset();
      },
    });
  };

  const jobPositions = {
    CNX: ["Customer Support", "Technical Support", "Sales Representative"],
    FNDVR: ["Software Engineer", "Web Developer", "QA Tester"],
    ACCTRE: ["Accountant", "Financial Analyst", "Payroll Specialist"],
    IQOR: ["Call Center Agent", "Operations Manager", "Team Leader"],
  };

  return (
    <AuthenticatedLayout>
      <Head title="Applicants" />
      <div className="px-12 py-4">
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center justify-center gap-1 text-[#1e1e1e]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 11c1.656 0 3-1.344 3-3s-1.344-3-3-3-3 1.344-3 3 1.344 3 3 3zm0 2c-2.21 0-4 1.79-4 4v2h8v-2c0-2.21-1.79-4-4-4zm6 0h2a2 2 0 0 1 2 2v4h-4m0-6v6m-6-6h6"
              />
            </svg>
            <h1 className="text-2xl font-semibold py-2 font-poppins">
              Applicants List
            </h1>
          </div>
          <PrimaryButton onClick={openModal}>Add Applicant</PrimaryButton>
        </div>

        <AddApplicantModal isOpen={isModalOpen} onClose={closeModal} />

        <div className="overflow-x-auto mt-2">
          <table className="min-w-full max-w-full divide-y-2 divide-gray-200 bg-white text-sm">
            <thead className="ltr:text-left rtl:text-right">
              <tr>
                <th className="px-4 py-2 font-medium whitespace-nowrap text-gray-900">
                  Applicant Name
                </th>
                <th className="px-4 py-2 font-medium whitespace-nowrap text-gray-900">
                  Email
                </th>
                <th className="px-4 py-2 font-medium whitespace-nowrap text-gray-900">
                  Phone Number
                </th>
                <th className="px-4 py-2 font-medium whitespace-nowrap text-gray-900">
                  Company
                </th>
                <th className="px-4 py-2 font-medium whitespace-nowrap text-gray-900">
                  Job Position
                </th>
                <th className="px-4 py-2 font-medium whitespace-nowrap text-gray-900">
                  Status
                </th>
                <th className="px-4 py-2"></th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200 text-center">
              {applicants.map((applicant) => (
                <tr key={applicant.id}>
                  {/* Name */}
                  <td className="px-4 py-2 font-medium whitespace-nowrap text-gray-900">
                    {editingId === applicant.id ? (
                      <input
                        type="text"
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                        className="border rounded p-1 w-32 text-sm"
                      />
                    ) : (
                      applicant.name
                    )}
                  </td>

                  {/* Email */}
                  <td className="px-4 py-2 whitespace-nowrap text-gray-700">
                    {editingId === applicant.id ? (
                      <input
                        type="email"
                        value={data.email}
                        onChange={(e) => setData("email", e.target.value)}
                        className="border rounded p-1 w-36 text-sm"
                      />
                    ) : (
                      applicant.email
                    )}
                  </td>

                  {/* Phone */}
                  <td className="px-4 py-2 whitespace-nowrap text-gray-700">
                    {editingId === applicant.id ? (
                      <input
                        type="text"
                        value={data.phone}
                        onChange={(e) => setData("phone", e.target.value)}
                        className="border rounded p-1 w-28 text-sm"
                      />
                    ) : (
                      applicant.phone
                    )}
                  </td>

                  {/* Company */}
                  <td className="px-4 py-2 whitespace-nowrap text-gray-700">
                    {editingId === applicant.id ? (
                      <select
                        value={data.company}
                        onChange={(e) => setData("company", e.target.value)}
                        className="border rounded p-1 w-24 text-sm"
                      >
                        <option value="CNX">CNX</option>
                        <option value="FNDVR">FNDVR</option>
                        <option value="ACCTRE">ACCTRE</option>
                        <option value="IQOR">IQOR</option>
                      </select>
                    ) : (
                      applicant.company
                    )}
                  </td>

                  {/* Job Position */}
                  <td className="px-4 py-2 whitespace-nowrap text-gray-700">
                    {editingId === applicant.id ? (
                      <select
                        value={data.position}
                        onChange={(e) => setData("position", e.target.value)}
                        className="border rounded p-1 w-[180px] text-sm"
                      >
                        <option value="">Select a job position</option>
                        {data.company &&
                          jobPositions[data.company]?.map((position) => (
                            <option key={position} value={position}>
                              {position}
                            </option>
                          ))}
                      </select>
                    ) : (
                      applicant.position
                    )}
                  </td>

                  {/* Status */}
                  <td className="px-4 py-2 whitespace-nowrap text-gray-700">
                    {editingId === applicant.id ? (
                      <select
                        value={data.status}
                        onChange={(e) => setData("status", e.target.value)}
                        className="border rounded p-1 w-32 text-sm"
                      >
                        <option value="Unviewed">Unviewed</option>
                        <option value="Interviewed">Interviewed</option>
                        <option value="Hired">Hired</option>
                        <option value="Onboarding">Onboarding</option>
                        <option value="Resign">Resign</option>
                      </select>
                    ) : (
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold
                ${
                  applicant.status === "Hired"
                    ? "bg-green-100 text-green-700"
                    : ""
                }
                ${
                  applicant.status === "Interviewed"
                    ? "bg-blue-100 text-blue-700"
                    : ""
                }
                ${
                  applicant.status === "Onboarding"
                    ? "bg-yellow-100 text-yellow-700"
                    : ""
                }
                ${
                  applicant.status === "Resign" ? "bg-red-100 text-red-700" : ""
                }
                ${
                  applicant.status === "Unviewed"
                    ? "bg-gray-100 text-gray-700"
                    : ""
                }
            `}
                      >
                        {applicant.status === "Hired" && (
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                        )}
                        {applicant.status === "Interviewed" && (
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        )}
                        {applicant.status === "Onboarding" && (
                          <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                        )}
                        {applicant.status === "Resign" && (
                          <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                        )}
                        {applicant.status === "Unviewed" && (
                          <span className="w-2 h-2 bg-gray-500 rounded-full mr-2"></span>
                        )}
                        {applicant.status}
                      </span>
                    )}
                  </td>

                  {/* Actions */}
                  <td className="px-4 py-2 whitespace-nowrap flex gap-2 items-end">
                    {editingId === applicant.id ? (
                      <>
                        <SecondaryButton
                          onClick={() => handleEditSubmit(applicant.id)}
                        >
                          Save
                        </SecondaryButton>
                        <SecondaryButton onClick={() => setEditingId(null)}>
                          Cancel
                        </SecondaryButton>
                      </>
                    ) : (
                      <>
                        <SecondaryButton onClick={() => enableEdit(applicant)}>
                          Edit
                        </SecondaryButton>
                        <SecondaryButton
                          onClick={() => handleDelete(applicant.id)}
                          disabled={processing}
                        >
                          {processing ? "Deleting..." : "Delete"}
                        </SecondaryButton>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
