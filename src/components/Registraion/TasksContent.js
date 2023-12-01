import React from "react";
import styled from "styled-components";

const UnderlinedHeading = styled.h2`
  text-decoration: underline;
`;

const Container = styled.div`
  text-align: center;
`;

const TasksContent = () => {
  return (
    <Container>
      <UnderlinedHeading>Tasks</UnderlinedHeading>
      <p>Tasks coming soon</p>
    </Container>
  );
};

export default TasksContent;
