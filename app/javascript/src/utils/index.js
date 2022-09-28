import dayjs from "dayjs";
import * as R from "ramda";
import slugify from "slugify";

export const isPresent = R.pipe(R.either(R.isNil, R.isEmpty), R.not);

export const timeAgoInWords = dateTime => dayjs(dateTime).fromNow();
export const getTimeStamp = () => dayjs().toString();

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
  const assignedContact = values.assignedContact.label;
  const tags = values.tags.map(tag => tag.label);

  return { ...values, tags, assignedContact };
};

export const buildRowData = contacts =>
  contacts.map((contact, idx) => {
    const name = `${contact.firstName} ${contact.lastName}`;

    return {
      card: { name, role: contact.role },
      email: contact.email,
      key: idx,
    };
  });
