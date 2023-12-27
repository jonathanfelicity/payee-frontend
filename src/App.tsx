import { Route, Routes } from "react-router-dom";
import { Dashboard, Home, Login, NotFound, Signup } from "./pages";
import ProtectedRoute from "./utils/protectedRoute";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth/signup" element={<Signup />} />
      <Route path="/auth/login" element={<Login />} />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
