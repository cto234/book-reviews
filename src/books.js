import dharmaBumsCover from './assets/covers/dharma-bums.png';
import agotCover from './assets/covers/agot.jpg'
import acokCover from './assets/covers/acok.jpeg'
import asosCover from './assets/covers/asos.jpeg'
import affcCover from './assets/covers/affc.jpeg'


const books = [
    {
        id: 1,
        title: 'A Game of Thrones',
        cover: agotCover,
        score: 4.5,
        review: `
        A perfect introduction. 
        
        A Game of Thrones is the first novel in the unfinished A Song of Ice and Fire series. It is also the tightest and most concise entry. This may seem an odd thing to say about a book spanning over 800 pages, but AGOT does a fantastic job of slowly feeding information to the reader about the world without overwhelming them, as well as giving (almost) every viewpoint character a satisfying and exciting storyline. This book is the most Stark-centric in the series with all but two of the viewpoint characters being members of the family. This is a wonderful starting point as we get emotionally attached to the Starks and their respective goals, hopes, and dreams, before the story takes a turn and the surviving family members are scattered across Westeros. 
        
        This is my second time reading the series and I have a notably better appreciation for certain things the second time around and recommend a re-read to anyone who may have enjoyed this story years ago. I found myself enjoying different character’s chapters more than I did the first time around. On my first reading I remember looking forward to Danaerys’ chapters, and although I would still consider them good, I found myself less interested in her story knowing that by the end of book five she is still in Essos with her dragons with no immediate plans to invade Westeros. On the other hand I enjoyed Bran’s chapters more the second time around. On my first readthrough I felt his sections were boring, slow, and uneventful on the whole. This time, though, I was thoroughly invested in Bran’s journey, as he slowly realizes that he is not destined to be a knight as he always dreamed, but to explore the dark and mysterious magic of the old gods of the north. Sansa’s POV, unfortunately, was as dull and annoying as I remembered, and there were a few moments reading this book that I turned the page to see a Sansa chapter and decided I was done reading for the day.
        
        Overall, while I think this is a great, epic fantasy novel and the perfect introduction to the world of Westeros, I am looking forward much more to the later books that I remember less vividly and which go beyond the war of the five kings and set in motion the downfall of the Lannisters, set up Dorne’s role in future politics, and introduce interesting characters like Young Griff and Euron. Thoroughly enjoyed it and excited for more!
        
      `
    },
    {
        id: 2,
        title: 'A Clash of Kings',
        cover: acokCover,
        score: 4,
        review: 'Slightly less goated.'
    },
    {
        id: 3,
        title: 'A Storm of Swords',
        cover: asosCover,
        score: 5,
        review: 'Super Goated'
    },
    {
        id: 4,
        title: 'A Feast for Crows',
        cover: affcCover,
        score: 3,
        review: 'Worst one but still good'
    },
    {
        id: 5,
        title: 'The Dharma Bums',
        cover: dharmaBumsCover,
        score: 3,
        review: 'Not as good as On the Road.'
    },

  ];
  
  export default books