import { mergeResolvers } from '@graphql-tools/merge';
import mangaResolver from './mangaResolver';

const resolversArr = [mangaResolver];

const resolvers = mergeResolvers(resolversArr);

export default resolvers;
