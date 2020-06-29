import React, { useState  } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { MAPS } from './config';

const asOption = mapId => ({label: MAPS[mapId].shortName, value: mapId});

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    'flex-direction': 'row',
  },
  formControl: {
    margin: theme.spacing(0.5),
    minWidth: 120,
    width: '100%',
    'flex-direction': 'row',
  },
  locationSelectorDropdown: {
    'flex-grow': 1,
    'font-family': 'Open Sans',
    'font-size': '10pt',
  },
  divider: {
    height: 22,
    width: 2,
    content: '',
  },
  goButton: {
    height: '100%',
  }
}));

export default function LocationSelector(props) {
  const [selectedMap, setSelectedMap] = useState(asOption(props.selectedMapId));
  const classes = useStyles();

  const items = Object.keys(MAPS).map(asOption);

  return (
      <div className={classes.container}>
        <FormControl variant="outlined" className={classes.formControl}>
          <Select
            value={selectedMap.value}
            className={classes.locationSelectorDropdown}
            onChange={e => setSelectedMap(asOption(e.target.value))}
          >
            {items.map((item, index) => (
              <MenuItem
                key={index}
                value={item.value}>
                {item.label}
              </MenuItem>))}
          </Select>
          <div className={classes.divider} />
          <Button
            color="primary"
            variant="contained"
            className={classes.goButton}
            onClick={() => props.onSelectMap(selectedMap.value)}>
            Go
          </Button>
        </FormControl>
      </div>
  );
}
