import React from "react";

import { Pane, Typography } from "neetoui";

import { EMPTY_CONTACT } from "./constants";
import Form from "./Form";

const Create = ({ showPane, setShowPane, createContact }) => {
  const onClose = () => setShowPane(false);

  return (
    <Pane isOpen={showPane} onClose={onClose}>
      <Pane.Header>
        <Typography style="h2" weight="semibold">
          Add New Contact
        </Typography>
      </Pane.Header>
      <Form
        contact={EMPTY_CONTACT}
        createContact={createContact}
        isEdit={false}
        onClose={onClose}
      />
    </Pane>
  );
};

export default Create;
