import React, { createContext, useContext, useState } from "react";

const ModalContextFallback = function (modalId: string) {
  console.log(modalId);
  return;
};

const ModalContext = createContext({
  modals: new Object() as Record<string, boolean>,
  openModal: ModalContextFallback,
  closeModal: ModalContextFallback,
  toggleModal: ModalContextFallback,
  resetModal: function () {},
});

type ModalProviderProps = {
  children: React.ReactNode;
};

const ModalProvider = function ({ children }: ModalProviderProps) {
  const [modals, setModals] = useState<Record<string, boolean>>({});

  const openModal = function (modalId: string) {
    setModals(function (prevState) {
      const clonePrevState = window.structuredClone({ ...prevState });
      clonePrevState[modalId] = true;
      return clonePrevState;
    });
    return;
  };

  const closeModal = function (modalId: string) {
    setModals(function (prevState) {
      const clonePrevState = window.structuredClone({ ...prevState });
      clonePrevState[modalId] = false;
      return clonePrevState;
    });
    return;
  };

  const resetModal = function () {
    setModals({});
    return;
  };

  const toggleModal = function (modalId: string) {
    setModals(function (prevState) {
      const clonePrevState = window.structuredClone({ ...prevState });
      const currentState = Boolean(clonePrevState?.[modalId]);
      clonePrevState[modalId] = !currentState;
      return clonePrevState;
    });
    return;
  };

  return (
    <ModalContext.Provider
      value={{ modals, openModal, closeModal, resetModal, toggleModal }}>
      {children}
    </ModalContext.Provider>
  );
};

const useModal = function () {
  const context = useContext(ModalContext);
  return context;
};

export { ModalContext, ModalProvider, useModal };
