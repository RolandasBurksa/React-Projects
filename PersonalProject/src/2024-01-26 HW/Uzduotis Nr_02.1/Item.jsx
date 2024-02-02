const Item = ({ title, isSubmittable }) => {
  return (
    <>
      <input type="checkbox" checked={isSubmittable} />
      <p>{title}</p>
      <p></p>
      <input type="checkbox" />
    </>
  );
};
export default Item;
