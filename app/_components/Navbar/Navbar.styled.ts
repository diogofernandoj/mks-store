import styled from "styled-components";

export const NavbarContainer = styled.nav`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100%;
  height: 6.25rem;

  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: 100%;
`;
