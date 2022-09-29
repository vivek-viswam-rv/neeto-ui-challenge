import React from "react";

import { Pane, Typography } from "neetoui";

import { EMPTY_NOTE } from "./constants";
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
        note={EMPTY_NOTE}
        onClose={onClose}
      />
    </Pane>
  );
};

export default Create;
