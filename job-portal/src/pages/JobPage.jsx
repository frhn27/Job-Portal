import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  InputAdornment,
  Autocomplete,
  FormControl,
  CardHeader,
  Avatar,
  Button,
  CircularProgress,
} from "@mui/material";

import {
  BookmarkBorderOutlined,
  SearchOutlined,
  PaidOutlined,
  GroupsOutlined,
} from "@mui/icons-material";

import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "../store/action/actionCreate";

const data = [
  {
    id: 1,
    category: "newest",
  },
  {
    id: 2,
    category: "oldest",
  },
  {
    id: 3,
    category: "current",
  },
];

const films = [];

const JobPage = () => {
  const [category, setCategory] = useState(null);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const job = useSelector((state) => {
    return state.jobs;
  });

  const handleSubmit = () => {
    console.log("<<<<<<< MASUK");
  };
  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchJobs());
    }, 1000);
  }, []);

  useEffect(() => {
    console.log(search, "<<<<<<<<<<<<<<<<<<<<");
  }, [search]);

  return (
    <>
      <Card className="my-2 mx-2">
        <CardContent>
          <Box className="flex flex-row justify-between">
            <Typography className="text-2xl font-semibold">
              Search Job
            </Typography>
            <Box className="flex flex-row">
              <BookmarkBorderOutlined />
              <Typography className="text-sm">Save Search</Typography>
            </Box>
          </Box>

          <FormControl fullWidth>
            <Box className="flex flex-row justify-center my-2">
              <Box className="basis-3/4 mr-2">
                <Autocomplete
                  freeSolo
                  options={films.map((option) => option.title)}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="outlined"
                      type="search"
                      size="small"
                      placeholder="Backend"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <SearchOutlined />
                          </InputAdornment>
                        ),
                      }}
                    />
                  )}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </Box>

              <Box className="basis-1/4 ml-2">
                <Autocomplete
                  value={category}
                  size="small"
                  options={data.map((items) => items.category)}
                  renderInput={(params) => (
                    <TextField {...params} label="Jobs" />
                  )}
                  onChange={(event, newValue, reason) => setCategory(newValue)}
                  isOptionEqualToValue={(option, value) => option === value}
                />
              </Box>
            </Box>
          </FormControl>
        </CardContent>
      </Card>

      {job && job.length === 0 ? (
        <Box className="flex justify-center items-center">
          <CircularProgress />;
        </Box>
      ) : (
        job.map((items) => {
          return (
            <Card className="my-2 mx-2" key={items.id}>
              <CardHeader
                className="justify-center"
                avatar={
                  <Avatar
                    className="w-24 h-24"
                    src="https://tse2.mm.bing.net/th?id=OIP.EVra35tTp2Y0IWkBcE7puQHaF7&pid=Api&P=0&h=180"
                    aria-label="recipe"
                  />
                }
                title={items.title}
                subheader={items.company.display_name}
                action={
                  <Card className="flex flex-row items-center mt-6 mr-2">
                    <BookmarkBorderOutlined />
                    <Typography className="text-sm mx-2">Save Jobs</Typography>
                  </Card>
                }
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {items.description}
                </Typography>
              </CardContent>

              <CardContent className="flex -flex-row justify-between">
                <Box className="flex flex-row justify-center items-center">
                  <PaidOutlined className="mr-2" />
                  <Typography className="text-sm  text-xl font-semibold">
                    $ {items.salary_max}
                  </Typography>
                  <Typography className="text-sm text-sm text-slate-300 ml-2 text-end">
                    /Month
                  </Typography>
                </Box>

                <Box className="flex flex-row justify-center items-center">
                  <GroupsOutlined className="mr-2" />
                  <Typography className="text-sm  text-xl font-semibold">
                    {Math.floor(Math.random() * 100)}
                  </Typography>
                  <Typography className="text-sm text-sm ml-2  text-slate-300 text-end">
                    People Applied
                  </Typography>
                </Box>
                
                <Button variant="contained" onClick={handleSubmit}>
                  Apply Now
                </Button>
              </CardContent>
            </Card>
          );
        })
      )}
    </>
  );
};

export default JobPage;
