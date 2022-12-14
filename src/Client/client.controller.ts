
import { Body, Controller, Post, Get, Put, Param, Delete } from '@nestjs/common';
import { ClientService } from './client.service';
import { CreateClientDto } from './create-client.dto';

@Controller('clients')
export class ClientController {
    constructor(
        private clientService: ClientService,
    ) {}

    @Get(':id')
    async show(@Param('id') id ) {
        return this.clientService.getById(id);
    }

    @Get()
    async showByEmail(@Param('email') email: string) {
        return this.clientService.getByEmail(email);
    }

    @Post()
    async create(@Body() data: CreateClientDto) {
        return this.clientService.create(data);
    }
        
    @Put(':id')
    async update(@Param('id') id, @Body() data: CreateClientDto) {
        return this.clientService.update(id, data);
    }

    
    @Delete(':id')
    async delete(@Param('id') id: number){
        return this.clientService.delete(id);
    }
}
