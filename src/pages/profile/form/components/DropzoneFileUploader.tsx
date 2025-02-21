import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Paper, Typography, IconButton, Box, Button } from "@mui/material";
import { CloudUpload, Delete } from "@mui/icons-material";

interface FileUploadBoxProps {
  label: string;
  onFileUpload: (file: File) => void;
}

const DropzoneFileUploader: React.FC<FileUploadBoxProps> = ({ label, onFileUpload }) => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles.length > 0) {
        const file = acceptedFiles[0];
        setUploadedFile(file);
        onFileUpload(file);
      }
    },
    [onFileUpload]
  );

  const removeFile = (event: React.MouseEvent) => {
    event.stopPropagation(); // Prevents opening file chooser
    setUploadedFile(null);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [".pdf"],
      "application/msword": [".doc"],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [".docx"],
    },
  });

  return (
    <Paper
      {...getRootProps()}
      variant="outlined"
      sx={{
        p: 2,
        width: 300,
        textAlign: "center",
        cursor: "pointer",
        border: isDragActive ? "2px dashed #1976d2" : "2px dashed #ccc",
        bgcolor: isDragActive ? "action.hover" : "background.paper",
      }}
    >
      <input {...getInputProps()} />
      {!uploadedFile ? (
        <Box display="flex" flexDirection="column" alignItems="center">
          <CloudUpload color="primary" fontSize="large" />
          <Typography variant="body1" color="textSecondary">
            {isDragActive ? "Drop the file here..." : label}
          </Typography>
        </Box>
      ) : (
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="body2">{uploadedFile.name}</Typography>
          <IconButton onClick={removeFile} color="error">
            <Delete />
          </IconButton>
        </Box>
      )}
    </Paper>
  );
};

export default DropzoneFileUploader;
