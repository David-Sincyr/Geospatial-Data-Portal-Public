import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* Pages */
import HomePage from "./Components/Pages/HomePage";
import About from "./Components/Pages/About";
import UserSettings from "./Components/Pages/UserSettings";
import Profile from "./Components/Pages/Profile";
import Projects from "./Components/Pages/Projects";
import ProjectListView from "./Components/Pages/ProjectListView";
import ProjectView from "./Components/Pages/ProjectView";
import LoginSignup from "./Components/Pages/LoginSignUp";

/* Other Components */
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" exact element={<LoginSignup />} />
        <Route path="/about" element={<About />} />
        <Route path="/user-settings" element={<UserSettings />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/project-view" element={<ProjectView />} />
        <Route path="/project-list-view" element={<ProjectListView />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
