import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Container, Typography, Divider, Card, CardContent, Grid } from '@mui/material';
import themeColor from '../common/common';

interface Column {
  id: string;
  label: string;
}

interface DataTableProps {
  data: any[];
  columns: Column[];
}

interface InfoCardProps {
    title: string;
    data: { label: string; value: string }[];
  }

const DataTable: React.FC<DataTableProps> = ({ data, columns }) => {
  return (
    <Container maxWidth="lg" sx={{ padding: { xs: "5px", sm: "10px" } }}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.id}>{column.label}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                {columns.map((column) => (
                  <TableCell key={column.id}>{row[column.id]}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

const InfoCard: React.FC<InfoCardProps> = ({ title, data }) => (
  <Card sx={{ maxWidth: 600, margin: '20px auto', padding: 2, border: '1px solid #ccc' }}>
    <CardContent>
      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>
      <Divider sx={{ marginBottom: '20px', borderColor: themeColor }} />
      <Grid container spacing={2}>
        {data.map((item, index) => (
          <React.Fragment key={index}>
            <Grid item xs={4}>
              <Typography variant="subtitle1">{item.label}</Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography>{item.value}</Typography>
            </Grid>
          </React.Fragment>
        ))}
      </Grid>
    </CardContent>
  </Card>
);

const DirectorTable: React.FC = () => {
  const data = [
    { srNo: 1, din: '03417579', name: 'JAY BAJRANG MANI', position: 'MD/Chairman' },
    { srNo: 2, din: '05228653', name: 'SEEMA MANI', position: 'Women Non Executive Director' },
    { srNo: 3, din: '08980569', name: 'ADITYA MANI', position: 'Whole Time Director' },
    { srNo: 4, din: '09718465', name: 'PAYAL MANI', position: 'Executive Director' },
    { srNo: 5, din: '07752890', name: 'CHANDRACHURD MANI TRIPATHI', position: 'Independent Director' },
    { srNo: 6, din: '09735893', name: 'ANANDESHWAR DUBEY', position: 'Independent Director' },
    { srNo: 7, din: 'ARIPS3174J', name: 'PANKAJ KUMAR SINHA', position: 'CFO' },
  ];

  const columns = [
    { id: 'srNo', label: 'SR. NO' },
    { id: 'din', label: 'DIN' },
    { id: 'name', label: 'NAME' },
    { id: 'position', label: 'POSITION OF DIRECTORS' },
  ];

  return <DataTable data={data} columns={columns} />;
};

const CommitteeOfBoard: React.FC = () => {
    const columns = [
      { id: 'srNo', label: 'SR. NO' },
      { id: 'din', label: 'DIN' },
      { id: 'name', label: 'NAME' },
      { id: 'position', label: 'DESIGNATION' },
      { id: 'directorship', label: 'NATURE OF DIRECTORSHIP' },
    ];
    
    const auditCommittee = [
      { srNo: 1, din: '09735893', name: 'ANANDESHWAR DUBEY', position: 'CHAIRMAN', directorship: 'Independent Director' },
      { srNo: 2, din: '07752890', name: 'CHANDRACHURD MANI TRIPATHI', position: 'MEMBER', directorship: 'Independent Director' },
      { srNo: 3, din: '03417579', name: 'JAY BAJRANG MANI', position: 'MEMBER', directorship: 'Managing Director' }
    ];

    const nominationCommitte = [
      { srNo: 1, din: '07752890', name: 'CHANDRACHURD MANI TRIPATHI', position: 'CHAIRMAN', directorship: 'Independent Director' },
      { srNo: 2, din: '09735893', name: 'ANANDESHWAR DUBEY', position: 'MEMBER', directorship: 'Independent Director' },
      { srNo: 3, din: '05228653', name: 'SEEMA MANI', position: 'MEMBER', directorship: 'Women Non Executive Director' }
    ];
      
    const stakeholders = [
      { srNo: 1, din: '09735893', name: 'ANANDESHWAR DUBEY', position: 'CHAIRMAN', directorship: 'Independent Director' },
      { srNo: 2, din: '07752890', name: 'CHANDRACHURD MANI TRIPATHI', position: 'MEMBER', directorship: 'Independent Director' },
      { srNo: 3, din: '05228653', name: 'SEEMA MANI', position: 'MEMBER', directorship: 'Women Non Executive Director' }
    ];
    
    return (
        <Container>
            <Typography variant="h5" gutterBottom>
              1. Audit Committee:
            </Typography>
            <Divider sx={{ marginBottom: '10px', borderColor: themeColor }} />
            <DataTable data={auditCommittee} columns={columns} />

            <Typography variant="h5" gutterBottom marginTop={'10px'}>
              2. Nomination and Remuneration Committee:
            </Typography>
            <Divider sx={{ marginBottom: '10px', borderColor: themeColor }} />
            <DataTable data={nominationCommitte} columns={columns} />

            <Typography variant="h5" gutterBottom marginTop={'10px'}>
              3. Stakeholders Relationship Committee:
            </Typography>
            <Divider sx={{ marginBottom: '10px', borderColor: themeColor }} />
            <DataTable data={stakeholders} columns={columns} />
        </Container>
    );
};

const InvestorGrievance: React.FC = () => {
  const investorGrievanceData = [
    { label: "Father’s Name:", value: "Mahendra Virchand Mehta" },
    { label: "Profile:", value: "Company Secretary And Compliance Officer" },
    { label: "Company:", value: "RBM INFRAON LIMITED" },
    {
      label: "Address:",
      value: "Aadishwer 3, Bhartinagar, Lakh Bunglow Road Near Nidhi School, Ramapir Chowki, Rajkot – 360007",
    },
    { label: "Email ID:", value: "pujaparas2111@gmail.com" },
    { label: "Mobile No.:", value: "+91- 9726778802" },
    { label: "PAN:", value: "ANBPM1087F" },
  ];

  return <InfoCard title="Puja Paras Mehta" data={investorGrievanceData} />;
};

const RegistrarAndTransferAgents: React.FC = () => {
  const registrarAndTransferAgentsData = [
    { label: "Company:", value: "SKYLINE FINANCIAL SERVICE PRIVATE LIMITED" },
    { label: "Address:", value: "D-153A, 1st Floor, Okhla Industrial Area Phase – 1, New Delhi – 110020, India" },
    { label: "Tel:", value: "+91-11-40450193" },
    { label: "Fax:", value: "+91-11-26812683" },
    { label: "Website:", value: "www.skylinerta.com" },
    { label: "Email:", value: "ipo@skylinerta.com" },
    { label: "Investor Grievance Id:", value: "grievance@skylinerta.com" },
    { label: "Contact Person:", value: "Mrs. Rita Gupta" },
    { label: "SEBI Registration Number:", value: "INR000003241" },
    { label: "CIN:", value: "U74899DL1995PTC071324" },
  ];

  return <InfoCard title="Contact Information" data={registrarAndTransferAgentsData} />;
};

export {DirectorTable, CommitteeOfBoard, InvestorGrievance, RegistrarAndTransferAgents};
