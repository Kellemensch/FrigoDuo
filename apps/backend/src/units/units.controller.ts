import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { UnitsService } from './units.service';
import { CreateUnitDto } from './dto/CreateUnitDto.dto';
import { UpdateUnitDto } from './dto/UpdateUnitDto.dto';

@Controller('units')
export class UnitsController {
  constructor(private readonly unitsService: UnitsService) {}

  @Get()
  getUnits() {
    return this.unitsService.getUnits();
  }

  @Get(':id')
  getUnit(@Param('id', ParseIntPipe) id: number) {
    return this.unitsService.getUnit(id);
  }

  @Post()
  createUnit(@Body() unit: CreateUnitDto) {
    return this.unitsService.createUnit(unit);
  }

  @Patch(':id')
  modifyUnit(
    @Param('id', ParseIntPipe) id: number,
    @Body() unit: UpdateUnitDto,
  ) {
    return this.unitsService.modifyUnit(id, unit);
  }

  @Delete(':id')
  deleteUnit(@Param('id', ParseIntPipe) id: number) {
    return this.unitsService.deleteUnit(id);
  }
}
