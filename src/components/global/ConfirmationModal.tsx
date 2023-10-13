import {
  Button,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spinner,
} from '@chakra-ui/react';
import { useState } from 'react';

interface Props {
  title?: string;
  message: string;
  secondaryMessage?: string;
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  primaryButtonTitle?: string;
  hasCancelButton?: boolean;
  confirmationInput?: string;
  isLoading?: boolean;
  textAlign?: 'center' | 'left' | 'right';
}

function ConfirmationModal({
  title,
  message,
  secondaryMessage,
  isOpen,
  onClose,
  onConfirm,
  primaryButtonTitle = 'confirm',
  hasCancelButton = true,
  confirmationInput,
  isLoading,
  textAlign = 'center',
}: Props) {
  const [isDoneClosing, setIsDoneClosing] = useState(false);
  const [input, setInput] = useState('');

  const handleClose = () => {
    setIsDoneClosing(true);

    setTimeout(() => {
      onClose();
      setIsDoneClosing(false);
    }, 250);
  };

  return (
    <Modal
      isOpen={isOpen && !isDoneClosing}
      onClose={()=>{}}
      onOverlayClick={handleClose}
      isCentered
      size="lg"
    >
      <ModalOverlay />
      <ModalContent p="1.5rem">
        {title && (
          <ModalHeader p="0" mt="-0.5rem" mb="1rem">
            <Heading fontSize="xl">{title}</Heading>
          </ModalHeader>
        )}
        <ModalCloseButton onClick={handleClose} _focus={{ outline: 'none' }} />
        <ModalBody
          display="flex"
          flexDirection="column"
          p="0"
          mt={title ? 0 : '1rem'}
        >
          {message.split('<br />').map((line, index) => (
            <Heading
              key={+index}
              fontSize="sm"
              fontWeight="normal"
              textAlign={textAlign}
              mt={index !== 0 ? '1rem' : 0}
            >
              {line}
            </Heading>
          ))}
          {typeof confirmationInput === 'string' && (
            <Input
              h="2.5rem"
              w="10rem"
              px="0.5rem"
              mt="1.5rem"
              alignSelf="center"
              textAlign="center"
              placeholder={`Type ${confirmationInput}`}
              fontSize="sm"
              borderWidth="1px"
              borderRadius="md"
              borderColor="grey.400"
              onChange={(e) => setInput(e.target.value)}
            />
          )}
          {secondaryMessage?.split('<br />').map((line, index) => (
            <Heading
              key={+index}
              fontSize="sm"
              fontWeight="normal"
              textAlign={textAlign}
              mt="1rem"
            >
              {line}
            </Heading>
          ))}
        </ModalBody>
        <ModalFooter mt="1.5rem" p="0" display="flex" justifyContent="center">
          {hasCancelButton && (
            <Button h="2rem" variant="outline" mr={3} onClick={handleClose}>
              cancel
            </Button>
          )}
          <Button
            h="2rem"
            minW="5rem"
            onClick={onConfirm}
            disabled={
              typeof confirmationInput === 'string' &&
              confirmationInput.toUpperCase() !== input.toUpperCase()
            }
          >
            {isLoading ? (
              <Spinner size="sm" speed="0.8s" />
            ) : (
              primaryButtonTitle
            )}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default ConfirmationModal;
