import { Header } from "../../components/Header";
import { DashboardContent } from "./DashboardContent";
import { useAuth } from "../../provider/AuthContext"

export const Dashboard = () => {

  const {user} = useAuth()
  console.log(user.name)

  return (
    <>
      <Header />
      <DashboardContent name={user.name}/>
    </>
  );
};
