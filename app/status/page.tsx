// "use client";

// import { db } from "@/firebase.config";
// import { doc, getDoc } from "firebase/firestore";

// const TrackStatus = () => {
//   var ticketData: any = null;

//   const handleSearch = async (event: React.FormEvent) => {
//     event.preventDefault();

//     const ticketNumber = (event.target as HTMLFormElement).ticketNumber.value;

//     try {
//       const ticketRef = doc(db, "grievances", ticketNumber);
//       const ticketSnap = await getDoc(ticketRef);

//       if (ticketSnap.exists()) {
//         ticketData = JSON.stringify(ticketSnap.data());
//         alert(ticketData);
//       } else {
//         alert("No data found!");
//       }
//     } catch (error) {
//       alert("Error getting document:" + error);
//     }
//   };

//   return (
//     <div className="min-h-screen w-full flex flex-col justify-center items-center p-2">
//       <div className="bg-white shadow-xl p-5 rounded-xl border-2 text-center">
//         <form action="" onSubmit={handleSearch}>
//           <label className="text-lg font-semibold mb-2" htmlFor="ticketNumber">
//             Enter your ticket number
//           </label>
//           <input
//             type="search"
//             className="border-2 rounded-lg w-full px-2 py-1"
//             name="ticketNumber"
//             id="ticketNumber"
//             placeholder="Ticket Number"
//             required
//           />
//           <button
//             className="bg-info text-white rounded-lg w-full py-1 mt-2 font-semibold"
//             type="submit"
//           >
//             Search
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default TrackStatus;

"use client";

import React, { useState } from "react"; // Import useState
import { db } from "@/firebase.config";
import { doc, getDoc } from "firebase/firestore";

const TrackStatus = () => {
  const [ticketData, setTicketData] = useState<any>(null); // State for ticket data
  const [errorMessage, setErrorMessage] = useState<string | null>(null); // State for error messages

  const handleSearch = async (event: React.FormEvent) => {
    event.preventDefault();

    const ticketNumber = (event.target as HTMLFormElement).ticketNumber.value;

    try {
      const ticketRef = doc(db, "grievances", ticketNumber);
      const ticketSnap = await getDoc(ticketRef);

      if (ticketSnap.exists()) {
        const data = ticketSnap.data();
        setTicketData(data); // Set ticket data in state
        setErrorMessage(null); // Clear any previous error messages
      } else {
        setTicketData(null); // Clear ticket data if no document found
        setErrorMessage("No data found!");
      }
    } catch (error) {
      setTicketData(null); // Clear ticket data on error
      setErrorMessage("Error getting document: " + error);
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center p-3">
      <div className="bg-white shadow-xl p-5 rounded-xl border-2 text-center">
        <form onSubmit={handleSearch}>
          <label className="text-lg font-semibold mb-2" htmlFor="ticketNumber">
            Enter your ticket number
          </label>
          <input
            type="search"
            className="border-2 rounded-lg w-full px-2 py-1"
            name="ticketNumber"
            id="ticketNumber"
            placeholder="Ticket Number"
            required
          />
          <button
            className="bg-info text-white rounded-lg w-full py-1 mt-2 font-semibold"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>

      {/* Display Ticket Data or Error Message */}
      {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
      {ticketData && (
        <div className="bg-white shadow-xl p-5 rounded-xl border-2 text-center mt-4 text-ceter">
          <h2 className="text-2xl font-bold mb-2">Ticket Data</h2>
          <div className="flex gap-4">
            <h1 className="text-left font-semibold">Name:</h1>
            <p className="text-left">
              {ticketData.firstName} {ticketData.lastName}
            </p>
          </div>
          <div className="flex gap-4">
            <h1 className="text-left font-semibold">Course:</h1>
            <p className="text-left">{ticketData.course}</p>
          </div>
          <div className="flex gap-4">
            <h1 className="text-left font-semibold">Email:</h1>
            <p className="text-left">{ticketData.email}</p>
          </div>
          <div className="flex gap-4">
            <h1 className="text-left font-semibold">Enroll No. / Emp ID:</h1>
            <p className="text-left">{ticketData.enroll}</p>
          </div>
          <div className="flex gap-4">
            <h1 className="text-left font-semibold">Role:</h1>
            <p className="text-left">{ticketData.role}</p>
          </div>
          <div className="flex gap-4">
            <h1 className="text-left font-semibold">Created On:</h1>
            <p className="text-left">
              {ticketData.createdOn.toDate().toLocaleString()}
            </p>
          </div>
          <div className="flex gap-4">
            <h1 className="text-left font-semibold">Subject:</h1>
            <p className="text-left">{ticketData.subject}</p>
          </div>
          <div className="flex gap-4">
            <h1 className="text-left font-semibold">Details:</h1>
            <p className="text-left">{ticketData.grievance}</p>
          </div>
          <div className="flex gap-4">
            <h1 className="text-left font-semibold">Status:</h1>
            <p className="text-left">{ticketData.status}</p>
          </div>
          <div className="flex gap-4">
            <h1 className="text-left font-semibold">Last updated on:</h1>
            <p className="text-left">
              {ticketData.lastUpdated.toDate().toLocaleString()}
            </p>
          </div>
          {ticketData.status === "Resolved" ? (
            <div className="flex gap-4">
              <h1 className="text-left font-semibold">Status:</h1>
              <p className="text-left">{ticketData.status}</p>
            </div>
          ) : (
            <></>
          )}
        </div>
      )}
    </div>
  );
};

export default TrackStatus;