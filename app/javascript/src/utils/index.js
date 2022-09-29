import dayjs from "dayjs";
import * as R from "ramda";
import slugify from "slugify";

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

export const buildRowData = contacts =>
  contacts.map((contact, idx) => {
    const name = `${contact.firstName} ${contact.lastName}`;

    return {
      card: { name, role: contact.role },
      emails: contact.emails,
      createdAt: contact.createdAt,
      key: idx,
    };
  });
