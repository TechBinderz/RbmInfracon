import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

interface NewsCardProps {
    date: string;
    title: string;
    description: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ date, title, description }) => {
    return (
        <Card>
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {date}
                </Typography>
                <Typography variant="h5">{title}</Typography>
                <Typography variant="body1">{description}</Typography>
            </CardContent>
        </Card>
    );
};

export default NewsCard;
