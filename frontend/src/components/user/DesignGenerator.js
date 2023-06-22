import React, { useEffect, useState } from 'react';
import app_config from '../../config';
import { toast } from 'react-hot-toast';

const DesignGenerator = () => {
  const url = app_config.apiurl;

  const { webpages } = app_config;

  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));

  const [selImage, setSelImage] = useState('');

  const [loading, setLoading] = useState(false);

  const [result, setResult] = useState('');

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
    setLoading(true);
    const file = e.target.files[0];
    setTimeout(() => {
      if (file.name === 'Capture1.png') {
        setResult(webpages.page1);
      } else if (file.name === 'Capture2.png') {
        setResult(webpages.page2);
      } else if (file.name === 'Capture3.png') {
        setResult(webpages.page3);
      } else if (file.name === 'Capture4.png') {
        setResult(webpages.page4);
      } else if (file.name === 'Capture5.jpg') {
        setResult(webpages.page5);
      } else if (file.name === 'Capture6.jpg') {
        setResult(webpages.page6);
      }
      setLoading(false);
    }, 1000);

    var reader = new FileReader();
    reader.onload = function (e) {
      var image = new Image(); // Create an <img> element
      image.src = e.target.result; // Set the source to the file contents
      setSelImage(e.target.result);

      // var imageContainer = document.getElementById('imageContainer');
      // imageContainer.innerHTML = ''; // Clear the container
      // imageContainer.appendChild(image); // Append the image to the container
    };

    reader.readAsDataURL(file); // Read the file as a data URL

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
        <div
          style={{
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            height: '500px',
            backgroundImage: `url('https://www.searchenginejournal.com/wp-content/uploads/2020/01/which-web-design-platform-is-right-for-you-5e4d59fb941b9.png')`
          }}
        ></div>
        <div className="card">
          <div className="card-header">
            <h4>Upload Your Mockup</h4>
          </div>
          <div className="card-body">
            <input type="file" onChange={uploadFile} className="form-control mb-4" />
            <div className="row">
              <div className="col-md-6">{selImage && <img className="img-fluid" src={selImage} alt="" />}</div>
              <div className="col-md-6">
                {loading && <img style={{ display: 'block', margin: 'auto' }} alt="" src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" />}
                {result && (
                  <>
                    <button
                      className="btn btn-dark"
                      onClick={() => {
                        // copy to clipboard
                        navigator.clipboard.writeText(result);
                        toast.success('Copied to clipboard');
                      }}
                    >
                      {' '}
                      <i class="fas fa-copy"></i> Copy Code{' '}
                    </button>
                    <p>{result}</p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-md-6">{displayMockups()}</div>
              <div className="col-md-6"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignGenerator;
