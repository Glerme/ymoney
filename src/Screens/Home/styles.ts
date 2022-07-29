import styled from "styled-components/native";
import { ScrollView } from "native-base";

export const Container = styled.View`
  flex: 1;
  padding: 16px;
`;

export const GridDashboardCards = styled.View`
  justify-content: center;
  align-items: center;

  padding: 16px;
`;

export const GridCards = styled(ScrollView)`
  margin-bottom: 16px;
`;

export const EmptyContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
