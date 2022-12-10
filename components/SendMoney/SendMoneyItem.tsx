import { FunctionComponent } from 'react';
import styled from 'styled-components/native';
import { colors } from '../colors';
import Profile from '../Header/Profile';
import { ScreenWidth } from '../shared';
import RegularText from '../Texts/RegularText';
import SmallText from '../Texts/SmallText';
import { SendMoneyProps } from './types';

const SendMoneyItemContainer = styled.TouchableHighlight`
    height: 130px;
    width: ${ScreenWidth * 0.27}px;
    padding: 10px;
    border-radius: 15px;
    justify-content: space-around;
`;

const SendMoneyItem: FunctionComponent<SendMoneyProps> = (props) => {
    return (
        <SendMoneyItemContainer
            underlayColor={colors.secondary}
            style={{ backgroundColor: props.background }}
            onPress={() => alert('Send money!')}
        >
            <>
                <Profile
                    img={props.img}
                    imgContainerStyle={{ marginBottom: 10 }}
                />
                <SmallText
                    textStyles={{
                        textAlign: 'left',
                    }}
                >
                    {props.name}
                </SmallText>
                <RegularText
                    textStyles={{
                        color: colors.white,
                        textAlign: 'left',
                        fontSize: 13,
                    }}
                >
                    {props.amount}
                </RegularText>
            </>
        </SendMoneyItemContainer>
    );
};

export default SendMoneyItem;