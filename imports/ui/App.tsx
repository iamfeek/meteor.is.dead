import React from 'react';

import { Navbar } from './components/Navbar';

export const App = () => (
  <div>
    <Navbar />
    <h1 className="text-xl text-blue-500 uppercase">Hello, TailwindCSS + Meteor!</h1>
  </div>
);
