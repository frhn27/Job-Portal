import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import {
  AcUnitOutlined,
  TipsAndUpdatesOutlined,
  ChatOutlined,
  AssignmentIndOutlined,
  AssignmentOutlined,
  Notifications,
  PersonRounded,
} from "@mui/icons-material";
import * as React from "react";

const Navbar = () => {
  return (
    <>
      <AppBar>
        <Toolbar className="justify-between bg-slate-800">
          <Box className="flex flex-row  p-2 cursor-pointer">
            <AcUnitOutlined className="mx-1" />
            <Typography className="text-red-400 hover:text-slate-200 font-semibold mr-2">
              Job Portal
            </Typography>
          </Box>

          <Box className="flex flex-row justify-center items-center">
            <Box className="flex flex-row p-2 cursor-pointer hover:text-red-500 mx-2">
              <TipsAndUpdatesOutlined className="mx-2" />
              <Typography className="text-red-400 hover:text-slate-200 font-semibold mr-2">
                find work
              </Typography>
            </Box>

            <Box className="flex flex-row p-2 cursor-pointer hover:text-red-500 mx-2">
              <ChatOutlined className="mx-2" />
              <Typography className="text-red-400 hover:text-slate-200 font-semibold mr-2">
                message
              </Typography>
            </Box>

            <Box className="flex flex-row p-2 cursor-pointer hover:text-red-500 mx-2">
              <AssignmentIndOutlined className="mx-2" />
              <Typography className="text-red-400 hover:text-slate-200 font-semibold mr-2">
                my profile
              </Typography>
            </Box>

            <Box className="flex flex-row p-2 cursor-pointer hover:text-red-500 mx-2">
              <AssignmentOutlined className="mx-2" />
              <Typography className="text-red-400 hover:text-slate-200 font-semibold mr-2">
                over view
              </Typography>
            </Box>
          </Box>

          <Box className="flex flex-row justify-center items-center p-2 cursor-pointer">
            <Notifications className="mx-2 hover:text-red-500 border-2 bg-slate-700 rounded-full text-3xl" />
            <Box className="flex flex-row justify-center items-center mx-2">
              <PersonRounded className="border-2 bg-slate-700 rounded-full hover:text-red-500 text-3xl" />

              <Box className="flex flex-col justify-center items-start ml-2">
                <Typography className="text-red-400 font-semibold mr-2">
                  Maria Nadya Crisma
                </Typography>
                <Typography className="text-red-300 font-medium mr-2">
                  maria@gmail.com
                </Typography>
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};
export default Navbar;
