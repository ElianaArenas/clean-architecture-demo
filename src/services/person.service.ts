import { Inject } from '@nestjs/common';
import { IPerson } from 'src/domain/model/person.interface';
import { IPersonRepository } from 'src/domain/interfaces/repositories/person.repository';
import { IPersonService } from 'src/domain/interfaces/services/person.service';

export class PersonService implements IPersonService {
  constructor(
    @Inject('PERSON_REPOSITORY')
    private readonly personRepository: IPersonRepository,
  ) {}

  async createPerson(person: IPerson) {
    return await this.personRepository.create(person);
  }

  async getPeople() {
    const people = await this.personRepository.findAll();
    return people;
  }
}
