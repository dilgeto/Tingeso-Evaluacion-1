import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './components/Home';
import Navbar from './components/Navbar';
import RegisterVehicle from './components/RegisterVehicle';
import VehicleList from './components/VehicleList';
import RepairList from './components/RepairList';
import AddRepair from './components/AddRepair';
import AvailableBonus from './components/AvailableBonus';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <div className="container">
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/vehicle/list" element={<VehicleList/>} />
          <Route path="/vehicle/register" element={<RegisterVehicle/>} />
          <Route path="/repair/list" element={<RepairList/>} />
          <Route path="/bonus/list" element={<AvailableBonus/>} />
          <Route path="/repair/add" element={<AddRepair/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
