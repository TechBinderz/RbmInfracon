import React from 'react';
import { Container, Grid, Card, CardContent, Typography } from '@mui/material';
import '../common/common.css'

const investorItems = [
  'Board Of Directors',
  'Committee Of Board',
  'SECTION XI - Group Companies',
  'Annual Report (2022-23)',
  'Outstanding Dues',
  'Prospectus',
  'Investor Grievance',
  'Registrar And Transfer Agents',
  'Financial Result',
  'Annual Return (2022-23)',
  'Valuation Of Convertible Equity',
  'Warrants And Shares',
  'PCS Warrants',
  'PCS EQUITY',
  'S Outcome FR',
  'Investor Relation Annual Return MGT 7',
];

const Investor: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Investors
      </Typography>
      <Grid container spacing={3}>
        {investorItems.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card className='card-shadow' style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', margin: '20px' }}>
              <CardContent>
                <Typography variant="h6">{item}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Investor;
