import React from 'react';

import { Navbar } from './Navbar';

export const Layout: React.FC = ({ children }) => {
  return (
    <div className="min-h-screen">
      <div className="antialiased">
        <Navbar />

        <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
          <div className="flex flex-row">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}