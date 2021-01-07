import React from 'react';
import { createPortal } from 'react-dom';
import usePortal from '../../hooks/usePortal';

import './Modal.css';

export const Modal = ({ isOpen, setModal, toggleDelete, children }) => {
  if (!isOpen) return null;

  const target = usePortal('modal');
  const modal = (
    <div className="Modal">
      <div className="Modal__container">
        <button
          onClick={() => setModal(e => !e)}
          className="Modal__close-button"
        >
          X
        </button>
        {children}

        <div className="DeleteBadgeModal">
          <h2>Are your sure?</h2>
          <p>You are about this badge.</p>
          <div>
            <button onClick={toggleDelete} className="btn btn-danger">
              Borrar
            </button>
            <button
              onClick={() => setModal(e => !e)}
              className="btn btn-primary"
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
  return createPortal(modal, target);
};
