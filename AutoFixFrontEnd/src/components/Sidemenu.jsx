import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CarRental from "@mui/icons-material/CarRental";
import CarRepair from "@mui/icons-material/CarRepair";
import PaidIcon from "@mui/icons-material/Paid";
import CalculateIcon from "@mui/icons-material/Calculate";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import DiscountIcon from "@mui/icons-material/Discount";
import HailIcon from "@mui/icons-material/Hail";
import MedicationLiquidIcon from "@mui/icons-material/MedicationLiquid";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router-dom";

export default function Sidemenu({ open, toggleDrawer }) {
  const navigate = useNavigate();

  const listOptions = () => (
    <Box
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <List>
        <ListItemButton onClick={() => navigate("/home")}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItemButton>

        <Divider />

        <ListItemButton onClick={() => navigate("/vehicle/list")}>
          <ListItemIcon>
            <CarRental />
          </ListItemIcon>
          <ListItemText primary="Vehículos" />
        </ListItemButton>

        <ListItemButton onClick={() => navigate("/repair/list")}>
          <ListItemIcon>
            <CarRepair />
          </ListItemIcon>
          <ListItemText primary="Reparaciones" />
        </ListItemButton>

        <ListItemButton onClick={() => navigate("/bonus/list")}>
          <ListItemIcon>
            <PaidIcon />
          </ListItemIcon>
          <ListItemText primary="Bonus" />
        </ListItemButton>

      <Divider />

        <ListItemButton onClick={() => navigate("/typereport/list")}>
          <ListItemIcon>
            <CalculateIcon />
          </ListItemIcon>
          <ListItemText primary="Reporte Por Tipo" />
        </ListItemButton>
        <ListItemButton onClick={() => navigate("/repair/timereport")}>
          <ListItemIcon>
            <CalculateIcon />
          </ListItemIcon>
          <ListItemText primary="Reporte Por Tiempo" />
        </ListItemButton>
        <ListItemButton onClick={() => navigate("/reports/motorreport")}>
          <ListItemIcon>
            <AnalyticsIcon />
          </ListItemIcon>
          <ListItemText primary="Reporte Por Motor" />
        </ListItemButton>
      </List>
    </Box>
  );

  return (
    <div>
      <Drawer anchor={"left"} open={open} onClose={toggleDrawer(false)}>
        {listOptions()}
      </Drawer>
    </div>
  );
}
