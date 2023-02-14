import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
const filename='./contacts.json'
@Injectable()
export class ContactsService {
contacts=[];
constructor(){
    try{
let contents= fs.readFileSync(filename,'utf-8');
this.contacts=JSON.parse(contents);
    }catch(e){
        this.contacts=[];
    }
}
writeToFile(){
    fs.writeFileSync(filename,JSON.stringify(this.contacts),'utf-8');
}
exist(id){
    return this.contacts.findIndex(c=>c.id==id);

}
get nextId(){
    if(this.contacts.length===0)return 1;
let ids=this.contacts.map(c=>c.id);
return 1+Math.max(...ids);
}

addOneContact(contact){
contact.id=this.nextId;
this.contacts.push(contact);
this.writeToFile();
return contact
}

addManyContacts(contacts){
let nextId=this.nextId;
const arr ={...contacts};
arr.forEach( (c,id)=>c.id=id+nextId);
this.contacts.push(...contacts);
this.writeToFile();
return {...contacts};
}

getAllContacts(){
    return {...this.contacts};
}
}
