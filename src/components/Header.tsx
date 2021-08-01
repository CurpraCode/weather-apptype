import {FC} from "react";
import {Box, Flex, Text, Button} from "@chakra-ui/react";
import {Link} from "react-router-dom";

const Header: FC = ()=>{
    return(
<Box maxWidth="990px" m="0 auto"> 
    <Flex  justifyContent="space-between" alignItems="center" mt="3rem">
    <Link to="/">
        <Text fontSize="1.8rem" fontWeight="bold">W <Text as="span" color="#f2f">T</Text> <Text as="span" color="#55a7ff">A</Text> </Text>
        </Link>
        <Link to="/weather">
        <Button bg="#f3f" color="#fff"  padding="1.2rem;" boxShadow="0px 5px 5px rgb(75 93 104 / 10%);" borderRadius="2.5rem" _hover={{ bg: "#f3f" }}>Discover</Button>
        </Link>
    </Flex>
</Box>
    )
}

export default Header;