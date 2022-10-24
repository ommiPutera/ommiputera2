import styled from "styled-components";

function Header() {
  return (
    <ContainerHeader>
      <LeftContent>
        <span>Logo</span>
      </LeftContent>
      <RightContent>
        <span>Logo</span>
      </RightContent>
    </ContainerHeader>
  );
}

const ContainerHeader = styled.header`
  display: flex;
  padding: 14px 16px;
  border-bottom: 1px solid
    ${({ theme: { colors, mode } }) =>
      mode === "dark" ? colors.dark[8] : colors.dark[2]};

  @media (min-width: 1600px) {
    padding: 24px 36px;
  }
`;

const LeftContent = styled.div`
  width: 50%;
  text-align: left;
`;

const RightContent = styled.div`
  width: 50%;
  text-align: right;
`;

export { Header };
