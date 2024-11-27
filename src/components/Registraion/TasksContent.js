import React from "react";
import styled from "styled-components";

const UnderlinedHeading = styled.h2`
  text-decoration: underline;
`;

const Container = styled.div`
  text-align: center;
  overflow-x: auto;
`;

const TableWrapper = styled.div`
  max-width: 100%;

  @media (max-width: 768px) {
    overflow-x: scroll;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  overflow-x: scroll; 
`;

const TableHeader = styled.th`
  padding: 10px;
  background-color: #5764de;
  color: #ffffff;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const TableCell = styled.td`
  padding: 10px;
  text-align: center;
  white-space: nowrap; 
`;

const TasksContent = () => {

  const taskData = [
    {
      srNo: 1,
      task: "Bring the registration on This link and submit proof on WhatsApp",
      submitTo: "7240172161",
      pointsRewards: "30/registerations",
    },
    {
      srNo: 2,
      task: "Bring registration on Competitions (Competitions link) and submit proof on WhatsApp",
      submitTo: "7240172161",
      pointsRewards: "5/competition registeration",
    },
    {
      srNo: 3,
      task: "Do your registration on This link and submit proof on WhatsApp",
      submitTo: "7240172161",
      pointsRewards: "10",
    },
    {
      srNo: 4,
      task: "If you bring at least 3 Registrations",
      submitTo: "7240172161",
      pointsRewards: "Your Registration would be free",
    },
    {
      srNo: 5,
      task: "If you bring at least 5 Registrations",
      submitTo: "7240172161",
      pointsRewards: "Your Registration + Accommodation would be free",
    },
  ];

  return (
    <Container>
      <UnderlinedHeading>Task Table</UnderlinedHeading>
      <TableWrapper>
        <Table>
          <thead>
            <tr>
              <TableHeader>Sr. No.</TableHeader>
              <TableHeader>Task</TableHeader>
              <TableHeader>Submit To</TableHeader>
              <TableHeader>Points/Rewards</TableHeader>
            </tr>
          </thead>
          <tbody>
            {taskData.map((task) => (
              <TableRow key={task.srNo}>
                <TableCell>{task.srNo}</TableCell>
                <TableCell>{task.task}</TableCell>
                <TableCell>{task.submitTo}</TableCell>
                <TableCell>{task.pointsRewards}</TableCell>
              </TableRow>
            ))}
          </tbody>
        </Table>
      </TableWrapper>
    </Container>
  );
};

export default TasksContent;
