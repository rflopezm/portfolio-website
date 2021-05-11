import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function ModalMenu({ title, href = '/', submenus, submenu = false, mode }) {
  const router = useRouter();
  const active = router.pathname === href ? `${mode === 'dark' ? 'text-menu-active-dark' : 'text-menu-active'}` : '';
  return (
    <div className="text-menu mx-8w font-menu uppercase flex justify-center py-2 border-0 border-t border-solid border-menu cursor-pointer">
      <Link href={href}>{title}</Link>
    </div>
  );
}
