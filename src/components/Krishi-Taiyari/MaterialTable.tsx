"use client";

import React from "react";

interface Material {
  name: string;
  quantity: string;
}

interface Props {
  data: Material[];
}

const MaterialTable = ({ data }: Props) => {
  return (
    <div className="overflow-x-auto rounded-2xl shadow-xl border border-green-200">
      <table className="w-full border-collapse text-left">
        <thead>
          <tr className="bg-green-600 text-white">
            <th className="px-6 py-4 font-semibold">सामग्री</th>
            <th className="px-6 py-4 font-semibold">मात्रा</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => (
            <tr
              key={index}
              className="even:bg-green-50 hover:bg-green-100 transition duration-200 border-t"
            >
              <td className="px-6 py-4">{item.name}</td>
              <td className="px-6 py-4 font-medium text-green-900">
                {item.quantity}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MaterialTable;
