import { readFile, writeFile } from 'fs/promises';

export class MessagesRepository {
  async findOne(id: string) {
    const contents = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents);

    return messages[id];
  }

  async findAll() {
    const contents = await readFile('messages.json', 'utf8');
    return JSON.parse(contents);
  }

  async create(message: string) {
    const contents = await readFile('messages.json', 'utf8');
    const messages = contents ? JSON.parse(contents) : {};

    const id = Object.keys(messages).length + 1;

    messages[id] = { id, content: message };

    await writeFile('messages.json', JSON.stringify(messages));
  }
}
