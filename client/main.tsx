import React from 'react';
import { mount } from 'react-mounter';

import { Landing } from '../imports/ui/pages/Landing'

import { FlowRouter } from 'meteor/ostrio:flow-router-extra';
import { Layout } from '/imports/ui/components/Layout';
import { AdminPage } from '/imports/ui/pages/AdminPage';
import { NotFoundPage } from '/imports/ui/pages/NotFoundPage';
import ManageSizesPage from '/imports/ui/pages/ManageSizesPage';
import ManageOutfitPage from '../imports/ui/pages/ManageOutfitsPage';
import LiveDashboard from '/imports/ui/pages/LiveDashboard';

import '@fortawesome/fontawesome-free/js/all.js'

FlowRouter.route('/', {
  name: 'landing',
  action() {
    mount(Layout, {
      main: <Landing />,
    });
  }
});

FlowRouter.route('/live', {
  name: 'live',
  action() {
    mount(Layout, {
      main: <LiveDashboard />,
      navTitle: "Live Dashboard"
    });
  }
});

FlowRouter.route('/admin', {
  name: 'admin',
  action() {
    mount(Layout, {
      main: <AdminPage />,
      navTitle: "Admin Dashboard"

    });
  }
});

FlowRouter.route('/admin/sizes', {
  name: 'admin.sizes',
  action() {
    mount(Layout, {
      main: <ManageSizesPage />,
      navTitle: "Sizes Management"
    });
  }
});

FlowRouter.route('/admin/outfits', {
  name: 'admin.outfits',
  action() {
    mount(Layout, {
      main: <ManageOutfitPage />,
      navTitle: "Outfits Management"
    });
  }
});

FlowRouter.route('*', {
  name: '404',
  action() {
    mount(Layout, {
      main: <NotFoundPage />,
    });
  }
});