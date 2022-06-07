import {
    Box, Container, Text, Heading, Image, useColorModeValue
} from '@chakra-ui/react'

export default function PostItem(props) {
    const containerShadow = useColorModeValue('2px 2px 11px -2px black', '2px 2px 11px -2px white')
    return (
        <Container justifyContent={'space-around'} h="52" display={'flex'} p={'5'} boxShadow={containerShadow} borderRadius="md" my="10">
            <Image src={props.post.image} alt={props.post.title} boxSize={['36', '36', '40', '40']} />
            <Box flexBasis={'40%'}>
                <Heading>{props.post.title}</Heading>
                <Text>{props.post.date}</Text>
                <Text noOfLines={['2', '2', '2', '3']}>{props.post.subtitle}</Text>
            </Box>
        </Container>
    )
}