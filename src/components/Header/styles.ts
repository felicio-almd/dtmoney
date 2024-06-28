import styled from 'styled-components'

export const Container = styled.header`
    background: var(--blue);
    @media screen and (max-width: 450px) {
        height: 180px;
    }
`

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;

    padding: 2rem 1rem 10rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 450px) {
        flex-direction: column;
        gap: 1.5rem;
        margin: auto;
    }
    
    button {
        font-size: 1rem;
        color: #fff;
        background: var(--blue-light);
        border: 0;
        padding: 0 2rem;
        border-radius: 0.3rem;
        height: 3rem;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9);
        }
    }
`