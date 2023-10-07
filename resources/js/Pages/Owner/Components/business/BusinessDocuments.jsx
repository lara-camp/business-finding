import BusinessContext from "@/Context/BusinessContext";
import React from "react";
import { useContext } from "react";
import { useState } from "react";

const BusinessDocuments = () => {
    const [selectedFiles, setSelectedFiles] = useState([])
    const [fileTypes, setFileTypes] = useState([])
    const {data, setData} = useContext(BusinessContext)

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files)
        setData("documents", files);
        const newFileTypes = selectedFiles.map(file => {
            if(file.type  === 'application/pdf' || file.name.endsWith('.pdf')) {
                return 'pdf';
            } else if(
                file.type === 'application/msword' ||
                file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' ||
                file.name.endsWith('.doc') ||
                file.name.endsWith('.docx')

            ) {
                return 'doc';
            } else if(file.type === "text/plain" || file.name.endsWith('.txt')) {
                return 'txt';
            } else {
                return "unsupported file type";
            }
        })
        
        setSelectedFiles(files);
        setFileTypes(newFileTypes)
    }
    return (
        <div className="listening-details border border-indigo-700 p-3 rounded-md my-5">
            <h5 className="font-bold"> Add Documents </h5>
            <div className="my-3">
                {
                    data.documents.length > 0 &&
                    <>
                        <p className="mb-3 font-bold"> Curent Document</p>
                        <div className="flex justify-between">
                            {
                                data.documents.map((item, index) => (
                                    <div className="w-auto my-3" key={index}>
                                        <a href={item.url} target="_blank">  
                                            <p className="text-sm mb-2 font-bold"> File {index + 1} </p>
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/640px-PDF_file_icon.svg.png" alt="" width={100} height={200} />
                                        </a>
                                    </div>
                                ))
                            }
                        </div>
                    </>
                }
                <p className="mb-3 font-bold"> Upload Document</p>
                <div className="preview-docs-container flex">
                {selectedFiles.map((file, index) => (
                    <div key={index} className="w-1/5 mx-2">
                        <h3>File {index + 1}</h3>
                        {fileTypes[index] === 'pdf' && (
                            <embed src={URL.createObjectURL(file)} type="application/pdf" width="100%" height={400}/>
                        )}

                        {fileTypes[index] === 'doc' && (
                        <p>Document preview not supported for DOC/DOCX files.</p>
                        )}

                        {fileTypes[index] === 'txt' && (
                        <pre>{/* Render text content here */}</pre>
                        )}

                        {fileTypes[index] === 'unsupported' && (
                        <p>Unsupported file type. Please select a PDF, DOC, DOCX, or TXT file.</p>
                        )}
                    </div>
                    ))}
                </div>
                <input
                    type="file"
                    name="documents[]"
                    multiple
                    className=" border border-indigo-700 p-2 my-2 w-full rounded-md"
                    // accept=".pdf, .doc, .docx, .txt" 
                    onChange={handleFileChange}
                />
                <small className="text-slate-500">
                    You have the option to upload a maximum of 3 documents,
                    which can include PDFs, Word files, Excel spreadsheets, and
                    various other document formats. Simply select files from
                    your hard drive to provide supplementary information about
                    the business for sale, such as financial reports, business
                    plans, presentations, company brochures, and more.
                </small>
            </div>
        </div>
    );
};

export default BusinessDocuments;
