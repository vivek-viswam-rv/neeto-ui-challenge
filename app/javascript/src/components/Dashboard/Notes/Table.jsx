import React, { useState } from "react";

import Note from "./Note";
import Edit from "./Pane/Edit";
import { updateNote } from "./utils";

const Table = ({
  notes = [],
  setNotes,
  setSelectedNoteId,
  setShowDeleteAlert,
}) => {
  const [showEditNote, setShowEditNote] = useState(false);
  const [selectedNote, setSelectedNote] = useState({});

  return (
    <>
      <div className="notes-table-height h-full w-full">
        {notes.map(note => (
          <Note
            key={note.id}
            deleteClick={() => {
              setSelectedNoteId(note.id);
              setShowDeleteAlert(true);
            }}
            editClick={() => {
              setSelectedNote(note);
              setShowEditNote(true);
            }}
            {...note}
          />
        ))}
      </div>
      <Edit
        note={selectedNote}
        setShowPane={setShowEditNote}
        showPane={showEditNote}
        updateNote={(id, values) => updateNote({ id, values, setNotes })}
      />
    </>
  );
};

export default Table;
