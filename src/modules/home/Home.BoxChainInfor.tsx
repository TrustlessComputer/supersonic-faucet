'use client';

import { Flex, Link, Text } from '@chakra-ui/react';

type RowInfor = {
  title: string;
  content?: string;
  isLink?: boolean;
};

const BoxChainInfor = () => {
  const renderRow = (props: RowInfor) => {
    const { title, content, isLink } = props;
    return (
      <Flex flexDir={'row'} align={'center'} justify={'space-between'}>
        <Text fontSize={'16px'} fontWeight={500} color={'#fff'}>
          {title}
        </Text>
        {isLink ? (
          <Link fontSize={'16px'} fontWeight={500} color={'#fff'}>
            {content}
          </Link>
        ) : (
          <Text fontSize={'16px'} fontWeight={500} color={'#fff'}>
            {content}
          </Text>
        )}
      </Flex>
    );
  };

  return (
    <Flex
      flexDir={'column'}
      bgColor={'#344343'}
      borderRadius={'12px'}
      p={'20px'}
      minW={'500px'}
      gap="10px"
    >
      {renderRow({
        title: 'Chain Name:',
        content: 'Sueprsonic Testnet',
        isLink: false,
      })}
      {renderRow({
        title: 'Chain ID:',
        content: '22219',
        isLink: false,
      })}
      {renderRow({
        title: 'RPC:',
        content: 'https://rpc.testnet.supersonic2.bvm.network',
        isLink: true,
      })}
      {renderRow({
        title: 'Explorer:',
        content: 'https://explorer.testnet.supersonic2.bvm.network',
        isLink: true,
      })}
    </Flex>
  );
};

export default BoxChainInfor;
