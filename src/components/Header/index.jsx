import { useNavigate } from "react-router-dom";
import { RiShutDownLine } from "react-icons/ri";

import avatarPlaceholder from "../../assets/avatar_placeholder.svg";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";

import { Container, Profile, Logout } from "./styles";

export function Header() {
    const { signOut, user } = useAuth();
    const navigate = useNavigate();

    const avatarURL = user.avatar? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

    function handleSignOut() {
        navigate("/");
        signOut();
    }

    return (
        <Container>
            <Profile to="/profile">
                <img src={avatarURL}
                    alt={user.name}
                />

                <div>
                    <span>Bem-vindo</span>
                    <strong>{user.name}</strong>
                </div>
            </Profile>
            <Logout onClick={handleSignOut}>
                <RiShutDownLine />
            </Logout>
        </Container>
    )
}