import styled from 'styled-components';

const Main = styled.main`

@media(min-width: 1114px) {
    max-width: 1114px;
    margin-left: auto;
    margin-right: auto;
    display: grid;
    grid-template-columns: 25% auto;
    column-gap: 32px;

    .sc-dlfnbm {
        grid-column: 1/3;
        margin-bottom: 26px;
    } 

    .sc-dlfnbm ~ form {
        display: flex;
        flex-direction: column;
    }

}
    
`;
const SectionContainer = styled.div``;

export { Main, SectionContainer };