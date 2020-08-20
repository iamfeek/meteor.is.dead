import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import { OutfitCollection, Outfit } from '/imports/api/outfits';
import { ClickableSizeItem } from '../components/ClickableSizeItem';
import { SizesCollection, Size } from '/imports/api/sizes';
import { Button } from 'react-bootstrap';

const ManageOutfitsPage: React.FC<{ outfits: Outfit[], sizes: Size[] }> = ({ sizes, outfits }) => {
  const [name, setName] = React.useState("");
  const [selectedSizeIds, setSelectedSizeIds] = React.useState<string[]>([]);
  const [price, setPrice] = React.useState("");


  const insertOutfit = () => {
    selectedSizeIds.forEach((sizeId) => {
      const priceAsNumber = parseInt(price!);
      const size = sizes.find(s => s._id === sizeId);

      OutfitCollection.insert({ name, size: size!.label, price: priceAsNumber, boughtBy: null, createdAt: new Date() })
    })

    setName("")
    setPrice("")
    setSelectedSizeIds([])
  }

  const toggleSelected = (sizeId: string) => {
    const isSelected = selectedSizeIds.includes(sizeId);

    if (!isSelected) {
      return setSelectedSizeIds([...selectedSizeIds, sizeId]);
    }

    // remove the given id from the array
    setSelectedSizeIds(selectedSizeIds.filter(sid => sizeId !== sid))
  }

  const removeOutfit = (outfitId: string) => {
    OutfitCollection.remove({ _id: outfitId })
  }

  return (
    <div className="flex flex-col">
      <h1 className="text-3xl uppercase">Outfits</h1>

      <div className="w-full flex-1 mx-2 svelte-1l8159u">
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
          <input
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Name of outfit" className="p-1 px-2 appearance-none outline-none w-full text-gray-800" />
        </div>
      </div>

      <div className="w-full flex-1 mx-2 svelte-1l8159u">
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
          <input
            value={price}
            onChange={e => setPrice(e.target.value)}
            placeholder="Price of outfit" className="p-1 px-2 appearance-none outline-none w-full text-gray-800" />
        </div>
      </div>
      <button onClick={insertOutfit}>Insert</button>
      <div className="container-fluid"></div>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">Outfits</h6>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Size</th>
                  <th>Price</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>Name</th>
                  <th>Size</th>
                  <th>Price</th>
                  <th>Actions</th>
                </tr>
              </tfoot>
              <tbody>
                {outfits.map(outfit => (
                  <tr key={outfit._id}>
                    <td>{outfit.name}</td>
                    <td>{outfit.size}</td>
                    <td>${outfit.price}</td>
                    <td><Button color="danger">Delete</Button></td>
                  </tr>
                ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withTracker(() => {
  const outfits = OutfitCollection.find().fetch();
  const sizes = SizesCollection.find().fetch();

  return {
    outfits,
    sizes,
  };
})(ManageOutfitsPage);