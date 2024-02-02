import { Product } from './Product';

const cards = [
  {
    id: 1,
    image: 'rb.gy/aj9c75',
    title: 'Black shorts',
    description: 'Knee length shorts',
    price: 55,
    quantity: 4,
    category: 'Men',
  },
  {
    id: 2,
    image: 'https://tinyurl.com/p3zkpz69',
    title: 'White T-shirt',
    description: 'White',
    price: 22,
    quantity: 14,
    category: 'Woman',
  },
];

export const ProductList = () => {
  return (
    <div>
      {cards.map((card) => (
        <Product
          key={card.id}
          image={card.image}
          title={card.title}
          description={card.description}
          price={card.price}
          quantity={card.quantity}
          category={card.category}
        />
      ))}
    </div>
  );
};
