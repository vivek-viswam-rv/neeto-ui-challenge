import dayjs from "dayjs";
import { Toastr } from "neetoui";
import { v4 as getUUID } from "uuid";

const getTimeStamp = () => dayjs().toString();

const createNoteEntity = values => ({
  ...values,
  id: getUUID(),
  lastUpdated: getTimeStamp(),
  isModified: false,
});

const modifyNoteEntity = ({ id, values }) => ({
  ...values,
  id,
  lastUpdated: getTimeStamp(),
  isModified: true,
});

export const createNote = ({ values, setNotes }) => {
  setNotes(notes => [...notes, createNoteEntity(values)]);
  Toastr.success("A new note has been created successfully.");
};

export const removeNote = ({ setNotes, selectedNoteId }) => {
  setNotes(notes => notes.filter(note => note.id !== selectedNoteId));
  Toastr.success("Deleted a note successfully.");
};

export const updateNote = ({ id, values, setNotes }) => {
  setNotes(notes =>
    notes.map(note =>
      note.id === id ? modifyNoteEntity({ id, values }) : note
    )
  );
  Toastr.success("The note has been updated successfully.");
};
