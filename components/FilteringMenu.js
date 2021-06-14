// _rfc

export default function FilteringMenu(props) {
  const { filter, onChange } = props;
  const {
    view: { list },
  } = filter;

  return (
    <div className='filtering-menu mb-2'>
      <div
        onClick={() => {
          // alert("clicking!");
          // onChange();
          // +true = 1, +false = 0
          onChange("view", { list: +!filter.view.list });
        }}
      >
        {list ? "Grid View" : "List View"} - List Filter: {filter.view.list}
      </div>
    </div>
  );
}
