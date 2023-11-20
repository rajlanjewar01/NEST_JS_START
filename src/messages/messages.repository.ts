// import helper function from nodejs library
import { readFile, writeFile} from 'fs/promises';
import { promises as fs } from 'fs';

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
        // const file = await fs.readFile(process.cwd() + './messages.json', 'utf8');
        // const contents = await readFile('messages.json', 'utf8');
        // console.log(`${process.cwd()}/src/messages/files/messages.json`);
        // console.log(`11 ${process.cwd()}`);
        // console.log(`33 ${process.cwd()}/src/messages/files/messages.json`);
        // const contents = await fs.readFile(`${process.cwd()}/src/messages/files/messages.json`, 'utf8');

        const file = await fs.readFile('/src/messages/files/messages.json', 'utf8');
        const messages = JSON.parse(file);
        return messages;
        // const contents = await fs.readFile(process.cwd() + './files/messages.json', 'utf8');
        // const messages = JSON.parse(contents);
        // return messages;
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