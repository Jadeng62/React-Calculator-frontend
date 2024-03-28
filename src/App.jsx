import { Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";

import ProtectedRoute from "./Components/Authorization/ProtectedRoute";
import Register from "./Components/Authorization/Register";
import Login from "./Components/Authorization/Login";
import Dashboard from "./Components/Authorization/Dashboard";
import Index from "./Pages/Index";
import Show from "./Pages/Show";
import FourOFour from "./Pages/FourOFour";
import About from "./Pages/About";
import LandingPage from "./Pages/LandingPage";
import Form from "./Pages/Form";
import ReviewAddForm from "./Components/Reviews/ReviewAddForm";
import NavBar from "./Components/Common/NavBar";
import { ReviewEditForm } from "./Components/Reviews/ReviewEditForm";


function App() {
  const [reviews, setReviews] = useState([]);
  const [toggleLogin, setToggleLogin] = useState(false)
  

  return (
    <>
      <NavBar toggleLogin={toggleLogin} setToggleLogin={setToggleLogin}/>
      <Routes>
        <Route
          path="/"
          element={
            <LandingPage setToggleLogin={setToggleLogin} toggleLogin={toggleLogin}/>
            // <div>
            //   <h1>Welcome to the Auth Starter</h1>
            //   <Link to="/login">Login</Link>
            //   <h2>If you are not logged in you cannot reach this route. Try!</h2>
            //   <Link to="/dashboard">Dashboard</Link>
            // </div>
          }
        />
        <Route path="/login" element={<Login setToggleLogin={setToggleLogin} toggleLogin={toggleLogin} />} />
        <Route path="/register" element={<Register />} />
        {/* Names of routes? */}
        <Route path="/teapots" element={<Index />} />
        <Route
          exact
          path="/teapots/:teapot_id"
          element={
            <Show
              reviews={reviews}
              setReviews={setReviews}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<FourOFour />} />
      <Route element={<ProtectedRoute />}>
        {/* Place protected routes here */}
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/teapots/:teapot_id/new" element={<ReviewAddForm reviews={reviews} setReviews={setReviews}/>} />
        <Route path="/teapots/:teapot_id/edit/:review_id" element={<ReviewEditForm reviews={reviews} setReviews={setReviews}/>} />
      </Route>
    </Routes>
     </>
  );
}

export default App;
