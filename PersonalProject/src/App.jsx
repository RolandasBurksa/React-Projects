import { Contacts } from './2024-01-26 HW/Uzduotis Nr_03.1_Prd_OnSale/Contacts';
import { Footer } from './2024-01-26 HW/Uzduotis Nr_03.1_Prd_OnSale/Footer';
import BasicNavBarExample from './2024-01-26 HW/Uzduotis Nr_03.1_Prd_OnSale/NavBar';
// import CardPlaceholderExample from './2024-01-26 HW/Uzduotis Nr_03.1_Prd_OnSale/Placeholder';
import { ProductListOnSale } from './2024-01-26 HW/Uzduotis Nr_03.1_Prd_OnSale/ProductList';
import { ProductListDataFetching } from './2024-02-05 HW/Uzduotis Nr_01_fetching/ProductListDataFetching';
import { ProductListDataFetchingOne } from './2024-02-05 HW/Uzduotis Nr_01_fetching/ProductListDataFetchingOne';
import './App.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      {/* <BasicNavBarExample />
      <ProductListOnSale />
      <Footer />
      <Contacts /> */}
      {/* <CardPlaceholderExample /> */}
      <Routes>
        {/* <Route path="/" element={<ProductListDataFetching />} /> */}
        <Route path="/" element={<ProductListDataFetchingOne />} />
      </Routes>
    </>
  );
}

export default App;
