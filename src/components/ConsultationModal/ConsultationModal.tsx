import { type FormEvent, useCallback, useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";

import { consultationRoomTypes, contacts } from "../../data/contact";
import s from "./ConsultationModal.module.scss";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function ConsultationModal({ isOpen, onClose }: Props) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const titleId = useId();

  const handleClose = useCallback(() => {
    setIsSubmitted(false);
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        handleClose();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleClose, isOpen]);

  if (!isOpen) return null;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitted(true);
  }

  return createPortal(
    <div
      className={s.overlay}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          handleClose();
        }
      }}
    >
      <section
        aria-labelledby={titleId}
        aria-modal="true"
        className={s.modal}
        role="dialog"
      >
        <button
          aria-label="Close consultation form"
          className={s.close}
          onClick={handleClose}
          type="button"
        >
          ×
        </button>

        {isSubmitted ? (
          <div className={s.success}>
            <span className={s.eyebrow}>Request received</span>
            <h2 id={titleId}>We will contact you within one business day.</h2>
            <p>
              If the project is urgent, call the studio directly at{" "}
              <a href={contacts[0].href}>{contacts[0].value}</a>.
            </p>
            <button onClick={handleClose} type="button">
              Close
            </button>
          </div>
        ) : (
          <>
            <div className={s.header}>
              <span className={s.eyebrow}>Consultation</span>
              <h2 id={titleId}>Tell us what kind of space you want to shape.</h2>
              <p>
                Share the basics and we will suggest the best first step for
                your timeline, room type, and level of support.
              </p>
            </div>

            <form className={s.form} onSubmit={handleSubmit}>
              <label>
                <span>Name</span>
                <input name="name" placeholder="Your name" required />
              </label>

              <label>
                <span>Email or phone</span>
                <input
                  name="contact"
                  placeholder="hello@example.com"
                  required
                  type="text"
                />
              </label>

              <label>
                <span>Room type</span>
                <select defaultValue="" name="roomType" required>
                  <option disabled value="">
                    Choose one
                  </option>
                  {consultationRoomTypes.map((roomType) => (
                    <option key={roomType} value={roomType}>
                      {roomType}
                    </option>
                  ))}
                </select>
              </label>

              <label>
                <span>Preferred date</span>
                <input name="date" type="date" />
              </label>

              <label className={s.full}>
                <span>Project note</span>
                <textarea
                  name="message"
                  placeholder="Tell us about the room, timeline, or what feels wrong right now."
                  rows={4}
                />
              </label>

              <div className={s.actions}>
                <button type="submit">Send request</button>
                <a href={contacts[0].href}>{contacts[0].value}</a>
              </div>
            </form>
          </>
        )}
      </section>
    </div>,
    document.body
  );
}
