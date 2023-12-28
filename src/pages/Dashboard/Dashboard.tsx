
import useAuth from "../../hooks/useAuth";

const Dashboard = () => {
  const { state } = useAuth();
  const user = state.loginResponse?.data.user;

  return (
    <main className="flex-col h-full w-full p-5 gap-5">
      <div className="h-full">
        <h1 className="text-2xl font-bold">Recent Transactions</h1>
        <div className=""></div>
      </div>
      {/* <div className="h-full p-20 bg-slate-300">
        <h1 className="text-2xl font-bold ">Customer</h1>
        {user && (
          <h1 className="text-2xl font-bold text-gray-400">
            {user.firstName} {user.lastName}
          </h1>
        )}
      </div> */}
    </main>
  );
};

export default Dashboard;
