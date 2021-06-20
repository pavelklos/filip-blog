// _rafc
import Toggle from "react-toggle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ThemeToggle = ({ onChange, checked }) => {
  return (
    <label className='toggle'>
      <Toggle
        className='day-night-toggle'
        icons={{
          checked: <FontAwesomeIcon inverse icon='sun' />,
          unchecked: <FontAwesomeIcon inverse icon='moon' />,
        }}
        onChange={onChange}
        checked={checked}
      />
    </label>
  );
};

export default ThemeToggle;
