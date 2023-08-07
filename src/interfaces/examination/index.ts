import { ResultInterface } from 'interfaces/result';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ExaminationInterface {
  id?: string;
  name: string;
  age_group: string;
  examiner_id?: string;
  created_at?: any;
  updated_at?: any;
  result?: ResultInterface[];
  user?: UserInterface;
  _count?: {
    result?: number;
  };
}

export interface ExaminationGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  age_group?: string;
  examiner_id?: string;
}
