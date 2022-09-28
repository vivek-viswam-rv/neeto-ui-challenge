import React from "react";

import { Pane, Typography } from "neetoui";

import Form from "./Form";

const Edit = ({ showPane, setShowPane, note, updateNote }) => {
  const onClose = () => setShowPane(false);

  return (
    <Pane isOpen={showPane} onClose={onClose}>
      <Pane.Header>
        <Typography style="h2" weight="semibold">
          Edit note
        </Typography>
      </Pane.Header>
      <Form isEdit note={note} updateNote={updateNote} onClose={onClose} />
    </Pane>
  );
};

export default Edit;
