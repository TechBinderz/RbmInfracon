import React, { useState } from 'react';
import { Container, Grid, Card, CardContent, Typography } from '@mui/material';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import '../common/common.css';
import PageTitle from '../common/PageTitleDiv';
import { DirectorTable, CommitteeOfBoard, InvestorGrievance, RegistrarAndTransferAgents, TextPdf } from './InvestorsData';
import rbmInvestorsPresentation from '../../assets/features/investors/RBM INVESTOR PPT 2023-24_PDF.pdf';
import CustomDialog from '../common/CustomDailog';
import investors_Image from "../../assets/features/investors/investors.jpg";
import shareholdingPattern from "../../assets/features/investors/CA CERTIFICATE - SHAREHOLDING PATTERN.pdf";
import groupCompanies from "../../assets/features/investors/3A.SECTION XI - Group Companies.pdf";
import corporateAnnouncements from "../../assets/features/investors/PROSPECTUS_RBM.pdf";
import creditRatings from "../../assets/features/investors/Credit Rating Letter.pdf";

const investorItems = [
  { title: 'Board Of Directors', content: <DirectorTable />, type: 'table' },
  { title: 'Committee Of Board', content: <CommitteeOfBoard />, type: 'table' },
  { title: 'RBM Investors Presentation', content: rbmInvestorsPresentation, type: 'pdf' },
  { title: 'Annual Reports', content: <TextPdf type='annual' />, type: 'text/pdf' },
  { title: 'Quaterly Reports(2024)', content: <TextPdf type='quarterly24' />, type: 'text/pdf' },
  { title: 'Shareholding Pattern Certificate', content: shareholdingPattern, type: 'pdf' },
  { title: 'Investor Grievance', content: <InvestorGrievance />, type: 'text' },
  { title: 'Group Companies/Entities', content: groupCompanies, type: 'pdf' },
  { title: 'Comapny Announcements', content: corporateAnnouncements, type: 'pdf' },
  { title: 'Credit Ratings', content: creditRatings, type: 'pdf' },
  { title: 'Notices', content: <TextPdf type='notices' />, type: 'text/pdf' },
  { title: 'Preferential Issues', content: <TextPdf type='preferencial_issue' />, type: 'text/pdf' },
  { title: 'Registrar And Transfer Agents', content: <RegistrarAndTransferAgents />, type: 'text' },
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
