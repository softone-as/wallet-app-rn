import { FunctionComponent } from 'react';
import styled from 'styled-components/native';
import { colors } from '../components/colors';
import { Container } from '../components/shared';

const HomeContainer = styled(Container)`
    background-color: ${colors.graylight};
    width: 100%;
    flex: 1;
`;

const Home: FunctionComponent = () => {
    return <HomeContainer></HomeContainer>;
};

export default Home;
