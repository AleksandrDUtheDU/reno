import { Route, Routes } from 'react-router-dom';

import Layout from '../widgets/Layout';
import Main from '../pages/MainPage';
import SpecialOffers from '../pages/SpecialOffers';
import Services from '../pages/Services'
import ServicesOnePage from '../pages/ServicesOnePage';
import Registration from '../pages/Registration'
import Photogallery from '../pages/Photogallery'
import Contacts from '../pages/Contacts'
import CalcServices from '../pages/CalcServices';
import ListModel from '../pages/ListModel';
import RepairParts from '../pages/RepairParts';
import Warranty from '../pages/Warranty';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="akcii" element={<SpecialOffers />} />
        <Route path="uslugi" element={<Services />} >
          <Route path=":list" element={<ServicesOnePage />} />
        </Route>
        <Route path="zapis_na_servis" element={<Registration />} />
        <Route path="fotogalereya" element={<Photogallery />} />
        <Route path="kontakty" element={<Contacts />} />
        <Route path="calc_services" element={<CalcServices />} />
        <Route path="list-model" element={<ListModel />} />
        <Route path="repair-parts" element={<RepairParts />} />
        <Route path="warranty" element={<Warranty />} />
        {/* <Route path="services" element={<ServicesLayout />}>
          <Route index element={<ServicesTabs />} />
          <Route path=":list" element={<ServicesTabsPage />} />
          <Route path=":list/:link" element={<ServicesTabsPageDescr />} />
        </Route> */}
        {/* <Route path="case" element={<CaseCarouselPage />} />
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
    </Routes >
  );
}

export default App;
