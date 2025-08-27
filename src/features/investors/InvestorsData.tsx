import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Container,
  Typography,
  Divider,
  Card,
  CardContent,
  Grid,
  Box,
} from "@mui/material";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import themeColor from "../common/common";
import anualReport21_22 from "../../assets/features/investors/Annual Report FY 21-22.pdf";
import anualReport22_23 from "../../assets/features/investors/Annual Report FY 22-23.pdf";
import anualReport23_24 from "../../assets/features/investors/Annual Report FY 23-24.pdf";
import anualReport24_25 from "../../assets/features/investors/Annual Report FY 24-25.pdf";
import quaterlyReport24_Q1 from "../../assets/features/investors/Quaterly Report 2024 (1).pdf";
import quaterlyReport24_Q2 from "../../assets/features/investors/Quaterly Report 2024 (2).pdf";
import quaterlyReport24_Q3 from "../../assets/features/investors/Quaterly Report 2024 (3).pdf";
import NSE_Letter_Signed_1 from "../../assets/features/investors/notices/RBMINFRA_10122024183841_NSE_LETTER_signed.pdf";
import Work_Order_F from "../../assets/features/investors/notices/RBMINFRACON_01022025121202_Work_Order_F.pdf";
import Work_Order_Nayra_Sign from "../../assets/features/investors/notices/RBMINFRACON_18022025180751_work_order_nayra___sign.pdf";
import Work_Order_Sign from "../../assets/features/investors/notices/RBMINFRACON_18022025193522_work_order_sign.pdf";
import NSE_Letter_Signed_2 from "../../assets/features/investors/notices/RBMINFRACON_23012025184415_NSE_LETTER_SIGNED.pdf";
import Transcript_Signed from "../../assets/features/investors/notices/RBMINFRACON_24022025171347_Transcript_SIGNED.pdf";
import Rating_Letter from "../../assets/features/investors/notices/Rating Letter - RBM Infracon Limited.pdf";
import Notice_FY_2024_25 from "../../assets/features/investors/notices/Notice 2024-25.pdf";
import psc_certificate_warrant from "../../assets/features/investors/preferencial_issue/PCS Certificate_Warrant_signed.pdf";
import signed_valuation_report from "../../assets/features/investors/preferencial_issue/Signed Valuation Report (1).pdf";
import earning_press_release_q4_FY25 from "../../assets/features/investors/press_release/RBM Infracon Limited Earning Press Release - Q4 FY25.pdf";
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
      <TableContainer
        component={Paper}
        sx={{
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
          borderRadius: 2,
        }}
      >
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: themeColor }}>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  sx={{
                    color: "white",
                    fontWeight: 600,
                    variant: "h6",
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, rowIndex) => (
              <TableRow
                key={rowIndex}
                sx={{
                  "&:nth-of-type(odd)": {
                    backgroundColor: "rgba(0, 0, 0, 0.02)",
                  },
                  "&:hover": {
                    backgroundColor: "rgba(0, 0, 0, 0.04)",
                  },
                }}
              >
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    sx={{
                      color: "text.primary",
                    }}
                  >
                    <Typography variant="body2">{row[column.id]}</Typography>
                  </TableCell>
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
  <Card
    sx={{
      maxWidth: 600,
      margin: "20px auto",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
      borderRadius: 2,
      transition: "all 0.3s ease",
      "&:hover": {
        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.12)",
        transform: "translateY(-4px)",
      },
    }}
  >
    <CardContent sx={{ p: 3 }}>
      <Typography
        variant="h5"
        gutterBottom
        sx={{
          fontWeight: 600,
          color: "text.primary",
          mb: 2,
        }}
      >
        {title}
      </Typography>
      <Divider
        sx={{
          mb: 3,
          borderColor: themeColor,
          borderWidth: 2,
          width: "60px",
        }}
      />
      <Grid container spacing={3}>
        {data.map((item, index) => (
          <React.Fragment key={index}>
            <Grid item xs={12} sm={4}>
              <Typography
                variant="body1"
                sx={{
                  color: "text.secondary",
                  fontWeight: 600,
                }}
              >
                {item.label}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Typography
                variant="body2"
                sx={{
                  color: "text.primary",
                }}
              >
                {item.value}
              </Typography>
            </Grid>
          </React.Fragment>
        ))}
      </Grid>
    </CardContent>
  </Card>
);

const DirectorTable: React.FC = () => {
  const data = [
    {
      srNo: 1,
      din: "03417579",
      name: "JAY BAJRANG MANI",
      position: "MD/CHAIRMAN",
    },
    {
      srNo: 2,
      din: "08980569",
      name: "ADITYA JAY BAJRANG MANI",
      position: "WHOLE TIME DIRECTOR",
    },
    {
      srNo: 3,
      din: "10714962",
      name: "KRIYA DIPAKBHAI SHAH",
      position: "ADDITIONAL DIRECTOR",
    },
    {
      srNo: 4,
      din: "07752890",
      name: "CHANDRACHURD MANI TRIPATHI",
      position: "INDEPENDENT DIRECTOR",
    },
    {
      srNo: 5,
      din: "09735893",
      name: "ANANDESHWAR DUBEY",
      position: "INDEPENDENT DIRECTOR",
    },
    {
      srNo: 6,
      din: "10039875",
      name: "DEEPAK SAXENA",
      position: "ADDITIONAL DIRECTOR",
    },
    { srNo: 7, din: "BAEPS9890R", name: "NARENDRA SHARMA", position: "CFO" },
  ];

  const columns = [
    { id: "srNo", label: "SR. NO" },
    { id: "din", label: "DIN" },
    { id: "name", label: "NAME" },
    { id: "position", label: "POSITION OF DIRECTORS" },
  ];

  return <DataTable data={data} columns={columns} />;
};

const CommitteeOfBoard: React.FC = () => {
  const columns = [
    { id: "srNo", label: "SR. NO" },
    { id: "din", label: "DIN" },
    { id: "name", label: "NAME" },
    { id: "position", label: "DESIGNATION" },
    { id: "directorship", label: "NATURE OF DIRECTORSHIP" },
  ];

  const auditCommittee = [
    {
      srNo: 1,
      din: "09735893",
      name: "ANANDESHWAR DUBEY",
      position: "CHAIRMAN",
      directorship: "Independent Director",
    },
    {
      srNo: 2,
      din: "07752890",
      name: "CHANDRACHURD MANI TRIPATHI",
      position: "MEMBER",
      directorship: "Independent Director",
    },
    {
      srNo: 3,
      din: "03417579",
      name: "JAY BAJRANG MANI",
      position: "MEMBER",
      directorship: "Managing Director",
    },
  ];

  const nominationCommitte = [
    {
      srNo: 1,
      din: "07752890",
      name: "CHANDRACHURD MANI TRIPATHI",
      position: "CHAIRMAN",
      directorship: "Independent Director",
    },
    {
      srNo: 2,
      din: "09735893",
      name: "ANANDESHWAR DUBEY",
      position: "MEMBER",
      directorship: "Independent Director",
    },
  ];

  const stakeholders = [
    {
      srNo: 1,
      din: "09735893",
      name: "ANANDESHWAR DUBEY",
      position: "CHAIRMAN",
      directorship: "Independent Director",
    },
    {
      srNo: 2,
      din: "07752890",
      name: "CHANDRACHURD MANI TRIPATHI",
      position: "MEMBER",
      directorship: "Independent Director",
    },
  ];

  return (
    <Container>
      <Typography variant="h5" gutterBottom>
        1. Audit Committee:
      </Typography>
      <Divider sx={{ marginBottom: "10px", borderColor: themeColor }} />
      <DataTable data={auditCommittee} columns={columns} />

      <Typography variant="h5" gutterBottom marginTop={"10px"}>
        2. Nomination and Remuneration Committee:
      </Typography>
      <Divider sx={{ marginBottom: "10px", borderColor: themeColor }} />
      <DataTable data={nominationCommitte} columns={columns} />

      <Typography variant="h5" gutterBottom marginTop={"10px"}>
        3. Stakeholders Relationship Committee:
      </Typography>
      <Divider sx={{ marginBottom: "10px", borderColor: themeColor }} />
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
      value:
        "Aadishwer 3, Bhartinagar, Lakh Bunglow Road, Near Nidhi School, Ramapir Chowki, Rajkot - 360007",
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
    {
      label: "Address:",
      value:
        "D-153A, 1st Floor, Okhla Industrial Area Phase – 1, New Delhi – 110020, India",
    },
    { label: "Tel:", value: "+91-11-40450193" },
    { label: "Fax:", value: "+91-11-26812683" },
    { label: "Website:", value: "www.skylinerta.com" },
    { label: "Email:", value: "ipo@skylinerta.com" },
    { label: "Investor Grievance Id:", value: "grievance@skylinerta.com" },
    { label: "Contact Person:", value: "Mrs. Rita Gupta" },
    { label: "SEBI Registration Number:", value: "INR000003241" },
    { label: "CIN:", value: "U74899DL1995PTC071324" },
  ];

  return (
    <InfoCard
      title="Contact Information"
      data={registrarAndTransferAgentsData}
    />
  );
};

interface TextPdfProps {
  type: "annual" | "quarterly24" | "notices" | "preferencial_issue" | "press_release";
}

const TextPdf: React.FC<TextPdfProps> = ({ type }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const annualReports = [
    { name: "Financial Year 2021-22", url: anualReport21_22 },
    { name: "Financial Year 2022-23", url: anualReport22_23 },
    { name: "Financial Year 2023-24", url: anualReport23_24 },
    { name: "Financial Year 2024-25", url: anualReport24_25 },
  ];

  const quarterlyReports2024 = [
    { name: "Quarterly Result Q1", url: quaterlyReport24_Q1 },
    { name: "Quarterly Result Q2", url: quaterlyReport24_Q2 },
    { name: "Quarterly Result Q3", url: quaterlyReport24_Q3 },
  ];

  const noticesList2025 = [
    { name: "NSE LETTER Signed (10-12-2024)", url: NSE_Letter_Signed_1 },
    { name: "Work Order F (01-02-2025)", url: Work_Order_F },
    {
      name: "Work Order Nayra Signed (18-02-2025)",
      url: Work_Order_Nayra_Sign,
    },
    { name: "Work Order Signed (18-02-2025)", url: Work_Order_Sign },
    { name: "NSE LETTER SIGNED (23-01-2025)", url: NSE_Letter_Signed_2 },
    { name: "Transcript SIGNED (24-02-2025)", url: Transcript_Signed },
    { name: "Rating Letter (13-05-2025)", url: Rating_Letter },
    { name: "Notice FY 2024-25 (17-09-2025)", url: Notice_FY_2024_25 },
  ];

  const preferencialIssue = [
    { name: "Valuation Report", url: signed_valuation_report },
    { name: "PSC certificate warrant", url: psc_certificate_warrant },
  ];

  const pressRelease = [
    { name: "Earning Press Release Q4 FY25", url: earning_press_release_q4_FY25 },
  ];

  const getReportData = () => {
    switch (type) {
      case "annual":
        return annualReports;
      case "quarterly24":
        return quarterlyReports2024;
      case "notices":
        return noticesList2025;
      case "preferencial_issue":
        return preferencialIssue;
      case "press_release":
        return pressRelease;
      default:
        return [];
    }
  };

  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        {getReportData().map((report, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                height: "100%",
                transition: "all 0.3s ease",
                transform: hoveredIndex === index ? "translateY(-8px)" : "none",
                boxShadow:
                  hoveredIndex === index
                    ? `0 12px 24px ${themeColor}40`
                    : "0 4px 12px rgba(0, 0, 0, 0.08)",
                "&:hover": {
                  borderColor: themeColor,
                },
                cursor: "pointer",
                borderRadius: 2,
                position: "relative",
                overflow: "hidden",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "4px",
                  backgroundColor: themeColor,
                  opacity: hoveredIndex === index ? 1 : 0,
                  transition: "opacity 0.3s ease",
                },
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => window.open(report.url, "_blank")}
            >
              <CardContent sx={{ p: 3 }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      fontSize: "1.1rem",
                      color: "text.primary",
                      lineHeight: 1.3,
                      flexGrow: 1,
                    }}
                  >
                    {report.name}
                  </Typography>
                  <PictureAsPdfIcon sx={{ color: "#D32F2F", fontSize: 28 }} />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export {
  DirectorTable,
  CommitteeOfBoard,
  InvestorGrievance,
  RegistrarAndTransferAgents,
  TextPdf,
};
