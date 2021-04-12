import {FC} from 'react';
import styled from 'styled-components';

interface IWrapperProps {
  height: string;
  width: string;
}

const Wrapper: FC<IWrapperProps> = styled.div<{
  width: '100%';
  height: '100%';
}>`
  width: ${(props) => props.width}
  height: ${(props) => props.height}
`;

export default Wrapper;
