import React, { useState } from "react";

import Note from "./Note";
import EditNotePane from "./Pane/Edit";

import { TAGS, CONTACTS } from "../constants";

const Table = ({
  notes = [],
  setNotes,
  setSelectedNoteId,
  setShowDeleteAlert,
}) => {
  const [showEditNote, setShowEditNote] = useState(false);
  const [selectedNote, setSelectedNote] = useState({});

  const editNote = (id, values) => {
    setNotes(notes =>
      notes.map(note => {
        if (note.id === id) return values;

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
            assignedContact={CONTACTS[note.assignedContact]}
            tag={TAGS[note.tag]}
          />
        ))}
      </div>
      <EditNotePane
        editNote={editNote}
        note={selectedNote}
        setShowPane={setShowEditNote}
        showPane={showEditNote}
      />
    </>
  );
};

export default Table;
