import { Header } from "../../components/Header";
import { DashboardContent } from "./DashboardContent";
import { useAuth } from "../../provider/AuthContext"

export const Dashboard = () => {

  const {user} = useAuth()
  const myName = user.name
  const splitName = myName.split(" ")
  const firstName = splitName[0]

  return (
    <>
      <Header />
      <DashboardContent name={firstName}/>
    </>
  );
};
