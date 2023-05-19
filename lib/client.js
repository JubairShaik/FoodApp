import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import  {useStore}  from"../../store/store"

 
  export const client = sanityClient({
    projectId:  "q68c1tfq",
    dataset: 'production',
    apiVersion: '2022-12-28',
    useCdn: true,
    token:'skBc9brrGveKnWLoMjEfpAwZC0KSQxh9DvwSwrcUY9l9AxdJVJ4fbRYiLIYvHagHnVcsX37dQjffADOuN5Ikgsu17KkoG109vTtICkjVhRQUkLfY76DCZEWgDWIhrbzGPZwOkiHWuW0THhfV27Fj3wLywUzybectIXyhuBEK2wOYDijUocTq',
    // process.env,REACT_APP_SANITY_TOKEN
  });
    
 

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
