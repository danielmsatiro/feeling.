import { Grid } from "@chakra-ui/react";
import { HomeBottom } from "./HomeBottom";
import { HomeTop } from "./HomeTop"

export const Home = () => {
  return (
    <Grid>
      <HomeTop/>
      <HomeBottom />;
    </Grid>
  )
}


