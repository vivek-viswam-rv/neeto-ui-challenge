import React, { useState } from "react";

import { updateNoteEntity } from "utils";

import Note from "./Note";
import Edit from "./Pane/Edit";

const Table = ({
  notes = [],
  setNotes,
  setSelectedNoteId,
  setShowDeleteAlert,
}) => {
  const [showEditNote, setShowEditNote] = useState(false);
  const [selectedNote, setSelectedNote] = useState({});

  const updateNote = (id, values) =>
    setNotes(notes =>
      notes.map(note => (note.id === id ? updateNoteEntity(id, values) : note))
    );

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
        updateNote={updateNote}
      />
    </>
  );
};

export default Table;
