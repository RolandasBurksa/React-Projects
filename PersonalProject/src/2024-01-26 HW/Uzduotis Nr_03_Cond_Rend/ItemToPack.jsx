export const ItemToPack = ({ name, ispacked, importance }) => {
  return (
    <>
      {/* <li>{ispacked ? name + ' ✔' : name + ' ❌'}</li> */}

      <li>
        {name} {importance > 0 && <b>(Svarbumas: {importance})</b>}
        {ispacked ? ' ✔' : ' ❌'}
      </li>
    </>
  );
};
