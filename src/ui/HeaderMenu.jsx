import { HiOutlineUser } from "react-icons/hi2";
import ButtonIcon from "./ButtonIcon";
import Logout from "../features/authentication/Logout";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledHeaderMenu=styled.ul`
  display:flex;
  gap:0.4rem;
`;

function HeaderMenu() {
  const navigate= useNavigate();
  return (
    <StyledHeaderMenu>
      <ul>
        <ButtonIcon onClick={()=>navigate("/account")}>
                  <HiOutlineUser/>
        </ButtonIcon>
        </ul>
        <ul>
          <Logout/>
        </ul>
    </StyledHeaderMenu>
  )
}

export default HeaderMenu
