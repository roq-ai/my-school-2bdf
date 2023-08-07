import { ClientInterface } from 'interfaces/client';
import { ExaminationInterface } from 'interfaces/examination';
import { GetQueryInterface } from 'interfaces';

export interface ResultInterface {
  id?: string;
  score: number;
  award?: string;
  client_id?: string;
  examination_id?: string;
  created_at?: any;
  updated_at?: any;

  client?: ClientInterface;
  examination?: ExaminationInterface;
  _count?: {};
}

export interface ResultGetQueryInterface extends GetQueryInterface {
  id?: string;
  award?: string;
  client_id?: string;
  examination_id?: string;
}
