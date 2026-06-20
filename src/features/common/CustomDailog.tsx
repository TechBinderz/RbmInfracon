// src/components/CustomDialog.tsx
import React, { useEffect, useRef } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Typography,
  Box,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface CustomDialogProps {
  open: boolean;
  onClose: () => void;
  title: string;
  content: React.ReactNode;
  type: "pdf" | "image" | "table" | "text" | "text/pdf" | "audio";
}

const CustomDialog: React.FC<CustomDialogProps> = ({
  open,
  onClose,
  title,
  content,
  type,
}) => {
  const isPdf = type === "pdf";
  const isImage = type === "image";
  const isTable = type === "table";
  const isText = type === "text";
  const isTextPdf = type === "text/pdf";
  const isAudio = type === "audio";

  useEffect(() => {
    if (isPdf && open && typeof content === "string") {
      // Open the PDF in a named tab so re-clicking reuses the same tab
      const windowName = title.replace(/[^a-zA-Z0-9]/g, "_");
      window.open(content, windowName);
      onClose(); // Close the dialog immediately
    }
  }, [isPdf, open, content, title, onClose]);

  // Pause and reset audio when dialog closes
  const audioRef = useRef<HTMLAudioElement>(null);
  useEffect(() => {
    if (!open && audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, [open]);

  return (
    <Dialog
      open={open && !isPdf} // Prevent dialog from opening for PDFs
      onClose={isAudio ? undefined : onClose}
      maxWidth={isTextPdf ? "lg" : "md"}
      fullWidth={isTextPdf || isAudio}
      disableEscapeKeyDown={isAudio}
      PaperProps={{ style: { height: "auto" } }} // Default height for non-PDF types
    >
      <DialogTitle sx={{ pr: 6 }}>
        {title}
        <IconButton
          edge="end"
          color="inherit"
          onClick={onClose}
          aria-label="close"
          style={{ position: "absolute", right: 15, top: 8 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        {isImage ? (
          <img
            src={content as string} // content will be a URL for images
            alt={title}
            style={{ width: "100%", height: "auto" }}
          />
        ) : isTable ? (
          content // content will be a React component for tables
        ) : isAudio ? (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              py: { xs: 2, sm: 3 },
              px: { xs: 0, sm: 1 },
              width: "100%",
              maxWidth: { xs: "100%", sm: 600 },
              mx: "auto",
            }}
          >
            <audio
              ref={audioRef}
              controls
              controlsList="nodownload"
              preload="none"
              src={content as string}
              onContextMenu={(e) => e.preventDefault()}
              style={{ width: "100%" }}
            >
              Your browser does not support the audio element.
            </audio>
          </Box>
        ) : isText || isTextPdf ? (
          <Typography variant="body1">{content}</Typography>
        ) : null}
      </DialogContent>
    </Dialog>
  );
};

export default CustomDialog;
