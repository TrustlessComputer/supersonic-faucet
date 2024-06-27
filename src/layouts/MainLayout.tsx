import { Flex } from '@chakra-ui/react';
import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react';
import Footer from './Footer';
import Header from './Header';
import s from './styles.module.scss';

type IMainProps = {
  hideHeader?: boolean;
  hideFooter?: boolean;
  children?: React.ReactNode;
};

const MainLayout = ({
  hideHeader = false,
  hideFooter = false,
  children,
}: IMainProps) => {
  const pathName = usePathname();
  useEffect(() => {}, [pathName]);

  return (
    <Flex className={s.container}>
      {!hideHeader && <Header />}
      {children}
      {/* {!hideFooter && <Footer />} */}
    </Flex>
  );
};

export default MainLayout;
