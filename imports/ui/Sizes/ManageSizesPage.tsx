import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import { Layout } from '../components/Layout';
import { CreateNewSize } from './CreateNewSize';
import { SizesCollection } from '/imports/api/sizes';
import { Mongo } from 'meteor/mongo';

const ManageSizesPage: React.FC<{ sizes: Mongo.Cursor<any> }> = () => {
  return (
    <Layout>
      <div className="grid grid-cols-4 gap-6">
        <div
          className="col-span-4 sm:col-span-4 md:col-span-2 lg:col-span-1 xl:col-span-1 flex flex-col items-center"
        >
          <div className="bg-white shadow-lg rounded-lg -mt-4 w-64">
            <div className="py-5 px-5">
              <p className="font-bold text-gray-800 text-2xl">Current sizes</p>

              <ul>
                {}
              </ul>
            </div>
          </div>
        </div>

        <div
          className="col-span-4 sm:col-span-4 md:col-span-2 lg:col-span-1 xl:col-span-1 flex flex-col items-center"
        >
          <div className="bg-white shadow-lg rounded-lg -mt-4 w-64">
            <div className="py-5 px-5">
              <p className="font-bold text-gray-800 text-2xl mb-2">Add new size</p>

              <CreateNewSize />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default withTracker(() => {
  const sizes = SizesCollection.find();

  return {
    sizes
  }
})(ManageSizesPage)