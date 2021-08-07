import styled from 'styled-components';

export type TextAlignProps = {
  align?: 'center' | 'left' | 'right';
}

const TextAlign = styled.div`
  text-align: ${({ align }: TextAlignProps) => align ?? 'center'};
  width: 100%;
`;

export default TextAlign;