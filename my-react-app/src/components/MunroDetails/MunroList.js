import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import munroData from '../Data/munroData';

const MunroList = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
      <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-large text-black uppercase tracking-wider"
              >
                Mountain
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-large text-black uppercase tracking-wider"
              >
                Height
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <div class="mb-3 xl:w-96 ml-3">
              <div class="input-group relative flex flex-wrap items-stretch w-full mb-4">
                <input
                  type="search"
                  class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mt-2"
                  placeholder="Search"
                  aria-label="Search"
                  onChange={(event) => {
                    setSearchTerm(event.target.value);
                  }}
                />
              </div>
            </div>
            {munroData
              .filter((munro) => {
                if (searchTerm === "") {
                  return munro;
                } else if (
                  munro.name.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return munro;
                }
              })

              .map((munro) => (
                <tr key={munro.smcid}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Link to={`munro/${munro.smcid}`}>{munro.name}</Link>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {munro.height}m
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export { MunroList };
