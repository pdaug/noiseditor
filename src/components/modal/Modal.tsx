import React, { useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";

// styles
import "./Modal.css";

// context
import { useModal } from "./ModalContext";

type ModalProps = {
  title: string;
  body: React.ReactNode;
};

const Modal = function ({ title, body }: ModalProps) {
  const { resetModal } = useModal();

  useHotkeys("escape", function () {
    resetModal();
    return;
  });

  return (
    <React.Fragment>
      <div className="modal">
        <div className="modal-content">
          <div className="modal-content-title">{title}</div>
          <div className="modal-content-body">{body}</div>
        </div>
      </div>
      <div className="modal-background" onClick={resetModal}></div>
    </React.Fragment>
  );
};

const ModalCreate = function () {
  const modalId = "modal_create";

  const { modals, openModal, closeModal } = useModal();
  const isModalOpen = Boolean(modals?.[modalId]);

  useHotkeys("shift+n", function () {
    openModal(modalId);
    return;
  });

  const [form, setForm] = useState({
    filename: "",
    extension: "js",
  });

  const ToCancel = function () {
    closeModal(modalId);
    return;
  };

  const ToCreate = function () {
    closeModal(modalId);
    return;
  };

  return (
    isModalOpen && (
      <Modal
        title="New file"
        body={
          <div className="form">
            <div className="form-field">
              <label htmlFor="modal_create_filename">Filename</label>
              <input
                type="text"
                placeholder="my_file"
                value={form.filename}
                id="modal_create_filename"
                onChange={function (event) {
                  const newFilename = event.currentTarget?.value || "";
                  setForm(function (prevState) {
                    const clonePrevState = window.structuredClone({
                      ...prevState,
                    });
                    clonePrevState.filename = newFilename;
                    return clonePrevState;
                  });
                  return;
                }}
              />
            </div>

            <div className="form-field">
              <label htmlFor="modal_create_extension">Extension</label>
              <select
                id="modal_create_extension"
                value={form.extension}
                onChange={function (event) {
                  const newFilename = event.currentTarget?.value || "";
                  setForm(function (prevState) {
                    const clonePrevState = window.structuredClone({
                      ...prevState,
                    });
                    clonePrevState.extension = newFilename;
                    return clonePrevState;
                  });
                  return;
                }}>
                <option value="js">JavaScript</option>
                <option value="ts">TypeScript</option>
                <option value="py">Python</option>
              </select>
            </div>

            <div className="form-actions">
              <button onClick={ToCancel}>Cancel</button>
              <button type="submit" onClick={ToCreate}>
                Create
              </button>
            </div>
          </div>
        }
      />
    )
  );
};

const ModalShare = function () {
  const modalId = "modal_share";

  const { modals, openModal, closeModal } = useModal();
  const isModalOpen = Boolean(modals?.[modalId]);

  useHotkeys("shift+c", function () {
    openModal(modalId);
    return;
  });

  const [form, setForm] = useState({
    url: "",
  });

  const ToCancel = function () {
    closeModal(modalId);
    return;
  };

  const ToCopy = function () {
    closeModal(modalId);
    return;
  };

  return (
    isModalOpen && (
      <Modal
        title="Share"
        body={
          <div className="form">
            <div className="form-field">
              <label htmlFor="modal_share_url">Url</label>
              <input
                disabled
                type="text"
                value={form.url}
                id="modal_share_url"
                placeholder="https://noiseditor.com/aaa0000"
                onChange={function (event) {
                  const newFilename = event.currentTarget?.value || "";
                  setForm(function (prevState) {
                    const clonePrevState = window.structuredClone({
                      ...prevState,
                    });
                    clonePrevState.url = newFilename;
                    return clonePrevState;
                  });
                  return;
                }}
              />
            </div>

            <div className="form-actions">
              <button onClick={ToCancel}>Cancel</button>
              <button type="submit" onClick={ToCopy}>
                Copy
              </button>
            </div>
          </div>
        }
      />
    )
  );
};

export { Modal, ModalCreate, ModalShare };
