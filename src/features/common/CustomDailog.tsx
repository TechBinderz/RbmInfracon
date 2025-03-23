// src/components/CustomDialog.tsx
import React, { useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface CustomDialogProps {
  open: boolean;
  onClose: () => void;
  title: string;
  content: React.ReactNode;
  type: 'pdf' | 'image' | 'table' | 'text' | 'text/pdf';
}

const CustomDialog: React.FC<CustomDialogProps> = ({ open, onClose, title, content, type }) => {
  const isPdf = type === 'pdf';
  const isImage = type === 'image';
  const isTable = type === 'table';
  const isText = type === 'text';
  const isTextPdf = type === 'text/pdf';

  useEffect(() => {
    if (isPdf && open && typeof content === 'string') {
      // Open the PDF in a new tab
      window.open(content, '_blank');
      onClose(); // Close the dialog immediately
    }
  }, [isPdf, open, content, onClose]);

  return (
    <Dialog
      open={open && !isPdf} // Prevent dialog from opening for PDFs
      onClose={onClose}
      maxWidth={isTextPdf ? 'lg' : 'md'}
      fullWidth={isTextPdf} // Make dialog full width for text/pdf
      PaperProps={{ style: { height: 'auto' } }} // Default height for non-PDF types
    >
      <DialogTitle>
        {title}
        <IconButton
          edge="end"
          color="inherit"
          onClick={onClose}
          aria-label="close"
          style={{ position: 'absolute', right: 15, top: 8 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        {isImage ? (
          <img
            src={content as string} // content will be a URL for images
            alt={title}
            style={{ width: '100%', height: 'auto' }}
          />
        ) : isTable ? (
          content // content will be a React component for tables
        ) : isText || isTextPdf ? (
          <Typography variant="body1">{content}</Typography>
        ) : null}
      </DialogContent>
    </Dialog>
  );
};

export default CustomDialog;