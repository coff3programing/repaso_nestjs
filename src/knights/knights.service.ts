import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Knight } from './interface/knights.interface';
import { v4 as uuid } from 'uuid';
import { CreateKnightDto } from './dto/CreateKnightDto';
import { UpdateKnightDto } from './dto/UpdateKnightDto';

@Injectable()
export class KnightsService {
  private knights: Knight[] = [
    {
      id: uuid(),
      name: 'Shaka',
      constelation: 'Virgo',
    },
  ];
  findAll() {
    return this.knights;
  }

  findOneById(id: string) {
    const knight = this.knights.find((el) => el.id === id),
      message = ` el with id '${id}' not found`;
    if (!knight) throw new NotFoundException(message);
    return knight;
  }

  create(createKnightDto: CreateKnightDto) {
    const knight: Knight = {
      id: uuid(),
      ...createKnightDto,
    };
    this.knights.push(knight);
    return knight;
  }

  update(id: string, updateKnightDto: UpdateKnightDto) {
    let knightDB = this.findOneById(id),
      validate = updateKnightDto.id && updateKnightDto.id !== id,
      message = 'el id is not valid inside body';
    if (validate) throw new BadRequestException(message);

    this.knights = this.knights.map((el) => {
      if (knightDB.id == id) {
        knightDB = { ...knightDB, ...updateKnightDto, id };
        return knightDB;
      }

      return el;
    });

    return knightDB;
  }

  delete(id: string) {
    this.findOneById(id);
    this.knights = this.knights.filter((el) => el.id !== id);
  }
}
