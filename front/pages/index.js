import { Grid, GridItem } from '@chakra-ui/react'
import PostItem from '../components/PostItem'
export default function Home(props) {
  return (
    <Grid height={'100vh'} templateColumns={['auto', 'auto 35%']}>
      <GridItem>
        {
          props.posts.map(post => (
            <PostItem key={post.id} post={post} />
          ))
        }
      </GridItem>
    </Grid>
  )
}


export function getStaticProps() {
  return {
    props: {
      posts: [
        {
          id: '1',
          title: 'Hello Next.js',
          subtitle: 'Learn Next.js by Example',
          date: '2019-05-28T17:00:00.000Z',
          image: 'https://picsum.photos/200',
        },
        {
          id: '2',
          title: 'Learn Next.js',
          subtitle: 'Learn Next.js by ExampleLearn Next.js by ExampleLearn Next.js by ExampleLearn Next.js by ExampleLearn Next.js by ExampleLearn Next.js by ExampleLearn Next.js by ExampleLearn Next.js by ExampleLearn Next.js by Example',
          date: '2019-05-28T17:00:00.000Z',
          image: 'https://picsum.photos/200',
        },
      ]
    }
  }
}