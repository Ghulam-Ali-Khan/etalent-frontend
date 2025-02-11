import { useState, MouseEvent } from "react";

const useGetPopupUtilis = () => {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

    // Handlers
    const handleAnchorElOpen = (event: MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleModalOpen = () => {
        setAnchorEl(document.createElement("div")); // Ensuring it remains a valid HTMLElement
    };

    const handleAnchorElClose = () => {
        setAnchorEl(null);
    };

    return { handleAnchorElOpen, handleAnchorElClose, handleModalOpen, anchorEl, setAnchorEl };
};

export default useGetPopupUtilis;
