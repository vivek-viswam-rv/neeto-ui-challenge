import React, { useState } from "react";

import { Alert } from "neetoui";

const DeleteAlert = ({
  onClose,
  removeContact,
  setSelectedContactIds,
  selectedContactIds,
}) => {
  const [deleting, setDeleting] = useState(false);

  const handleDelete = () => {
    try {
      setDeleting(true);
      removeContact();
      setSelectedContactIds([]);
      onClose();
    } catch (error) {
      logger.error(error);
      setDeleting(false);
    }
  };

  return (
    <Alert
      isOpen
      isSubmitting={deleting}
      message={`Are you sure you want to delete ${selectedContactIds.length} contact(s)? This cannot be undone.`}
      title="Delete Contact"
      onClose={onClose}
      onSubmit={handleDelete}
    />
  );
};

export default DeleteAlert;
