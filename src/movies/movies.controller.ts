import { Controller, Delete, Get, Param, Post, Patch } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'this will return all movies';
  }

  @Get('/:id')
  getOne(@Param('id') movieId: string) {
    return `this will return one movie ${movieId}`;
  }

  @Post()
  create() {
    return 'this will create a movie';
  }

  @Delete('/:id')
  deleteMovie(@Param('id') movieId: string) {
    return 'This will delete a movie';
  }

  @Patch('/:id')
  patchMovie(@Param('id') movieId: string) {
    return 'this will patch movie';
  }
}
