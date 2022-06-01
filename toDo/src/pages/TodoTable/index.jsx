import * as React from "react";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TodoTable from "./todoTable";

export default function OutlinedCard() {
  return (
    <>
      <Typography variant="h3" style={{ margin: "7px 15%" }}>
        ToDo Table
      </Typography>
      <Card variant="outlined" sx={{ maxWidth: "70%", margin: "auto" }}>
        <TodoTable />
      </Card>
    </>
  );
}
