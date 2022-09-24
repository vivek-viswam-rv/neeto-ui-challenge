import * as yup from "yup";

export const NOTES_FORM_INITIAL_FORM_VALUES = {
  title: "",
  description: "",
};

export const NOTES_FORM_VALIDATION_SCHEMA = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
});

export const NOTES_TABLE_COLUMN_DATA = [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
    width: "30%",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
    width: "70%",
  },
];

export const ROLES = ["Owner", "User"];

export const DUMMY_CONTACTS = [
  {
    firstName: "Oliver",
    lastName: "Smith",
    email: "oliver@example.com",
    role: 0,
  },
  {
    firstName: "James",
    lastName: "Bond",
    email: "bond@example.com",
    role: 0,
  },
  {
    firstName: "Oliver",
    lastName: "Smith",
    email: "oliver@example.com",
    role: 0,
  },
  {
    firstName: "James",
    lastName: "Bond",
    email: "bond@example.com",
    role: 0,
  },
  {
    firstName: "Oliver",
    lastName: "Smith",
    email: "oliver@example.com",
    role: 0,
  },
  {
    firstName: "James",
    lastName: "Bond",
    email: "bond@example.com",
    role: 0,
  },
  {
    firstName: "Oliver",
    lastName: "Smith",
    email: "oliver@example.com",
    role: 0,
  },
  {
    firstName: "James",
    lastName: "Bond",
    email: "bond@example.com",
    role: 0,
  },
];

export const TAGS = [
  "Getting Started",
  "Onboarding",
  "User Flow",
  "UX",
  "Bugs",
  "V2",
];

export const DUMMY_NOTES = [
  {
    id: 0,
    title: "How to claim the warranty?",
    description:
      "This is something I found in the Figma design file. So please don't mind",
    assignedContact: 0,
    tag: 0,
    createdOn: "September 24,2022",
  },
  {
    id: 1,
    title: "Write a blog",
    description:
      "This is something I found in the Figma design file. So please don't mind",
    assignedContact: 1,
    tag: 0,
    createdOn: "September 24,2022",
  },
  {
    id: 2,
    title: "Enjoy your time",
    description:
      "This is something I found in the Figma design file. So please don't mind",
    assignedContact: 2,
    tag: 0,
    createdOn: "September 24,2022",
  },
];
