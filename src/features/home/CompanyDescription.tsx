import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { themeColor } from "../common/common";

const CompanyDescription: React.FC = () => {
  const timelineData = [
    {
      year: '1993-2013',
      content: 'Company started its business.',
      color: '#4CAF50'
    },
    {
      year: '2016',
      content: 'Recognized for safety excellence by Tata Chemicals and mechanical performance by Essar Oil Refinery.',
      color: '#1976D2'
    },
    {
      year: '2017',
      content: 'Awarded as the Best Contractor Safety Performance from Reliance Industries Ltd for DTA Refinery Division, Jamnagar.',
      color: '#4CAF50'
    },
    {
      year: '2018',
      content: 'Best Contractor Safety Improvement award: Tara Fertilizers, Babrala Division.',
      color: '#4CAF50'
    },
    {
      year: '2020',
      content: 'Best Contractor Mechanical Award from Nayara Energy Ltd, Oil Refinery Division, in Jamnagar.',
      color: '#1976D2'
    },
    {
      year: '2022',
      content: 'Got listed on NSE SME. Received LOI for Work Order worth INR 20,000 Lakhs.',
      color: '#1976D2'
    },
    {
      year: '2023',
      content: 'Received 14 orders worth INR 11,451 Lakhs.',
      color: '#4CAF50'
    },
    {
      year: '2024',
      content: 'Awarded the 1st largest Project by Epitome Industries India Ltd worth INR 95,700 Lakhs. Awarded the Production enhancement contract by ONGC worth INR 3,49,800 Lakhs.',
      color: '#4CAF50'
    }
  ];

  return (
    <Box>
      <Container>
        <Typography variant="h3" component="h2" gutterBottom sx={{ 
          textAlign: 'center',
          fontWeight: 'bold',
          mb: 4,
          paddingTop: 4,
          color: '#000000',
          fontSize: { xs: "32px", md: "42px" }
        }}>
          About RBM Infracon Ltd.
        </Typography>
        <Typography variant="body1" paragraph sx={{ 
          textAlign: 'justify',
          fontSize: { xs: "18px", md: "22px" },
          lineHeight: 1.6,
          color: '#000000',
          mb: 3
        }}>
          RBM Infracon Ltd. is a prominent and trusted provider of comprehensive solutions across multiple industries, particularly within the oil, gas, petrochemical, and energy sectors. With a commitment to excellence, RBM delivers a wide range of services in Engineering, Procurement, Construction, Innovation & Performance Enhancement, Operations & Maintenance, Inspection, and Shutdown/Turnaround Services.
        </Typography>
        <Typography variant="body1" sx={{ 
          textAlign: 'justify',
          fontSize: { xs: "18px", md: "22px" },
          lineHeight: 1.6,
          color: '#000000',
          mb: 4
        }}>
          Each service is meticulously designed to meet international standards, ensuring the optimal performance, safety, and longevity of industrial operations.
        </Typography>

        <Typography variant="h3" component="h2" gutterBottom sx={{ 
          textAlign: 'center',
          fontWeight: 'bold',
          mb: 4,
          color: '#000000',
          fontSize: { xs: "32px", md: "42px" }
        }}>
          Our Journey
        </Typography>

        <Timeline position="alternate" sx={{ mb: 4 }}>
          {timelineData.map((item, index) => (
            <TimelineItem key={index}>
              <TimelineSeparator>
                <TimelineDot sx={{ 
                  backgroundColor: item.color,
                  width: { xs: 20, md: 24 },
                  height: { xs: 20, md: 24 }
                }}/>
                {index < timelineData.length - 1 && (
                  <TimelineConnector sx={{ 
                    backgroundColor: item.color,
                    width: 3
                  }} />
                )}
              </TimelineSeparator>
              <TimelineContent sx={{ 
                py: '12px',
                px: 2
              }}>
                <Typography variant="h6" component="span" sx={{
                  fontWeight: 'bold',
                  color: item.color,
                  fontSize: { xs: "18px", md: "22px" }
                }}>
                  {item.year}
                </Typography>
                <Typography sx={{
                  color: '#000000',
                  fontSize: { xs: "18px", md: "22px" },
                  mt: 1
                }}>
                  {item.content}
                </Typography>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </Box>
  );
};

export default CompanyDescription;
