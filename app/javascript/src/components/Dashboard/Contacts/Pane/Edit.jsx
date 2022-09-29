import React from "react";

import { Pane, Typography } from "neetoui";

import Form from "./Form";

const Edit = ({ showEditPane, setShowEditPane, contact, updateContact }) => {
  const onClose = () => setShowEditPane(false);

  return (
    <Pane isOpen={showEditPane} onClose={onClose}>
      <Pane.Header>
        <Typography style="h2" weight="semibold">
          Edit Contact
        </Typography>
      </Pane.Header>
      <Form
        isEdit
        contact={contact}
        updateContact={updateContact}
        onClose={onClose}
      />
    </Pane>
  );
};

export default Edit;
