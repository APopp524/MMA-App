import React from 'react';
import { Home, SportsMma } from "@material-ui/icons";

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <Home />,
    cName: 'nav-text'
  },
  {
    title: 'Schedule',
    path: '/schedule',
    icon: <SportsMma />,
    cName: 'nav-text'
  },
];