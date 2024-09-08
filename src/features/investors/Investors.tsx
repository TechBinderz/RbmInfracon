import React, { useState } from 'react';
import { Container, Grid, Card, CardContent, Typography, Dialog, DialogTitle, DialogContent, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf'; // Import PDF icon
import '../common/common.css';
import PageTitle from '../common/PageTitleDiv';
import { DirectorTable, CommitteeOfBoard, InvestorGrievance, RegistrarAndTransferAgents } from './InvestorsData';
import section11Img from '../../assets/features/investors/section11.jpg';
import anualReport22_23 from '../../assets/features/investors/AnualReport22-23.pdf';
import outstanding_dues from '../../assets/features/investors/Outstanding-dues.pdf';
import prospectus from '../../assets/features/investors/Prospectus.pdf';
import financialResult23 from '../../assets/features/investors/FinancialResult23.pdf';
import anualResult22_23 from '../../assets/features/investors/AnualResult22_23.pdf';
import valuationOfConvertibaleEquity from '../../assets/features/investors/ValuationOfConvertibaleEquity.pdf';
import pcsWarrants from '../../assets/features/investors/PcsWarrants.pdf';
import pcsEquity from '../../assets/features/investors/PcsEquity.pdf';
import scripts from '../../assets/features/investors/Scripts.pdf';
import sOutcomeFR from '../../assets/features/investors/SOutcomeFR.pdf';

const investorItems = [
  { title: 'Board Of Directors', content: <DirectorTable />, type: 'table' },
  { title: 'Committee Of Board', content: <CommitteeOfBoard />, type: 'table' },
  { title: 'Investor Grievance', content: <InvestorGrievance /> },
  { title: 'Registrar And Transfer Agents', content: <RegistrarAndTransferAgents /> },
  { title: 'SECTION XI - Group Companies', content: '', type: 'image', src: section11Img },
  { title: 'Annual Report (2022-23)', content: '', type: 'pdf', src: anualReport22_23 },
  { title: 'Outstanding Dues', content: '', type: 'pdf', src: outstanding_dues },
  { title: 'Prospectus', content: '', type: 'pdf', src: prospectus },
  { title: 'Financial Result', content: '', type: 'pdf', src: financialResult23 },
  { title: 'Annual Return (2022-23)', content: '', type: 'pdf', src: anualResult22_23 },
  { title: 'Valuation of Convertible Equity Warrants and Shares', content: '', type: 'pdf', src: valuationOfConvertibaleEquity },
  { title: 'PCS Warrants', content: '', type: 'pdf', src: pcsWarrants },
  { title: 'PCS Equity', content: '', type: 'pdf', src: pcsEquity },
  { title: 'Scripts', content: '', type: 'pdf', src: scripts },
  { title: 'S Outcome FR', content: '', type: 'pdf', src: sOutcomeFR },
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

  const isPdf = selectedItem?.type === 'pdf';

  return (
    <>
      <PageTitle imageUrl='https://picsum.photos/1920/1080' tileContent='Investors' />
      <Container maxWidth="lg" sx={{ padding: { xs: "20px", sm: "40px" } }}>
        <Typography variant="h4" gutterBottom>
          Investors
        </Typography>
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
        <Dialog
          open={open}
          onClose={handleClose}
          maxWidth={isPdf ? 'xl' : 'md'} // Set maxWidth to 'xl' for PDFs
          fullWidth={isPdf} // Make dialog full width for PDFs
          PaperProps={{ style: { height: isPdf ? '100vh' : 'auto' } }} // Set height to full viewport height for PDFs
        >
          <DialogTitle>
            {selectedItem.title}
            <IconButton
              edge="end"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
              style={{ position: 'absolute', right: 15, top: 8 }}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent dividers>
            {selectedItem.type === 'pdf' ? (
              <iframe
                src={selectedItem.src}
                style={{ width: '100%', height: '100%' }}
                frameBorder="0"
              />
            ) : selectedItem.type === 'image' ? (
              <img
                src={selectedItem.src}
                alt={selectedItem.title}
                style={{ width: '100%', height: 'auto' }}
              />
            ) : selectedItem.type === 'table' ? (
              selectedItem.content
            ) : (
              <Typography variant="body1">{selectedItem.content}</Typography>
            )}
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default Investor;
