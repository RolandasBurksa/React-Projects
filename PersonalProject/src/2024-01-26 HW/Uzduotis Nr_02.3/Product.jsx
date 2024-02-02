export const Product = (props) => {
  const { title, description, price, quantity, picture } = props;

  return (
    <div style={{ marginBottom: '50px' }}>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{price}</p>
      <image alt="My picture" src={picture} />
      <p>{quantity}</p>
    </div>
  );
};
