import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MovieService {

  constructor(
    @InjectRepository(Movie)
    private movieRepository: Repository<Movie>
  ) {}

  async create(createMovieDto: CreateMovieDto) : Promise<Movie> {
    return await this.movieRepository.save(createMovieDto);
  }

  async findAll() : Promise<Movie[]> {
    return await this.movieRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} movie`;
  }

  update(id: number, updateMovieDto: UpdateMovieDto) {
    return `This action updates a #${id} movie`;
  }

  remove(id: number) {
    return `This action removes a #${id} movie`;
  }
}
