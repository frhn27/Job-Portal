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
} from "@mui/material";

import {
  BookmarkBorderOutlined,
  SearchOutlined,
  PaidOutlined,
  GroupsOutlined,
} from "@mui/icons-material";

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

const films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
  {
    title: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
];

const JobPage = () => {
  const [category, setCategory] = useState(null);
  const [search, setSearch] = useState("");

  const handleSubmit = () => {
    console.log("<<<<<<< MASUK");
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log(`menggunakn debounce`, search);
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  console.log(category);

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
                      placeholder="UI/UX"
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

      <Card className="my-2 mx-2">
        <CardHeader
          className="justify-center"
          avatar={
            <Avatar
              className="w-24 h-24"
              src="https://tse2.mm.bing.net/th?id=OIP.EVra35tTp2Y0IWkBcE7puQHaF7&pid=Api&P=0&h=180"
              aria-label="recipe"
            />
          }
          title="Junior UI/UX Designer"
          subheader="Slack Technologies, SLC"
          action={
            <Card className="flex flex-row items-center mt-6 mr-2">
              <BookmarkBorderOutlined />
              <Typography className="text-sm mx-2">Save Jobs</Typography>
            </Card>
          }
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>

        <CardContent className="flex -flex-row justify-between">
          <Box className="flex flex-row justify-center items-center">
            <PaidOutlined className="mr-2" />
            <Typography className="text-sm  text-xl font-semibold">
              $12-14k
            </Typography>
            <Typography className="text-sm text-sm text-slate-300 ml-2 text-end">
              /Month
            </Typography>
          </Box>

          <Box className="flex flex-row justify-center items-center">
            <GroupsOutlined className="mr-2" />
            <Typography className="text-sm  text-xl font-semibold">
              55
            </Typography>
            <Typography className="text-sm text-sm ml-2  text-slate-300 text-end">
              People Applied
            </Typography>
          </Box>

          <Button variant="contained">Aplly Now</Button>
        </CardContent>
      </Card>
      
      <Card className="my-2 mx-2">
        <CardHeader
          className="justify-center"
          avatar={
            <Avatar
              className="w-24 h-24"
              src="https://tse2.mm.bing.net/th?id=OIP.EVra35tTp2Y0IWkBcE7puQHaF7&pid=Api&P=0&h=180"
              aria-label="recipe"
            />
          }
          title="Junior UI/UX Designer"
          subheader="Slack Technologies, SLC"
          action={
            <Card className="flex flex-row items-center mt-6 mr-2">
              <BookmarkBorderOutlined />
              <Typography className="text-sm mx-2">Save Jobs</Typography>
            </Card>
          }
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>

        <CardContent className="flex -flex-row justify-between">
          <Box className="flex flex-row justify-center items-center">
            <PaidOutlined className="mr-2" />
            <Typography className="text-sm  text-xl font-semibold">
              $12-14k
            </Typography>
            <Typography className="text-sm text-sm text-slate-300 ml-2 text-end">
              /Month
            </Typography>
          </Box>

          <Box className="flex flex-row justify-center items-center">
            <GroupsOutlined className="mr-2" />
            <Typography className="text-sm  text-xl font-semibold">
              55
            </Typography>
            <Typography className="text-sm text-sm ml-2  text-slate-300 text-end">
              People Applied
            </Typography>
          </Box>

          <Button variant="contained">Aplly Now</Button>
        </CardContent>
      </Card>
    </>
  );
};

export default JobPage;
