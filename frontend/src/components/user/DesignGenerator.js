import React, { useState } from 'react'
import app_config from '../../config';

const DesignGenerator = () => {

    const [selMockup, setSelMockup] = useState(null);
    const url = app_config.apiurl;

    const saveMockup = async () => {
        const res = await fetch(url+'/mockup/add', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            }
        })
    }

    const uploadFile = (e) => {
        const file = e.target.files[0];
        const fd = new FormData();
        fd.append("myfile", file);
        fetch(url + "/util/uploadfile", {
            method: "POST",
            body: fd,
        }).then((res) => {
            if (res.status === 200) {
                console.log("file uploaded");
            }
        });
    };

    const fetchMockups = async () => {
        
    }

    return (
        <div>
            <div className='container'>
                <div className='card'>
                    <div className="card-header">
                        <h4>Upload Your Mockup</h4>
                    </div>
                    <div className="card-body">
                        <input type='file' onChange={uploadFile} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DesignGenerator