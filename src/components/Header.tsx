import {FC} from "react";
import {Box, Flex, Text, Button} from "@chakra-ui/react";
import {Link} from "react-router-dom";

const Header: FC = ()=>{
    return(
<Box maxWidth="990px" m="0 auto" pr={{base:"1rem", md:"0rem"}} pl={{base:"1rem", md:"0rem"}}> 
    <Flex  justifyContent="space-between" alignItems="center" mt="1.5rem">
    <Link to="/">
        <Text fontSize="1.8rem" textShadow= "-3px 1px 2px rgba(0, 0, 0, 0.53)" fontWeight="bold" color="#fff">W <Text as="span" color="#f2f">T</Text> <Text as="span" color="#55a7ff">A</Text> </Text>
        </Link>
        <Link to="/weather">
        <Button bg="#f3f" color="#fff"  padding="1.2rem" boxShadow="0 1rem 3rem -1rem #484848" borderRadius="3rem" height="45px" width="130px" _hover={{ bg: "#f3f" }}>Discover</Button>
        </Link>
    </Flex>
</Box>
    )
}

export default Header;