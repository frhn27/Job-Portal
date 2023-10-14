import React from "react";
import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router";

const ProfileCard = () => {

    const navigate = useNavigate()

  return (
    <Card className="flex flex-col justify-center items-center p-4">
      <Avatar
        alt="Profile image"
        src="https://tse2.mm.bing.net/th?id=OIP.1AWS50OWjeduaN5niJFbeAHaJl&pid=Api&P=0&h=180"
        className="w-20 h-20"
      />
      <Typography>Masdar Darsiman</Typography> 
      <Typography>Fullstack Developer</Typography>
      <Button size="medium" className="text-red-500" onClick={()=>navigate("/profile")}>
        Edit Profile
      </Button>
    </Card>
  );
};

export default ProfileCard;
