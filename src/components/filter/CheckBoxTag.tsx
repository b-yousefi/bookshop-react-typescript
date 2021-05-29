import React from "react";
import { Checkbox, TextField } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import { FilterItem } from "models/FilterItem";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

interface CheckBoxTagProps {
  width: string;
  placeholder: string;
  label: string;
  name: string;
  onChange: (newValue: FilterItem[]) => void;
  options: FilterItem[];
  value: FilterItem[];
}

export const CheckBoxTag: React.FC<CheckBoxTagProps> = (props) => {
  const { options } = props;
  return (
    <Autocomplete
      multiple
      disableCloseOnSelect
      options={options}
      getOptionLabel={(option) => option.name}
      value={props.value}
      onChange={(_event, newValue) => {
        props.onChange(newValue);
      }}
      getOptionSelected={(option, value) => {
        return option.name === value.name;
      }}
      renderOption={(option, { selected }) => (
        <React.Fragment>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option.name}
        </React.Fragment>
      )}
      style={{ width: props.width }}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="outlined"
          label={props.label}
          placeholder={props.placeholder}
        />
      )}
    />
  );
};
