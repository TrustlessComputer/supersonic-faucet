'use client';

import { Flex, Text, Button, Input, Link } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

import s from './styles.module.scss';
import { ethers } from 'ethers';
import { useMemo, useState } from 'react';
import { getErrorMessage } from '@/utils/error';
import toast from 'react-hot-toast';
import API from '@/services/Faucet';
import ReCaptcha from './FaucetComp';

export const validateEVMAddress = (_address: string): boolean => {
  return ethers.isAddress(_address);
};

const HomePage = () => {
  const [isLoading, setLoading] = useState(false);
  const [recieverAddress, setRecieverAddress] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined,
  );

  const [amount, setAmount] = useState<number | null>(null);

  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  const [txHash, setTxHash] = useState<string | undefined>(undefined);

  const isDisableBtn = useMemo(() => {
    return (
      !!errorMessage ||
      !recieverAddress ||
      recieverAddress.length < 1 ||
      !captchaToken ||
      captchaToken.length < 1
    );
  }, [errorMessage, recieverAddress, captchaToken]);

  const handleChange = (event: any) => {
    const text = event.target.value;
    setRecieverAddress(text);

    if (!text || text.length < 1) {
      setErrorMessage('Address is required!');
    } else {
      if (!validateEVMAddress(text)) {
        setErrorMessage('Invalid Address');
      } else {
        setErrorMessage(undefined);
      }
    }
  };

  const faucetHandler = async () => {
    try {
      setLoading(true);
      const result = await API.getFaucet({
        recipient_address: recieverAddress,
      });

      if (result) {
        if (result.error) {
          toast.error(result.tx_hash);
          setErrorMessage(result.tx_hash);
          setAmount(null);
        } else {
          toast.success(`Submitted successfully.`);
          setAmount(result.amount);
          setTxHash(result.tx_hash);
          setErrorMessage(undefined);
        }
      }
    } catch (error: any) {
      const { message } = getErrorMessage(error);
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  const handleCaptchaVerify = (token: string) => {
    setCaptchaToken(token);
  };
  const handleOnExpired = () => {
    setCaptchaToken(null);
  };

  return (
    <Flex
      className={s.container}
      flexDir={'column'}
      bgColor={'black'}
      align={'center'}
      textAlign={'center'}
      p={['10px', '20px', '30px']}
    >
      <Flex maxW={'1400px'}>
        <Flex
          flexDir={'column'}
          maxW={'700px'}
          justify={'center'}
          mt={'20px'}
          w={['auto', '600px']}
          p={'5px'}
        >
          <Text fontSize={['24px', '30px', '35px', '40px']} fontWeight={500}>
            <Text
              as={'span'}
              fontSize={['24px', '30px', '35px', '40px']}
              fontWeight={500}
              color={'#4043fd'}
            >
              {`$BVM `}
            </Text>
            {`Testnet Faucet`}
          </Text>
          <Text
            fontSize={['14px', '15px', '16px', '18px']}
            fontWeight={400}
            color={'#828282'}
          >
            {`To get`}
            <Text
              as={'span'}
              fontSize={['14px', '15px', '16px', '18px']}
              fontWeight={400}
              color={'#4043fd'}
            >
              {` $BVM `}
            </Text>

            {`testnet, simply enter your wallet address.`}
          </Text>

          <Flex
            mt="40px"
            gap={'20px'}
            flexDir={'column'}
            bgColor={'#24272F'}
            borderWidth={'1px'}
            borderRadius="16px"
            p={['10px', '20px', '32px']}
            align={'flex-start'}
          >
            <Text
              fontSize={['14px', '15px', '16px']}
              fontWeight={400}
              color={'#B6B6B6'}
            >
              {`Paste your address here`}
            </Text>

            <Input
              width="100%"
              h={['45px', '60px']}
              fontSize={['15px', '18px', '20px']}
              isInvalid={false}
              value={recieverAddress}
              placeholder="Enter your address"
              _placeholder={{
                color: '#8c8c8c',
                fontSize: ['13px', '14px', '15px'],
              }}
              borderColor={'#0E0E0E'}
              bgColor={'#0E0E0E'}
              color={'#fff'}
              onChange={handleChange}
            />

            {errorMessage && (
              <Text
                fontSize={'15px'}
                fontWeight={500}
                color={'#fc0000'}
                alignSelf={'flex-start'}
              >
                {`${errorMessage}`}
              </Text>
            )}
            <ReCaptcha
              onVerify={handleCaptchaVerify}
              onExpired={handleOnExpired}
            />
            <Button
              w={'100%'}
              h={['40px', '50px']}
              fontSize={['15px', '16px', '18px']}
              color={'#fff'}
              bgColor={'#1D9BF0'}
              isLoading={isLoading}
              isDisabled={isDisableBtn}
              _hover={{
                cursor: 'pointer',
                opacity: 0.8,
              }}
              _disabled={{
                cursor: '',
                opacity: 0.5,
              }}
              onClick={faucetHandler}
            >
              Submit
            </Button>
          </Flex>

          {txHash && (
            <Flex
              mt={'20px'}
              w="100%"
              justify={'flex-start'}
              flexDir={'column'}
              textAlign={'left'}
            >
              <Text
                fontSize={['15px', '16px', '18px', '20px']}
                fontWeight={600}
              >
                {`Transaction:`}
              </Text>

              <Flex
                flexDir={'row'}
                align={'center'}
                gap={'5px'}
                onClick={() => {
                  window.open(
                    `https://explorer.testnet.supersonic2.bvm.network/tx/${txHash}`,
                    '_blank',
                  );
                }}
              >
                <Link
                  fontSize={['14px', '14px', '15px', '16px']}
                  fontWeight={500}
                  target="_blank"
                  color={'#fff'}
                  _hover={{
                    opacity: 0.8,
                    cursor: 'pointer',
                    textDecorationLine: 'underline',
                    color: '#4043fd',
                  }}
                >
                  {`${txHash}`}
                </Link>
                <ExternalLinkIcon
                  h={'20px'}
                  w={'auto'}
                  _hover={{
                    opacity: 0.8,
                    cursor: 'pointer',
                  }}
                />
              </Flex>

              <Text
                fontSize={['14px', '14px', '15px', '16px']}
                fontWeight={500}
              >
                {`Amount: ${amount} BVM`}
              </Text>
            </Flex>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default HomePage;
