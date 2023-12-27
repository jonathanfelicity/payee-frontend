import History from "../../components/layout/Dashboard/History";
import UserInfo from "../../components/layout/Dashboard/UserInfo";
import useAuth from "../../hooks/useAuth";

const Dashboard = () => {
  const { isAuthenticated } = useAuth();
  console.log(isAuthenticated);



  return (
    <main className="min-h-screen mx-6 mb-8 ">
      <h2 className="text-3xl font-semibold my-4">Dashboard</h2>
      <div className="flex flex-col-reverse phone:flex-row gap-7">

        <History />
        <UserInfo />
      </div>
    </main>
  );
};

export default Dashboard;
