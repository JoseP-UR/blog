import { Box } from '@chakra-ui/react'
import PostItem from '../components/PostItem' 
export default function Home() {
  return (
    <Box>
      <PostItem />
    </Box>
  )
}


export function getStaticProps() {
  return {
    props: {
      initialData: {
        posts: [
          {
            id: '1',
            title: 'Hello Next.js',
            content: 'Learn Next.js by Example',
            image: 'https://picsum.photos/200',
            date: '2019-05-28T17:00:00.000Z',
          },
          {
            id: '2',
            title: 'Learn Next.js',
            content: 'Learn Next.js by Example',
            image: 'https://picsum.photos/200',
            date: '2019-05-28T17:00:00.000Z',
          },
        ]
      }
    }
  }
}