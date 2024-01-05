import { IPerson } from '../../model/person.interface';

export interface IPersonService {
  createPerson(person: IPerson): Promise<IPerson>;
  getPeople(): Promise<IPerson[]>;
}
