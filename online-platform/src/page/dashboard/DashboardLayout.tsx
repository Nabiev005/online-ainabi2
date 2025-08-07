// src/pages/dashboard/DashboardLayout.tsx

import { Link, Outlet } from 'react-router-dom';
import '../../styles/DashboardLayout.css';

const DashboardLayout = () => {
  return (
    <div className="dashboard-container">
      <aside className="dashboard-sidebar">
        <h2>Меню</h2>
        <nav>
          <ul>
            <li><Link to="/dashboard/profile">Профиль</Link></li>
            <li><Link to="/dashboard/my-courses">Менин курстарым</Link></li>
            <li><Link to="/dashboard/settings">Орнотуулар</Link></li>
          </ul>
        </nav>
      </aside>

      <main className="dashboard-main">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
