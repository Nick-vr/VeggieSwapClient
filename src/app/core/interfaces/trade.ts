import { TradeItem } from './tradeItem';
import { User } from './user';

export interface Trade {
  id: number;
  user: User;
  tradeItemProposals: TradeItem[];
  completed: boolean;
  activeUserId: number;
  createdAt: Date;
  modifiedAt: Date;
  status?: string;
}
