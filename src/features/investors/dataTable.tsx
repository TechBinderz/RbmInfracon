import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Container, Typography, Divider } from '@mui/material';
import themeColor from '../common/common';

interface Column {
  id: string;
  label: string;
}

interface DataTableProps {
  data: any[];
  columns: Column[];
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

export {DirectorTable, CommitteeOfBoard};
