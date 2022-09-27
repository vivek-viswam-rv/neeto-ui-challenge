import React from "react";

import { Pane, Typography } from "neetoui";

import Form from "./Form";

import { NOTES_FORM_INITIAL_FORM_VALUES } from "../constants";

const NewNotePane = ({ showPane, setShowPane, createNote }) => {
  const onClose = () => setShowPane(false);

  return (
    <Pane isOpen={showPane} onClose={onClose}>
      <Pane.Header>
        <Typography style="h2" weight="semibold">
          Add New Note
        </Typography>
      </Pane.Header>
      <Form
        handleNote={createNote}
        isEdit={false}
        note={NOTES_FORM_INITIAL_FORM_VALUES}
        onClose={onClose}
      />
    </Pane>
  );
};

export default NewNotePane;
