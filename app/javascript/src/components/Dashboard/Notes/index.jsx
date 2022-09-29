import React, { useState, useEffect } from "react";

import EmptyNotesListImage from "images/EmptyNotesList";
import { Button, PageLoader } from "neetoui";
import { Container, Header } from "neetoui/layouts";
import { createNoteEntity } from "utils";

import EmptyState from "components/Common/EmptyState";
import { NOTES } from "components/Dashboard/constants";

import DeleteAlert from "./DeleteAlert";
import Menu from "./Menu";
import Create from "./Pane/Create";
import Table from "./Table";

const Notes = () => {
  const [loading, setLoading] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const [showNewNotePane, setShowNewNotePane] = useState(false);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedNoteId, setSelectedNoteId] = useState([]);
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    try {
      setLoading(true);
      setNotes(NOTES);
    } catch (error) {
      logger.error(error);
    } finally {
      setLoading(false);
    }
  }, []);

  const createNote = values =>
    setNotes(notes => [...notes, createNoteEntity(values)]);

  const removeNote = () =>
    setNotes(notes => notes.filter(note => note.id !== selectedNoteId));

  if (loading) {
    return <PageLoader />;
  }

  return (
    <div className="flex w-full">
      <Menu showMenu={showMenu} />
      <Container>
        <Header
          menuBarToggle={() => setShowMenu(showMenu => !showMenu)}
          title="All Notes"
          actionBlock={
            <Button
              icon="ri-add-line"
              label="Add Note"
              size="small"
              onClick={() => setShowNewNotePane(true)}
            />
          }
          searchProps={{
            value: searchTerm,
            placeholder: "Search Name, Email, Phone Number, Etc",
            onChange: e => setSearchTerm(e.target.value),
          }}
        />
        {notes.length ? (
          <Table
            notes={notes}
            setNotes={setNotes}
            setSelectedNoteId={setSelectedNoteId}
            setShowDeleteAlert={setShowDeleteAlert}
          />
        ) : (
          <EmptyState
            image={EmptyNotesListImage}
            primaryAction={() => setShowNewNotePane(true)}
            primaryActionLabel="Add Note"
            subtitle="Add your notes to send customized emails to them."
            title="Looks like you don't have any notes!"
          />
        )}
        <Create
          createNote={createNote}
          setShowPane={setShowNewNotePane}
          showPane={showNewNotePane}
        />
        {showDeleteAlert && (
          <DeleteAlert
            removeNote={removeNote}
            onClose={() => setShowDeleteAlert(false)}
          />
        )}
      </Container>
    </div>
  );
};

export default Notes;
