import styled from '@emotion/styled';

const FlexBlock = styled.div`
    display: flex;
    flex-direction: ${props => props.direction === 'column' ? 'column' : 'row'};
    justify-content: ${(props) => {
        if (props.justify === 'start') return 'flex-start';
        if (props.justify === 'end') return 'flex-end';
        if (props.justify === 'center') return 'center';
        if (props.justify === 'space-between') return 'space-between';
        if (props.justify === 'space-around') return 'space-around';
        return 'flex-start';
    }}; 
    align-items: ${props => {
        if (props.align === 'stretch') return 'stretch';
        if (props.align === 'start') return 'flex-start';
        if (props.align === 'end') return 'flex-end';
        if(props.align === 'center') return 'center';
        if(props.align === 'baseline') return 'baseline';
        return 'stretch'
    }}; 
`;

export default FlexBlock;
