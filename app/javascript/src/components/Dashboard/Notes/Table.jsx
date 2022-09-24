import React, { useState } from "react";

import { DUMMY_CONTACTS, TAGS } from "./constants";
import Note from "./Note";
import EditNotePane from "./Pane/Edit";

const Table = ({
  // selectedNoteIds,
  // setSelectedNoteIds,
  notes = [],
  fetchNotes,
}) => {
  const [showEditNote, setShowEditNote] = useState(false);
  const [selectedNote, setSelectedNote] = useState({});

  return (
    <>
      <div className="notes-table-height h-full w-full">
        {notes.map(note => (
          <Note
            key={note.id}
            onClick={() => {
              setSelectedNote(note);
              setShowEditNote(true);
            }}
            {...note}
            assignedContact={DUMMY_CONTACTS[note.assignedContact]}
            tag={TAGS[note.tag]}
          />
        ))}
      </div>
      <EditNotePane
        fetchNotes={fetchNotes}
        note={selectedNote}
        setShowPane={setShowEditNote}
        showPane={showEditNote}
      />
    </>
  );
};

export default Table;
