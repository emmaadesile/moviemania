import React from "react";
import styled from "styled-components";

// Loader Reference: https://codepen.io/hafizfattah/pen/AbBtc
const Loading = styled.div`
  margin: 200px auto;
  min-height: 100vh;

  h1 {
    font-family: "Actor", sans-serif;
    color: #fff;
    font-size: 16px;
    letter-spacing: 1px;
    font-weight: 200;
    text-align: center;
  }

  span {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    display: inline-block;
    position: absolute;
    left: 50%;
    margin-left: -10px;
    -webkit-animation: 3s infinite linear;
    -moz-animation: 3s infinite linear;
    -o-animation: 3s infinite linear;
  }

  span:nth-child(2) {
    background: #e84c3d;
    -webkit-animation: kiri 1.2s infinite linear;
    -moz-animation: kiri 1.2s infinite linear;
    -o-animation: kiri 1.2s infinite linear;
  }

  span:nth-child(3) {
    background: #f1c40f;
    z-index: 100;
  }

  @-webkit-keyframes kanan {
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
  }

  @-moz-keyframes kanan {
    0% {
      -moz-transform: translateX(20px);
    }
    50% {
      -moz-transform: translateX(-20px);
    }
    100% {
      -moz-transform: translateX(20px);
      z-index: 200;
    }
  }

  @-o-keyframes kanan {
    0% {
      -o-transform: translateX(20px);
    }

    50% {
      -o-transform: translateX(-20px);
    }

    100% {
      -o-transform: translateX(20px);
      z-index: 200;
    }
  }

  @-webkit-keyframes kiri {
    0% {
      -webkit-transform: translateX(-20px);
      z-index: 200;
    }
    50% {
      -webkit-transform: translateX(20px);
    }
    100% {
      -webkit-transform: translateX(-20px);
    }
  }

  @-moz-keyframes kiri {
    0% {
      -moz-transform: translateX(-20px);
      z-index: 200;
    }
    50% {
      -moz-transform: translateX(20px);
    }
    100% {
      -moz-transform: translateX(-20px);
    }
  }

  @-o-keyframes kiri {
    0% {
      -o-transform: translateX(-20px);
      z-index: 200;
    }
    50% {
      -o-transform: translateX(20px);
    }
    100% {
      -o-transform: translateX(-20px);
    }
  }
`;

const Loader = () => (
  <Loading>
    <h1>LOADING</h1>
    <span />
    <span />
    <span />
  </Loading>
);

export default Loader;
