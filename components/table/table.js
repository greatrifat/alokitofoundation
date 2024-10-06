import React from 'react'

export default function Table() {
  return (
    

<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right  dark:">
        <thead className="text-xs  uppercase ">
            <tr>
                <th scope="col" className="px-2 py-2">
                    Title
                </th>
                <th scope="col" className="px-2 py-2">
                    Date
                </th>
                <th scope="col" className="px-2 py-2">
                    Details
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="border-b border-gray-100">
                <th scope="row" className="px-2 py-2 font-medium  whitespace-nowrap ">
                    Tree Platation
                </th>
                <td className="px-2 py-2">
                    18 Oct
                </td>
                <td className="px-2 py-2">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">view</a>
                </td>
            </tr>

            <tr className="border-b border-gray-100">
    <th scope="row" className="px-2 py-2 font-medium whitespace-nowrap">
        Social Awareness
    </th>
    <td className="px-2 py-2">
        25 Oct
    </td>
    <td className="px-2 py-2">
        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">view</a>
    </td>
</tr>

<tr className="border-b border-gray-100">
    <th scope="row" className="px-2 py-2 font-medium whitespace-nowrap">
        Beach Cleanup
    </th>
    <td className="px-2 py-2">
        30 Oct
    </td>
    <td className="px-2 py-2">
        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">view</a>
    </td>
</tr>

<tr className="border-b border-gray-100">
    <th scope="row" className="px-2 py-2 font-medium whitespace-nowrap">
        Community Recycling
    </th>
    <td className="px-2 py-2">
        5 Nov
    </td>
    <td className="px-2 py-2">
        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">view</a>
    </td>
</tr>

<tr className="border-b border-gray-100">
    <th scope="row" className="px-2 py-2 font-medium whitespace-nowrap">
        for Environment
    </th>
    <td className="px-2 py-2">
        10 Nov
    </td>
    <td className="px-2 py-2">
        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">view</a>
    </td>
</tr>

<tr className="border-b border-gray-100">
    <th scope="row" className="px-2 py-2 font-medium whitespace-nowrap">
        Forest Restoration
    </th>
    <td className="px-2 py-2">
        15 Nov
    </td>
    <td className="px-2 py-2">
        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">view</a>
    </td>
</tr>







            
            
            
        
            
        </tbody>
    </table>
</div>

  )
}
