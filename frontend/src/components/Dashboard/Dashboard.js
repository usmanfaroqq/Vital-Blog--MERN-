import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useSelector, useDispatch } from "react-redux";
import { REDIRECT_FALSE, REMOVE_MESSAGE } from "../../redux/types/PostTypes";
import toast, { Toaster } from "react-hot-toast";

const Dashboard = (props) => {
  const { redirect, message } = useSelector((state) => state.PostReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    if (redirect) {
      dispatch({ type: REDIRECT_FALSE });
    }
    if(message) {
      toast.success(message);
      dispatch({ type: REMOVE_MESSAGE });
    }
  }, [message]);
  return (
    <>
      <Helmet>
        <title>Dashboard - Vital Blog</title>
        <meta name="description" content="Dashboard" />
      </Helmet>
      <Toaster
        position="top-center"
        reverseOrder={true}
        toastOptions={{
          className: "",
          style: {
            padding: "16px",
            color: "red",
            fontSize: "1.5rem",
          },
        }}
      />
      <h1>Dashboard</h1>
    </>
  );
};

export default Dashboard;
