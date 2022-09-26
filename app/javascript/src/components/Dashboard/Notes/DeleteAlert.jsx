import React, { useState } from "react";

import { Alert } from "neetoui";

const DeleteAlert = ({ onClose, removeNote }) => {
  const [deleting, setDeleting] = useState(false);

  const handleDelete = () => {
    try {
      setDeleting(true);
      removeNote();
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
      message="Are you sure you want to delete the note? This cannot be undone."
      title="Delete Note"
      onClose={onClose}
      onSubmit={handleDelete}
    />
  );
};

export default DeleteAlert;
