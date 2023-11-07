import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { KnightsService } from './knights.service';
import { CreateKnightDto } from './dto/CreateKnightDto';
import { UpdateKnightDto } from './dto/UpdateKnightDto';

@Controller('knights')
export class KnightsController {
  constructor(private readonly knightsService: KnightsService) {}

  //! CRUD
  @Get()
  getAllKnights() {
    return this.knightsService.findAll();
  }

  @Get(':id')
  getKnigthById(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    console.log({ id });
    return this.knightsService.findOneById(id);
  }

  @Post()
  createKnight(@Body() createKnightDto: CreateKnightDto) {
    return this.knightsService.create(createKnightDto);
  }

  @Patch(':id')
  updateKnight(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateKnightDto: UpdateKnightDto,
  ) {
    return this.knightsService.update(id, updateKnightDto);
  }

  @Delete(':id')
  deleteKnight(@Param('id', ParseUUIDPipe) id: string) {
    return this.knightsService.delete(id);
  }
}
