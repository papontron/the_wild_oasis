import styled from 'styled-components';

const StyledHeader = styled.header`
  background-color: ${(props) => props.theme.colors.gray[200]};
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.gray[800]};
`;

export default function Header() {
  return <StyledHeader>header</StyledHeader>;
}

{
  /* <Heading>Update your account</Heading>
      <Row>
        <Heading as="h3">Update useData</Heading>
        <p>Update user data form</p>
      </Row>
      <Row>
        <Heading as="h3">Update password</Heading>
        <p>Update user password form</p>
      </Row> */
}
