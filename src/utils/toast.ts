import { UseToastOptions } from '@chakra-ui/react';

const toastOptions = ({
  status = 'success',
  title,
  description,
  id,
  duration = 10000,
}: {
  title?: string;
  description: string;
  status?: UseToastOptions['status'];
  id?: string;
  duration?: number;
}) => {
  return {
    id,
    status,
    title,
    description,
    duration,
    isClosable: true,
    position: 'bottom-right',
    containerStyle: {
      fontFamily: 'Poppins',
      fontSize: 'sm',
      marginBottom: '2rem',
      marginTop: '-1rem', // prevent next stop from being to far up
      marginRight: '2rem',
    },
  } as UseToastOptions;
};

export { toastOptions };
