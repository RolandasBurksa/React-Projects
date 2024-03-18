// import { Contacts } from './2024-01-26 HW/Uzduotis Nr_03.1_Prd_OnSale/Contacts';
// import { Footer } from './2024-01-26 HW/Uzduotis Nr_03.1_Prd_OnSale/Footer';
// import BasicNavBarExample from './2024-01-26 HW/Uzduotis Nr_03.1_Prd_OnSale/NavBar';
// import CardPlaceholderExample from './2024-01-26 HW/Uzduotis Nr_03.1_Prd_OnSale/Placeholder';
// import { ProductListOnSale } from './2024-01-26 HW/Uzduotis Nr_03.1_Prd_OnSale/ProductList';
// import { ProductListDataFetching } from './2024-02-05 HW/Uzduotis Nr_01_fetching/ProductListDataFetching';
// import { ProductListDataFetchingOne } from './2024-02-05 HW/Uzduotis Nr_01_fetching/ProductListDataFetchingOne';
// import { HomePage } from './2024-02-15 Test/HomePage';
// import { NavBar } from './2024-02-15 Test/NavBar';
import './App.css';
// import { Route, Routes } from 'react-router-dom';
// import { InputForm } from './2024-02-15 Test/InputForm';
// import { DonorInfo } from './2024-02-15 Test/DonorInfo';

// import { NavBar } from './2024-02-19 React Exam/NavBar';
// import { FirstPage } from './2024-02-19 React Exam/FirstPage';
// import { SecondPage } from './2024-02-19 React Exam/SecondPage';
// import { FeedbackPage } from './2024-02-19 React Exam/FeedbackPage';
// import { Footer } from './2024-02-19 React Exam/Footer';
// import { StartPage } from './2024-02-19 React Exam/StartPage';
import ListEmployeeComponent from './2024-03-18 Full-Stack/components/ListEmployeeComponent';
import HeaderComponent from './2024-03-18 Full-Stack/components/HeaderComponent';
import FooterComponent from './2024-03-18 Full-Stack/components/FooterComponent';

function App() {
  return (
    <>
      <div>
        {/* <div style={{ backgroundColor: 'cornsilk' }}> */}
        {/* <BasicNavBarExample />
      <ProductListOnSale />
      <Footer />
      <Contacts /> */}
        {/* <CardPlaceholderExample /> */}
        {/* <NavBar /> */}
        {/* <br></br> */}
        {/* <Routes> */}
        {/* <Route path="/" element={<ProductListDataFetching />} /> */}
        {/* <Route path="/" element={<ProductListDataFetchingOne />} /> */}

        {/* <Route path="/" element={<HomePage />} /> */}
        {/* <Route path="/inputform/" element={<InputForm />} /> */}
        {/* <Route path="/donorinfo/:id" element={<DonorInfo />} /> */}

        {/* <Route path="/donorinfo/:id" element={<DonorInfo />} /> */}

        {/* <Route path="/" element={<StartPage />} /> */}
        {/* <Route path="/firstpage" element={<FirstPage />} /> */}
        {/* <Route path="/secondpage" element={<SecondPage />} /> */}
        {/* <Route path="/feedbackpage" element={<FeedbackPage />} /> */}
        {/* <Route path="/footer" element={<Footer />} /> */}
        {/* </Routes> */}
        {/* <Footer /> */}

        <HeaderComponent />
        <ListEmployeeComponent />
        <FooterComponent />
      </div>
    </>
  );
}
export default App;
