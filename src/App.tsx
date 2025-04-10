import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./component/dashboard";
// import Cookies from "js-cookie";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import Login from "./component/login";

// Create a QueryClient instance

function App() {
  const queryClient = new QueryClient();
  // const token = Cookies.get("prayerTimeIdlebTimeAdminToken");

  // console.log(token);
  // if (!token) {
  //   window.location.href = "/login";
  // }
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
