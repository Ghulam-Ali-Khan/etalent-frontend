import React, { ReactNode } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { Modal, Box, IconButton, Card, Typography, Button } from '@mui/material';

interface CommonModalProps {
  isOpen: boolean;
  toggle: () => void;
  children: ReactNode;
  title?: string;
  func?: () => void;
  btnName?: string;
  isPopup?: boolean;
  givenWidth?: string;
  noCloseSection?: boolean;
  minWidth?: string;
  maxWidth?: string;
}

const CommonModal: React.FC<CommonModalProps> = ({
  isOpen,
  toggle,
  children,
  title = '',
  func,
  btnName,
  isPopup = false,
  givenWidth = '300px',
  noCloseSection = false,
  minWidth,
  maxWidth,
}) => {
  return (
    <Modal
      open={isOpen}
      onClose={toggle}
      className={`flex justify-center ${isPopup ? 'mt-4 items-start' : 'items-center'} overflow-auto`}
    >
      <Card sx={{ padding: '5px 15px', minWidth: minWidth || '80%', maxWidth: maxWidth || '800px' }}>
        {!noCloseSection && (
          <Box
            className="flex justify-between items-center pb-2"
            sx={{
              borderBottom: !isPopup ? '1px solid #ccc' : undefined,
              marginBottom: !isPopup ? '10px' : undefined,
              padding: isPopup ? '0px 10px' : undefined,
            }}
          >
            <Typography variant="h5">{title}</Typography>
            <Box className="flex gap-2">
              {btnName && func && (
                <Button onClick={func} variant="contained" size="small">
                  {btnName}
                </Button>
              )}

              {
                !isPopup && (
                  <IconButton onClick={toggle}>
                    <CloseIcon />
                  </IconButton>
                )
              }

            </Box>
          </Box>
        )}

        <Box sx={{ overflowY: 'auto', maxHeight: 'calc(80vh - 48px)' }} className={!isPopup ? 'px-2 py-1' : ''}>
          {children}
        </Box>
      </Card>
    </Modal>
  );
};

export default CommonModal;
