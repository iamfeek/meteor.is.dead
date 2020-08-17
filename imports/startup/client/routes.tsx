import React from 'react';
import { Router, Route } from "react-router-ts";

import { Landing } from '../../ui/pages/Landing';
import { AdminPage } from '../../ui/pages/AdminPage';
import { NotFoundPage } from '../../ui/pages/NotFoundPage';

export const renderRoutes = () => (
  <Router>
    <Route path="/" component={Landing} />

    <Route path="/admin" component={AdminPage} />

    <Route path="*" component={NotFoundPage} />
  </Router>
);