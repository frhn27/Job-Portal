import React, { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  FormControl,
  CardHeader,
  Avatar,
  Button,
  CircularProgress,
} from "@mui/material";

import { BookmarkBorderOutlined, PaidOutlined } from "@mui/icons-material";

import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "../store/action/actionCreate";
import { Link } from "react-router-dom";

const JobPage = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobs);

  const handleSearch = () => {
    if (search.trim() !== "") {
      dispatch(fetchJobs(search));
    }
  };

  useEffect(() => {
    dispatch(fetchJobs(search));
  }, []);

  return (
    <Card className="my-2 mx-2">
      <CardContent>
        <Box className="flex flex-row justify-between">
          <Typography className="text-2xl font-semibold">Search Job</Typography>
          <Box className="flex flex-row">
            <BookmarkBorderOutlined />
            <Typography className="text-sm">Save Search</Typography>
          </Box>
        </Box>

        <FormControl fullWidth>
          <Box className="flex flex-row justify-center my-2">
            <Box className="basis-3/4 mr-2">
              <TextField
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />  
            </Box>
          </Box>
        </FormControl>
        <Button variant="contained" onClick={handleSearch}>
          Search
        </Button>
      </CardContent>

      {jobs.length === 0 ? (
        <Box className="flex justify-center items-center">
          <Typography className="text-black">Not Found</Typography>
        </Box>
      ) : (
        jobs.map((item) => (
          <Card className="my-2 mx-2" key={item.id}>
            <CardHeader
              className="justify-center"
              avatar={
                <Avatar
                  className="w-24 h-24"
                  src="https://tse2.mm.bing.net/th?id=OIP.EVra35tTp2Y0IWkBcE7puQHaF7&pid=Api&P=0&h=180"
                  aria-label="recipe"
                />
              }
              title={item.title}
              subheader={item.company.display_name}
              action={
                <Card className="flex flex-row items-center mt-6 mr-2">
                  <BookmarkBorderOutlined />
                  <Typography className="text-sm mx-2">Save Jobs</Typography>
                </Card>
              }
            />
            <CardContent className="flex -flex-row justify-between">
              <Box className="flex flex-row justify-center items-center">
                <PaidOutlined className="mr-2" />
                <Typography className="text-sm  text-xl font-semibold">
                  $ {item.salary_max}
                </Typography>
                <Typography className="text-sm text-sm text-slate-300 ml-2 text-end">
                  /Month
                </Typography>
              </Box>

              <Link to={`/detail-jobs/${item.id}`}>
                <Button variant="contained">More Details</Button>
              </Link>
            </CardContent>
          </Card>
        ))
      )}
    </Card>
  );
};

export default JobPage;
