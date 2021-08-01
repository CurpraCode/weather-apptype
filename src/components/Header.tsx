import {FC} from "react";
import {Box, Flex, Text, Button} from "@chakra-ui/react";
import {Link} from "react-router-dom";

const Header: FC = ()=>{
    return(
<Box maxWidth="990px" m="0 auto"> 
    <Flex  justifyContent="space-between" alignItems="center">
        <Text fontSize="1.8rem" fontWeight="bold">W <Text as="span" color="#f2f">T</Text> <Text as="span" color="#55a7ff">A</Text> </Text>
          
        <Link to="/weather">
        <Button bg="#f3f" color="#fff" borderRadius="2.5rem" mt="3rem">Discover</Button>
        </Link>
    </Flex>
</Box>
    )
}

export default Header;