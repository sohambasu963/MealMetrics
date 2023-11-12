"use client";
import React, { useCallback, useState } from "react";
import { getPrompt, getGreeting, getTodayDate } from "@/lib/utils";
import { DropZone, UploadedFile } from "@/components/drop-zone";
import { Button } from "@/components/ui/button";

export default function FileUploadPage() {
  const prompt = getPrompt();
  const greeting = getGreeting();
  const todayDate = getTodayDate();

  const [file, setFile] = useState<File | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Only take the first file even if multiple files are dropped
    if (acceptedFiles.length > 0) {
      setFile(acceptedFiles[0]);
    }
  }, []);

  const removeFile = (file: File) => () => {
    setFile(null);
  };

  return (
    <div className="px-6 h-screen font-body">
      <div className="flex justify-between items-center py-4">
        <h2 className="text-2xl font-semibold font-heading">{`${greeting}, Soham!`}</h2>
        <p className="text-lg font-semibold">{todayDate}</p>
      </div>
      <h1 className="text-xl text-center mt-6 mb-6 font-heading">{prompt}</h1>
      <div className="w-4/5 h-3/5 mx-auto">
        <DropZone onDrop={onDrop} />
        <div className="mt-2">
          {file && <UploadedFile file={file} removeFile={removeFile(file)} />}
        </div>
      </div>
    </div>
  );
}
