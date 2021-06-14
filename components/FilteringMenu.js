// _rfc
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LIST_VIEW_ICONS = ["list", "border-all"];

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
        className='clickable hoverable'
      >
        {list ? "Grid View" : "List View"} - List Filter: {filter.view.list}
      </FontAwesomeIcon>
    </div>
  );
}
