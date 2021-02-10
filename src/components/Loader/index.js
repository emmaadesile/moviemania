import React from "react";
import styled, { keyframes } from "styled-components";

// Loader Reference: https://codepen.io/hafizfattah/pen/AbBtc
const moveCircle = keyframes`
  0% {
    -webkit-transform: translateX(20px);
  }

  50% {
    -webkit-transform: translateX(-20px);
  }

  100% {
    -webkit-transform: translateX(20px);
    z-index: 200;
  }
`;

const Loading = styled.div`
  margin: 200px auto;

  .loader {
    margin: 200px auto;
  }
  h1 {
    color: #fff;
    font-size: 16px;
    letter-spacing: 1px;
    font-weight: 200;
    text-align: center;
  }

  .loader span {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    display: inline-block;
    position: absolute;
    left: 50%;
    margin-left: -10px;
    animation: 3s infinite linear;
  }

  .loader span:nth-child(2) {
    background: #e84c3d;
    animation: ${moveCircle} 1.2s infinite linear;
  }
  .loader span:nth-child(3) {
    background: #f1c40f;
    z-index: 100;
  }
  .loader span:nth-child(4) {
    background: #2fcc71;
    animation: ${moveCircle} 1.2s infinite linear;
    animation-direction: reverse;
  }
`;

const Loader = () => (
  <Loading>
    <div className="loader">
      <h1>LOADING</h1>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </Loading>
);

export default Loader;
