import { buildSelectOption } from "utils";

const buildEmailInput = emails =>
  emails.map(email => ({
    label: email,
    value: email,
    valid: true,
  }));

export const parseContactValues = values => {
  const role = values.role.label;
  const emails = values.emails.map(email => email.label);

  return { ...values, emails, role };
};

export const buildContactInitialValues = contact => ({
  ...contact,
  emails: buildEmailInput(contact.emails),
  role: contact.role ? buildSelectOption(contact.role) : null,
});
