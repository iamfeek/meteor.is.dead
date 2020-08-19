import React from 'react';

export const AdminPage = () => {
  return <>
    <div className="grid grid-cols-4 gap-4">
      <div
        className="col-span-4 sm:col-span-4 md:col-span-2 lg:col-span-1 xl:col-span-1 flex flex-col items-center"
      >
        <div className="bg-white shadow-lg rounded-lg -mt-4 w-64">
          <div className="py-5 px-5">
            <span className="font-bold text-gray-800 text-2xl">Sizes</span>
            <div className="flex items-center justify-between">
              <a href="/admin/sizes" className="text-lg text-red-600 font-bold">
                Manage
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        className="col-span-4 sm:col-span-4 md:col-span-2 lg:col-span-1 xl:col-span-1 flex flex-col items-center"
      >
        <div className="bg-white shadow-lg rounded-lg -mt-4 w-64">
          <div className="py-5 px-5">
            <span className="font-bold text-gray-800 text-2xl">Outfits</span>
            <div className="flex items-center justify-between">
              <a href="/admin/outfits" className="text-lg text-red-600 font-bold">
                Manage
              </a>

              <a href="/live" className="text-lg text-red-600 font-bold">
                Live Dashboard
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
}