"use client";

import React, { useState } from 'react'
import { CldUploadWidget, CldImage } from 'next-cloudinary'

interface CloudinaryResult {
    public_id: string;
}

const UploadPage = () => {
    const [publicId, setPublicId] = useState("");

  return (
        <>
            {publicId && (
                <CldImage
                    src = {publicId}
                    width={270}
                    height={180}
                    alt="Uploaded Image Not Found"
                />
            )}
            
            <CldUploadWidget 
                uploadPreset='nsvybcqv'
                onUpload={(result, widget) => {
                    if(result.event !== "success") return;
                    const info = result.info as CloudinaryResult;
                    setPublicId(info.public_id);
                }}
            >
                {({ open }) => (
                    <button className="btn btn-primary" onClick={() => open()}>
                        Upload an Image
                    </button>
                )}
            </CldUploadWidget>
        </>
    )
}

export default UploadPage
