import styled from "styled-components";

interface ILayoutProps {
  children: React.ReactNode;
}

function Header() {
  return (
    <WrapperHeader>
      <LeftContent>
        <span>Logo</span>
      </LeftContent>
      <RightContent>
        <span>Logo</span>
      </RightContent>
    </WrapperHeader>
  );
}

function Footer() {
  return (
    <WrapperFooter>
      <LeftContent>
        <span>Logo</span>
      </LeftContent>
      <RightContent>
        <span>Logo</span>
      </RightContent>
    </WrapperFooter>
  );
}

function DefaultLayout({ children }: ILayoutProps) {
  return (
    <WrapperLayout>
      <Header />
      <div className="children">{children}</div>
      <Footer />
    </WrapperLayout>
  );
}

const WrapperHeader = styled.header`
  display: flex;
  padding: 14px 16px;
  border-bottom: 1px solid
    ${({ theme: { colors, mode } }) =>
      mode === "dark" ? colors.dark[8] : colors.dark[2]};

  @media (min-width: 1600px) {
    padding: 24px 72px;
  }
`;

const WrapperFooter = styled.footer`
  display: flex;
  padding: 14px 16px;
  border-top: 1px solid
    ${({ theme: { colors, mode } }) =>
      mode === "dark" ? colors.dark[8] : colors.dark[2]};

  @media (min-width: 1600px) {
    padding: 24px 72px;
  }
`;

const WrapperLayout = styled.div`
  .children {
    min-height: 100vh;
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

export default DefaultLayout;
