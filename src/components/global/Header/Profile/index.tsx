import { Stack } from '@chakra-ui/react';
import { useState } from 'react';

import { useAuth } from '../../../../contexts/AuthProvider';
import ConfirmationModal from '../../ConfirmationModal';
import OptionsMenu from './OptionsMenu';

function Profile() {
  const [isLogoutModalOpen, setLogoutModalOpen] = useState(false);

  const { user, removeAuthCookie } = useAuth();

  const handleOpenLogoutModal = () => {
    setLogoutModalOpen(true);
  };

  const handleCloseLogoutModal = () => {
    setLogoutModalOpen(false);
  };

  const handleConfirmLogoutModal = () => {
    removeAuthCookie('Authorization', { path: '/' });
  };

  if (!user || !user?.firstName) return null;

  return (
    <Stack spacing={4} direction="row" align="center">
      <OptionsMenu user={user} onOpenLogoutModal={handleOpenLogoutModal} />
      {isLogoutModalOpen ? (
        <ConfirmationModal
          title="Leave app"
          primaryButtonTitle="leave"
          message="Are you sure you want to leave?"
          isOpen={isLogoutModalOpen}
          onClose={handleCloseLogoutModal}
          onConfirm={handleConfirmLogoutModal}
        />
      ) : null}
    </Stack>
  );
}

export default Profile;
