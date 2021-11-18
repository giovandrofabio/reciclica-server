import { IsNotEmpty } from "class-validator";

export class Address {

    @IsNotEmpty()
    address: string;

    @IsNotEmpty()
    number: string;

    @IsNotEmpty()
    neighborhood: string;

    @IsNotEmpty()
    complement: string;

    @IsNotEmpty()
    zipCode: string;

    @IsNotEmpty()
    state: string;

    @IsNotEmpty()
    city: string;
    
}