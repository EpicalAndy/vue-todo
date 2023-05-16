type statuses = 'active' | 'complited' | 'canceled';

export interface Card {
  id?: number,
  name: string,
  description: string,
  status: statuses
}
