// src/components/Investor.tsx
import React, { useState } from 'react';
import { Container, Grid, Card, CardContent, Typography } from '@mui/material';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import '../common/common.css';
import PageTitle from '../common/PageTitleDiv';
import { DirectorTable, CommitteeOfBoard, InvestorGrievance, RegistrarAndTransferAgents } from './InvestorsData';
import section11Img from '../../assets/features/investors/section11.jpg';
import anualReport22_23 from '../../assets/features/investors/AnualReport22-23.pdf';
import outstanding_dues from '../../assets/features/investors/Outstanding-dues.pdf';
import prospectus from '../../assets/features/investors/Prospectus.pdf';
import financialResult23 from '../../assets/features/investors/FinancialResult23.pdf';
// import anualResult22_23 from '../../assets/features/investors/AnualResult22_23.pdf';
// import valuationOfConvertibaleEquity from '../../assets/features/investors/ValuationOfConvertibaleEquity.pdf';
// import pcsWarrants from '../../assets/features/investors/PcsWarrants.pdf';
// import pcsEquity from '../../assets/features/investors/PcsEquity.pdf';
// import scripts from '../../assets/features/investors/Scripts.pdf';
// import sOutcomeFR from '../../assets/features/investors/SOutcomeFR.pdf';
import CustomDialog from '../common/CustomDailog';
import investors_Image from "../../assets/features/investors/investors.jpg";

const investorItems = [
  { title: 'Board Of Directors', content: <DirectorTable />, type: 'table' },
  { title: 'Committee Of Board', content: <CommitteeOfBoard />, type: 'table' },
  { title: 'Investor Grievance', content: <InvestorGrievance />, type: 'text' },
  { title: 'Registrar And Transfer Agents', content: <RegistrarAndTransferAgents />, type: 'text' },
  { title: 'SECTION XI - Group Companies', content: section11Img, type: 'image' },
  { title: 'Annual Report (2022-23)', content: anualReport22_23, type: 'pdf' },
  { title: 'Outstanding Dues', content: outstanding_dues, type: 'pdf' },
  { title: 'Prospectus', content: prospectus, type: 'pdf' },
  { title: 'Financial Result', content: financialResult23, type: 'pdf' },
  // { title: 'Annual Return (2022-23)', content: anualResult22_23, type: 'pdf' },
  // { title: 'Valuation of Convertible Equity Warrants and Shares', content: valuationOfConvertibaleEquity, type: 'pdf' },
  // { title: 'PCS Warrants', content: pcsWarrants, type: 'pdf' },
  // { title: 'PCS Equity', content: pcsEquity, type: 'pdf' },
  // { title: 'Scripts', content: scripts, type: 'pdf' },
  // { title: 'S Outcome FR', content: sOutcomeFR, type: 'pdf' },
];

const Investor: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [hoveredIndex, setHoveredIndex] = useState<any>(null);

  const handleClickOpen = (item: any) => {
    setSelectedItem(item);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedItem(null);
  };

  return (
    <>
      <PageTitle imageUrl={investors_Image} tileContent='Investors' />
      <Container maxWidth="lg" sx={{ padding: { xs: "20px", sm: "40px" } }}>
       
        <Grid container spacing={3}>
          {investorItems.map((item, index) => (
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
                onClick={() => handleClickOpen(item)}
              >
                <CardContent style={{ display: 'flex', alignItems: 'center' }}>
                  <Typography variant="h6" style={{ flexGrow: 1 }}>
                    {item.title}
                  </Typography>
                  {item.type === 'pdf' && (
                    <PictureAsPdfIcon color="action" style={{ marginLeft: '8px' }} />
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      
      {selectedItem && (
        <CustomDialog
          open={open}
          onClose={handleClose}
          title={selectedItem.title}
          content={selectedItem.content}
          type={selectedItem.type}
        />
      )}
    </>
  );
};

export default Investor;
