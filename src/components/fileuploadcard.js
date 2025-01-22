import React, { useState } from "react";
import Image from "next/image";
import { Card } from "./ui/card";

const FileUploadCard = () => {
  const [dragging, setDragging] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      setUploadedFile(e.dataTransfer.files[0]);
      console.log("Dropped file:", e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setUploadedFile(e.target.files[0]);
      console.log("Selected file:", e.target.files[0]);
    }
  };

  return (
    <Card
      className={`p-4 h-56 bg-[#f2f6f9] rounded-none flex items-center border ${
        dragging ? "border-[#2173E3]" : "border-gray-300"
      } border`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <div className="w-[400px] mx-auto">
        <div className="mb-2">
          <Image
            src="/upload.svg"
            width={40}
            height={40}
            className="mx-auto"
            alt="Upload Icon"
          />
        </div>
        <div className="flex justify-center">
          <label htmlFor="file-upload" className="cursor-pointer">
            <span className="text-[#2173E3] font-bold pr-2">
              Click to upload
            </span>
          </label>
          <input
            id="file-upload"
            type="file"
            className="hidden"
            onChange={handleFileChange}
          />
          <span className="text-[#475467]"> or drag and drop</span>
        </div>
        <p className="text-center text-xs text-[#475467]">
          File type must be (PowerPoint, PDF, Word Doc, etc)
        </p>
        {uploadedFile && (
          <p className="mt-4 text-center text-sm text-green-500">
            Uploaded: {uploadedFile.name}
          </p>
        )}
      </div>
    </Card>
  );
};

export default FileUploadCard;
