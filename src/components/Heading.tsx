import {FC} from 'react';
import styled from 'styled-components';

interface IHeadingProps {
  fontSize: string;
  active: boolean;
}

const Heading: FC<IHeadingProps> = styled.h1<{
  active: false;
  fontSize: '24px';
}>`
  color: ${(props) => (props.active ? 'red' : 'blue')};
`;

export default Heading;
