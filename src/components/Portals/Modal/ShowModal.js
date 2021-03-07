import React, { useState } from "react";
import Modal from "./Modal";

const ShowModal = () => {
  const [showModal, setShowModal] = useState(false);
  let handleShowMessageClick = () => setShowModal(true);
  let handleCloseModal = () => setShowModal(false);

  return (
    <div
      style={{
        height: "100%",
        display: "grid",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          maxWidth: 400,
          position: "relative",
        }}
      >
        <h1>My App</h1>
        <p>
          This is an example of how you might use React.createPortal. I think it
          is a pretty neat API that is yet another awesome escape hatch that
          React provides for practical reasons. Sometimes you just need to
          render something completely outside the React Tree.
        </p>
        <button onClick={handleShowMessageClick}>Show Secret Modal</button>
        {showModal ? (
          <Modal onClose={handleCloseModal}>
            This is the secret modal message!
          </Modal>
        ) : null}
      </div>
    </div>
  );
};

export default ShowModal;
