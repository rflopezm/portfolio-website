import React from 'react';
import Submenu from './Menu';

export default function Submenus({ submenus = [] }) {
  return (
    <div className="absolute hidden group-hover:flex flex-col left-0 z-10 bg-white opacity-90">
      {submenus.map(submenu => (
        <Submenu key={submenu.title} submenu={true} {...submenu}></Submenu>
      ))}
    </div>
  );
}
