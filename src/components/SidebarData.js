import React from 'react';
import * as RiIcons from 'react-icons/ri'
import * as AiIcons from 'react-icons/ai';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Fighters',
    path: '/fighters',
    icon: <RiIcons.RiBoxingFill />,
    cName: 'nav-text'
  },
];
