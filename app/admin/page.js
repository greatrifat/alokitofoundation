import React, { useState } from 'react';

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-100">
      {/* Mobile Header with Sidebar Toggle */}
      <header className="flex justify-between items-center p-4 bg-gray-800 text-white md:hidden">
        <h1 className="text-xl font-bold">Admin Dashboard</h1>
        <button
          className="text-white focus:outline-none"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </header>

      {/* Sidebar */}
      <aside className={`fixed md:static z-20 top-0 left-0 w-64 bg-gray-800 text-gray-100 transform md:transform-none transition-transform duration-200 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-4 text-center">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        </div>
        <nav className="mt-6">
          <ul>
            <li className="px-4 py-2 hover:bg-gray-700">
              <a href="#" className="text-white">Dashboard</a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-700">
              <a href="#" className="text-white">Members</a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-700">
              <a href="#" className="text-white">Settings</a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-700">
              <a href="#" className="text-white">Logout</a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Header */}
        <header className="flex justify-between items-center bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold text-gray-700">Members Management</h2>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
            Add New Member
          </button>
        </header>

        {/* Members Table */}
        <div className="mt-6">
          <div className="overflow-x-auto bg-white rounded shadow">
            <table className="min-w-full bg-white border-collapse">
              <thead>
                <tr>
                  <th className="px-6 py-3 border-b-2 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider">ID</th>
                  <th className="px-6 py-3 border-b-2 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 border-b-2 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider">Email</th>
                  <th className="px-6 py-3 border-b-2 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider">Role</th>
                  <th className="px-6 py-3 border-b-2 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {/* Example row */}
                <tr>
                  <td className="px-6 py-4 whitespace-no-wrap border-b text-sm text-gray-700">1</td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b text-sm text-gray-700">John Doe</td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b text-sm text-gray-700">john@example.com</td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b text-sm text-gray-700">Admin</td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b text-sm text-gray-700">
                    <button className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 mr-2">Edit</button>
                    <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">Delete</button>
                  </td>
                </tr>
                {/* Add more rows as needed */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
