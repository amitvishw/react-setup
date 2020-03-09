import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { planetSlice } from "../ducks";

const StyledWrapper = styled.div`
  background: #e91e6314;
  ol {
    background: #03a9f4;
  }
`;

const Planet = props => {
  const { fetchPlanets, planets, loading, error } = props;
  return (
    <StyledWrapper>
      {loading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <h1>Failed to load</h1>
      ) : planets.length ? (
        <ol>
          {planets.map((planet, index) => (
            <li key={index}>
              {planet.planet} Moons {planet.moons}
            </li>
          ))}
        </ol>
      ) : (
        <h1 onClick={e => fetchPlanets({ key: "data to send" })}>
          Click to load planets
        </h1>
      )}
    </StyledWrapper>
  );
};

export default connect(
  state => {
    return {
      planets: state?.planetSlice?.planets,
      loading: state?.planetSlice?.loading,
      error: state?.planetSlice?.error
    };
  },
  {
    fetchPlanets: planetSlice.actions.fetch
  }
)(Planet);
