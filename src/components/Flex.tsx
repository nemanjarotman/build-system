import {FC} from 'react';
import styled from 'styled-components';

interface IFlexProps {
  display: string;
  flexDirection: string;
  alignItems: string;
  justifyContent: string;
}

const Flex: FC<IFlexProps> = styled.div<{
  display: 'flex';
  flexDirection: 'column';
  alignItems: 'center';
  justifyContent: 'center';
}>`
  display: ${(props) => props.display}
  alignItems: ${(props) => props.flexDirection}
  justifyContent: ${(props) => props.alignItems}
  flexDirection: ${(props) => props.justifyContent}
`;

export default Flex;
