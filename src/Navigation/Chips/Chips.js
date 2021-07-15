import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(2),
    margin: 0,
    boxShadow: "1px 1px 4px rgb(0 0 0 / 35%)",
    width: 487,
    height: 170,
  },
  chip: {
    width: 137,
    height: 32,
    backgroundColor: "rgba(200, 200, 200, 1)",
    borderRadius: 16,
    fontSize: 16,
  },
  chip2: {
    width: 137,
    height: 32,
    backgroundColor: "rgba(229, 229, 229, 1)",
    borderRadius: 16,
    fontSize: 16,
  },
  li: {
    padding: "12px 6px 12px 6px",
    MarginRight: 8,
    MarginBottom: 8,
  },
}));

export function ChipsArray() {
  const classes = useStyles();
  const [chipData, setChipData] = React.useState([
    { key: 0, label: "Category Name" },
    { key: 1, label: "Category Name" },
    { key: 2, label: "Category Name" },
    { key: 3, label: "Category Name" },
    { key: 4, label: "Category Name" },
  ]);

  return (
    <Paper component="ul" className={classes.root}>
      <li className={classes.li}>
        <Chip className={classes.chip} label="Category Name" />
      </li>

      {chipData.map((data) => {
        return (
          <li className={classes.li} key={data.key}>
            <Chip label={data.label} className={classes.chip2} />
          </li>
        );
      })}
    </Paper>
  );
}
