import { Body, Controller, Get, Post } from '@nestjs/common';
import { ContactsService } from './contacts.service';

@Controller('contacts')
export class ContactsController {
    constructor(private service:ContactsService){}

    @Post()
    addOneContact(@Body() body){
        if(body instanceof Array )
        {
            return this.service.addManyContacts(body);
        }else{
            return this.service.addOneContact(body);
        }
    }

    @Get()
    getAllContacts(){
        return this.service.getAllContacts();
    }
}


