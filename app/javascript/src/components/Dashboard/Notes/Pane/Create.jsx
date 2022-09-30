import React from "react";

import { Pane, Typography } from "neetoui";

import { FORM_INITIAL_VALUES } from "./constants";
import Form from "./Form";

const Create = ({ showPane, setShowPane, createNote }) => {
  const onClose = () => setShowPane(false);

  return (
    <Pane isOpen={showPane} onClose={onClose}>
      <Pane.Header>
        <Typography style="h2" weight="semibold">
          Add New Note
        </Typography>
      </Pane.Header>
      <Form
        createNote={createNote}
        isEdit={false}
        note={FORM_INITIAL_VALUES}
        onClose={onClose}
      />
    </Pane>
  );
};

export default Create;
