import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { useIsBrowser } from '../../utils/useIsBrowser';
import BorderButton from '../BorderButton';
import Logo from '../Logo';
import ModalMenu from './ModalMenu';

function CloseIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 0 24 24" width="40px" fill="#FFFFFF">
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
    </svg>
  );
}

function ModalComponent({ closeModal, menus }) {
  const linkMenus = menus.filter((menu) => menu.type === 'link');
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 bg-primary flex flex-col z-50">
      <div className="relative flex flex-row justify-center items-center">
        <div className="justify-self-center">
          <Logo></Logo>
        </div>
        <div className="text-4xl absolute right-0 px-8w cursor-pointer text-menu" onClick={closeModal}>
          <CloseIcon></CloseIcon>
        </div>
      </div>

      <div className="w-full flex justify-center pb-2">
        <BorderButton className="bg-white" color="primary" title="¡Pide Ya!"></BorderButton>
      </div>
      {linkMenus.map((m) => (
        <ModalMenu key={m.id} mode="light" {...m}></ModalMenu>
      ))}
    </div>
  );
}

export function ModalNavigation({ showModal, menus, closeModal }) {
  const isBrowser = useIsBrowser();

  if (isBrowser && showModal) {
    return ReactDOM.createPortal(
      <ModalComponent closeModal={closeModal} menus={menus}></ModalComponent>,
      document.getElementById('modal-root')
    );
  } else {
    return null;
  }
}
