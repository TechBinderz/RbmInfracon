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
  TextField,
  InputAdornment,
  Grid,
  Chip,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PageTitle from "../../features/common/PageTitleDiv";
import BANNER_IMAGE from "../../assets/features/home/pexels-tomfisk-10407691.jpg";
import { themeColor } from "../common/common";
import { styled } from "@mui/material/styles";

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

const StyledTypography = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    ...theme.typography.body2,
  },
  [theme.breakpoints.up("sm")]: {
    ...theme.typography.body1,
  },
}));

const StyledTypographyH4 = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    ...theme.typography.h6,
  },
  [theme.breakpoints.up("sm")]: {
    ...theme.typography.h5,
  },
  [theme.breakpoints.up("md")]: {
    ...theme.typography.h4,
  },
}));

const StyledTypographyH6 = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    ...theme.typography.h6,
  },
  [theme.breakpoints.up("sm")]: {
    ...theme.typography.h5,
  },
  [theme.breakpoints.up("md")]: {
    ...theme.typography.h4,
  },
}));

const formatDate = (dateStr: string): string => {
  const [year, month, day] = dateStr.split('-');
  return `${day}/${month}/${year}`;
};

const CurrentProjects: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const projects: Project[] = [
    {
      id: 1,
      companyName: "Nayara Energy Limited",
      location: "Jamnagar",
      vendorCode: "204893",
      workOrderNumber: "5300005209",
      issueDate: "2023-06-29",
      description: "On Call basis ARC for Pigging support services for DCU heater pigging jobs (3 Yrs.)",
      contractAmount: "3,42,00,000.00",
    },
    {
      id: 2,
      companyName: "Nayara Energy Limited",
      location: "Jamnagar",
      vendorCode: "204893",
      workOrderNumber: "5300005220",
      issueDate: "2023-07-03",
      description: "ARC for Static, Rotary & Heat Exchanger Maintenance jobs at Refinery site (for 3 Yrs.) - Area-2",
      contractAmount: "33,05,00,000.00",
    },
    {
      id: 3,
      companyName: "Nayara Energy Limited",
      location: "Jamnagar",
      vendorCode: "204893",
      workOrderNumber: "5300005221",
      issueDate: "2023-07-03",
      description: "ARC for Static, Rotary & Heat Exchanger Maintenance jobs at Refinery site (for 3 Yrs.) - Area-3",
      contractAmount: "16,10,00,000.00",
    },
    {
      id: 4,
      companyName: "Yara Fertilizers India Pvt Limited",
      location: "Babrala",
      vendorCode: "R02568C01",
      workOrderNumber: "YFI/BABRALA/PROJ/2023/LOI/01",
      issueDate: "2023-01-02",
      description: "Service for Mechanical maintenance and Painting work in all Plant",
      contractAmount: "1,00,00,000.00",
    },
    {
      id: 5,
      companyName: "Vedanta Sesa coke Gujarat",
      location: "Bhachau",
      vendorCode: "735075",
      workOrderNumber: "3100006477",
      issueDate: "2022-09-29",
      description: "OPERATION AND MAINTENANCE OF Metcoke Manufacturing Plant",
      contractAmount: "2,00,00,000.00",
    },
    {
      id: 6,
      companyName: "BN AGRITECH",
      location: "Anjaar",
      vendorCode: "",
      workOrderNumber: "BNAL/LOI/23-24/001",
      issueDate: "2023-09-29",
      description: "EPC CONTRACT FOR EDIBLE OIL INDUSTRIES",
      contractAmount: "85,00,00,000.00",
    },
    {
      id: 7,
      companyName: "Epitome Industries India Limited",
      location: "Anjaar",
      vendorCode: "",
      workOrderNumber: "GJGJ322880411152653722675V",
      issueDate: "2023-09-16",
      description: "EPC CONTRACT FOR EDIBLE OIL INDUSTRIES",
      contractAmount: "9,57,61,00,000.00",
    },
    {
      id: 8,
      companyName: "Reliance Industries Limited",
      location: "Nagothane",
      vendorCode: "3106854",
      workOrderNumber: "260043660",
      issueDate: "2024-03-15",
      description: "Mechanical Contract For Fabrication /Static/ Rotary /scaffolding services",
      contractAmount: "6,61,00,000.00",
    },
    {
      id: 9,
      companyName: "Reliance Industries Limited",
      location: "Nagothane",
      vendorCode: "3106854",
      workOrderNumber: "260048718",
      issueDate: "2023-10-06",
      description: "Tanker connection and disconnection loading and unloading of Tankers in Tank farm At RIL,Nagothane",
      contractAmount: "33,39,000.00",
    },
    {
      id: 10,
      companyName: "MUNDRA PETRO CHEMICAL LIMITED",
      location: "Mundra",
      vendorCode: "",
      workOrderNumber: "5700342298",
      issueDate: "2024-04-18",
      description: "Structural Fabrication Job at Fabrication Shop of Green PVC Project for Mundra Petrochemical Ltd",
      contractAmount: "9,50,25,100.00",
    },
    {
      id: 11,
      companyName: "THYSSENKRUPP",
      location: "Vadodra",
      vendorCode: "",
      workOrderNumber: "38033009/BVA",
      issueDate: "2024-07-12",
      description: "Village Tunda, Taluka Mundra, Dist. Kutch, Gujarat",
      contractAmount: "5,93,71,610.00",
    },
    {
      id: 12,
      companyName: "Nayara Energy Limited",
      location: "Jamnagar",
      vendorCode: "",
      workOrderNumber: "5300005060",
      issueDate: "2024-05-16",
      description: "ARC for Crude Tank (2 Nos.) M&J jobs at COT area (for ~1.75 Yrs.)",
      contractAmount: "22,15,70,015.00",
    },
    {
      id: 13,
      companyName: "Proj Industries Limited",
      location: "Kandla",
      vendorCode: "",
      workOrderNumber: "ROC/Piping/25-25/01 & ROC/STN/25-25/01",
      issueDate: "2024-06-17",
      description: "Piping Works",
      contractAmount: "5,00,00,000.00",
    },
    {
      id: 14,
      companyName: "Chambal Fertilizers & Chemicals Limited",
      location: "Kota, Rajasthan",
      vendorCode: "",
      workOrderNumber: "CFCL/PUR/220/450/2630",
      issueDate: "2024-05-29",
      description: "ARC for Routine Maintenance Job for One Year",
      contractAmount: "7,00,00,000.00",
    },
    {
      id: 15,
      companyName: "Reliance Industries Limited",
      location: "Jamnagar",
      vendorCode: "3106854",
      workOrderNumber: "4M4/230181041",
      issueDate: "2024-05-16",
      description: "Mechanical works For PV utility interconnection line jobs",
      contractAmount: "4,25,51,320.50",
    },
    {
      id: 16,
      companyName: "Nayara Energy Limited",
      location: "Gujarat",
      vendorCode: "204893",
      workOrderNumber: "4300029303",
      issueDate: "2024-09-11",
      description: "",
      contractAmount: "1,49,95,769.00",
    },
    {
      id: 17,
      companyName: "Reliance Industries Limited",
      location: "Gujarat",
      vendorCode: "3106854",
      workOrderNumber: "260056423",
      issueDate: "2024-09-13",
      description: "UG piping fabrication & laying including associated civil work for Train-1 (3 GW) PV Manufacturing Plant at RIL Complex, Jamnagar",
      contractAmount: "1,31,05,850.00",
    },
    {
      id: 18,
      companyName: "Nayara Energy Limited",
      location: "Gujarat",
      vendorCode: "204893",
      workOrderNumber: "5300008",
      issueDate: "2024-08-16",
      description: "ARC for LPG Spheres & Hydrogen spheres (3 nos. M&J) jobs for 3yrs",
      contractAmount: "1,11,00,00,000.00",
    },
    {
      id: 19,
      companyName: "ONGC",
      location: "Gujarat",
      vendorCode: "",
      workOrderNumber: "DLI/ONS/CORP-936550/MM/2023/PECIII/1239633/CA-2/NANDEJ",
      issueDate: "2024-09-06",
      description: "Production Enhancement Operations In Mature Fields",
      contractAmount: "34,98,00,00,000.00",
    },
    {
      id: 20,
      companyName: "Reliance Industries Limited",
      location: "Gujarat",
      vendorCode: "3106854",
      workOrderNumber: "4M3/230201798",
      issueDate: "2025-01-20",
      description: "OSBL Area (PV interconnection project) at Reliance Industries Ltd, Jamnagar",
      contractAmount: "34,65,58,123.95",
    },
    {
      id: 21,
      companyName: "MUNDRA PETRO CHEMICAL LIMITED",
      location: "Mundra",
      vendorCode: "",
      workOrderNumber: "5700362812",
      issueDate: "2025-03-22",
      description: "Piping Spool Fabrication Job at Open Yard for Green PVC project of Mundra Petrochemical Ltd for Mundra location at Village Tunda, Ta luka Mundra,Dist.Kutch, Gujarat.",
      contractAmount: "7,06,30,538.00",
    }
  ];

  const sortProjectsByDateDesc = (projects: Project[]): Project[] => 
    projects.sort((a, b) => new Date(b.issueDate).getTime() - new Date(a.issueDate).getTime());

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
                <StyledTypographyH6 variant="h6" gutterBottom>
                  Total Portfolio Value
                </StyledTypographyH6>
                <StyledTypographyH4 variant="h4" sx={{ color: themeColor, fontWeight: "bold" }}>
                  ₹{(totalValue / 10000000).toFixed(2)} Crores
                </StyledTypographyH4>
              </Grid>
              <Grid item xs={12} md={4}>
                <StyledTypographyH6 variant="h6" gutterBottom>
                  Active Projects
                </StyledTypographyH6>
                <StyledTypographyH4 variant="h4" sx={{ color: themeColor, fontWeight: "bold" }}>
                  {projects.length}
                </StyledTypographyH4>
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
                  borderColor: themeColor,
                },
                "&.Mui-focused fieldset": {
                  borderColor: themeColor,
                },
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              )
            }}
          />
        </Box>

        <TableContainer component={Paper} sx={{ mb: 4 }}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
                <TableCell sx={{ fontWeight: "bold", color: "#333" }}>
                  S. No.
                </TableCell>
                <TableCell sx={{ fontWeight: "bold", color: "#333" }}>
                  Company
                </TableCell>
                <TableCell sx={{ fontWeight: "bold", color: "#333" }}>
                  Location
                </TableCell>
                <TableCell sx={{ fontWeight: "bold", color: "#333" }}>
                  Work Order
                </TableCell>
                <TableCell sx={{ fontWeight: "bold", color: "#333" }}>
                  Issue Date
                </TableCell>
                <TableCell sx={{ fontWeight: "bold", color: "#333" }}>
                  Description
                </TableCell>
                <TableCell sx={{ fontWeight: "bold", color: "#333", textAlign: "right" }}>
                  Contract Value (₹)
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredProjects.map((project, index) => (
                <TableRow key={project.id} hover>
                  <TableCell sx={{ typography: 'body2' }}>{index + 1}</TableCell>
                  <TableCell sx={{ typography: 'body2' }}>
                    <StyledTypography variant="body1" sx={{ fontWeight: "medium", color: "#333" }}>
                      {project.companyName}
                    </StyledTypography>
                    {project.vendorCode && (
                      <StyledTypography variant="body2" sx={{ color: "text.secondary" }}>
                        Vendor Code: {project.vendorCode}
                      </StyledTypography>
                    )}
                  </TableCell>
                  <TableCell sx={{ typography: 'body2' }}>
                    <Chip
                      label={project.location}
                      size="medium"
                      sx={{
                        backgroundColor: "#e8f5e9",
                        color: themeColor,
                        "&:hover": {
                          backgroundColor: "#c8e6c9",
                        },
                      }}
                    />
                  </TableCell>
                  <TableCell sx={{ typography: 'body2' }}>
                    {project.workOrderNumber}
                  </TableCell>
                  <TableCell sx={{ typography: 'body2' }}>
                    {formatDate(project.issueDate)}
                  </TableCell>
                  <TableCell sx={{ typography: 'body2' }}>
                    {project.description}
                  </TableCell>
                  <TableCell sx={{ typography: 'body2', fontWeight: "medium", color: themeColor, textAlign: "right" }}>
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
