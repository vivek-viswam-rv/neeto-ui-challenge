import React, { useState } from "react";

import { getTimeStamp } from "utils/index";

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

  const updateNote = (id, values) => {
    setNotes(notes =>
      notes.map(note => {
        if (note.id === id) {
          return { ...values, lastUpdated: getTimeStamp(), isModified: true };
        }

        return note;
      })
    );
  };

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
        isEdit
        note={selectedNote}
        setShowPane={setShowEditNote}
        showPane={showEditNote}
        updateNote={updateNote}
      />
    </>
  );
};

export default Table;
