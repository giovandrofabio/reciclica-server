import { Body, Controller, Post } from '@nestjs/common';
import { UserRegister } from './model/user-register';
import { RegisterService } from './register.service';

@Controller('register')
export class RegisterController {
  
  constructor(private readonly registerService: RegisterService) {}

  @Post()
  register(@Body() userRegister: UserRegister) {
    return userRegister;
  }

}