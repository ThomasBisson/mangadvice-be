import { GResolvers, GManga } from '../generated/schema';

const resolver: GResolvers = {
  Query: {
    mangas: async (): Promise<GManga[]> =>
      Promise.resolve([
        {
          title: 'test',
          description: 'test desc',
        },
      ]),
    manga: async (_parent, { title }): Promise<GManga> =>
      Promise.resolve({
        title: `title : ${title}`,
        description: `desc test ${title} manga`,
      }),
  },
};

export default resolver;
