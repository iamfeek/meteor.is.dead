import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { OutfitCollection, Outfit } from '/imports/api/outfits';
import { Button } from 'react-bootstrap';

type Props = {
  outfits: Outfit[]
}

const LiveDashboard: React.FC<Props> = ({ outfits }) => {
  return (
    <div className="col-xl-3 col-md-6 mb-4">
      <div className="card border-left-primary shadow h-100 py-2">
        <div className="card-body">
          <div className="row no-gutters align-items-center">
            <div className="col mr-2">
              <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Total Outfits</div>
              <div className="h5 mb-0 font-weight-bold text-gray-800">{outfits.length}</div>
            </div>
            <div className="col-auto">
              <i className="fas fa-calendar fa-2x text-gray-300"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withTracker(() => {
  const outfits = OutfitCollection.find().fetch();

  return {
    outfits
  }
})(LiveDashboard)