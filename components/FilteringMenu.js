// _rfc

export default function FilteringMenu(props) {
  const { onChange } = props;

  return (
    <div className='filtering-menu mb-2'>
      <div
        onClick={() => {
          alert("clicking!");
          onChange();
        }}
      >
        Change View
      </div>
    </div>
  );
}
