import { Flex } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import 'simplebar-react/dist/simplebar.min.css';

import Header from '../components/global/Header';

function PageWithHeader() {
  return (
    <Flex direction="column">
      <Header />
      <Outlet />
    </Flex>
  );
}

export default PageWithHeader;
