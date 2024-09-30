import React from 'react';

export default function Dashboard() {
  return (
    <div className="min-h-screen flex w-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-gray-100">
        <div className="p-4 text-center">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        </div>
        <nav className="mt-6">
          <ul>
            <li className="px-4 py-2 hover:bg-gray-700">
              <a href="#" className="text-white">Events</a>
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
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">Add New Member</button>
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
