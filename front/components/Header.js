import {
    Grid,
    GridItem,
    Button,
    Avatar,
    Text,
    Box,
    Input,
    InputGroup,
    InputRightElement,
    useColorModeValue,
    useColorMode
} from '@chakra-ui/react'
import {
    SearchIcon
} from '@chakra-ui/icons'



export default function Header() {
    const { toggleColorMode, colorMode } = useColorMode()
    const topBg = useColorModeValue('green.600', 'blue.600')
    const botBg = useColorModeValue('green.500', 'blue.500')

    const topMenuButtonStyle = {
        borderRadius: '0',
        height: '100%',
        color: "whiteAlpha.900",
        _hover: { backgroundColor: 'whiteAlpha.900', color: 'blackAlpha.900' }
    }


    return (
        <Grid h={'100%'} templateRows={'30% auto'}>
            <GridItem bg={topBg} width={'100%'} margin="0 0 0 auto">
                <Button colorScheme={'green'} sx={topMenuButtonStyle} variant={'ghost'}>Home</Button>
                <Button colorScheme={'green'} sx={topMenuButtonStyle} variant={'ghost'}>About</Button>
            </GridItem>
            <GridItem bg={botBg} display={'flex'} alignItems="center" justifyContent={'space-around'}>

                <Box display={'flex'} alignItems="center" width={'auto'}>
                    <Avatar name="Jose Paulo Urives Rosa" src="https://i.pravatar.cc/300" />
                    <Text display={['none', 'none', 'inline', 'inline']} ml={'1em'} color={'whiteAlpha.900'} fontSize={'2xl'}>Jose Paulo Urives Rosa</Text>
                </Box>

                <Box display={'flex'} width={'auto'} alignItems="center" >
                    <InputGroup size='md'>
                        <Input
                            pr='4.5rem'
                            type={'text'}
                            backgroundColor={'whiteAlpha.900'}
                            placeholder='Search'
                        />
                        <InputRightElement width='4.5rem'>
                            <Button h='1.75rem' size='sm' backgroundColor={'blackAlpha.700'} color={'whiteAlpha.900'}>
                                <SearchIcon />
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                    <Button h='1.75rem' size='sm' backgroundColor={'blackAlpha.700'} color={'whiteAlpha.900'} onClick={toggleColorMode}>
                        <SearchIcon />
                    </Button>
                </Box>
            </GridItem>
        </Grid>
    )
}