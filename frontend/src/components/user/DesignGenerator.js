import React, { useEffect, useState } from 'react';
import app_config from '../../config';

const DesignGenerator = () => {
  const [selMockup, setSelMockup] = useState(null);
  const url = app_config.apiurl;

  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));

  const [mockupList, setMockupList] = useState([]);
  const saveMockup = async () => {
    const res = await fetch(url + '/mockup/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    });
  };

  const uploadFile = (e) => {
    const file = e.target.files[0];
    const fd = new FormData();
    fd.append('myfile', file);
    fetch(url + '/util/uploadfile', {
      method: 'POST',
      body: fd
    }).then((res) => {
      if (res.status === 200) {
        console.log('file uploaded');
      }
    });
  };

  const fetchMockups = async () => {
    const res = await fetch(url + '/mockup/getbyuser/' + currentUser._id, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await res.json();
    console.log(data);
  };

  useEffect(() => {
    fetchMockups();
  }, []);

  const displayMockups = () => {
    return (
      <div className="row">
        {mockupList.map((mockup) => (
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">
                <h3>{mockup.name}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div>
      <div className="container">
        <div className="card">
          <div className="card-header">
            <h4>Upload Your Mockup</h4>
          </div>
          <div className="card-body">
            <input type="file" onChange={uploadFile} />
          </div>
        </div>

        <div className="card">
          <div className="card-body">{displayMockups()}</div>
        </div>
      </div>
    </div>
  );
};

export default DesignGenerator;
