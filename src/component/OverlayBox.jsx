import { Box } from "@chakra-ui/react";

function OverlayBox() {
    return (
        <Box
            sx={{
                inset: 0,
                position: "absolute",
                backgroundColor: "rgba(36, 36, 36, 0.6)",
            }}
        ></Box>
    );
}

export default OverlayBox;
