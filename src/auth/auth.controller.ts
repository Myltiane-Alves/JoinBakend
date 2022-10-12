
import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { Client } from 'src/Client/client.decorator';
import { ClientService } from 'src/Client/client.service';
import { Auth } from './auth.decorator';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {

    constructor(
        
        private clientService: ClientService,
        private authService: AuthService,
    ) {}

    @Post('login')
    async login(@Body('email') email, @Body('password') password) {
        return this.authService.login({email, password});
    }

    @UseGuards(AuthGuard)
    @Get('me')
    async me(@Auth() auth, @Client() client) {
        return {
            auth,
            client,
        }
    }
    
}
