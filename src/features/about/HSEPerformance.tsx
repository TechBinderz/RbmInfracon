import React from "react";
import {
  Grid,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  TableContainer,
  Container,
} from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import PageTitle from "../common/PageTitleDiv";
import hse_image from "../../assets/features/about-us/hse.jpg";
import hse_image1 from "../../assets/features/about-us/hse.jpeg";

// Sample HSE data
const hseData = [
  {
    year: 2019,
    workedHours: 2239590,
    restrictedCases: 0,
    lostTimeCases: 0,
    unsafeActs: 145,
    unsafeConditions: 50,
  },
  {
    year: 2020,
    workedHours: 2094947,
    restrictedCases: 0,
    lostTimeCases: 0,
    unsafeActs: 150,
    unsafeConditions: 53,
  },
  {
    year: 2021,
    workedHours: 4736948,
    restrictedCases: 0,
    lostTimeCases: 0,
    unsafeActs: 668,
    unsafeConditions: 766,
  },
  {
    year: 2022,
    workedHours: 9999946,
    restrictedCases: 0,
    lostTimeCases: 0,
    unsafeActs: 126,
    unsafeConditions: 522,
  },
  {
    year: 2023,
    workedHours: 4736948,
    restrictedCases: 0,
    lostTimeCases: 0,
    unsafeActs: 2,
    unsafeConditions: 45,
  },
];

const CustomYAxisTick = (props: any) => {
  const { x, y, payload } = props;
  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={5}
        textAnchor="end"
        transform="rotate(-45)"
        fill="#666"
      >
        {payload.value}
      </text>
    </g>
  );
};

const HSEPerformance: React.FC = () => {
  return (
    <>
      <PageTitle
        imageUrl={hse_image}
        tileContent="Past 5 Years HSE Performance"
      />
      <Container sx={{ py: 4 }}>
        <Typography variant="h6" paragraph sx={{ marginBottom: 4 }}>
          In the past five years, RBM Infracon Limited has demonstrated
          exceptional commitment to Health, Safety, and Environment (HSE),
          achieving zero fatal incidents and a remarkable record of
          accident-free operations. Through rigorous safety protocols,
          continuous training, and advanced technology, the company has
          minimized operational risks, ensuring the well-being of employees,
          contractors, and stakeholders. RBM Infracon’s proactive risk
          management and focus on continuous improvement underscore its
          dedication to safety and quality in delivering high-standard
          construction projects.
        </Typography>

        <Grid container spacing={4} sx={{ marginBottom: 4 }}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
              HSE Performance Data Table
            </Typography>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Year</TableCell>
                    <TableCell>Worked Man-Hours</TableCell>
                    <TableCell>Unsafe Acts</TableCell>
                    <TableCell>Unsafe Conditions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {hseData.map((row) => (
                    <TableRow key={row.year}>
                      <TableCell>{row.year}</TableCell>
                      <TableCell>{row.workedHours.toLocaleString()}</TableCell>
                      <TableCell>{row.unsafeActs}</TableCell>
                      <TableCell>{row.unsafeConditions}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
              HSE Performance Graph
            </Typography>
            <ResponsiveContainer width="100%" height={350}>
              <LineChart data={hseData}>
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="year" padding={{ left: 10, right: 10 }} />
                <YAxis
                  tick={<CustomYAxisTick />}
                  domain={["dataMin", "auto"]}
                  padding={{ bottom: 10 }}
                />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="workedHours"
                  stroke="#8884d8"
                  strokeWidth={2}
                  name="Worked Man-Hours"
                />
                <Line
                  type="monotone"
                  dataKey="unsafeActs"
                  stroke="#82ca9d"
                  strokeWidth={2}
                  name="Unsafe Acts"
                />
                <Line
                  type="monotone"
                  dataKey="unsafeConditions"
                  stroke="#ff7300"
                  strokeWidth={2}
                  name="Unsafe Conditions"
                />
              </LineChart>
            </ResponsiveContainer>
          </Grid>
        </Grid>
        <img
          src={hse_image1}
          alt="Full Width"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            marginBottom: "25px",
          }}
        />
        <Typography variant="h6" paragraph>
          RBM Infracon Limited has proactively implemented robust safety
          protocols, comprehensive training programs, and advanced technology to
          ensure the well-being of its employees. Through these measures, the
          company has successfully minimized the risks associated with its
          operations.
        </Typography>
      </Container>
    </>
  );
};

export default HSEPerformance;
