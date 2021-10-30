import { db } from '@root/server';
import { CollectionName } from '@repositories/databases/mongodbConnection';

export default {
  Query: {
    allManga: async (_, {}, { manga }) => db?.find(CollectionName.manga),
  },
};
