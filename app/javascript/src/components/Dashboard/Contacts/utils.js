import { Toastr } from "neetoui";
import { getUUID } from "utils";

const getDateStamp = () => {
  const date = new Date();
  const month = date.toLocaleString("default", { month: "long" });

  return `${month} ${date.getDate()}, ${date.getFullYear()}`;
};

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
  id: getUUID(),
  createdAt: getDateStamp(),
});
export const modifyContactEntity = ({ id, values }) => ({ ...values, id });

export const updateContact = ({ id, values, setContacts }) => {
  setContacts(contacts =>
    contacts.map(contact =>
      contact.id === id ? modifyContactEntity({ id, values }) : contact
    )
  );
  Toastr.success("The contact has been successfully updated.");
};

export const createContact = ({ values, setContacts }) => {
  setContacts(contacts => [...contacts, createContactEntity(values)]);
  Toastr.success("A new contact has been created successfully");
};
export const removeContact = ({ selectedContactIds, setContacts }) => {
  setContacts(contacts =>
    contacts.filter(contact => !selectedContactIds.includes(contact.id))
  );
  Toastr.success("Deleted contact(s) successfully");
};
