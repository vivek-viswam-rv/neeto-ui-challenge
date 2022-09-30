import React from "react";

import { Pane, Typography } from "neetoui";

import { FORM_INITIAL_VALUES } from "./constants";
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
        contact={FORM_INITIAL_VALUES}
        createContact={createContact}
        isEdit={false}
        onClose={onClose}
      />
    </Pane>
  );
};

export default Create;
