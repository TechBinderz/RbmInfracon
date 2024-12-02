import React from "react";
import {
  Grid,
  FormControl,
  Select,
  MenuItem,
  Box,
  Pagination,
  Container,
} from "@mui/material";
import NewsCard from "./NewsCard";
import PageTitle from "../common/PageTitleDiv";
import { SelectChangeEvent } from "@mui/material";
import themeColor from "../common/common";
import { newsItems, NewsItem } from "./newsPages/NewsData";
import { useLocation, Outlet, Link } from "react-router-dom";

const categories = [
  "All Categories",
  "Projects",
  "Awards",
  "Events",
  "Announcements",
];

const News: React.FC = () => {
  const { pathname } = useLocation();
  const [category, setCategory] = React.useState<string>(categories[0]);
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const itemsPerPage = 9;

  const handleCategoryChange = (event: SelectChangeEvent<string>) => {
    setCategory(event.target.value);
    setCurrentPage(1); // Reset to first page when category changes
  };

  const handlePageChange = (
    _: React.ChangeEvent<unknown> | null,
    value: number
  ) => {
    setCurrentPage(value);
  };

  // Filter items based on category
  const filteredItems =
    category === "All Categories"
      ? newsItems
      : newsItems.filter((item) => item.category === category);

  // Paginate filtered items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  const AllNews: React.FC = () => (
    <>
      <PageTitle
        imageUrl="https://picsum.photos/1920/1080"
        tileContent="News"
      />
      <Container maxWidth="lg" sx={{ padding: { xs: "20px", sm: "40px" } }}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          marginBottom="20px"
        >
          <Box flexGrow={1} />
          <FormControl
            variant="outlined"
            style={{ minWidth: "200px", backgroundColor: "#A8D00A" }}
          >
            <Select
              labelId="select-category-label"
              value={category}
              onChange={handleCategoryChange}
              style={{ backgroundColor: themeColor, color: "#fff" }}
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
          {currentItems.map((item: NewsItem, index: number) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={index}
              sx={{
                padding: { xs: "10px", sm: "15px" },
              }}
            >
              <Link
                to={`/news/${item.pathName}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <NewsCard
                  image={item.image}
                  date={item.date}
                  title={item.title}
                  description={item.description}
                />
              </Link>
            </Grid>
          ))}
        </Grid>
        <Box display="flex" justifyContent="center" marginTop="20px">
          <Pagination
            count={Math.ceil(filteredItems.length / itemsPerPage)}
            page={currentPage}
            onChange={handlePageChange}
            variant="outlined"
            color="primary"
          />
        </Box>
      </Container>
    </>
  );

  return (<>{pathname === "/news" ? <AllNews /> : <Outlet />}</>)
};

export default News;
