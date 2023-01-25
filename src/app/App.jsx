import { Route, Routes } from 'react-router-dom';

import Layout from '../widgets/Layout';
import Main from '../pages/MainPage';
import SpecialOffers from '../pages/SpecialOffers';
import Services from '../pages/Services'
import Registration from '../pages/Registration'
import Photogallery from '../pages/Photogallery'
import Contacts from '../pages/Contacts'
// import ServicesTabs from '../pages/servicesPage/servicesTabs';
// import ServicesTabsPage from '../pages/servicesPage/servicesTabsPage';
// import ServicesTabsPageDescr from '../pages/servicesPage/servicesTabsPageDescr';
// import CaseCarouselPage from '../pages/caseСarouselPage';
// import TitleWrapp from '../widgets/calc/TitleWrapp';
// import Step1 from '../widgets/calc/Step1'
// import Contact from '../pages/contactFormPage'
// import Politics from '../pages/politicsPage'
// import ServicesLayout from '../pages/servicesPage/servicesLoyout';
// import Step2 from '../widgets/calc/Step2';
// import Step3 from '../widgets/calc/Step3';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="special_offers" element={<SpecialOffers />} />
        <Route path="services" element={<Services />} />
        <Route path="registration" element={<Registration />} />
        <Route path="photogallery" element={<Photogallery />} />
        <Route path="contacts" element={<Contacts />} />
        {/* <Route path="services" element={<ServicesLayout />}>
          <Route index element={<ServicesTabs />} />
          <Route path=":list" element={<ServicesTabsPage />} />
          <Route path=":list/:link" element={<ServicesTabsPageDescr />} />
        </Route>
        <Route path="case" element={<CaseCarouselPage />} />
        <Route path="calc" element={<TitleWrapp />}>
          <Route index element={<Step1 />} />
          <Route path="step1" element={<Step1 />} />
          <Route path="step2" element={<Step2 />} />
          <Route path="step3" element={<Step3 />} />
          <Route path="reult" element={<div>reult</div>} />
        </Route>
        <Route path="contacts" element={<Contact />} />
        <Route path="privacy" element={<Politics />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
