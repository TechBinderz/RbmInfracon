import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Container, Typography, Divider, Card, CardContent, Grid, Button, Box, CardActionArea } from '@mui/material';
import themeColor from '../common/common';
import anualReport21_22 from '../../assets/features/investors/Annual Report FY 21-22.pdf';
import anualReport22_23 from '../../assets/features/investors/Annual Report FY 22-23.pdf';
import anualReport23_24 from '../../assets/features/investors/Annual Report FY 23-24.pdf';
import quaterlyReport24_Q1 from '../../assets/features/investors/Quaterly Report 2024 (1).pdf';
import quaterlyReport24_Q2 from '../../assets/features/investors/Quaterly Report 2024 (2).pdf';
import quaterlyReport24_Q3 from '../../assets/features/investors/Quaterly Report 2024 (3).pdf';
import NSE_Letter_Signed_1 from "../../assets/features/investors/notices/RBMINFRA_10122024183841_NSE_LETTER_signed.pdf";
import Work_Order_F from "../../assets/features/investors/notices/RBMINFRACON_01022025121202_Work_Order_F.pdf";
import Work_Order_Nayra_Sign from "../../assets/features/investors/notices/RBMINFRACON_18022025180751_work_order_nayra___sign.pdf";
import Work_Order_Sign from "../../assets/features/investors/notices/RBMINFRACON_18022025193522_work_order_sign.pdf";
import NSE_Letter_Signed_2 from "../../assets/features/investors/notices/RBMINFRACON_23012025184415_NSE_LETTER_SIGNED.pdf";
import Transcript_Signed from "../../assets/features/investors/notices/RBMINFRACON_24022025171347_Transcript_SIGNED.pdf";
import psc_certificate_warrant from "../../assets/features/investors/preferencial_issue/PCS Certificate_Warrant_signed.pdf";
import signed_valuation_report from "../../assets/features/investors/preferencial_issue/Signed Valuation Report (1).pdf";

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
    { srNo: 1, din: '03417579', name: 'JAY BAJRANG MANI', position: 'MD/CHAIRMAN' },
    { srNo: 2, din: '08980569', name: 'ADITYA JAY BAJRANG MANI', position: 'WHOLE TIME DIRECTOR' },
    { srNo: 3, din: '10714962', name: 'KRIYA DIPAKBHAI SHAH', position: 'ADDITIONAL DIRECTOR' },
    { srNo: 4, din: '07752890', name: 'CHANDRACHURD MANI TRIPATHI', position: 'INDEPENDENT DIRECTOR' },
    { srNo: 5, din: '09735893', name: 'ANANDESHWAR DUBEY', position: 'INDEPENDENT DIRECTOR' },
    { srNo: 6, din: '10039875', name: 'DEEPAK SAXENA', position: 'ADDITIONAL DIRECTOR' },
    { srNo: 7, din: 'BAEPS9890R', name: 'NARENDRA SHARMA', position: 'CFO' },
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
    { srNo: 2, din: '09735893', name: 'ANANDESHWAR DUBEY', position: 'MEMBER', directorship: 'Independent Director' }
  ];
    
  const stakeholders = [
    { srNo: 1, din: '09735893', name: 'ANANDESHWAR DUBEY', position: 'CHAIRMAN', directorship: 'Independent Director' },
    { srNo: 2, din: '07752890', name: 'CHANDRACHURD MANI TRIPATHI', position: 'MEMBER', directorship: 'Independent Director' }
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
      value: "Aadishwer 3, Bhartinagar, Lakh Bunglow Road, Near Nidhi School, Ramapir Chowki, Rajkot - 360007",
    },
    { label: "Email ID:", value: "cs@rbminfracon.com" },
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

interface TextPdfProps {
  type: 'annual' | 'quarterly24' | 'notices' | 'preferencial_issue';
}

const TextPdf: React.FC<TextPdfProps> = ({ type }) => {
  const [selectedReport, setSelectedReport] = useState<string | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const annualReports = [
    { name: 'Financial Year 2021-22', url: anualReport21_22 },
    { name: 'Financial Year 2022-23', url: anualReport22_23 },
    { name: 'Financial Year 2023-24', url: anualReport23_24 },
  ];

  const quarterlyReports2024 = [
    { name: 'Quarterly Result Q1', url: quaterlyReport24_Q1 },
    { name: 'Quarterly Result Q2', url: quaterlyReport24_Q2 },
    { name: 'Quarterly Result Q3', url: quaterlyReport24_Q3 },
  ];

  const noticesList2025 = [
    { name: "NSE LETTER Signed (10-12-2024)", url: NSE_Letter_Signed_1 },
    { name: "Work Order F (01-02-2025)", url: Work_Order_F },
    { name: "Work Order Nayra Signed (18-02-2025)", url: Work_Order_Nayra_Sign },
    { name: "Work Order Signed (18-02-2025)", url: Work_Order_Sign },
    { name: "NSE LETTER SIGNED (23-01-2025)", url: NSE_Letter_Signed_2 },
    { name: "Transcript SIGNED (24-02-2025)", url: Transcript_Signed },
  ];

  const preferencialIssue = [
    { name: "Valuation Report", url: signed_valuation_report },
    { name: "PSC certificate warrant", url: psc_certificate_warrant },
  ];

  const reports = type === 'annual' ? annualReports : type ==="notices" ? noticesList2025 : type== 'preferencial_issue' ? preferencialIssue: quarterlyReports2024;

  return (
    <Container sx={{ py: 4 }} maxWidth={selectedReport ? false : 'md'}>
      {!selectedReport ? (
        <Grid container spacing={2} justifyContent="center">
          {reports.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                style={{
                  margin: '20px',
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  transform: hoveredIndex === index ? 'scale(1.05)' : 'scale(1)',
                  boxShadow: hoveredIndex === index ? '0px 4px 15px rgba(0, 0, 0, 0.3)' : '8px 8px 15px 6px rgba(0, 0, 0, 0.1)',
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <CardActionArea onClick={() => setSelectedReport(item.url)}>
                  <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Typography variant="h6">{item.name}</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Box sx={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column' }}>
          <Button
            variant="contained"
            onClick={() => setSelectedReport(null)}
            sx={{ mb: 2, alignSelf: 'flex-start' }}
          >
            ← Back
          </Button>
          <Box sx={{ flexGrow: 1 }}>
            <iframe
              src={selectedReport}
              style={{ width: '100%', height: '80vh', border: 'none' }}
              title="Financial Report PDF"
            />
          </Box>
        </Box>
      )}
    </Container>
  );
};

export {DirectorTable, CommitteeOfBoard, InvestorGrievance, RegistrarAndTransferAgents, TextPdf};
