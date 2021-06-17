// _rfc
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LIST_VIEW_ICONS = ["list", "border-all"];
const DATE_FILTERING_ICONS = ["sort-numeric-down", "sort-numeric-up"];

export default function FilteringMenu(props) {
  const { filter, onChange } = props;
  const {
    view: { list },
  } = filter;

  return (
    <div className='filtering-menu mb-2'>
      <FontAwesomeIcon
        onClick={() => {
          // alert("clicking!");
          // onChange();
          // +true = 1, +false = 0
          onChange("view", { list: +!filter.view.list });
        }}
        icon={LIST_VIEW_ICONS[filter.view.list]}
        size='lg' // 2x
        // className='clickable hoverable'
        className='clickable hoverable mr-3'
      >
        {list ? "Grid View" : "List View"} - List Filter: {filter.view.list}
      </FontAwesomeIcon>
      <FontAwesomeIcon
        className='clickable hoverable'
        size='lg' // 2x
        icon={DATE_FILTERING_ICONS[filter.date.asc]}
        onClick={() => onChange("date", { asc: +!filter.date.asc })}
      />
    </div>
  );
}
