import React, { useState, useEffect } from "react";

import EmptyNotesListImage from "images/EmptyNotesList";
import { Button, PageLoader } from "neetoui";
import { Container, Header } from "neetoui/layouts";

import EmptyState from "components/Common/EmptyState";

import { DUMMY_NOTES } from "./constants";
import DeleteAlert from "./DeleteAlert";
import Menu from "./Menu";
import NewNotePane from "./Pane/Create";
import Table from "./Table";

const Notes = () => {
  const [loading, setLoading] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const [showNewNotePane, setShowNewNotePane] = useState(false);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedNoteIds, setSelectedNoteIds] = useState([]);
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = () => {
    try {
      setLoading(true);
      setNotes(DUMMY_NOTES);
    } catch (error) {
      logger.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <PageLoader />;
  }

  return (
    <div className="flex w-full">
      <Menu showMenu={showMenu} />
      <Container>
        <Header
          menuBarToggle={() => setShowMenu(oldShowState => !oldShowState)}
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
            onChange: e => setSearchTerm(e.target.value),
          }}
        />
        {notes.length ? (
          <Table
            fetchNotes={fetchNotes}
            notes={notes}
            selectedNoteIds={selectedNoteIds}
            setSelectedNoteIds={setSelectedNoteIds}
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
        <NewNotePane
          fetchNotes={fetchNotes}
          setShowPane={setShowNewNotePane}
          showPane={showNewNotePane}
        />
        {showDeleteAlert && (
          <DeleteAlert
            refetch={fetchNotes}
            selectedNoteIds={selectedNoteIds}
            setSelectedNoteIds={setSelectedNoteIds}
            onClose={() => setShowDeleteAlert(false)}
          />
        )}
      </Container>
    </div>
  );
};

export default Notes;
