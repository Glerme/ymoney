import styled from 'styled-components/native';

export const InputContainer = styled.View<{
  marginTop?: string;
  marginLeft?: string;
  marginRight?: string;
  marginBottom?: string;
}>`
  margin-top: ${props => props.marginTop || '0px'};
  margin-left: ${props => props.marginLeft || '0px'};
  margin-right: ${props => props.marginRight || '0px'};
  margin-bottom: ${props => props.marginBottom || '0px'};
`;
