import React from "react";

import { Pane, Typography } from "neetoui";

import Form from "./Form";

const Edit = ({ showPane, setShowPane, contact, editContact }) => {
  const onClose = () => setShowPane(false);

  return (
    <Pane isOpen={showPane} onClose={onClose}>
      <Pane.Header>
        <Typography style="h2" weight="semibold">
          Edit Contact
        </Typography>
      </Pane.Header>
      <Form
        isEdit
        contact={contact}
        editContact={editContact}
        onClose={onClose}
      />
    </Pane>
  );
};

export default Edit;
