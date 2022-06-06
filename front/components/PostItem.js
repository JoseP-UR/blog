import {
    Box, Container, Text, Heading, Image
} from '@chakra-ui/react'

export default function PostItem(props) {
    return (
        <Container justifyContent={'space-around'} h="52" display={'flex'} p={'5'} boxShadow={'3px 4px 10px -5px black'} borderRadius="md" my="10">
            <Image src={props.post.image} alt={props.post.title} boxSize="40" />
            <Box flexBasis={'40%'}>
                <Heading>{props.post.title}</Heading>
                <Text>{props.post.date}</Text>
                <Text noOfLines={['2', '3']}>{props.post.subtitle}</Text>
            </Box>
        </Container>
    )
}