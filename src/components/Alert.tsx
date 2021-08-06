import React, {FC} from 'react';
import {
    Box,
    CloseButton,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react"

interface AlertProps{
 message:string;
 onClose: () => void

}

 const Alerted: FC<AlertProps> = ({message, onClose}) => { 
    return (
   
     <Alert status="warning" maxWidth="400px" m="0 auto" variant="subtle"
  flexDirection="column"
  alignItems="center"
  justifyContent="center"
  textAlign="center"
  borderRadius="1rem"
  mt="4rem"
>
  <AlertIcon />
  <Box flex="1">
    <AlertTitle textAlign="center">! Info</AlertTitle>
    <AlertDescription display="block" textAlign="center">
     {message}
    </AlertDescription>
  </Box>
  <CloseButton position="absolute" right="8px" top="8px" onClick={onClose} />
</Alert>
    )
}

export default Alerted;