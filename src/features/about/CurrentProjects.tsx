import React, { useState } from "react";
import {
  Box,
  Container,
  Card,
  CardContent,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  TextField,
  InputAdornment,
  Grid,
  Chip,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import PageTitle from "../../features/common/PageTitleDiv";
import BANNER_IMAGE from "../../assets/features/home/pexels-tomfisk-10407691.jpg";

interface Project {
  id: number;
  companyName: string;
  location: string;
  vendorCode: string;
  workOrderNumber: string;
  issueDate: string;
  description: string;
  contractAmount: string;
}

const CurrentProjects: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const projects: Project[] = [
    {
      id: 1,
      companyName: "Nayara Energy Limited",
      location: "Jamnagar",
      vendorCode: "204893",
      workOrderNumber: "5300005209",
      issueDate: "29-Jun-23",
      description: "On Call basis ARC for Pigging support services for DCU heater pigging jobs (3 Yrs.)",
      contractAmount: "3,42,00,000.00",
    },
    {
      id: 2,
      companyName: "Nayara Energy Limited",
      location: "Jamnagar",
      vendorCode: "204893",
      workOrderNumber: "5300005220",
      issueDate: "03-Jul-23",
      description: "ARC for Static, Rotary & Heat Exchanger Maintenance jobs at Refinery site (for 3 Yrs.) - Area-2",
      contractAmount: "33,05,00,000.00",
    },
    {
      id: 3,
      companyName: "Nayara Energy Limited",
      location: "Jamnagar",
      vendorCode: "204893",
      workOrderNumber: "5300005221",
      issueDate: "03-Jul-23",
      description: "ARC for Static, Rotary & Heat Exchanger Maintenance jobs at Refinery site (for 3 Yrs.) - Area-3",
      contractAmount: "16,10,00,000.00",
    },
    {
      id: 4,
      companyName: "Yara Fertilizers India Pvt Limited",
      location: "Babrala",
      vendorCode: "R02568C01",
      workOrderNumber: "YFI/BABRALA/PROJ/2023/LOI/01",
      issueDate: "02.01.2023",
      description: "Service for Mechanical maintenance and Painting work in all Plant",
      contractAmount: "1,00,00,000.00",
    },
    {
      id: 5,
      companyName: "Vedanta Sesa coke Gujarat",
      location: "Bhachau",
      vendorCode: "735075",
      workOrderNumber: "3100006477",
      issueDate: "29.09.2022",
      description: "OPERATION AND MAINTENANCE OF Metcoke Manufacturing Plant",
      contractAmount: "2,00,00,000.00",
    },
    {
      id: 6,
      companyName: "BN AGRITECH",
      location: "Anjaar",
      vendorCode: "",
      workOrderNumber: "BNAL/LOI/23-24/001",
      issueDate: "29.09.2023",
      description: "EPC CONTRACT FOR EDIBLE OIL INDUSTRIES",
      contractAmount: "85,00,00,000.00",
    },
    {
      id: 7,
      companyName: "Epitome Industries India Limited",
      location: "Anjaar",
      vendorCode: "",
      workOrderNumber: "GJGJ322880411152653722675V",
      issueDate: "16.09.2023",
      description: "EPC CONTRACT FOR EDIBLE OIL INDUSTRIES",
      contractAmount: "9,57,61,00,000.00",
    },
    {
      id: 8,
      companyName: "Reliance Industries Limited",
      location: "Nagothane",
      vendorCode: "3106854",
      workOrderNumber: "260043660",
      issueDate: "15.03.2024",
      description: "Mechanical Contract For Fabrication /Static/ Rotary /scaffolding services",
      contractAmount: "6,61,00,000.00",
    },
    {
      id: 9,
      companyName: "Reliance Industries Limited",
      location: "Nagothane",
      vendorCode: "3106854",
      workOrderNumber: "260048718",
      issueDate: "6.10.2023",
      description: "Tanker connection and disconnection loading and unloading of Tankers in Tank farm At RIL,Nagothane",
      contractAmount: "33,39,000.00",
    },
    {
      id: 10,
      companyName: "MUNDRA PETRO CHEMICAL LIMITED",
      location: "Mundra",
      vendorCode: "",
      workOrderNumber: "5700342298",
      issueDate: "18.04.2024",
      description: "Structural Fabrication Job at Fabrication Shop of Green PVC Project for Mundra Petrochemical Ltd",
      contractAmount: "9,50,25,100.00",
    },
    {
      id: 11,
      companyName: "THYSSENKRUPP",
      location: "Vadodra",
      vendorCode: "",
      workOrderNumber: "38033009/BVA",
      issueDate: "12.07.2024",
      description: "Village Tunda, Taluka Mundra, Dist. Kutch, Gujarat",
      contractAmount: "5,93,71,610.00",
    },
    {
      id: 12,
      companyName: "Nayara Energy Limited",
      location: "Jamnagar",
      vendorCode: "",
      workOrderNumber: "5300005060",
      issueDate: "16.05.2024",
      description: "ARC for Crude Tank (2 Nos.) M&J jobs at COT area (for ~1.75 Yrs.)",
      contractAmount: "22,15,70,015.00",
    },
    {
      id: 13,
      companyName: "Proj Industries Limited",
      location: "Kandla",
      vendorCode: "",
      workOrderNumber: "ROC/Piping/25-25/01 & ROC/STN/25-25/01",
      issueDate: "17.06.2024",
      description: "Piping Works",
      contractAmount: "5,00,00,000.00",
    },
    {
      id: 14,
      companyName: "Chambal Fertilizers & Chemicals Limited",
      location: "Kota, Rajasthan",
      vendorCode: "",
      workOrderNumber: "CFCL/PUR/220/450/2630",
      issueDate: "29.05.2024",
      description: "ARC for Routine Maintenance Job for One Year",
      contractAmount: "7,00,00,000.00",
    },
    {
      id: 15,
      companyName: "Reliance Industries Limited",
      location: "Jamnagar",
      vendorCode: "3106854",
      workOrderNumber: "4M4/230181041",
      issueDate: "16.05.2024",
      description: "Mechanical works For PV utility interconnection line jobs",
      contractAmount: "4,25,51,320.50",
    },
    {
      id: 16,
      companyName: "Nayara Energy Limited",
      location: "Gujarat",
      vendorCode: "204893",
      workOrderNumber: "4300029303",
      issueDate: "11.09.2024",
      description: "",
      contractAmount: "1,49,95,769.00",
    },
    {
      id: 17,
      companyName: "Reliance Industries Limited",
      location: "Gujarat",
      vendorCode: "3106854",
      workOrderNumber: "260056423",
      issueDate: "13.09.2024",
      description: "UG piping fabrication & laying including associated civil work for Train-1 (3 GW) PV Manufacturing Plant at RIL Complex, Jamnagar",
      contractAmount: "1,31,05,850.00",
    },
    {
      id: 18,
      companyName: "Nayara Energy Limited",
      location: "Gujarat",
      vendorCode: "204893",
      workOrderNumber: "5300008",
      issueDate: "16.08.2024",
      description: "ARC for LPG Spheres & Hydrogen spheres (3 nos. M&J) jobs for 3yrs",
      contractAmount: "1,11,00,00,000.00",
    },
    {
      id: 19,
      companyName: "ONGC",
      location: "Gujarat",
      vendorCode: "",
      workOrderNumber: "DLI/ONS/CORP-936550/MM/2023/PECIII/1239633/CA-2/NANDEJ",
      issueDate: "06-09-2024",
      description: "Production Enhancement Operations In Mature Fields",
      contractAmount: "34,98,00,00,000.00",
    },
    {
      id: 20,
      companyName: "Reliance Industries Limited",
      location: "Gujarat",
      vendorCode: "3106854",
      workOrderNumber: "4M3/230201798",
      issueDate: "20-01-2025",
      description: "OSBL Area (PV interconnection project) at Reliance Industries Ltd, Jamnagar",
      contractAmount: "34,65,58,123.95",
    },
    {
      id: 21,
      companyName: "MUNDRA PETRO CHEMICAL LIMITED",
      location: "Mundra",
      vendorCode: "",
      workOrderNumber: "5700362812",
      issueDate: "22.03.2025",
      description: "Piping Spool Fabrication Job at Open Yard for Green PVC project of Mundra Petrochemical Ltd for Mundra location at Village Tunda, Ta luka Mundra,Dist.Kutch, Gujarat.",
      contractAmount: "7,06,30,538.00",
    }
  ];

  const sortProjectsByDateDesc = (projects: Project[]): Project[] => 
    projects.sort((a, b) => new Date(b.issueDate.replace(/-/g, " ")).getTime() - new Date(a.issueDate.replace(/-/g, " ")).getTime());

  const filterProjects = (projects: Project[], searchTerm: string): Project[] => {
      const lowerSearchTerm = searchTerm.toLowerCase();
      return projects.filter(({ companyName, description, location }) => 
          [companyName, description, location].some(field => field.toLowerCase().includes(lowerSearchTerm))
      );
  };
  
  const filteredProjects = sortProjectsByDateDesc(filterProjects(projects, searchTerm));

  const totalValue = projects.reduce(
    (sum, project) =>
      sum + parseFloat(project.contractAmount.replace(/,/g, "")),
    0
  );

  return (
    <>
      <PageTitle imageUrl={BANNER_IMAGE} tileContent="Current Projects" />
      <Container maxWidth="xl" sx={{ py: 4 }}>
        <Card sx={{ mb: 4, backgroundColor: "#f8f9fa", boxShadow: 3 }}>
          <CardContent>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} md={8}>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{
                    color: "#333",
                    fontSize: { xs: "1.1rem", sm: "1.3rem", md: "1.5rem" },
                  }}
                >
                  Total Portfolio Value
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    color: "#39ac4b",
                    fontWeight: "bold",
                    fontSize: { xs: "1.8rem", sm: "2rem", md: "2.5rem" },
                  }}
                >
                  ₹{(totalValue / 10000000).toFixed(2)} Crores
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{
                    color: "#333",
                    fontSize: { xs: "1.1rem", sm: "1.3rem", md: "1.5rem" },
                  }}
                >
                  Active Projects
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    color: "#39ac4b",
                    fontWeight: "bold",
                    fontSize: { xs: "1.8rem", sm: "2rem", md: "2.5rem" },
                  }}
                >
                  {projects.length}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        <Box sx={{ mb: 3 }}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search by company, description, or location..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{
              "& .MuiOutlinedInput-root": {
                "&:hover fieldset": {
                  borderColor: "#39ac4b",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#39ac4b",
                },
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton>
                    <FilterListIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>

        <TableContainer component={Paper} sx={{ mb: 4 }}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    color: "#333",
                    fontSize: { xs: "1rem", sm: "1.1rem", md: "1.25rem" },
                  }}
                >
                  Company
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    color: "#333",
                    fontSize: { xs: "1rem", sm: "1.1rem", md: "1.25rem" },
                  }}
                >
                  Location
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    color: "#333",
                    fontSize: { xs: "1rem", sm: "1.1rem", md: "1.25rem" },
                  }}
                >
                  Work Order
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    color: "#333",
                    fontSize: { xs: "1rem", sm: "1.1rem", md: "1.25rem" },
                  }}
                >
                  Issue Date
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    color: "#333",
                    fontSize: { xs: "1rem", sm: "1.1rem", md: "1.25rem" },
                  }}
                >
                  Description
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    color: "#333",
                    fontSize: { xs: "1rem", sm: "1.1rem", md: "1.25rem" },
                  }}
                  align="right"
                >
                  Contract Value (₹)
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredProjects.map((project) => (
                <TableRow key={project.id} hover>
                  <TableCell>
                    <Typography
                      variant="body1"
                      sx={{
                        fontWeight: "medium",
                        color: "#333",
                        fontSize: {
                          xs: "0.95rem",
                          sm: "1.05rem",
                          md: "1.15rem",
                        },
                      }}
                    >
                      {project.companyName}
                    </Typography>
                    {project.vendorCode && (
                      <Typography
                        variant="caption"
                        sx={{
                          color: "text.secondary",
                          fontSize: {
                            xs: "0.85rem",
                            sm: "0.95rem",
                            md: "1rem",
                          },
                        }}
                      >
                        Vendor Code: {project.vendorCode}
                      </Typography>
                    )}
                  </TableCell>
                  <TableCell>
                    <Chip
                      label={project.location}
                      size="medium"
                      sx={{
                        backgroundColor: "#e8f5e9",
                        color: "#39ac4b",
                        "&:hover": {
                          backgroundColor: "#c8e6c9",
                        },
                        fontSize: {
                          xs: "0.95rem",
                          sm: "1.05rem",
                          md: "1.15rem",
                        },
                      }}
                    />
                  </TableCell>
                  <TableCell
                    sx={{
                      fontSize: { xs: "0.95rem", sm: "1.05rem", md: "1.15rem" },
                    }}
                  >
                    {project.workOrderNumber}
                  </TableCell>
                  <TableCell
                    sx={{
                      fontSize: { xs: "0.95rem", sm: "1.05rem", md: "1.15rem" },
                    }}
                  >
                    {project.issueDate}
                  </TableCell>
                  <TableCell
                    sx={{
                      fontSize: { xs: "0.95rem", sm: "1.05rem", md: "1.15rem" },
                    }}
                  >
                    {project.description}
                  </TableCell>
                  <TableCell
                    sx={{
                      fontSize: { xs: "0.95rem", sm: "1.05rem", md: "1.15rem" },
                      fontWeight: "medium",
                      color: "#39ac4b",
                      textAlign: "right",
                    }}
                  >
                    ₹{project.contractAmount}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
};

export default CurrentProjects;
