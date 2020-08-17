import React from 'react';
import { Hello } from './Hello';
import { Info } from './Info';

export const App = () => (
  <div>
    <h1 className="text-xl text-blue-500 uppercase">Hello, TailwindCSS + Meteor!</h1>

    <Hello />
    <Info />
  </div>
);
