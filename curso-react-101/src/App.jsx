import { Outlet } from 'react-router-dom';
import NavBar from './templates/NavBar';
import Footer from './templates/Footer';
import Sidebar from './templates/SideBar';


function App() {
  return (
    <div className="App">
      <Sidebar />
      <NavBar />
      <div className="container mt-4">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;