import React, { useState } from "react";

import { Formik, Form } from "formik";
import { Button, Pane } from "neetoui";
import { Input, Select } from "neetoui/formik";

import { CONTACTS, TAGS } from "components/Dashboard/constants";

import { NOTES_FORM_VALIDATION_SCHEMA } from "../constants";

const NoteForm = ({ onClose, note, isEdit, handleNote }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = values => {
    try {
      if (isEdit) {
        handleNote(note.id, values);
      } else {
        handleNote(values);
      }
      onClose();
    } catch (err) {
      logger.error(err);
    }
  };

  return (
    <Formik
      initialValues={note}
      validateOnBlur={submitted}
      validateOnChange={submitted}
      validationSchema={NOTES_FORM_VALIDATION_SCHEMA}
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
              placeholder="Select a contact"
              options={CONTACTS.map((contact, idx) => ({
                label: `${contact.firstName} ${contact.lastName}`,
                value: idx,
              }))}
            />
            <Select
              isSearchable
              required
              className="w-full flex-grow-0"
              label="Tag"
              name="tag"
              placeholder="Select a tag"
              options={TAGS.map((tag, idx) => ({
                label: tag,
                value: idx,
              }))}
            />
          </Pane.Body>
          <Pane.Footer>
            <Button
              className="mr-3"
              disabled={isSubmitting}
              label={isEdit ? "Update" : "Save changes"}
              loading={isSubmitting}
              style="primary"
              type="submit"
              onClick={() => setSubmitted(true)}
            />
            <Button label="Cancel" style="text" onClick={onClose} />
          </Pane.Footer>
        </Form>
      )}
    </Formik>
  );
};

export default NoteForm;
