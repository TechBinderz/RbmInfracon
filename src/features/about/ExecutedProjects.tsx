import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  Chip,
  Tabs,
  Tab,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import EngineeringIcon from "@mui/icons-material/Engineering";
import BusinessIcon from "@mui/icons-material/Business";
import PageTitle from "../../features/common/PageTitleDiv";
import BANNER_IMAGE from "../../assets/features/home/pexels-tomfisk-10407692.jpg";
import { themeColor } from "../common/common";
import { styled } from "@mui/material/styles";
import theme from "../../theme/theme";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  height: "100%",
  display: "flex",
  flexDirection: "column",
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: theme.shadows[8],
  },
}));

const ProjectTitle = styled(Typography)(({ theme }) => ({
  color: themeColor,
  marginBottom: theme.spacing(2),
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

const ProjectDetails = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  [theme.breakpoints.down("sm")]: {
    ...theme.typography.body2,
  },
  [theme.breakpoints.up("sm")]: {
    ...theme.typography.body1,
  },
}));

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

const ExecutedProjects: React.FC = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (
    _event: React.SyntheticEvent<Element, Event>,
    newValue: number
  ) => {
    setTabValue(newValue);
  };

  const clientProjects = [
    {
      client: "Nayara Energy Limited",
      projects: [
        {
          name: "Revamp Project & IBR Package",
          details: [
            "Revamp Project- Fabrication and Erection of Piping jobs at CCR/NHT (₹3.11 Crores)",
            "Arc of IBR package- fabrication and erection of piping and equipment jobs in green field area (₹6.8 Crores)",
          ],
          value: "₹9.91 Crores",
          completionDate: "27-02-2019",
        },
        {
          name: "Major Turnaround (TA-2018)",
          details: [
            "Hot & Cold Jobs during Major Turnaround (TA - 2018) - Package 1 at Refinery Site, Nayara Energy Limited, Vadinar (₹4.07 Crores)",
            "Hot & Cold jobs (Pkg. 6 & 7) during Major TA-2018 (₹81 Lakhs)",
            "Hydro testing, IBR Inspection and Approval for Various Loops Equipment during TA 2018 (₹60.60 Lakhs)",
            "M & I Jobs of Offsite (Jetty) Area during TA (₹54 Lakhs)",
            "M&I jobs for PIT Area during TA (₹47 Lakhs)",
            "Piping replacement Job of LeanRich Amine pipe line at ARU-1 Unit (₹18.50 Lakhs)",
            "VGO HP loop support rectification jobs during Turnaround-2018 (₹14.50 Lakhs)",
            "Heat Exchanger Parts repairing Jobs in Mechanical Maintenance Workshop during TA-2018 (₹10.20 Lakhs)",
            "Replacement of Bottom Dish end of 85V-302-TA-18 (₹4.90 Lakhs)",
          ],
          value: "₹6.98 Crores",
          completionDate: "28-02-2019",
        },
        {
          name: "Major Turnaround (TA-2022)",
          details: [
            "ARC for Fabrication & Erection of Piping & Structural work of VGO-MHC Revamp & Critical MOCs related to TA-2022 (₹7.29 Crores)",
          ],
          value: "₹7.29 Crores",
          completionDate: "30-08-2023",
        },
      ],
    },
    {
      client: "Reliance Industries Limited",
      projects: [
        {
          name: "MPC C2 Complex",
          details: ["Mechanical works for MPC C2 Complex (₹16.37 Crores)"],
          value: "₹16.37 Crores",
          completionDate: "16-03-2022",
        },
      ],
    },
    {
      client: "Technip Energies",
      projects: [
        {
          name: "PP Unit Civil Works",
          details: [
            "Civil Works - TS01, VRU and TEAL Areas (Package 1) for PP Unit, Nayara Energies (₹16.16 Crores)",
          ],
          value: "₹16.16 Crores",
          completionDate: "30-11-2023",
        },
      ],
    },
    {
      client: "Yara Fertilizers India Pvt. Ltd.",
      projects: [
        {
          name: "Various Installation Works",
          details: [
            "Ammonia Loading Arm Piping work (₹43.44 Lakhs)",
            "Belt Conveyor (BC 21) installation & commissioning at PPP (₹46.83 Lakhs)",
            "Replacement of 3 nos UCT pumps (₹26.55 Lakhs)",
          ],
          value: "₹1.18 Crores",
          completionDate: "17-06-2024",
        },
      ],
    },
  ];

  const turnaroundProjects = [
    {
      year: "2015",
      projects: [
        {
          description: "IBR Circuit Inspection & Hydrotest jobs",
          value: "32,00,000.00",
        },
        {
          description:
            "DCU Heater Tube Installation & Thermocouple welding Job",
          value: "24,43,799.70",
        },
        {
          description:
            "Online Leaksealing clamp normalization at CDU-I & CDU-II plants",
          value: "31,99,939.00",
        },
        { description: "Deployment of Static Manpower", value: "57,06,193.00" },
        { description: "M&I Job of Tanks (4 Nos.)", value: "22,94,400.00" },
        { description: "IBR PCN Piping jobs", value: "35,45,070.00" },
        { description: "PCN Piping job", value: "2,11,61,479.00" },
        {
          description:
            "Tie-ins and line replacement jobs in CDU, DCU & ISOM plants",
          value: "56,10,142.28",
        },
      ],
    },
    {
      year: "2018",
      projects: [
        {
          description: "Hot & Cold Jobs - Package 1 (VGO DHDT ISOM)",
          value: "4,08,00,000.00",
        },
        {
          description: "VGO HP loop support rectification jobs",
          value: "14,50,000.00",
        },
        {
          description: "IBR jobs - Hydro testing and Inspection",
          value: "60,60,000.00",
        },
        { description: "M&I jobs for PIT Area", value: "47,00,000.00" },
        {
          description: "M & I Jobs of Offsite (Jetty) Area",
          value: "54,00,000.00",
        },
      ],
    },
    {
      year: "2022",
      projects: [
        {
          description: "Reformer Catalyst Tubes Replacement Jobs in HMU-1 & 2",
          value: "64,99,999.64",
        },
        {
          description: "Fabrication & Erection of IBR & Non-IBR Jobs at CPP",
          value: "2,01,00,000.00",
        },
        {
          description: "Heater M & I Jobs in CDU-2, CCR NHT Plants",
          value: "2,41,34,340.00",
        },
        {
          description: "Cast Air Pre-Heaters Replacement Job in CDU-2",
          value: "85,00,000.00",
        },
        {
          description: "Hot & Cold jobs in ISOM, VGO & DHDT units (Package-3)",
          value: "11,00,00,000.00",
        },
      ],
    },
  ];

  return (
    <>
      <PageTitle imageUrl={BANNER_IMAGE} tileContent="Executed Projects" />
      <Container maxWidth="xl" sx={{ py: 4 }}>
        <Box sx={{ pt: 12, pb: 6 }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 3 }}>
            <Tabs
              value={tabValue}
              onChange={handleTabChange}
              centered
              sx={{
                "& .MuiTab-root": {
                  color: "#666",
                  "&.Mui-selected": {
                    color: themeColor,
                  },
                },
                "& .MuiTabs-indicator": {
                  backgroundColor: themeColor,
                },
              }}
            >
              <Tab
                icon={<BusinessIcon />}
                label="Client-wise Projects"
                sx={{
                  textTransform: "none",
                }}
              />
              <Tab
                icon={<EngineeringIcon />}
                label="Turnaround Projects"
                sx={{
                  textTransform: "none",
                }}
              />
            </Tabs>
          </Box>

          <TabPanel value={tabValue} index={0}>
            {clientProjects.map((client, index) => (
              <Accordion
                key={index}
                sx={{
                  mb: 2,
                  "&.MuiAccordion-root": {
                    "&:before": {
                      display: "none",
                    },
                    boxShadow: 2,
                    "&.Mui-expanded": {
                      boxShadow: 4,
                    },
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: themeColor }} />}
                  sx={{
                    backgroundColor: "#f8f9fa",
                    "&:hover": {
                      backgroundColor: "#e8f5e9",
                    },
                  }}
                >
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{
                      color: "#333",
                      fontWeight: "bold",
                    }}
                  >
                    {client.client}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid container spacing={3}>
                    {client.projects.map((project, pIndex) => (
                      <Grid item xs={12} key={pIndex}>
                        <StyledPaper elevation={3}>
                          <ProjectTitle variant="h5">
                            {project.name}
                          </ProjectTitle>
                          <Box sx={{ mb: 2 }}>
                            <Chip
                              variant="filled"
                              label={`Value: ${project.value}`}
                              sx={{
                                fontSize: theme.typography.body1.fontSize,
                                mr: 1,
                                mb: 1,
                                backgroundColor: "#e8f5e9",
                                color: themeColor,
                                fontWeight: "bold",
                              }}
                            />
                            <Chip
                              label={`Completed: ${project.completionDate}`}
                              sx={{
                                fontSize: theme.typography.body1.fontSize,
                                mb: 1,
                                backgroundColor: "#f1f8e9",
                                color: themeColor,
                              }}
                            />
                          </Box>
                          <ProjectDetails variant="body1">
                            Scope of Work:
                          </ProjectDetails>
                          <Box component="ul" sx={{ pl: 2, mt: 2 }}>
                            {project.details.map((detail, idx) => (
                              <Typography
                                key={idx}
                                variant="body2"
                                component="li"
                                sx={{ mb: 1 }}
                              >
                                {detail}
                              </Typography>
                            ))}
                          </Box>
                        </StyledPaper>
                      </Grid>
                    ))}
                  </Grid>
                </AccordionDetails>
              </Accordion>
            ))}
          </TabPanel>

          <TabPanel value={tabValue} index={1}>
            {turnaroundProjects.map((yearGroup, index) => (
              <Accordion
                key={index}
                sx={{
                  mb: 2,
                  "&.MuiAccordion-root": {
                    "&:before": {
                      display: "none",
                    },
                    boxShadow: 2,
                    "&.Mui-expanded": {
                      boxShadow: 4,
                    },
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: themeColor }} />}
                  sx={{
                    backgroundColor: "#f8f9fa",
                    "&:hover": {
                      backgroundColor: "#e8f5e9",
                    },
                  }}
                >
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{
                      color: "#333",
                      fontWeight: "bold",
                    }}
                  >
                    Turnaround {yearGroup.year}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <TableContainer component={Paper} sx={{ boxShadow: 2 }}>
                    <Table>
                      <TableHead>
                        <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
                          <TableCell sx={{ fontWeight: "bold", color: "#333" }}>
                            Sr. No.
                          </TableCell>
                          <TableCell sx={{ fontWeight: "bold", color: "#333" }}>
                            Description
                          </TableCell>
                          <TableCell
                            sx={{
                              fontWeight: "bold",
                              color: "#333",
                              textAlign: "right",
                            }}
                          >
                            Value (₹)
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {yearGroup.projects.map((project, pIndex) => (
                          <TableRow
                            key={pIndex}
                            hover
                            sx={{
                              "&:hover": {
                                backgroundColor: "#f8faf8",
                              },
                            }}
                          >
                            <TableCell>{pIndex + 1}</TableCell>
                            <TableCell>{project.description}</TableCell>
                            <TableCell
                              sx={{
                                color: themeColor,
                                fontWeight: "bold",
                                textAlign: "right",
                              }}
                            >
                              {project.value}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </AccordionDetails>
              </Accordion>
            ))}
          </TabPanel>
        </Box>
      </Container>
    </>
  );
};

export default ExecutedProjects;
