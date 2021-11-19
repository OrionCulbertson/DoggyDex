import React, { useState, useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { fetchDogs } from "../actions/dogActions";
import { DoggyDexToggle, LearningModeDoggyDex } from "../components";

function DoggyDex({ dogData, fetchDogs }) {
  const { isLoggedIn } = useSelector((state) => state.auth);

  useEffect(() => {
    fetchDogs();
  }, []);

  return dogData.loading ? (
    <h2>Loading</h2>
  ) : dogData.error ? (
    <h2>{dogData.error}</h2>
  ) : isLoggedIn ? (
    <DoggyDexToggle dogData={dogData} />
  ) : (
    <LearningModeDoggyDex dogData={dogData} />
  );
}

const mapStateToProps = (state) => {
  return {
    dogData: state.dogReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDogs: () => dispatch(fetchDogs()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DoggyDex);
