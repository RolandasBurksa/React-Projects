import { ListItem } from './ListItem';

export const ProductList = () => {
  const itemsToBuy = [
    {
      productName: 'Pienas',
      isBought: true,
    },
    {
      productName: 'Batonas',
      isBought: false,
    },
    {
      productName: 'Kiausiniai',
      isBought: true,
    },
  ];

  return (
    <div>
      <ul>
        {itemsToBuy.map((item) => (
          <ListItem key={item.productName} productName={item.productName} isBought={item.isBought} />
        ))}
      </ul>
    </div>
  );
};
