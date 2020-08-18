import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import { SizesCollection, Size } from '/imports/api/sizes';

const ManageSizesPage: React.FC<{ sizes: Size[] }> = ({ sizes }) => {
  const [newSize, setNewSize] = React.useState("");

  const insertSize = () => {
    newSize.split(",").forEach(size => {

      SizesCollection.insert({ label: size, createdAt: new Date() })
    })

    setNewSize("")
  }

  const deleteSize = (id: string) => {
    SizesCollection.remove({ _id: id })
  }

  return (
    <>
      <h1 className="text-3xl uppercase">Sizes</h1>

      <ul>
        {sizes.map((size: any) => <li key={size._id}>{size.label} <strong onClick={() => deleteSize(size._id)}>delete</strong></li>)}
      </ul>

      <input value={newSize} onChange={e => setNewSize(e.target.value)} className="shadow appearance-none border rounded py-2 px-3 text-grey-darker" />

      <button onClick={insertSize}>Insert</button>
    </>
  )
}

export default withTracker(() => {
  const sizes = SizesCollection.find().fetch();

  return {
    sizes,
  };
})(ManageSizesPage);