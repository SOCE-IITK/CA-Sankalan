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
  max-width: 100%;

  @media (max-width: 768px) {
    overflow-x: scroll; /* Enable horizontal scroll for smaller screens */
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  overflow-x: scroll; /* Combine scroll with Table */
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

        // Convert the data to an array and sort by points in descending order
        const sortedData = Object.entries(data)
          .map(([userId, userData]) => {
            const userEntries = Object.entries(userData);
            const user = userEntries.length > 0 ? userEntries[0][1] : null;

            return user
              ? { caid: user.caid, name: user.name, points: user.points }
              : null;
          })
          .sort((userA, userB) => userB.points - userA.points);

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
            </tr>
          </thead>
          <tbody>
            {leaderboardData.map((entry, index) => (
              <TableRow key={entry.caid}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{entry.name}</TableCell>
                <TableCell>{entry.points}</TableCell>
              </TableRow>
            ))}
          </tbody>
        </Table>
      </TableWrapper>
    </Container>
  );
};

export default LeaderboardContent;
