import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  TextField,
  InputAdornment,
  IconButton,
  Card,
  CardContent,
  Grid,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import { formatCurrency } from '../../features/common/common';

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
  const [searchTerm, setSearchTerm] = useState('');

  const projects: Project[] = [
    {
      id: 1,
      companyName: "Nayara Energy Limited",
      location: "Jamnagar",
      vendorCode: "204893",
      workOrderNumber: "5300004496",
      issueDate: "16-Nov-21",
      description: "ARC for Operation & Maintenance of Workshop facilities and Heavy Equipment (for 3 Yrs.)",
      contractAmount: "5,98,23,000.00"
    },
    {
      id: 2,
      companyName: "Nayara Energy Limited",
      location: "Jamnagar",
      vendorCode: "204893",
      workOrderNumber: "5300005209",
      issueDate: "29-Jun-23",
      description: "On Call basis ARC for Pigging support services for DCU heater pigging jobs (3 Yrs.)",
      contractAmount: "3,42,00,000.00"
    },
    {
      id: 3,
      companyName: "Nayara Energy Limited",
      location: "Jamnagar",
      vendorCode: "204893",
      workOrderNumber: "5300005220",
      issueDate: "03-Jul-23",
      description: "ARC for Static, Rotary & Heat Exchanger Maintenance jobs at Refinery site (for 3 Yrs.) - Area-2",
      contractAmount: "33,09,00,000.00"
    },
    {
      id: 4,
      companyName: "Nayara Energy Limited",
      location: "Jamnagar",
      vendorCode: "204893",
      workOrderNumber: "5300005221",
      issueDate: "03-Jul-23",
      description: "ARC for Static, Rotary & Heat Exchanger Maintenance jobs at Refinery site (for 3 Yrs.) - Area-3",
      contractAmount: "16,10,00,000.00"
    },
    {
      id: 5,
      companyName: "Yara Fertilizers India Pvt limited",
      location: "Babrala",
      vendorCode: "R02563C01",
      workOrderNumber: "YFI/BABRALA/PROJ/2023/LOI/01",
      issueDate: "02.01.2023",
      description: "Service for Mechanical maintinace and Paitning work in all Plant",
      contractAmount: "1,00,00,000.00"
    },
    {
      id: 6,
      companyName: "Kutch Copper Limited",
      location: "Mundra",
      vendorCode: "5703010736",
      workOrderNumber: "5703010736",
      issueDate: "19.07.2023",
      description: "Erection of Pipe Rack (Apporx. 5276MT) at KCL, Mundra for 0.5 MPTA Copper Refienry Complex",
      contractAmount: "7,76,65,258.00"
    },
    {
      id: 7,
      companyName: "Vedanta Sesa coke Gujrat",
      location: "Bhachau",
      vendorCode: "735075",
      workOrderNumber: "3100006477",
      issueDate: "29.09.2022",
      description: "OPERATION AND MAINTENANCE OF Metcoke Manufacturing Plant",
      contractAmount: "2,00,00,00,000.00"
    },
    {
      id: 8,
      companyName: "BN AGRITECH",
      location: "Anjaar",
      vendorCode: "",
      workOrderNumber: "BNAL/LOI/23-24/001",
      issueDate: "29.09.2023",
      description: "EPC CONTRACT FOR EDIABLE OIL INDUSTRIES",
      contractAmount: "85,00,00,000.00"
    },
    {
      id: 9,
      companyName: "Epitome Industires India Limited",
      location: "Anjaar",
      vendorCode: "",
      workOrderNumber: "SBINGJGJ322880411152653722675V",
      issueDate: "16.09.2023",
      description: "EPC CONTRACT FOR EDIABLE OIL INDUSTRIES",
      contractAmount: "9,57,61,00,000.00"
    },
    {
      id: 10,
      companyName: "Reliance Industries Limited",
      location: "Nagothane",
      vendorCode: "3106854",
      workOrderNumber: "260043660",
      issueDate: "15.03.2024",
      description: "Mechanical Contract For Fabrication /Static/ Rotary /scaffolding services",
      contractAmount: "6,61,00,000.00"
    },
    {
      id: 11,
      companyName: "MUNDRA PETRO CHEMICAL LIMITED",
      location: "Mundra",
      vendorCode: "",
      workOrderNumber: "5700342298",
      issueDate: "18.04.2024",
      description: "Structural Fabrication Job at Fabrication Shop of Green PVC Project",
      contractAmount: "9,50,25,100.00"
    },
    {
      id: 12,
      companyName: "THYSANKRUPP",
      location: "Vadodra",
      vendorCode: "",
      workOrderNumber: "38033009/BVA",
      issueDate: "12.07.2024",
      description: "Village Tunda, Taluka Mundra, Dist. Kutch, Gujarat",
      contractAmount: "5,93,71,610.00"
    },
    {
      id: 13,
      companyName: "ONGC",
      location: "Gujarat",
      vendorCode: "936550",
      workOrderNumber: "DLI/ONS/CORPMM/2023/PECIII/1239633/CA-2/NANDEJ",
      issueDate: "06-09-2024",
      description: "Production Enhancement Operations In Mature Fields",
      contractAmount: "34,98,00,00,000.00"
    },
    {
      id: 14,
      companyName: "Reliance Industries Limited",
      location: "Gujarat",
      vendorCode: "3106854",
      workOrderNumber: "4M3/230201798",
      issueDate: "20-01-2025",
      description: "Yard & Field Mechanical works for C2 OSBL Area (PV interconnection project)",
      contractAmount: "14,65,58,123.95"
    }
  ];

  const filteredProjects = projects.filter(project =>
    project.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalValue = projects.reduce((sum, project) => 
    sum + parseFloat(project.contractAmount.replace(/,/g, '')), 
    0
  );

  return (
    <Box sx={{ pt: 12, pb: 6 }}>
      <Container maxWidth="xl">
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            color: '#333',
            mb: 4,
            fontSize: { xs: '2.2rem', sm: '2.5rem', md: '3rem' }
          }}
        >
          Current Projects
        </Typography>

        <Card sx={{ mb: 4, backgroundColor: '#f8f9fa', boxShadow: 3 }}>
          <CardContent>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} md={8}>
                <Typography variant="h6" gutterBottom sx={{ 
                  color: '#333',
                  fontSize: { xs: '1.1rem', sm: '1.3rem', md: '1.5rem' }
                }}>
                  Total Portfolio Value
                </Typography>
                <Typography variant="h4" sx={{ 
                  color: '#39ac4b', 
                  fontWeight: 'bold',
                  fontSize: { xs: '1.8rem', sm: '2rem', md: '2.5rem' }
                }}>
                  ₹{(totalValue / 10000000).toFixed(2)} Crores
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="h6" gutterBottom sx={{ 
                  color: '#333',
                  fontSize: { xs: '1.1rem', sm: '1.3rem', md: '1.5rem' }
                }}>
                  Active Projects
                </Typography>
                <Typography variant="h4" sx={{ 
                  color: '#39ac4b', 
                  fontWeight: 'bold',
                  fontSize: { xs: '1.8rem', sm: '2rem', md: '2.5rem' }
                }}>
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
              '& .MuiOutlinedInput-root': {
                '&:hover fieldset': {
                  borderColor: '#39ac4b',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#39ac4b',
                }
              }
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
              <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
                <TableCell sx={{ 
                  fontWeight: 'bold', 
                  color: '#333',
                  fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' }
                }}>Company</TableCell>
                <TableCell sx={{ 
                  fontWeight: 'bold', 
                  color: '#333',
                  fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' }
                }}>Location</TableCell>
                <TableCell sx={{ 
                  fontWeight: 'bold', 
                  color: '#333',
                  fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' }
                }}>Work Order</TableCell>
                <TableCell sx={{ 
                  fontWeight: 'bold', 
                  color: '#333',
                  fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' }
                }}>Issue Date</TableCell>
                <TableCell sx={{ 
                  fontWeight: 'bold', 
                  color: '#333',
                  fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' }
                }}>Description</TableCell>
                <TableCell sx={{ 
                  fontWeight: 'bold', 
                  color: '#333',
                  fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' }
                }} align="right">Contract Value (₹)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredProjects.map((project) => (
                <TableRow key={project.id} hover>
                  <TableCell>
                    <Typography variant="body1" sx={{ 
                      fontWeight: 'medium', 
                      color: '#333',
                      fontSize: { xs: '0.95rem', sm: '1.05rem', md: '1.15rem' }
                    }}>
                      {project.companyName}
                    </Typography>
                    {project.vendorCode && (
                      <Typography variant="caption" sx={{ 
                        color: 'text.secondary',
                        fontSize: { xs: '0.85rem', sm: '0.95rem', md: '1rem' }
                      }}>
                        Vendor Code: {project.vendorCode}
                      </Typography>
                    )}
                  </TableCell>
                  <TableCell>
                    <Chip 
                      label={project.location} 
                      size="medium"
                      sx={{ 
                        backgroundColor: '#e8f5e9',
                        color: '#39ac4b',
                        '&:hover': {
                          backgroundColor: '#c8e6c9'
                        },
                        fontSize: { xs: '0.95rem', sm: '1.05rem', md: '1.15rem' }
                      }}
                    />
                  </TableCell>
                  <TableCell sx={{ fontSize: { xs: '0.95rem', sm: '1.05rem', md: '1.15rem' } }}>{project.workOrderNumber}</TableCell>
                  <TableCell sx={{ fontSize: { xs: '0.95rem', sm: '1.05rem', md: '1.15rem' } }}>{project.issueDate}</TableCell>
                  <TableCell sx={{ fontSize: { xs: '0.95rem', sm: '1.05rem', md: '1.15rem' } }}>{project.description}</TableCell>
                  <TableCell sx={{ 
                    fontSize: { xs: '0.95rem', sm: '1.05rem', md: '1.15rem' },
                    fontWeight: 'medium',
                    color: '#39ac4b',
                    textAlign: 'right'
                  }}>
                    ₹{project.contractAmount}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Box>
  );
};

export default CurrentProjects;
