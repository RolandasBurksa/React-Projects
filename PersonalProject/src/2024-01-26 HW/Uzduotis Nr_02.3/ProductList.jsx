import { Product } from './Product';

export const ProductList = () => {
  return (
    <div>
      <Product title="Pic 1" description="Desc 01" price quantity={2} picture />
      <Product title="Pic 2" description="Desc 02" price={12} quantity picture="./img/WhiteT.jpeg" />
      <Product title="Pic 3" description="Desc 03" price quantity={4} picture />
      <Product title="Pic 4" description="Desc 04" price={15} quantity picture />
      <Product title="Pic 5" description="Desc 05" price quantity={6} picture />
      <Product title="Pic 6" description="Desc 06" price={18} quantity picture />
    </div>
  );
};
