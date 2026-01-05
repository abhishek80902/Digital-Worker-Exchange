import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import FindWork from "./pages/FindWork";
import AllJobs from "./pages/AllJobs";
import JobDetails from "./pages/JobDetails";
import PostJob from "./pages/PostJob";
import WorkerProfile from "./pages/WorkerProfile";
import Chat from "./pages/Chat";
import Matches from "./pages/Matches";
import About from "./pages/About";
import Contact from "./pages/Contact";
import EmployerJobs from "./pages/EmployerJobs";
import WorkerDashboard from "./pages/worker/WorkerDashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import SelectRole from "./pages/SelectRole";
import ChatPage from "./pages/ChatPage";
import EmployerDashboard from "./pages/employer/EmployerDashboard";
import WorkerProfileEdit from "./pages/worker/WorkerProfileEdit";
import EmployerJobApplicants from "./pages/employer/EmployerJobApplicants";
import Notifications from "./pages/Notifications";

function App() {
  return (
    <Router>
      <Navbar />

      <main className="mt-5"> {/* This prevents content from hiding behind navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/findwork" element={<FindWork />} />
          <Route path="/jobs" element={<AllJobs />} />
          <Route path="/job/:id" element={<JobDetails />} />
          <Route path="/postjob" element={<PostJob />} />
          <Route path="/worker/:id" element={<WorkerProfile />} />
          <Route path="/chat/:id" element={<Chat />} />
          <Route path="/matches" element={<Matches />} /> 
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/employer/jobs" element={<EmployerJobs />} />
          <Route path="/worker/dashboard" element={<WorkerDashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/select-role" element={<SelectRole />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/employer/dashboard" element={<EmployerDashboard />} />
          <Route path="/worker/profile/edit" element={<WorkerProfileEdit />} />
          <Route path="/employer/job/:id/applicants" element={<EmployerJobApplicants />} />
          <Route path="/notifications" element={<Notifications />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;

