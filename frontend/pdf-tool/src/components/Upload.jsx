import { useState } from "react";
import axios from "axios";

const Upload = ({ setFile }) => {
    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    return (
        <div>
            <input type="file" accept="application/pdf" onChange={handleFileChange} />
        </div>
    );
};

export default Upload;
