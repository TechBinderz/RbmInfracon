import React, { useState } from 'react';
import { Container, Grid, Card, CardContent, Typography, Dialog, DialogTitle, DialogContent, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import '../common/common.css'
import PageTitle from '../common/PageTitleDiv';
import { DirectorTable, CommitteeOfBoard } from './dataTable';
import section11Img from '../../assets/features/investors/section11.jpg'
import anualReport22_23 from '../../assets/features/investors/AnualReport22-23.pdf'

const investorItems = [
  { title: 'Board Of Directors', content: <DirectorTable />, type: 'table' },
  { title: 'Committee Of Board', content: <CommitteeOfBoard />, type: 'table' },
  { title: 'SECTION XI - Group Companies', content: '', type: 'image', src: section11Img },
  { title: 'Annual Report (2022-23)', content: '', type: 'pdf', src: anualReport22_23 },
  { title: 'Outstanding Dues', content: 'Content for Outstanding Dues' },
  { title: 'Prospectus', content: 'Content for Prospectus' },
  { title: 'Investor Grievance', content: 'Content for Investor Grievance' },
  { title: 'Registrar And Transfer Agents', content: 'Content for Registrar And Transfer Agents' },
  { title: 'Financial Result', content: 'Content for Financial Result' },
  { title: 'Annual Return (2022-23)', content: 'Content for Annual Return', type: 'pdf', url: 'https://example.com/annual-return.pdf' },
  { title: 'Valuation Of Convertible Equity', content: 'Content for Valuation Of Convertible Equity' },
  { title: 'Warrants And Shares', content: 'Content for Warrants And Shares' },
  { title: 'PCS Warrants', content: 'Content for PCS Warrants' },
  { title: 'PCS EQUITY', content: 'Content for PCS EQUITY' },
  { title: 'S Outcome FR', content: 'Content for S Outcome FR' },
  { title: 'Investor Relation Annual Return MGT 7', content: 'Content for Investor Relation Annual Return MGT 7' },
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
                <CardContent>
                  <Typography variant="h6">{item.title}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      
      {selectedItem && (
        <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
          <DialogTitle>
            {selectedItem.title}
            <IconButton
              edge="end"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
              style={{ position: 'absolute', right: 8, top: 8 }}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent dividers>
            {selectedItem.type === 'pdf' ? (
              <iframe
                src={selectedItem.src}
                style={{ width: '100%', height: '500px' }}
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
