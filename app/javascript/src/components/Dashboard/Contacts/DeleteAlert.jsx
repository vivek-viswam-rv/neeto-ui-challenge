import React, { useState } from "react";

import { Alert } from "neetoui";

const DeleteAlert = ({ onClose, removeContact }) => {
  const [deleting, setDeleting] = useState(false);

  const handleDelete = () => {
    try {
      setDeleting(true);
      removeContact();
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
      message="Are you sure you want to delete the Contact? This cannot be undone."
      title="Delete Contact"
      onClose={onClose}
      onSubmit={handleDelete}
    />
  );
};

export default DeleteAlert;
