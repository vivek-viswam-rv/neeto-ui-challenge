import dayjs from "dayjs";
import * as R from "ramda";
import slugify from "slugify";
import { v4 as getNewId } from "uuid";

const buildEmailInput = emails =>
  emails.map(email => ({
    label: email,
    value: email,
    valid: true,
  }));

export const getNewKey = getNewId;
export const isPresent = R.pipe(R.either(R.isNil, R.isEmpty), R.not);

export const timeAgoInWords = dateTime => dayjs(dateTime).fromNow();
export const getTimeStamp = () => dayjs().toString();
export const getDateStamp = () => {
  const date = new Date();
  const month = date.toLocaleString("default", { month: "long" });

  return `${month} ${date.getDate()}, ${date.getFullYear()}`;
};

export const buildSelectOption = item => ({
  label: item,
  value: slugify(item),
});

export const parseNoteValues = values => {
  const assignedContact = values.assignedContact.label;
  const tags = values.tags.map(tag => tag.label);

  return { ...values, tags, assignedContact };
};

export const parseContactValues = values => {
  const role = values.role.label;
  const emails = values.emails.map(email => email.label);

  return { ...values, emails, role };
};

export const buildContactInitialValues = contact => ({
  ...contact,
  emails: buildEmailInput(contact.emails),
  role: buildSelectOption(contact.role),
});

export const buildNoteInitialValues = note => ({
  ...note,
  assignedContact: buildSelectOption(note.assignedContact),
  tags: note.tags.map(buildSelectOption),
});

export const buildRowData = ({
  contacts,
  setShowEditPane,
  setSelectedContact,
}) =>
  contacts.map(contact => {
    const name = `${contact.firstName} ${contact.lastName}`;

    return {
      id: contact.id,
      card: { name, role: contact.role },
      emails: contact.emails,
      createdAt: contact.createdAt,
      dropdown: {
        handleEdit: () => {
          setShowEditPane(true);
          setSelectedContact(contact);
        },
      },
      key: contact.id,
    };
  });

export const createContactEntity = values => ({
  ...values,
  id: getNewId(),
  createdAt: getDateStamp(),
});
export const createNoteEntity = values => ({
  ...values,
  id: getNewId(),
  lastUpdated: getTimeStamp(),
  isModified: false,
});
export const updateContactEntity = ({ id, values }) => ({ ...values, id });
export const updateNoteEntity = ({ id, values }) => ({
  ...values,
  id,
  lastUpdated: getTimeStamp(),
  isModified: true,
});
