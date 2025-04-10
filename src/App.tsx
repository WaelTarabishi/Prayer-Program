import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Dashboard from "./component/dashboard";
import Cookies from "js-cookie";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import Login from "./component/login";

// Create a QueryClient instance

function App() {
  const queryClient = new QueryClient();
  const token = Cookies.get("prayerTimeIdlebTimeAdminToken");
  const navigate = useNavigate();
  console.log(token);
  if (!token) {
    navigate("/login");
  }
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route index element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </QueryClientProvider>
      <Toaster />
    </>
  );
}

export default App;
