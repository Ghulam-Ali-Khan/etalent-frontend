// pkgs
import {  Button, IconButton, Stack, Typography } from '@mui/material'
import { Delete } from '@mui/icons-material';

// Componnets
import CommonModal from './CommonModal'

// Custom hooks
import useGetPopupUtilis from '@/customHooks/useGetPopupUtilis';
import useShowResponse from '@/customHooks/useShowResponse';

// assets
import WarningImg from '@/assets/imgs/icons/delete-icon.png';

const DeletePopup = ({ deleteFunc, id, deleteItemName }: { deleteFunc: Function, id: any, deleteItemName: string }) => {
    const { anchorEl, handleAnchorElClose, handleModalOpen } = useGetPopupUtilis();

    // Custom Hooks
    const { showResponse } = useShowResponse();

    // Handlers
    const handleDeleteItem = async () => {
        const response = await deleteFunc(id);

        showResponse(response?.data, `${deleteItemName} deleted successfully`, `${deleteItemName} process failed`, handleAnchorElClose)
    }
    return (
        <>
            <IconButton onClick={handleModalOpen}>
                <Delete />
            </IconButton>
            <CommonModal isOpen={Boolean(anchorEl)} isPopup toggle={handleAnchorElClose} minWidth='500px' maxWidth='550px' >
                <Stack gap={2} justifyContent={'center'} alignItems={'center'} my={3}>
                    <img src={WarningImg} />

                    <Typography variant='body2' color='secondary'>
                        Are you sure you wanted to delete this skill?
                    </Typography>

                    <Stack direction={'row'} justifyContent={'center'} gap={2}>
                        <Button variant='outlined' onClick={handleAnchorElClose}>
                            No
                        </Button>
                        <Button variant='contained' onClick={handleDeleteItem}>
                            Yes
                        </Button>
                    </Stack>
                </Stack>
            </CommonModal>
        </>
    )
}

export default DeletePopup
