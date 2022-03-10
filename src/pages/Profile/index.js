import { useAuth } from "../../contexts/AuthContext";
import { Button, Text } from "@chakra-ui/react";

function Profile({history}) {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    logout(() => {
        history.push("/")
    });
  };

  return (
    <div>
      <Text fontSize="22" fontWeight="semibold">
        Profile
      </Text>
      <br />
      <code>{JSON.stringify(user)}</code>

      <br />
      <br />

      <Button colorScheme="pink" variant="solid" onClick={handleLogout}>
        LogOut
      </Button>
    </div>
  );
}

export default Profile;
