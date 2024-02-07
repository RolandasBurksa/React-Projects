export const Product = ({ thumbnail, title, description, price, stock, id }) => {
  return (
    <>
      <div style={{ marginBottom: '50px' }}>
        <img src={thumbnail} alt="some text" />
        <h2>{title}</h2>
        <p>{id}</p>
        <p>{description}</p>
        <p>{price}</p>
        <p>{stock}</p>
      </div>
      Product
    </>
  );
};
