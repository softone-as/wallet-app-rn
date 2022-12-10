import { Ionicons } from '@expo/vector-icons';
import { FunctionComponent } from 'react';
import styled from 'styled-components/native';
import { colors } from '../colors';
import RegularText from '../Texts/RegularText';
import SmallText from '../Texts/SmallText';
import TransactionItem from './TransactionItem';
import { TranscationSectionProps } from './Types';

const TransactionSectionBackground = styled.View`
    width: 100%;
    padding-horizontal: 25px;
    padding-top: 5px;
    flex: 2;
`;

const TransactionRow = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

const TransactionList = styled.FlatList`
    width: 100%;
`;

const TransactionSection: FunctionComponent<TranscationSectionProps> = (
    props
) => {
    return (
        <TransactionSectionBackground>
            <TransactionRow style={{ marginBottom: 25 }}>
                <RegularText
                    textStyles={{ fontSize: 19, color: colors.secondary }}
                >
                    Transaction
                </RegularText>
                <SmallText textStyles={{ color: colors.secondary }}>
                    Recent
                    <Ionicons name='caret-down' size={13} />
                </SmallText>
            </TransactionRow>

            <TransactionList
                data={props.data}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: 25,
                }}
                keyExtractor={({ id }: any) => id.toString()}
                renderItem={({ item }: any) => <TransactionItem {...item} />}
            />
        </TransactionSectionBackground>
    );
};

export default TransactionSection;
