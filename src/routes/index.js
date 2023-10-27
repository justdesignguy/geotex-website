import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ChakraProvider, Image, Box } from '@chakra-ui/react';
import { useState } from 'react';

import Root from '../components/modules';
import NavBar from '../components/CustomeLayout/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import NavBar2 from 'components/CustomeLayout/NavBar/Navbar2';
import MobileFooter from 'components/Footer/MobileFooter';
import logo from '../assets/logo.png';
import ScrollTop from 'components/scrollTop/ScrollTop';

const Routes = () => {
  const [loader, setLoader] = useState(true);

  setTimeout(() => {
    setLoader(false);
  }, 3000);

  return (
    <>
      {loader ? (
        <Box
          ml='auto'
          mr='auto'
          justifyContent='center'
          alignItems='center'
          d='flex'
          height='95vh'
        >
          <Image src={logo} className='loader-scaler' />
        </Box>
      ) : (
        <ChakraProvider>
          {/* <div className="texture"> */}
          <ScrollTop />
          <BrowserRouter>
            <div className='home-texture'>
              {window.innerWidth > 995 ? <NavBar /> : <NavBar2 />}
            </div>
            <Switch>
              <Route exact path='/' component={Root} />
            </Switch>
          </BrowserRouter>

          {window.innerWidth > 995 ? <Footer /> : <MobileFooter />}
          {/* </div> */}
        </ChakraProvider>
      )}
    </>
  );
};

export default Routes;
