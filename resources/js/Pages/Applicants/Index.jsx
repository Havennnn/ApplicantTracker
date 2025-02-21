import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import AddApplicantModal from "@/Components/AddApplicantModal";

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
        <div className="bg-indigo-500 bg-opacity-50 flex w-full justify-center items-center p-2 rounded-xl">
          <p className="font-bold">
            * This is where the managing the applicants will be. *
          </p>
        </div>
        <div className="flex items-center justify-between mt-2">
          <h1 className="text-2xl font-bold py-2">Applicants List</h1>
          <button
            onClick={openModal}
            className="bg-indigo-600 text-white px-4 py-2 rounded flex items-center justify-center hover:bg-indigo-700"
          >
            Add Applicant
          </button>
        </div>

        <AddApplicantModal isOpen={isModalOpen} onClose={closeModal} />

        <div className="overflow-x-auto mt-2">
          <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
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
                        className="border rounded p-1"
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
                        className="border rounded p-1"
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
                        className="border rounded p-1"
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
                        className="border rounded p-1"
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
                        className="border rounded p-1"
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
                        className="border rounded p-1"
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
                  <td className="px-4 py-2 whitespace-nowrap flex gap-2 items-center">
                    {editingId === applicant.id ? (
                      <>
                        <button
                          onClick={() => handleEditSubmit(applicant.id)}
                          className="inline-block rounded-sm bg-green-600 px-4 py-2 text-xs font-medium text-white hover:bg-green-700"
                        >
                          Save
                        </button>
                        <button
                          onClick={() => setEditingId(null)}
                          className="inline-block rounded-sm bg-gray-600 px-4 py-2 text-xs font-medium text-white hover:bg-gray-700"
                        >
                          Cancel
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          onClick={() => enableEdit(applicant)}
                          className="inline-block rounded-sm bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(applicant.id)}
                          className="inline-block rounded-sm bg-red-600 px-4 py-2 text-xs font-medium text-white hover:bg-red-700"
                          disabled={processing}
                        >
                          {processing ? "Deleting..." : "Delete"}
                        </button>
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
