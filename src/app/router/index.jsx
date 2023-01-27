import { Route, Routes } from 'react-router-dom';

import Layout from '../../pages/Layout';
import Main from '../../pages/MainPage';
import SpecialOffers from '../../pages/SpecialOffers';
import Services from '../../pages/Services'
import ServicesOnePage from '../../pages/ServicesOnePage';
import Registration from '../../pages/Registration'
import Photogallery from '../../pages/Photogallery'
import Contacts from '../../pages/Contacts'
import CalcServices from '../../pages/CalcServices';
import ListModel from '../../pages/ListModel';
import RepairParts from '../../pages/RepairParts';
import Warranty from '../../pages/Warranty';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="akcii" element={<SpecialOffers />} />
        <Route path="uslugi" element={<Services />} >
          <Route path=":list" element={<ServicesOnePage />} />
        </Route>
        <Route path="zapis" element={<Registration />} />
        <Route path="fotogalereya" element={<Photogallery />} />
        <Route path="kontakty" element={<Contacts />} />
        <Route path="calc_services" element={<CalcServices />} />
        <Route path="list-model" element={<ListModel />} />
        <Route path="repair-parts" element={<RepairParts />} />
        <Route path="warranty" element={<Warranty />} />
      </Route>
    </Routes >
  );
}

export default Router;
