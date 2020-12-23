// import Paper from '@material-ui/core/Paper'
import FormControl from '@material-ui/core/FormControl'
import FormGroup from '@material-ui/core/FormGroup'
// import FormLabel from '@material-ui/core/FormLabel'
// import RadioGroup from '@material-ui/core/RadioGroup'
// import Radio from '@material-ui/core/Radio'
import MuiCheckbox, { CheckboxProps as MuiCheckboxProps } from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import InputLabel from '@material-ui/core/InputLabel'
import MuiSelect, { SelectProps as MuiSelectProps } from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'

interface OptionProps {
  label: string
  value: string
}

interface SelectProps {
  label?: string
  options: OptionProps[]
  [propName: string]: any
}

export const Select = ({ label, options, ...others }: SelectProps) => {
  return (
    <FormControl fullWidth>
      {label && <InputLabel>{label}</InputLabel>}
      <MuiSelect {...others}>
        {options.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </MuiSelect>
    </FormControl>
  )
}

interface CheckboxProps {
  label?: string
  name?: string
  checked?: boolean
  [propName: string]: any
}

export const Checkbox = ({ label, name, checked, ...others }: CheckboxProps) => {
  return (
    <FormGroup row>
      <FormControlLabel
        control={<MuiCheckbox checked={checked} name={name} {...others} />}
        label={label}
      />
    </FormGroup>
  )
}
