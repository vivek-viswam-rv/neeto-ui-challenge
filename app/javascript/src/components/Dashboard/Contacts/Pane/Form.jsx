import React, { useState } from "react";

import { Formik, Form as FormikForm } from "formik";
import { Check } from "neetoicons";
import { Button, Pane } from "neetoui";
import { Input } from "neetoui/formik";

import { buildSelectOption, parseContactValues } from "utils/index";

import { CONTACTS_FORM_VALIDATION_SCHEMA } from "../constants";

const Form = ({
  onClose,
  contact,
  isEdit,
  createContact = null,
  updateContact = null,
}) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = values => {
    try {
      isEdit
        ? updateContact(contact.id, parseContactValues(values))
        : createContact(parseContactValues(values));
      onClose();
    } catch (err) {
      logger.error(err);
    }
  };

  return (
    <Formik
      validateOnBlur={submitted}
      validateOnChange={submitted}
      validationSchema={CONTACTS_FORM_VALIDATION_SCHEMA}
      initialValues={
        isEdit
          ? {
              ...contact,
              assignedContact: buildSelectOption(contact.assignedContact),
              tags: contact.tags.map(buildSelectOption),
            }
          : contact
      }
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <FormikForm className="w-full">
          <Pane.Body className="space-y-6">
            <Input
              required
              className="w-full flex-grow-0"
              label="First Name"
              name="firstName"
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
        </FormikForm>
      )}
    </Formik>
  );
};

export default Form;
