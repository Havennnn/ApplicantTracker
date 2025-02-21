<?php

namespace App\Http\Controllers;

use App\Models\Applicant;
use Illuminate\Http\Request;

class ApplicantController extends Controller
{
    // List all applicants
    public function index()
    {
        $applicants = Applicant::all();
        return inertia('Applicants/Index', ['applicants' => $applicants]);
    }

    // Show the form to create a new applicant
    public function create()
    {
        return inertia('Applicants/Create');
    }

    // Store a new applicant
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required|email',
            'phone' => 'required',
            'company' => 'required',
            'position' => 'required',
        ]);

        Applicant::create($request->all());

        return redirect()->route('applicants.index')->with('success', 'Applicant created successfully.');
    }

    // Show the form to edit an applicant
    public function edit(Applicant $applicant)
    {
        return inertia('Applicants/Edit', ['applicant' => $applicant]);
    }

    // Update an applicant
    public function update(Request $request, Applicant $applicant)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required|email',
            'phone' => 'required',
            'company' => 'required',
            'position' => 'required',
            'status' => 'required',
        ]);

        $applicant->update($request->all());

        return redirect()->route('applicants.index')->with('success', 'Applicant updated successfully.');
    }

    // Delete an applicant
    public function destroy(Applicant $applicant)
    {
        $applicant->delete();
        return redirect()->route('applicants.index')->with('success', 'Applicant deleted successfully.');
    }
}
