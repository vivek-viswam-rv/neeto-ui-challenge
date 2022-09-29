import { buildSelectOption } from "utils";

export const parseNoteValues = values => {
  const assignedContact = values.assignedContact.label;
  const tags = values.tags.map(tag => tag.label);

  return { ...values, tags, assignedContact };
};

export const buildNoteInitialValues = note => ({
  ...note,
  assignedContact: buildSelectOption(note.assignedContact),
  tags: note.tags.map(buildSelectOption),
});
