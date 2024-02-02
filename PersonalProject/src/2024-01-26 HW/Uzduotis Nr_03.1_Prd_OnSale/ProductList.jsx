import { ProdOnSaleItem } from './ProdOnSaleItem';

export const ProductListOnSale = () => {
  const itemsToBuy = [
    {
      id: 1,
      productName: 'Pienas',
      image: 'https://cdn.barbora.lt/products/6dc50b1e-4336-415c-9fce-f4d72a15bf86_m.png',
      text: 'DVARO pienas, 2,5 % rieb., 2l',
      productQuantity: 0,
      discount: 1,
    },
    {
      id: 2,
      productName: 'Duona',
      image: 'https://cdn.barbora.lt/products/ad95ad65-babe-4dd2-8871-6f256b242283_m.png',
      text: 'ŠVENTINĖ VERBŪNŲ plikyta duona, 0.8 kg',
      productQuantity: 10,
      discount: 1,
    },
    {
      id: 3,
      productName: 'Sviestas',
      image: 'https://cdn.barbora.lt/products/fa932015-2954-4278-9750-eb1fbd430598_m.png',
      text: 'ROKIŠKIO sviestas, 82% rieb., 200 g',
      productQuantity: 10,
      discount: 0,
    },
    {
      id: 4,
      productName: 'Mėsa',
      image: 'https://cdn.barbora.lt/products/8cb535e3-07d5-4ca5-99a7-6aa93c7438d4_m.png',
      text: 'Sausai brandintos jautienos maltiniai FEEL THE BEEF, 250 g',
      productQuantity: 8,
      discount: 0,
    },
    {
      id: 5,
      productName: 'Obuoliai',
      image: 'https://cdn.barbora.lt/products/f7c87e1c-8aca-4598-9725-72fa901b063c_m.png',
      text: 'Obuoliai ROYAL GALA (75-80 mm), 1 kg',
      productQuantity: 6,
      discount: 0,
    },
    {
      id: 6,
      productName: 'Kriaušės',
      image: 'https://cdn.barbora.lt/products/34f5c4d1-4936-43c7-b7dd-b2bd9f796f7f_m.png',
      text: 'Kriaušės CONFERENCE didžiosios, nuo 70 mm, 1 kg',
      productQuantity: 3,
      discount: 1,
    },
  ];

  return (
    // <div className="d-flex justify-content-around">
    <div className="d-flex align-content-around">
      {itemsToBuy.map((item) => (
        <ProdOnSaleItem
          key={item.id}
          productName={item.productName}
          productQuantity={item.productQuantity}
          discount={item.discount}
          productImage={item.image}
          productText={item.text}
        />
      ))}
    </div>
  );
};
