import { } from "react-router-dom"
// import React, { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  CardHeader,
  Avatar,
} from "@mui/material";

import { BookmarkBorderOutlined, PaidOutlined } from "@mui/icons-material";

import { useParams} from "react-router-dom";


const DetailJobsPage = () => { 

    const { id } = useParams();

    console.log(id, "<<<<<<<<<<")
  return (
    <>
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
          title="Backend"
          subheader="PT.Algotech Indonesia.ltd"
          action={
            <Card className="flex flex-row items-center mt-6 mr-2">
              <BookmarkBorderOutlined />
              <Typography className="text-sm mx-2">Save Jobs</Typography>
            </Card>
          }
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {" "}
          </Typography>
        </CardContent>
        <CardContent className="flex -flex-row justify-between">
          <Box className="flex flex-row justify-center items-center">
            <PaidOutlined className="mr-2" />
            <Typography className="text-sm  text-xl font-semibold">
              $ 20.0000
            </Typography>
            <Typography className="text-sm text-sm text-slate-300 ml-2 text-end">
              /Month
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </>
  );
}

export default DetailJobsPage