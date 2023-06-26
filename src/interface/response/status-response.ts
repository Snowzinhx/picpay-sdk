import { ICancelRequest } from '../request';

export interface IStatusResponse extends ICancelRequest {
  stauts: string;
}
