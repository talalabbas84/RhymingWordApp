import { List, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import WordlistItem from "../WordListItem";


interface IChildProps {
  items: {
    word: string;
    score: number;
    numSyllables: number;
  }[];
}

const useStyles = makeStyles(() => ({
  root: {
    margin: 16,
  },
  list: {
    overflow: "scroll",
  }
}));

const Wordlist = React.memo<IChildProps>(({ items }) => {
  const classes = useStyles();
  return (
    <>
      {items.length > 0 && (
        <Paper className={classes.root}>
          <List className={classes.list}>
            {items.map((item, idx) => (
              <WordlistItem
                word={item.word}
                key={`TodoItem.${idx}`}
                divider={idx !== items.length - 1}
              />
            ))}
          </List>
        </Paper>
      )}
    </>
  )
});

export default Wordlist;
