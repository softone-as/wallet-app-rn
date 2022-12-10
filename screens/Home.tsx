import { StatusBar } from 'expo-status-bar';
import { FunctionComponent } from 'react';
import styled from 'styled-components/native';
import CardSection from '../components/Cards/CardSection';
import { colors } from '../components/colors';
import { Container } from '../components/shared';

import logo1 from '../assets/cards/mc.png';
import logo2 from '../assets/cards/visa_white.png';
import portrait1 from '../assets/portraits/1.jpg';
import portrait2 from '../assets/portraits/2.jpg';
import portrait3 from '../assets/portraits/3.jpg';

import TransactionSection from '../components/Transactions/TransactionSection';
import SendMoneySection from '../components/SendMoney/SendMoneySection';

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

    const transactionData = [
        {
            id: 1,
            amount: '-$86.00',
            date: '14 Sep 2021',
            title: 'Taxi',
            subtitle: 'Uber car',
            art: {
                background: colors.primary,
                icon: 'car',
            },
        },
        {
            id: 2,
            amount: '-$286.00',
            date: '14 Sep 2021',
            title: 'Shopping',
            subtitle: 'Ali express',
            art: {
                background: colors.tertiary,
                icon: 'cart',
            },
        },
        {
            id: 3,
            amount: '-$586.00',
            date: '14 Aug 2021',
            title: 'Travel',
            subtitle: 'Emirates',
            art: {
                background: colors.accent,
                icon: 'airplane',
            },
        },
    ];

    const sendMoneyData = [
        {
            id: 1,
            amount: '2450.00',
            name: 'Coby Andoh',
            background: colors.tertiary,
            img: portrait1,
        },
        {
            id: 2,
            amount: '3650.00',
            name: 'Harlen Scott',
            background: colors.primary,
            img: portrait2,
        },
        {
            id: 3,
            amount: '7250.00',
            name: 'Steve Austin',
            background: colors.accent,
            img: portrait3,
        },
    ];

    return (
        <HomeContainer>
            <StatusBar style='dark' />
            <CardSection data={cardData} />
            <TransactionSection data={transactionData} />
            <SendMoneySection data={sendMoneyData} />
        </HomeContainer>
    );
};

export default Home;
