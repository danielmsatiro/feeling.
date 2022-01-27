import { Grid } from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { HomeBottom } from "./HomeBottom";
import { HomeTop } from "./HomeTop";

export const Home = () => {
  return (
    <Grid>
      <Header />
      <HomeTop />
      <HomeBottom />;
    </Grid>
  );
};
