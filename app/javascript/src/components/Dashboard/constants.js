export const ROLES = ["Owner", "User"];

export const CONTACTS = [
  {
    id: "0",
    firstName: "Oliver",
    lastName: "Smith",
    emails: ["oliver@example.com", "smith@google.com"],
    role: "Owner",
    createdAt: "September 24,2022",
  },
  {
    id: "1",
    firstName: "James",
    lastName: "Bond",
    emails: ["bond@work.com"],
    role: "Owner",
    createdAt: "September 24,2022",
  },
  {
    id: "2",
    firstName: "Steven",
    lastName: "Strange",
    emails: ["steven@marvel.com"],
    role: "User",
    createdAt: "September 24,2022",
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

export const NOTES = [
  {
    id: "0",
    title: "How to claim the warranty?",
    description:
      "This is something I found in the Figma design file. So please don't mind",
    assignedContact: "Oliver Smith",
    tags: ["Getting Started"],
    lastUpdated: "September 24,2022",
    isModified: false,
  },
  {
    id: "1",
    title: "Write a blog",
    description:
      "This is something I found in the Figma design file. So please don't mind",
    assignedContact: "James Bond",
    tags: ["Getting Started"],
    lastUpdated: "September 24,2022",
    isModified: false,
  },
  {
    id: "2",
    title: "Enjoy your time",
    description:
      "This is something I found in the Figma design file. So please don't mind",
    assignedContact: "Oliver Smith",
    tags: ["Getting Started"],
    lastUpdated: "September 24,2022",
    isModified: false,
  },
];
