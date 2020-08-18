import React from 'react';
import { mount } from 'react-mounter';

import { Landing } from '../imports/ui/pages/Landing'

import { FlowRouter } from 'meteor/ostrio:flow-router-extra';
import { Layout } from '/imports/ui/components/Layout';
import { AdminPage } from '/imports/ui/pages/AdminPage';
import { NotFoundPage } from '/imports/ui/pages/NotFoundPage';
import ManageSizesPage from '/imports/ui/pages/ManageSizesPage';


FlowRouter.route('/', {
  name: 'landing',
  action() {
    mount(Layout, {
      main: <Landing />,
    });
  }
});

FlowRouter.route('/admin', {
  name: 'admin',
  action() {
    mount(Layout, {
      main: <AdminPage />,
    });
  }
});

FlowRouter.route('/admin/sizes', {
  name: 'admin.sizes',
  action() {
    mount(Layout, {
      main: <ManageSizesPage />,
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