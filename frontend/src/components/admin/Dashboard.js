import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top'
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart'
    }
  }
};

const Dashboard = () => {
  const [userList, setuserList] = useState([]);
  const [userChartData, setUserChartData] = useState([]);

  const [mockupList, setMockupList] = useState([]);

  const getDatewiseRegistrationCount = (data) => {
    let datewiseRegistrationCount = [];
    data.forEach((item) => {
      let date = new Date(item.created_at).toLocaleDateString();
      let index = datewiseRegistrationCount.findIndex((x) => x.date === date);
      if (index === -1) {
        datewiseRegistrationCount.push({
          date,
          count: 1
        });
      } else {
        datewiseRegistrationCount[index].count += 1;
      }
    });
    return datewiseRegistrationCount;
  };

  useEffect(() => {
    fetch('http://localhost:5000/user/getall')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setuserList(data.result);
        setUserChartData(getDatewiseRegistrationCount(data.result));
      });

    fetch('http://localhost:5000/mockup/getall')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMockupList(data);
      });
  }, []);

  return (
    <div>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-3">
            <div className="card bg-danger text-white">
              <div className="card-header">
                <h4 className="m-0">
                  {' '}
                  <i class="fa fa-users" aria-hidden="true"></i> Total Users
                </h4>
              </div>
              <div className="card-body">
                <p className="m-0 display-1 fw-bold">{userList.length}</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card bg-primary text-white">
              <div className="card-header">
                <h4 className="m-0">
                  {' '}
                  <i class="fa fa-users" aria-hidden="true"></i> Total Pages Generated
                </h4>
              </div>
              <div className="card-body">
                <p className="m-0 display-1 fw-bold">{mockupList.length}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card mt-5">
          <div className="card-header">
            <h4>User Registrations</h4>
          </div>
          <div className="card-body">
            <Line
              options={options}
              data={{
                labels: userChartData.map((item) => item.date),
                datasets: [
                  {
                    label: 'User Registrations',
                    data: userChartData.map((item) => item.count),
                    borderColor: 'rgb(255, 99, 132)',
                    backgroundColor: 'rgba(255, 99, 132, 0.5)'
                  }
                ]
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
