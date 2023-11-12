import React from 'react';
import { useDropzone } from 'react-dropzone';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

export function DropZone() {
//   const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div
      className="flex flex-col items-center justify-center border-dashed border-2 border-primary-500 rounded-lg bg-white text-secondary-500 h-full py-24 hover:bg-gray-100 cursor-pointer"
    >
      <CloudUploadIcon className="text-6xl text-gray-500" />
      <h1 className="text-4xl mb-0">Upload Files</h1>
      <p className="text-base mb-5">Types accepted: PNG, JPG, JPEG</p>
      {/* {isDragActive ? (
        <p className="text-xl">Drop the file here ...</p>
      ) : (
        <p className="text-sm text-gray-800">
          Double click to upload or drag and drop files here
        </p>
      )} */}
    </div>
  );
};
