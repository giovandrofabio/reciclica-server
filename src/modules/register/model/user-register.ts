import { Type } from "class-transformer";
import { IsEmail, IsMobilePhone, IsNotEmpty, IsNotEmptyObject, MinLength, ValidateNested } from "class-validator";
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

    @IsNotEmptyObject()
    @ValidateNested()
    @Type(() => Address)
    address: Address;
}