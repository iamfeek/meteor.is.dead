import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import { OutfitCollection, Outfit } from '/imports/api/outfits';
import { ClickableSizeItem } from '../components/ClickableSizeItem';
import { SizesCollection, Size } from '/imports/api/sizes';

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

      {sizes.map(size => <ClickableSizeItem
        onClick={() => toggleSelected(size._id!)}
        key={size._id}
        size={size.label}
        selected={selectedSizeIds.includes(size._id!)}
      />)}
      <button onClick={insertOutfit}>Insert</button>

      <ol>
        {outfits.map(outfit => <li key={outfit._id}>{outfit.name} {outfit.size} ${outfit.price} <strong className="cursor-pointer" onClick={() => removeOutfit(outfit._id!)}>delete</strong></li>)}
      </ol>
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