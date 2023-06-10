import React, { useState } from 'react'
import app_config from '../../config';

const MockupManager = () => {

  const url = app_config.apiurl;

  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));

  const [mockupList, setMockupList] = useState([]);
  const [selMockup, setSelMockup] = useState(null);

  const saveMockup = async () => {
    const res = await fetch(url + '/mockup/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    });
  };

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
    <div>MockupManager</div>
  )
}

export default MockupManager