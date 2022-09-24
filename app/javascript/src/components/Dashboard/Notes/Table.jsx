import React, { useContext, useState } from "react";

import Note from "./Note";
import EditNotePane from "./Pane/Edit";

import { DashboardContext } from "..";

const Table = ({
  // selectedNoteIds,
  // setSelectedNoteIds,
  notes = [],
  fetchNotes,
}) => {
  const [showEditNote, setShowEditNote] = useState(false);
  const [selectedNote, setSelectedNote] = useState({});

  const { tags, contacts } = useContext(DashboardContext);

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
            assignedContact={contacts[note.assignedContact]}
            tag={tags[note.tag]}
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
