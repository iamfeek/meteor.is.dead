import React from 'react';

type Props = { size: string, selected?: boolean, onClick: any }

export const ClickableSizeItem: React.FC<Props> = ({ size, selected = false, onClick }) => {
  const getHoveredClass = () => {
    const baseColor = selected ? "red" : "teal";

    return `hover:bg-${baseColor}-100`
  }

  const getBaseClass = () => {
    const baseColor = selected ? "teal" : "white";

    return `bg-${baseColor}-100`
  }

  return (
    <div className="shadow bg-white top-100 z-40 w-full lef-0 rounded max-h-select overflow-y-auto" onClick={onClick}>
      <div className="flex flex-col w-full">
        <div className={`cursor-pointer w-full border-gray-100 rounded-t border-b ${getBaseClass()} ${getHoveredClass()}`}>
          <div className={`flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative ${getBaseClass()} ${getHoveredClass()}`}>
            <div className="w-full items-center flex">
              <div className="mx-2 -mt-1  ">{size}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}