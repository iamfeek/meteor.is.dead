import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Landing } from '../imports/ui/pages/Landing'
import { renderRoutes } from '../imports/startup/client/routes';

Meteor.startup(() => {
  render(renderRoutes(), document.getElementById('react-target'));
});
