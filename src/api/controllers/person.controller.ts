import { Controller, Inject, Post, Get, Body } from '@nestjs/common';
import { IPerson } from 'src/domain/model/person.interface';
import { IPersonService } from 'src/domain/interfaces/services/person.service';
import { PersonDto } from '../dto/person.dto';

@Controller('person')
export class PersonController {
  constructor(
    @Inject('PERSON_SERVICE')
    private readonly personService: IPersonService,
  ) {}

  @Post()
  async createPerson(@Body() person: PersonDto): Promise<{ result: IPerson }> {
    const personCreated = await this.personService.createPerson(person);
    return { result: personCreated };
  }

  @Get()
  async getPeople(): Promise<{ result: IPerson[] }> {
    const people = await this.personService.getPeople();
    return { result: people };
  }
}
