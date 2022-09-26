import React from "react";

import { Pane, Typography } from "neetoui";

import Form from "./Form";

const EditNotePane = ({ showPane, setShowPane, note, editNote }) => {
  const onClose = () => setShowPane(false);

  return (
    <Pane isOpen={showPane} onClose={onClose}>
      <Pane.Header>
        <Typography style="h2" weight="semibold">
          Edit note
        </Typography>
      </Pane.Header>
      <Form isEdit handleNote={editNote} note={note} onClose={onClose} />
    </Pane>
  );
};

export default EditNotePane;
