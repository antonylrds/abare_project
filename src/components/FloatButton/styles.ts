import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
    position: absolute;
    bottom: 50px;
    right: 50px;
    border-radius: 20px;
    background: #E8383C;
    color: #fff;
    display:flex;
    justify-content: center;
    align-items: center;
    border: 0;
    padding: 15px;

    &:hover {
        background: ${shade(0.25, '#E8383C')}
    }
`;