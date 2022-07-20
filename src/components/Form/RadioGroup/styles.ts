import styled from 'styled-components/native';

export const RadioGroupContainer = styled.View<{
  marginTop?: string;
  marginLeft?: string;
  marginRight?: string;
  marginBottom?: string;
}>`
  margin-top: ${props => props.marginTop || '0px'};
  margin-left: ${props => props.marginLeft || '0px'};
  margin-right: ${props => props.marginRight || '0px'};
  margin-bottom: ${props => props.marginBottom || '0px'};

  border: 1px solid #191641;

  border-radius: 6px;
  padding: 16px 0;
`;

export const TextStyled = styled.Text`
  background-color: #191641;
  color: #fff;

  padding: 5px;
  border-radius: 6px;

  position: absolute;

  top: -15px;
  left: 10px;
`;
