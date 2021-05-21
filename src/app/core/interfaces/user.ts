export interface User {
  id: number;
  createdAt: string;
  firstName: string;
  lastName: string;
  email: string;
  addressId: number;
  addressStreetName: string;
  addressPostalCode: number;
  addressStreetNumber: number;
  walletId?: number;
  imageUrl?: string;
  isAdmin: boolean;
  token?: string;
}
