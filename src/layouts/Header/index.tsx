'use client';
import { Box, Flex, Image } from '@chakra-ui/react';
import s from './style.module.scss';

type Props = {};

export const HEADER_VIEW_ID = 'HEADER_VIEW_ID';

const Header = (props: Props) => {
  return (
    <Box id={HEADER_VIEW_ID} className={s.container}>
      <Flex
        align={'center'}
        justify={'flex-start'}
        p={'20px'}
        _hover={{
          cursor: 'pointer',
          opacity: 0.8,
        }}
      >
        <Image src={`/icons/bvm_logo.png`} height={'45px'} width={'auto'} />
      </Flex>
    </Box>
  );
};

export default Header;
