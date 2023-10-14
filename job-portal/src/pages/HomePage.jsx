import Grid from "@mui/material/Unstable_Grid2";
import { Typography, Card, CardContent } from "@mui/material";
import JobPage from "./JobPage";
import ProfileCard from "../components/ProfileCard";


const HomePage = () => {
  
  return (
    <>
      <Grid container spacing={2} columns={12} className="justify-center">
        {/* PROFILE CARD  */}
        <Grid xs={2.5} className="my-2">
            <ProfileCard />
        </Grid>

        {/* JOB CARD */}
        <Grid xs={6}>
          <JobPage />
        </Grid>

        <Grid xs={2.5} className="my-2">
          <Card>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Word of the Day
              </Typography>
              <Typography variant="h5" component="div">
                ini card
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                adjective
              </Typography>
              <Typography variant="body2">
                well meaning and kindly.
                <br />
                card
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default HomePage;
