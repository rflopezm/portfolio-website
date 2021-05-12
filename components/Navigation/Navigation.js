import React, { Profiler } from 'react';
import { useModal } from '../../utils/useModal';
import { ModalNavigation } from './ModalNavigation';
import MainMenu from './Menu';
import Logo from '../Logo';

const HamburguerMenu = ({ onClick, mode }) => {
  return (
    <svg
      onClick={onClick}
      className="absolute right-8w visible md:invisible cursor-pointer justify-self-end"
      viewBox="0 0 100 80"
      width="40"
      height="40"
    >
      <rect fill={`${mode === 'dark' ? '#39513d' : '#FFF'}`} width="100" height="5"></rect>
      <rect fill={`${mode === 'dark' ? '#39513d' : '#FFF'}`} y="30" width="100" height="5"></rect>
      <rect fill={`${mode === 'dark' ? '#39513d' : '#FFF'}`} y="60" width="100" height="5"></rect>
    </svg>
  );
};

export default function Navigation({ profile, className, menus = [], mode = 'light' }) {
  const [showModal, openModal, closeModal] = useModal();
  const menuItems = menus.map((m) => ({
    ...m,
    href: m.page ? `/${m.page.slug}` : m.href || '/',
    Component: m.type === 'menu' ? MainMenu : Logo,
  }));
  return (
    <nav className={`${className} bg-primary flex justify-center md:justify-end items-center w-full py-10`}>
      <div className="px-4 mr-auto">
        <Logo title={profile.name}></Logo>
      </div>
      {menuItems.map((menu) => (
        <menu.Component key={menu.id} {...menu} mode={mode}></menu.Component>
      ))}
      <HamburguerMenu onClick={openModal} mode={mode}></HamburguerMenu>
      <ModalNavigation showModal={showModal} closeModal={closeModal} menus={menuItems} profile={profile}></ModalNavigation>
    </nav>
  );
}
