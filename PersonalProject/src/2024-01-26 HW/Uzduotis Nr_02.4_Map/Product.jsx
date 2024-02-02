/* eslint-disable jsx-a11y/alt-text */
export const Product = (props) => {
  const { image, title, description, price, quantity, category } = props;

  return (
    <div>
      <img src={image} />
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{price}</p>
      <p>{quantity}</p>
      <p>{category}</p>
    </div>
  );
};
