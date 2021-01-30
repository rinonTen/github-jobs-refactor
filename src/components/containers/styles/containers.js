import styled from 'styled-components';

const Main = styled.main`

@media(min-width: 1114px) {
    display: grid;
    grid-template-columns: 25% auto;
    column-gap: 32px;

    .sc-dlfnbm {
        grid-column: 1/3;
    } 

    .sc-dlfnbm ~ form {
        display: flex;
        flex-direction: column;
    }

}
    
`;
const SectionContainer = styled.div``;

export { Main, SectionContainer };