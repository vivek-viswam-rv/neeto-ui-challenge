import React, { useState } from "react";

import { Formik, Form } from "formik";
import { Check } from "neetoicons";
import { Button, Pane } from "neetoui";
import { Input, Select } from "neetoui/formik";

import { CONTACTS, TAGS } from "components/Dashboard/constants";
import { buildSelectOption, parseNoteValues } from "utils/index";

import { NOTES_FORM_VALIDATION_SCHEMA } from "../constants";

const TAG_OPTIONS = TAGS.map(buildSelectOption);
const CONTACT_OPTIONS = CONTACTS.map(contact =>
  buildSelectOption(`${contact.firstName} ${contact.lastName}`)
);

const NoteForm = ({
  onClose,
  note,
  isEdit,
  createNote = null,
  editNote = null,
}) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = values => {
    try {
      isEdit
        ? editNote(note.id, parseNoteValues(values))
        : createNote(parseNoteValues(values));
      onClose();
    } catch (err) {
      logger.error(err);
    }
  };

  return (
    <Formik
      validateOnBlur={submitted}
      validateOnChange={submitted}
      validationSchema={NOTES_FORM_VALIDATION_SCHEMA}
      initialValues={
        isEdit
          ? {
              ...note,
              assignedContact: buildSelectOption(note.assignedContact),
              tags: note.tags.map(buildSelectOption),
            }
          : note
      }
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="w-full">
          <Pane.Body className="space-y-6">
            <Input
              required
              className="w-full flex-grow-0"
              label="Title"
              name="title"
            />
            <Input
              required
              className="w-full flex-grow-0"
              label="Description"
              name="description"
            />
            <Select
              isSearchable
              required
              className="w-full flex-grow-0"
              label="Assigned Contact"
              name="assignedContact"
              options={CONTACT_OPTIONS}
              placeholder="Select a contact"
            />
            <Select
              isMulti
              isSearchable
              required
              className="w-full flex-grow-0"
              label="Tags"
              name="tags"
              options={TAG_OPTIONS}
              placeholder="Select tags"
            />
          </Pane.Body>
          <Pane.Footer>
            <Button
              className="mr-3"
              disabled={isSubmitting}
              icon={Check}
              iconPosition="right"
              label={isEdit ? "Update" : "Save changes"}
              loading={isSubmitting}
              style="primary"
              type="submit"
              onClick={() => setSubmitted(true)}
            />
            <Button
              label="Cancel"
              style="text"
              type="reset"
              onClick={onClose}
            />
          </Pane.Footer>
        </Form>
      )}
    </Formik>
  );
};

export default NoteForm;
