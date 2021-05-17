export interface TradeItem {
  id?: number,
  userId?: number,
  userFirstName?: string,
  userLastName?: string,
  resource?: Resource,
  userAcceptedResources?: Resource[],
  amount?: number,
}

export interface Resource {
  id?: number,
  name?: string,
  imageUrl?: string,
}