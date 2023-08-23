import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaDollarSign } from 'react-icons/fa';
import { RiShoppingCartFill } from 'react-icons/ri';
import { BsFillBagCheckFill } from 'react-icons/bs';
import Sidebar from '../components/Sidebar';
import './styles/Dashboard.css'

function Dashboard() {
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:8081/dashboard')
      .then((response) => setDashboardData(response.data))
      .catch((error) => console.error('Error fetching dashboard data:', error));
  }, []);

  if (!dashboardData) {
    return <div>Loading dashboard data...</div>;
  }

  const { salesData, ordersData, productsData } = dashboardData;

  return (
    <>
    <Sidebar/>
      <div className="sales">
        <div className="dol">
          <h4>
            <FaDollarSign />
          </h4>
        </div>
        <h3>Total Sales</h3>
        <h5>$54290</h5>
      </div>
      <div className="orders">
        <h4>
          <RiShoppingCartFill />
        </h4>
        <h3>Total Orders</h3>
        <h5>6543</h5>
      </div>
      <div className="products">
        <h4>
          <BsFillBagCheckFill />
        </h4>
        <h3>Total Products</h3>
        <h5>6</h5>
      </div>
    </>
  );
}

export default Dashboard;
