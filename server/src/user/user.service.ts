// In user.service.ts:
import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateUserDto } from './dto/dto/user.dto';
import { hash } from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) { }

  async create(dto: CreateUserDto) {
    const user = await this.prisma.user.findUnique({ // Corrected line!
      where: {
        email: dto.email,
      },
    });

    if (user) throw new ConflictException('Email duplicado');

    const hashedPassword = await hash(dto.password, 10);

    const newUser = await this.prisma.user.create({ // Corrected line!
      data: {
        ...dto,
        password: hashedPassword,
      },
    });

    const { password, ...result } = newUser;
    return result;
  }

  async findByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: {
        email: email,
      },
    });
  }

  async findById(id: number) {
    return await this.prisma.user.findUnique({
      where: {
        id: id,
      },
    });
  }
}
