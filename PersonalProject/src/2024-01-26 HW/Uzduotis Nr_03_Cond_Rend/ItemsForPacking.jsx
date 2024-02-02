import { ItemToPack } from './ItemToPack';

export const ItemsForPacking = () => {
  const items = [
    {
      name: 'Batai',
      isPacked: true,
      importance: 4,
    },
    {
      name: 'Akiniai',
      isPacked: true,
      importance: 6,
    },
    {
      name: 'Sketis',
      isPacked: false,
      importance: 10,
    },
  ];

  return (
    <>
      {items.map((item) => (
        <ItemToPack key={item.isPacked} name={item.name} ispacked={item.isPacked} importance={item.importance} />
      ))}
    </>
  );
};
