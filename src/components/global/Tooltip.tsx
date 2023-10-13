import { Tooltip as ChakraTooltip, TooltipProps } from '@chakra-ui/react';

function Tooltip({ children, ...props }: TooltipProps) {
  return (
    <ChakraTooltip
      placement="top"
      bg="white"
      color="blue.01"
      boxShadow="md"
      borderRadius="4px"
      px="0.75rem"
      py="0.25rem"
      fontFamily="label"
      fontWeight="normal"
      borderWidth="1px"
      borderColor="grey.03"
      textAlign="center"
      {...props}
    >
      {children}
    </ChakraTooltip>
  );
}

export default Tooltip;
