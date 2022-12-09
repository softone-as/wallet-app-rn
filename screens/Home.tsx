import { StatusBar } from 'expo-status-bar';
import { FunctionComponent } from 'react';
import styled from 'styled-components/native';
import CardSection from '../components/Cards/CardSection';
import { colors } from '../components/colors';
import { Container } from '../components/shared';

import logo1 from '../assets/cards/mc.png';
import logo2 from '../assets/cards/visa_white.png';

const HomeContainer = styled(Container)`
    background-color: ${colors.graylight};
    width: 100%;
    flex: 1;
`;

const Home: FunctionComponent = () => {
    const cardData = [
        {
            id: 1,
            accountNo: '38674140534',
            balance: 575000.12,
            alias: 'Work Debit',
            logo: logo1,
        },
        {
            id: 2,
            accountNo: '3867465286',
            balance: 120000.23,
            alias: 'Personal Prepaid',
            logo: logo2,
        },
        {
            id: 3,
            accountNo: '3866243597',
            balance: 57000.12,
            alias: 'School Prepaid',
            logo: logo1,
        },
    ];
    return (
        <HomeContainer>
            <StatusBar style='dark' />
            <CardSection data={cardData} />
        </HomeContainer>
    );
};

export default Home;
