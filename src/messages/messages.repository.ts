// import helper function from nodejs library
import { readFile, writeFile} from 'fs/promises';

export class MessagesRepository {
    async findOne(id: string) {
        //read file content from messages.json
        const contents = await readFile('messages.json', 'utf8');
        //content return JSON as a plain string we need to parse that string into objec
        const messages = JSON.parse(contents);
        //get specific message from id
        console.log(`id = ${typeof id}`);
        console.log(`content = ${contents}`);
        console.log(`messages = ${typeof messages}`);
        return messages[557];
    }

    async findAll() {
        const contents = await readFile('../messages.json', 'utf8');
        const messages = JSON.parse(contents);
        return messages;
    }

    async create(content: string) {
        // read file
        const contents = await readFile('messages.json', 'utf8');
        const messages = JSON.parse(contents);
        // randomly generate brand new ID
        const id = Math.floor(Math.random() * 999);
        // add ID and messages into messages.json file
        messages[id] = { id, content };
        // messages[id] - turns the entire thing back to string and write it back to messages.json file
        await writeFile('messages.json', JSON.stringify(messages));
    }
}