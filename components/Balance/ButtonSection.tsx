import { Ionicons } from '@expo/vector-icons';
import { FunctionComponent } from 'react';
import styled from 'styled-components/native';
import RegularButton from '../Buttons/RegularButton';

const ButtonSectionBackground = styled.View`
    width: 100%;
    align-items: center;
    flex: 1;
`;

const ButtonSection: FunctionComponent = () => {
    return (
        <ButtonSectionBackground>
            <RegularButton btnStyles={{ width: '50%' }} onPress={() => {}}>
                Cancel <Ionicons name='card' />
            </RegularButton>
        </ButtonSectionBackground>
    );
};

export default ButtonSection;
