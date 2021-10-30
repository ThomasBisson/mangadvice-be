import { gql } from 'apollo-server-express';

export default gql`
  
  scalar Date

  type Query {
    
    type Manga {
        title: STRING!
        author: STRING!
        chapterMeanPageNb: INT!
        chapterReleaseMeanInterval: INT!
        description: STRING!
        genres: [INT!]!
        image: STRING!
        lastChapterDate: Date
        lastChapterName: STRING!
        nbChapter: INT!
        rating: INT!
        ratingVotes: INT!
        status: STRING!
        views: INT!
    }
  }
`;
