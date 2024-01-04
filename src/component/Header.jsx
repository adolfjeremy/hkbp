import { Box, Link } from "@chakra-ui/react";
import { FaUser } from "react-icons/fa";
import Logo from "../assets/logo.png";

function Header() {
    return (
        <Box as="header">
            <Link href="/">
                <img src={Logo} alt="" />
            </Link>

            <Link>
                <FaUser />
            </Link>
        </Box>
    );
}

export default Header;
