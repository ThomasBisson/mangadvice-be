import { MongoClient, Db } from 'mongodb';
import Consola from 'consola';

type Query = { [column: string]: string };

export type Options = {
  sort?: {};
  projection?: {};
};

export const CollectionName = {
  manga: 'Mangas',
  user: 'User',
};

export class MongodbConnection {
  uri: string;
  client: MongoClient | undefined;
  db: Db | undefined;

  constructor() {
    const {
      MONGO_URI = 'mongodb://localhost:27017?writeConcern=majority',
      MONGO_DB_NAME = 'easy_manga',
    } = process.env;
    this.uri = MONGO_URI;

    try {
      this.client = new MongoClient(this.uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });

      this.client.connect();
      this.db = this.client.db(MONGO_DB_NAME);

      Consola.success('Database connected !');
    } catch (err) {
      Consola.error(err);
    }
  }

  public async findOne<T>(
    collectionName: string,
    query: Query = {},
    options?: Options,
  ): Promise<T> {
    try {
      const collection = this.db?.collection(collectionName);
      const res = (await collection?.findOne(query, options)) as T;
      return res;
    } catch (err) {
      Consola.error(err);
      return undefined as unknown as T;
    }
  }

  public async find<T>(
    collectionName: string,
    query: Query = {},
    // options?: Options,
  ): Promise<T[]> {
    try {
      const collection = this.db?.collection(collectionName);
      const cursor = await collection?.find(query);

      if (!cursor) {
        throw new Error('Error when find');
      }

      if ((await cursor.count()) === 0) {
        Consola.warn('No documents found!');
      }

      cursor.forEach((element) => console.log(element));
      return [] as T[];
    } catch (err) {
      Consola.error(err);
      return [] as T[];
    }
  }
}
