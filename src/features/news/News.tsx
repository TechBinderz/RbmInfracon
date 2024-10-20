// NewsSection.tsx
import React from 'react';
import { Grid, Typography, FormControl, InputLabel, Select, MenuItem, Box, Pagination, Container } from '@mui/material';
import NewsCard from './NewsCard';
import PageTitle from '../common/PageTitleDiv';
import { SelectChangeEvent } from '@mui/material';

const categories = [
    'All Categories',
    'Projects',
    'Awards',
    'Events',
    'Announcements',
];

const newsItems = [
    { date: 'October 2024', title: 'RBM Awarded Contract for Dubai Solar Park', description: 'RBM’s recent investments in new equipment and engineering capabilities have strengthened our role in solar development...' },
    { date: 'October 2024', title: 'RBM Honoured with Good Governance Award', description: 'RBM (Thailand) has been awarded the Good Governance Standards Certification Award 2024 at a recent ceremony in Bangkok...' },
    { date: 'October 2024', title: 'RBM Makes Impressive Debut at OGA2024', description: 'With over 30,000 attendees from 72 countries, OGA2024 provided the ideal platform to showcase our energy engineering solutions...' },
    { date: 'September 2024', title: 'RBM Expands Operations in Asia', description: 'RBM is excited to announce the expansion of our operations in Asia, focusing on sustainable energy solutions...' },
    { date: 'September 2024', title: 'New Partnership with EcoTech', description: 'RBM has partnered with EcoTech to enhance our renewable energy initiatives across the region...' },
    { date: 'August 2024', title: 'RBM Wins Green Building Award', description: 'At the recent Green Building Conference, RBM was awarded for our outstanding contributions to sustainable building practices...' },
    { date: 'August 2024', title: 'RBM Launches New Sustainability Initiative', description: 'Our new sustainability initiative aims to reduce carbon emissions in our operations by 25% over the next five years...' },
    { date: 'July 2024', title: 'RBM Hosts Annual Community Event', description: 'Join us for our annual community event to learn more about our projects and meet our team...' },
    { date: 'July 2024', title: 'RBM Celebrates 10 Years of Service', description: 'RBM is proud to celebrate a decade of service in the renewable energy sector...' },
    { date: 'June 2024', title: 'RBM’s Role in Renewable Energy', description: 'RBM is playing a key role in promoting renewable energy projects across the region...' },
    // Add more items if needed for testing pagination
];

const News: React.FC = () => {
    const [category, setCategory] = React.useState<string>(categories[0]);
    const [currentPage, setCurrentPage] = React.useState<number>(1);
    const itemsPerPage = 9;


    const handleCategoryChange = (event: SelectChangeEvent<string>) => {
        setCategory(event.target.value);
    };

    const handlePageChange = (_: React.ChangeEvent<unknown> | null, value: number) => {
        setCurrentPage(value);
    };

    // Calculate current items to display
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = newsItems.slice(indexOfFirstItem, indexOfLastItem);

    return (<>
             <PageTitle imageUrl='https://picsum.photos/1920/1080' tileContent='Investors' />
             <Container maxWidth="lg" sx={{ padding: { xs: "20px", sm: "40px" } }}>
            <Typography variant="h4" gutterBottom>
                News
            </Typography>
            <Box display="flex" justifyContent="space-between" alignItems="center" marginBottom="20px">
                <Box flexGrow={1} />
                <FormControl variant="outlined" style={{ minWidth: '200px', backgroundColor: '#A8D00A' }}>
                    <InputLabel id="select-category-label">Select Category</InputLabel>
                    <Select
                        labelId="select-category-label"
                        value={category}
                        onChange={handleCategoryChange}
                        label="Select Category"
                    >
                        {categories.map((cat, index) => (
                            <MenuItem key={index} value={cat}>
                                {cat}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Box>
            <Grid container spacing={2}>
                {currentItems.map((item, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <NewsCard date={item.date} title={item.title} description={item.description} />
                    </Grid>
                ))}
            </Grid>
            <Box display="flex" justifyContent="center" marginTop="20px">
                <Pagination
                    count={Math.ceil(newsItems.length / itemsPerPage)}
                    page={currentPage}
                    onChange={handlePageChange}
                    variant="outlined"
                    color="primary"
                />
            </Box>
            </Container>
        </>
    );
};

export default News;
