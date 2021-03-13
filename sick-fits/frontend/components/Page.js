import styled, { createGlobalStyle } from 'styled-components';
import Header from './Header';



const InnerStyles = styled.div`
  max-width:var(--maxWidth);
  margin: 0auto;
  padding: 2rem;
`;

export default function Page({ children }) {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <InnerStyles>{children}</InnerStyles>
    </div>
  );
}
