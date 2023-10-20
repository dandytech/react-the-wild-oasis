import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.5rem 2.5rem;
  border-right: 1px solid var(--color-grey-100);

  // to expand from 1st to last
  grid-row: 1/-1;

  display: flex;
  flex-direction: column;
  gap: 3.5rem;
`;

export default function Sidebar() {
  return (
    <StyledSidebar>
      <Logo />
      <MainNav />
    </StyledSidebar>
  );
}
