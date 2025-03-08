// src/components/CustomDialog.tsx
import React from 'react';
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

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth={isPdf ? 'xl' : isTextPdf ? 'lg' : 'md'}
      fullWidth={isPdf || isTextPdf} // Make dialog full width for PDFs
      PaperProps={{ style: { height: isPdf ? '100vh' : 'auto' } }} // Set height to full viewport height for PDFs
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
        {isPdf ? (
          <iframe
            src={content as string} // content will be a URL for PDFs
            style={{ width: '100%', height: '100%' }}
            frameBorder="0"
          />
        ) : isImage ? (
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
