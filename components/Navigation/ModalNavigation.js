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

function ModalComponent({ closeModal, menus, profile }) {
  const linkMenus = menus.filter((menu) => menu.type === 'menu');

  const resumeHref = (profile && profile.resume && profile.resume.url) || null;
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 bg-primary flex flex-col z-50 py-10">
      <div className="relative flex flex-row justify-center items-center">
        <div className="justify-self-center py-2">
          <Logo title={profile.name}></Logo>
        </div>
        <div className="text-4xl absolute right-0 px-8w cursor-pointer text-menu" onClick={closeModal}>
          <CloseIcon></CloseIcon>
        </div>
      </div>

      {linkMenus.map((m) => (
        <ModalMenu key={m.id} mode="light" {...m}></ModalMenu>
      ))}

      <div className="flex flex-row">
        <BorderButton
          className="bg-primary text-menu border-menu hover:text-primary hover:bg-white"
          download={true}
          href={resumeHref}
          title="Download Resume"
        ></BorderButton>
      </div>

    </div>
  );
}

export function ModalNavigation({ showModal, menus, closeModal, profile }) {
  const isBrowser = useIsBrowser();

  if (isBrowser && showModal) {
    return ReactDOM.createPortal(
      <ModalComponent closeModal={closeModal} menus={menus} profile={profile}></ModalComponent>,
      document.getElementById('modal-root')
    );
  } else {
    return null;
  }
}
