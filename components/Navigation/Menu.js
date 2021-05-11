import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Submenus from './Submenus';

export default function MainMenu({ title, href = '/', submenus, submenu = false, mode }) {
  const router = useRouter();
  const active = router.pathname === href ? `${mode === 'dark' ? 'text-menu-active-dark' : 'text-menu-active'}` : '';
  return (
    <div
      className={`hidden md:inline-block px-6 py-4 relative list-none${
        submenu ? 'border-b-2 border-transparent hover:border-text' : 'group'
      }`}
    >
      <div
        className={`w-10w text-center uppercase ${
          mode === 'dark' ? 'text-menu-dark' : 'text-menu'
        } ${active} py-2 cursor-pointer hover:${
          mode === 'dark' ? 'text-menu-hover-dark' : 'text-menu-hover'
        } font-menu text-base`}
      >
        <Link href={href}>{title}</Link>
      </div>
      {submenus ? <Submenus submenus={submenus}></Submenus> : null}
    </div>
  );
}
