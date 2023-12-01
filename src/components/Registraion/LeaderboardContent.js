import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { get, ref, getDatabase, onValue } from "firebase/database";
import { auth } from "./firebase";

const UnderlinedHeading = styled.h2`
  text-decoration: underline;
`;

const Container = styled.div`
  text-align: center;
  overflow-x: auto; /* Add horizontal scroll */
`;

const TableWrapper = styled.div`
  overflow-x: auto; /* Add horizontal scroll */
  max-width: 100%; /* Ensure the table wrapper can be smaller than the screen width */

  @media (max-width: 768px) {
    /* Adjust styles for smaller screens */
    overflow-x: scroll; /* Enable horizontal scroll for smaller screens */
    max-width: 100%; /* You can adjust this value based on your design */
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  min-width: 600px; /* Set a minimum width for the table */
`;

const TableHeader = styled.th`
  padding: 10px;
  background-color: #5764de;
  color: #080710;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const TableCell = styled.td`
  padding: 10px;
  text-align: center;
  white-space: nowrap; /* Prevent text wrapping in cells */
`;

const LeaderboardContent = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);

  useEffect(() => {
    // Fetch all leaderboard data from the "ranking" database
    const rankingRef = ref(getDatabase(), "ranking/");

    onValue(rankingRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();

        // Convert the data to an array and sort it by points in descending order
        const sortedData = Object.entries(data).map(([userId, userData]) => {
          // Extract the user data based on your structure
          const userEntries = Object.entries(userData);
          const user = userEntries.length > 0 ? userEntries[0][1] : null;

          // Return an object with caid, name, and points
          return user
            ? { caid: user.caid, name: user.name, points: user.points }
            : null;
        });

        // Filter out potential null values
        const filteredData = sortedData.filter((entry) => entry !== null);

        setLeaderboardData(filteredData);
      }
    });
  }, []);

  return (
    <Container>
      <UnderlinedHeading>Leaderboard</UnderlinedHeading>
      <TableWrapper>
        <Table>
          <thead>
            <tr>
              <TableHeader>Rank</TableHeader>
              <TableHeader>Name</TableHeader>
              <TableHeader>Points</TableHeader>
              {/* <TableHeader>CA ID</TableHeader> */}
            </tr>
          </thead>
          <tbody>
            {leaderboardData.map((entry, index) => (
              <TableRow key={entry.caid}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{entry.name}</TableCell>
                <TableCell>{entry.points}</TableCell>
                {/* <TableCell>{entry.caid}</TableCell> */}
              </TableRow>
            ))}
          </tbody>
        </Table>
      </TableWrapper>
    </Container>
  );
};

export default LeaderboardContent;
