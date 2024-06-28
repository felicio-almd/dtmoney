import styled from "styled-components";

export const Container = styled.div `
    margin-top: 4rem;
    
    table {
        width: 100%;
        border-spacing: 0 0.5rem;

        th {
            color: var(--text-body);
            font-weight: 400;
            padding: 1rem 2rem;
            text-align: left;
            line-height: 1.5rem;
        }

        td {
            padding: 1rem 2rem;
            border: 0;
            background: var(--shape);
            color: var(--text);
            border-radius: 0.3rem;

            &:first-child {
                color: var(--text-title);
            }

            &.deposit {
                color: var(--green);
            }
            &.withdraw {
                color: var(--red);
            }
        }

        @media screen and (max-width: 600px) {
            th, td {
                padding: 0.5rem 1rem;
                font-size: 0.875rem;
            }

            th:nth-child(3), td:nth-child(3) {
                display: none;
            }
        }

        @media screen and (max-width: 365px) {
            th, td {
                padding: 0.25rem 0.5rem;
                font-size: 0.75rem;
            }

            th:nth-child(2), td:nth-child(2), th:nth-child(4), td:nth-child(4) {
                display: none;
            }
        }
    }
`
