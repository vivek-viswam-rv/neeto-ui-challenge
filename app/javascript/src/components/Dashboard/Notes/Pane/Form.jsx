import React, { useState } from "react";

import { Formik, Form } from "formik";
import { Button, Pane } from "neetoui";
import { Input, Select } from "neetoui/formik";

import { CONTACTS, TAGS } from "components/Dashboard/constants";

import { NOTES_FORM_VALIDATION_SCHEMA } from "../constants";

const formatTags = tags =>
  tags.map(tag => ({
    label: tag,
    value: tag,
  }));

const parseValues = values => {
  const assignedContact = values.assignedContact.value;
  const tags = values.tags.map(tag => tag.value);

  return { ...values, tags, assignedContact };
};

const tags = formatTags(TAGS);

const NoteForm = ({ onClose, note, isEdit, handleNote }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = values => {
    try {
      if (isEdit) {
        handleNote(note.id, parseValues(values));
      } else {
        handleNote(parseValues(values));
      }
      onClose();
    } catch (err) {
      logger.error(err);
    }
  };

  return (
    <Formik
      initialValues={isEdit ? { ...note, tags: formatTags(note.tags) } : note}
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
              options={CONTACTS.map(contact => {
                const contactLabel = `${contact.firstName} ${contact.lastName}`;

                return {
                  label: contactLabel,
                  value: contactLabel,
                };
              })}
            />
            <Select
              isMulti
              isSearchable
              required
              className="w-full flex-grow-0"
              label="Tags"
              name="tags"
              options={tags}
              placeholder="Select a tag"
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
