import { Box, Link } from "@chakra-ui/react";
import OverlayBox from "../component/OverlayBox";
import warta from "../assets/warta.jfif";
import keuangan from "../assets/keuangan.jfif";
import ibadah from "../assets/ibadah.jfif";

function Home() {
    return (
        <Box
            className="home_container"
            sx={{
                width: "100%",
                height: "100%",
                display: "grid",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundImage: `url(${warta})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    position: "relative",
                }}
            >
                <OverlayBox />
                <Link
                    sx={{
                        textAlign: "center",
                        fontSize: "40px",
                        fontWeight: 700,
                        zIndex: 1000,
                    }}
                >
                    Warta Jemaat
                </Link>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundImage: `url(${keuangan})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    position: "relative",
                }}
            >
                <OverlayBox />
                <Link
                    sx={{
                        textAlign: "center",
                        fontSize: "40px",
                        fontWeight: 700,
                        zIndex: 1000,
                    }}
                >
                    Warta Keuangan
                </Link>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundImage: `url(${ibadah})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    position: "relative",
                }}
            >
                <OverlayBox />
                <Link
                    sx={{
                        textAlign: "center",
                        fontSize: "40px",
                        fontWeight: 700,
                        zIndex: 1000,
                    }}
                >
                    Tata Ibadah
                </Link>
            </Box>
        </Box>
    );
}

export default Home;
