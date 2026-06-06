import "./HomPage.css";
import homePagePhoto from "../../assets/home-page-photo.jpg";
import { Grid } from "@mui/material";
import { Box } from "@mui/material";

function HomePage() {
  return (
    <>
      <Grid container spacing={6}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Box className="item">
            <h1>Welcome to Capurrchinno</h1>
            <p>
              Step into a world where coffee meets cuddles! At Capurrchinno, we blend the finest artisan coffee with the company of our adorable feline friends. Whether you're a cat lover, coffee
              enthusiast, or both, our cozy cafe offers the perfect escape from the daily grind. Sip on your favorite brew while our resident cats purr contentedly by your side. It's not just a
              cafe—it's a sanctuary of warmth, whiskers, and wonderful moments.
            </p>
          </Box>
        </Grid>

        <Grid size={{ md: 6 }} sx={{ display: { xs: "none", md: "block" } }}>
          <Box className="item" sx={{ borderRadius: 6, boxShadow: 6 }}>
            <img src={homePagePhoto} alt="Cat Cafe welcome image"></img>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default HomePage;
