import React, { useState } from 'react';

export function useModal() {
  const [show, setShowModal] = useState(false);

  const close = () => {
    setShowModal(false);
  };

  const open = () => {
    setShowModal(true);
  };

  return [show, open, close];
}
