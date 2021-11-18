import { IsEmail, IsMobilePhone, IsNotEmpty, MinLength } from "class-validator";
import { Address } from "./address";

export class UserRegister {

    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @MinLength(6)
    password: string;

    @IsNotEmpty()
    @IsMobilePhone()
    phone: string;

    address: Address;
}