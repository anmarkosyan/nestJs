import { readFile, writeFile } from 'fs/promises';
import {Injectable} from "@nestjs/common";

@Injectable()
export class MessagesRepository {
  async fineOne(id: string) {
    const content = await readFile('messages.json', 'utf8');
    const message = JSON.parse(content);

    return message[id];
  }

  async findAll() {
    const contents = await readFile('messages.json', 'utf8');
    return JSON.parse(contents);
  }

  async create(content: string) {
    const contents = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents);

    const id = Math.floor(Math.random() * 999);
    messages[id] = { id, content };

    await writeFile('messages.json', JSON.stringify(messages));
  }
}
