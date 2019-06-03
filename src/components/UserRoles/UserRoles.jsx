import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import MoreHoriz from '@material-ui/icons/MoreHoriz';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: '#ccc',
    color: theme.palette.common.black,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});

let id = 0;
function createData(role, description) {
  id += 1;
  return { id, role, description };
}

const rows = [
  createData('Admin', 'Promo / Campaign/ Coupon Ability to create, edit, delete, approve, publish & unpublish Grant access'),
  createData('User', 'Create, edit, delete promotions Cannot edit published campaigns Can create, edit, delete campaigns -> would go through the approval process but will not change campaign status'),
  createData('Account', 'Read promo'),
  
];

class UserRoles extends Component {
    state = {
    anchorEl: null,
    open: false
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClickClose = () => {
    this.setState({ open: false,anchorEl: null });
  };
  
    render() {
  const { classes } = this.props;
  const { anchorEl } = this.state;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <CustomTableCell>ROLE</CustomTableCell>
            <CustomTableCell> DESCRIPTION</CustomTableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow className={classes.row} key={row.id}>
              <CustomTableCell component="th" scope="row">
                {row.role}
              </CustomTableCell>
              <CustomTableCell >
              {row.description}
              <MoreHoriz onClick={this.handleClick}/>
                        <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={this.handleClose}
                    >
          <MenuItem onClick={this.handleClickOpen}>Add</MenuItem>
          <MenuItem onClick={this.handleClickOpen}>Edit</MenuItem>
        </Menu>
              
              </CustomTableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Dialog
          open={this.state.open}
          onClose={this.handleClickClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Edit/Add</DialogTitle>
          <DialogContent>
            {/* <DialogContentText>
              Add Data
            </DialogContentText> */}
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Description"
              type="email"
              fullWidth
            />
            
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClickClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClickClose} color="primary">
              Submit
            </Button>
          </DialogActions>
        </Dialog>
    </Paper>
  );
    }
}

UserRoles.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserRoles);

