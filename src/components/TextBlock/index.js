// import React from "react";
import PropTypes from "prop-types"; // Import prop-types

import styled from "styled-components";

const Lb = styled.div`
  // ... (your styles)
`;

const Topic = styled.span`
  // ... (your styles)
`;

const Circle = styled.span`
  // ... (your styles)
`;

const Title = styled.div`
  // ... (your styles)
`;

const SubText = styled.div`
  // ... (your styles)
`;

const TextBlock = ({ topic, title, subText, children }) => {
  return (
    <Lb id="leftBlock">
      <Topic>
        <Circle />
        <span>{topic}</span>
      </Topic>
      <Title>{title}</Title>
      <SubText>{subText}</SubText>
      {children}
    </Lb>
  );
};


TextBlock.propTypes = {
  topic: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subText: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default TextBlock;
