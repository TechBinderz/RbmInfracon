import React, { useState } from 'react';
import { Container, Grid, Card, CardContent, Typography, Box } from '@mui/material';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import TableChartIcon from '@mui/icons-material/TableChart';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
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

  const getIcon = (type: string) => {
    switch (type) {
      case 'pdf':
        return <PictureAsPdfIcon sx={{ color: '#D32F2F', fontSize: 28 }} />;
      case 'table':
        return <TableChartIcon sx={{ color: '#1976D2', fontSize: 28 }} />;
      case 'text':
      case 'text/pdf':
        return <TextSnippetIcon sx={{ color: '#388E3C', fontSize: 28 }} />;
      default:
        return null;
    }
  };

  return (
    <>
      <PageTitle imageUrl={investors_Image} tileContent='Investors' />
      <Container maxWidth="lg" sx={{ padding: { xs: "20px", sm: "40px" } }}>
        <Grid container spacing={4}>
          {investorItems.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  height: '100%',
                  transition: 'all 0.3s ease',
                  transform: hoveredIndex === index ? 'translateY(-8px)' : 'none',
                  boxShadow: hoveredIndex === index 
                    ? '0 12px 24px rgba(0, 0, 0, 0.15)' 
                    : '0 4px 12px rgba(0, 0, 0, 0.08)',
                  '&:hover': {
                    borderColor: 'primary.main',
                  },
                  display: 'flex',
                  flexDirection: 'column',
                  cursor: 'pointer',
                  borderRadius: 2,
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '4px',
                    backgroundColor: 'primary.main',
                    opacity: hoveredIndex === index ? 1 : 0,
                    transition: 'opacity 0.3s ease',
                  }
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => handleClickOpen(item)}
              >
                <CardContent sx={{ 
                  p: 3,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 1.5,
                  height: '100%'
                }}>
                  <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'space-between',
                    gap: 2 
                  }}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        fontSize: '1.1rem',
                        color: 'text.primary',
                        lineHeight: 1.3,
                      }}
                    >
                      {item.title}
                    </Typography>
                    {getIcon(item.type)}
                  </Box>
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
