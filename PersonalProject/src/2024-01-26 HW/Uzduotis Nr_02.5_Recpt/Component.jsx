export const Component = ({ receptas }) => {
  const { name, ingredients, id } = receptas;

  return (
    <>
      <h2>{name}</h2>
      <ul>
        {ingredients.map((one) => (
          <li key={id}>{one}</li>
        ))}
      </ul>
    </>
  );
};
