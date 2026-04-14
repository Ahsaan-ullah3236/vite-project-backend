import React, { useState } from "react";

const App = () => {
  const [showForm, setShowForm] = useState(false); // default false
  const handleSave = async () => {
    const res = await fetch("http://localhost:5020/students/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Ahsan",
        email: "test@gmail.com",
        course: "React",
      }),
    });
    const data = await res.json();
    console.log(data);
  };  
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-10">
        {/* first from here */}
        <div>
           {/* Heading */}
          <h1 className="flex items-center justify-center text-4xl font-bold mb-4">
            Student Portal
          </h1>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Student Records
          </h1>

          <p className="text-gray-500 text-lg mb-6">
            Manage student information — Add, Edit, and Delete records
          </p>

          {/* Search + Button */}
          <div className="flex items-center gap-4 mb-6">
            <input
              type="text"
              placeholder="Search by name or subject..."
              className="flex-grow p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              onClick={() => {
                setShowForm(!showForm);
              }} // toggle form
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              + Add Student
            </button>
          </div>
        </div>

        {/* Conditional Form one click on the add student button */}
        {showForm && (
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-xl font-semibold mb-4">Add New Student</h2>

            <input
              type="text"
              placeholder="Student Name"
              className="w-full border p-2 mb-3 rounded"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full border p-2 mb-3 rounded"
            />

            <input
              type="text"
              placeholder="Course"
              className="w-full border p-2 mb-3 rounded"
            />

            <div className="flex gap-3">
              <button
                onClick={handleSave}
                className="bg-green-600 text-white px-4 py-2 rounded"
              >
                Save
              </button>

              <button
                onClick={() => setShowForm(false)}
                className="bg-gray-400 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
