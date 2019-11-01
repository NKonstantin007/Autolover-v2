import styled from '@emotion/styled';
import {MainTextColor} from '../../../../styles/colors';
import Button from '../../../../styles/components/Button';

export const ProfileFieldWrapper = styled.div`
    padding: 0.5rem 0 0.5rem 0;
`;

export const LabelKey = styled.div`
    color: ${MainTextColor};
    font-weight: normal;
    text-transform: uppercase;
    margin-right: 2rem;
    font-size: 24px;
`;

export const LabelValue = styled.div`
    color: ${MainTextColor};
    font-weight: normal;
    margin-right: 1rem;
    font-size: 24px;
`;

export const EditButton = styled(Button)`
    padding: 4px;
`;