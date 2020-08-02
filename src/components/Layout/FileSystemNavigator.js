import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TreeView from "@material-ui/lab/TreeView";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import TreeItem from "@material-ui/lab/TreeItem";

const useStyles = makeStyles({
  root: {
    height: 240,
    flexGrow: 1,
    maxWidth: 400,
    textAlign: "left",
  },
});

export default function FileSystemNavigator() {
  const classes = useStyles();

  return (
    <div className="container float-left">
      <TreeView
        className={classes.root}
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
      >
        <TreeItem nodeId="1" label="Features">
          <TreeItem nodeId="2" label="[AAA] Auth orization And Authentication">
            <TreeItem nodeId="10" label="[123] Check Login is Sucessfull" />
            <TreeItem
              nodeId="10"
              label="[43] Check Registration is Sucessfull"
            />
            <TreeItem
              nodeId="10"
              label="[10] Check invalid password error is shown"
            />
            <TreeItem
              nodeId="10"
              label="[11] Check email is required error is shown"
            />
          </TreeItem>
          <TreeItem nodeId="3" label="Navigation feature" />
          <TreeItem nodeId="4" label="Purchase feature" />
          <TreeItem nodeId="5" label="Cart feature">
            <TreeItem nodeId="10" label="Check add item to cart" />
            <TreeItem nodeId="6" label="Check delete item from cart" />
          </TreeItem>
        </TreeItem>
      </TreeView>
    </div>
  );
}
