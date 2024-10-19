"use client";

import { useState } from "react";

import { db } from "@/firebase.config";
import { collection, addDoc, setDoc, doc } from "firebase/firestore";

import grivanceImage from "@/public/assets/grievanceImage.jpeg";
import { stat } from "fs";
import Link from "next/link";

const grivanceFormData = {
  firstName: "",
  lastName: "",
  enroll: "",
  course: "",
  email: "",
  role: "",
  subject: "",
  grievance: "",
  // attachment: "",
};

const GrievanceForm = () => {
  const [grievanceFormData, setGrievanceFormData] = useState(grivanceFormData);

  const handleGrievanceFormChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = event.target;
    setGrievanceFormData({ ...grievanceFormData, [name]: value });
  };

  const handleGrievanceFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const docRef = await addDoc(collection(db, "grievances"), {
        ...grievanceFormData,
        createdOn: new Date(),
        status: "New",
        lastUpdated: new Date(),
        resolution: "",
      });

      alert(
        "Grievance Submitted successfully! Your ticket number is: " + docRef.id
      );

      setGrievanceFormData(grivanceFormData);
    } catch (error) {
      alert("Error adding document: " + error);
    }
  };

  return (
    <div className="min-h-screen w-full bg-base-200 p-2 md:p-5 content-center">
      <div className="mt-32 lg:mt-0 h-fit bg-base-100 shadow-md rounded-3xl border p-5 lg:flex gap-10 -translate-y-10">
        <div className="lg:w-1/2 self-center space-y-5">
          <h1 className="text-3xl font-semibold text-center mt-10 lg:hidden">
            Submit your Concern!
          </h1>
          <form
            className="flex flex-col space-y-3"
            method=""
            onSubmit={handleGrievanceFormSubmit}
          >
            <div className="flex flex-col sm:flex-row gap-2">
              {/* First Name */}
              <div className="flex flex-col gap-0.5 flex-1">
                <label
                  className="text-lg font-semibold w-fit"
                  htmlFor="firstName"
                >
                  First Name *
                </label>
                <input
                  type="text"
                  placeholder="First Name"
                  className="border-2 border-gray-300 rounded-md p-2"
                  id="firstName"
                  name="firstName"
                  value={grievanceFormData.firstName}
                  onChange={handleGrievanceFormChange}
                />
              </div>

              {/* Last Name */}
              <div className="flex flex-col gap-0.5 flex-1">
                <label
                  className="text-lg font-semibold w-fit"
                  htmlFor="lastName"
                >
                  Last Name *
                </label>
                <input
                  type="text"
                  placeholder="Last Name"
                  id="lastName"
                  className="border-2 border-gray-300 rounded-md p-2"
                  name="lastName"
                  value={grievanceFormData.lastName}
                  required
                  onChange={handleGrievanceFormChange}
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="flex flex-col gap-0.5 flex-1">
                {/* Enrollment Number */}
                <label className="text-lg font-semibold w-fit" htmlFor="enroll">
                  Enroll No. / Emp. ID *
                </label>
                <input
                  type="number"
                  placeholder="Enroll No. / Emp. ID"
                  id="enroll"
                  className="border-2 border-gray-300 rounded-md p-2"
                  name="enroll"
                  value={grievanceFormData.enroll}
                  required
                  onChange={handleGrievanceFormChange}
                />
              </div>

              {/* Dropdown for course */}
              <div className="flex flex-col gap-0.5 flex-1">
                <label className="text-lg font-semibold" htmlFor="name">
                  Course
                </label>
                {/* dropdown input */}
                <select
                  id="course"
                  className="h-full p-2 border-2 border-gray-300 rounded-md"
                  name="course"
                  value={grievanceFormData.course}
                  required
                  onChange={handleGrievanceFormChange}
                >
                  <option value="" disabled>
                    -- Select Course --
                  </option>
                  <option value="MCA 2nd Year">MCA 2nd year</option>
                  <option value="M. Tech AI/DS">M. Tech AI/DS</option>
                  <option value="MCA 1st year">MCA 1st year</option>
                  <option value="MBA">MBA</option>
                </select>
              </div>
            </div>

            {/* Email */}
            <label className="text-lg font-semibold w-fit" htmlFor="email">
              Personal Email
            </label>
            <input
              type="email"
              placeholder="Email"
              id="email"
              className="border-2 border-gray-300 rounded-md p-2"
              name="email"
              value={grievanceFormData.email}
              onChange={handleGrievanceFormChange}
            />

            {/* Radio buttons for role */}
            <div className="flex justify-between sm:justify-normal sm:gap-10">
              <label className="text-lg font-semibold w-fit" htmlFor="role">
                Submit as: *
              </label>
              <div className="flex gap-10 text-md font-medium">
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    id="student"
                    name="role"
                    value="Student"
                    checked={grievanceFormData.role === "Student"} // Binding to state
                    onChange={handleGrievanceFormChange} // Capturing the value
                    required
                  />
                  <label htmlFor="student">Student</label>
                </div>
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    id="teacher"
                    name="role"
                    value="Teacher"
                    checked={grievanceFormData.role === "Teacher"} // Binding to state
                    onChange={handleGrievanceFormChange} // Capturing the value
                    required
                  />
                  <label htmlFor="teacher">Teacher</label>
                </div>
              </div>
            </div>

            {/* Subject */}
            <label className="text-lg font-semibold w-fit" htmlFor="subject">
              Subject *
            </label>
            <input
              type="subject"
              placeholder="Subject"
              id="subject"
              className="border-2 border-gray-300 rounded-md p-2"
              name="subject"
              value={grievanceFormData.subject}
              onChange={handleGrievanceFormChange}
              required
            />

            {/* Description */}
            <label className="text-lg font-semibold w-fit" htmlFor="grievance">
              Detailed Dscription
            </label>
            <textarea
              id="grievance"
              placeholder="Write about your grievance here"
              className="border-2 border-gray-300 rounded-md p-2 h-44"
              name="grievance"
              value={grievanceFormData.grievance}
              onChange={handleGrievanceFormChange}
            />

            {/* Attachment */}
            {/* <label className="text-lg font-semibold w-fit" htmlFor="attachment">
              Attachment
            </label>
            <input
              type="file"
              id="attachment"
              className="border-2 border-gray-300 rounded-md p-2"
              name="attachment"
              value={grievanceFormData.attachment}
              onChange={handleGrievanceFormChange}
            /> */}

            <button className="btn btn-primary">Submit</button>
            <p>
              Track Status Instead?{" "}
              <Link href="/status" className="text-info">
                Track status
              </Link>
            </p>
          </form>
        </div>
        <GrievanceFormLeft />
      </div>
    </div>
  );
};

export default GrievanceForm;

const GrievanceFormLeft = () => {
  return (
    <div
      className="w-1/2 rounded-tr-2xl rounded-br-2xl p-2 items-center hidden lg:flex"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(" +
          grivanceImage.src +
          ")",
        backgroundSize: "cover",
      }}
    >
      <h1 className="text-6xl font-bold text-white">
        Share your
        <br />
        <span className="text-8xl">Concerns</span>
        <br />
        with us!
      </h1>
    </div>
  );
};
