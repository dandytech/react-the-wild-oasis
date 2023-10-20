import styled, { css } from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 50px;
      font-weight: 6px;
      background-color: #ccc;
      text-align: center;
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 50px;
      font-weight: 6px;
      background-color: #888;
      text-align: center;
    `}

${(props) =>
    props.as === "h3" &&
    css`
      font-size: 50px;
      font-weight: 6px;
      background-color: #cc6;
      text-align: center;
    `}
`;

export default Heading;
