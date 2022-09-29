import React, { useState } from "react";

import { Formik, Form as FormikForm } from "formik";
import { Check } from "neetoicons";
import { Button, Pane } from "neetoui";
import { Input, Select, EmailInput } from "neetoui/formik";

import { buildContactFormData, parseContactValues } from "utils/index";

import { CONTACTS_FORM_VALIDATION_SCHEMA, ROLE_OPTIONS } from "../constants";

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
      initialValues={buildContactFormData(contact)}
      validateOnBlur={submitted}
      validateOnChange={submitted}
      validationSchema={CONTACTS_FORM_VALIDATION_SCHEMA}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <FormikForm className="w-full">
          <Pane.Body className="space-y-6">
            <div className="flex w-full">
              <Input
                required
                className="mr-3"
                label="First Name"
                name="firstName"
                placeholder="first name"
              />
              <Input
                required
                label="Last Name"
                name="lastName"
                placeholder="last name"
              />
            </div>
            <div className="w-full">
              <EmailInput
                label="Email Address"
                name="emails"
                placeholder="Enter email address"
              />
              <Select
                required
                className="mt-3"
                label="Role"
                name="role"
                options={ROLE_OPTIONS}
                placeholder="Select a role"
              />
            </div>
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
