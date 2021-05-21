import styled from 'styled-components';

export const Logo = styled.img`
  width: 100%;
  padding: 10px;
`;

export const Container = styled.div`
  @media (max-width: 500px) {
    .pro-sidebar{
      width: 200px;
      min-width: 200px;
    }

    .pro-sidebar.collapsed {
      width: 0px;
      min-width: 0px;
    }

  }


`
