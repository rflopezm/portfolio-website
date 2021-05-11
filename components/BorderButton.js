import React from 'react';

export default function BorderButton({ title, color = 'text', w = '', m = 'm-auto', href = '', className = '' }) {
  return (
    <div
      className={`${className} px-4 text-${color} uppercase border-${color} border-2 ${w} py-2 px-2 font-button font-medium tracking-widest text-base ${m} my-6 text-center cursor-pointer`}
    >
      {href ? (
        <a target="blank" download href={href}>
          {title}
        </a>
      ) : (
        title
      )}
    </div>
  );
}
