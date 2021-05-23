export interface TradeItem {
  id: number;
  userId: number;
  userFirstName: string;
  userLastName: string;
  userPostalCode?: string;
  resourceId: number;
  resourceName: string;
  resourceImageUrl: string;
  amount: number;
  proposedAmount?: number;
  activeUserId?: number;
}
