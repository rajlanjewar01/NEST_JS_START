/**
 * Add this class to dependency injection container
 * 
 */

//1. import Injectable
import { Injectable } from '@nestjs/common';
import { readFile, writeFile} from 'fs/promises';

//2. apply Injectable decorator
@Injectable()
export class MessagesRepository {
    async findOne(id :string) {
        // read specific content
        const contents = await readFile('messages.json','utf8');
        //parse json into object
        const messages = contents;
        return messages[id]
    }

    async findAll() {
        //read all content of file
          // read all content of file
          const contents = await readFile('./messages/files/messages.json', 'utf8');
          // parse json into array of objects
          const messages = JSON.parse(contents);
          return messages;
    }

    //FIXME
    async create(content: string) {
        // read file
        const contents = readFile('messages.json','utf8');
        // randomly generate ID
        const id = Math.floor(Math.random() * 999);
        // get messages content and put into messages object
        const messages = JSON.parse(content);
        messages[id] = { id, content };
        // write the messages to the file
        await writeFile('messages.json', JSON.stringify(messages));
        return messages[id];
    }
}