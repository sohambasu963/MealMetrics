import React from "react";
import { useDropzone } from "react-dropzone";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

export function DropZone({
  onDrop,
}: {
  onDrop: (acceptedFiles: File[]) => void;
}) {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: ["image/jpeg", "image/png"],
    maxFiles: 1,
  });

  return (
    <div
      {...getRootProps()}
      className="flex flex-col items-center justify-center border-dashed border-2 border-primary-500 rounded-lg bg-secondary text-secondary-500 h-full py-24 hover:bg-gray-100 cursor-pointer shadow-md"
    >
      <input {...getInputProps()} />
      <CloudUploadIcon className="text-6xl text-gray-500" />
      <h1 className="text-4xl mb-0 font-tiempos-headline">Upload Image</h1>
      <p className="text-base mb-5 font-serif">Type accepted: PNG, JPG, JPEG</p>
      {isDragActive ? (
        <p className="text-xl">Drop the image here ...</p>
      ) : (
        <p className="text-md text-gray-800 fint-serif">
          Click to upload, or drag and drop image here
        </p>
      )}
    </div>
  );
}

interface UploadedFileProps {
  file: File;
  removeFile: (file: File) => void;
}

export function UploadedFile({ file, removeFile }: UploadedFileProps) {
  // Convert file size to KB with 1 decimal place
  const fileSizeKB = (file.size / 1024).toFixed(1);

  return (
    <li className="flex justify-between items-center p-4 mb-4 border rounded-lg bg-white text-primary-main relative">
      <div className="flex items-center space-x-2">
        <svg
          className="h-5 w-5 text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 6H21M8 12H21M8 18H21M3 6H3.01M3 12H3.01M3 18H3.01"
          />
        </svg>
        <div>
          <p className="text-sm font-semibold">{file.name}</p>
          <p className="text-xs text-gray-500">{fileSizeKB} KB</p>
        </div>
      </div>
      <button
        onClick={() => removeFile(file)}
        className="absolute right-3 top-2 p-1 text-gray-500 hover:text-gray-700"
      >
        <svg
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </li>
  );
}
