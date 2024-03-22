import { ConflictException, Injectable } from '@nestjs/common';

import { hash } from "bcrypt";

import { PrismaService } from 'src/prisma/prisma.service';

import { CreateUserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor( private prisma: PrismaService ){}

  async create(dto: CreateUserDto){
    const user = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      }
    });
  
    if (user) throw new ConflictException('This email already exists')
  
    const newUser = await this.prisma.user.create({
      data: {
        ...dto,
        password: await hash(dto.password, 10),
      }
    });

    const { password, ...result } = newUser;

    return result

  }


}
