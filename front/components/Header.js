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
    useColorMode,
    Spacer,
    LinkOverlay,
    Link
} from '@chakra-ui/react'
import {
    SearchIcon
} from '@chakra-ui/icons'
import { theme } from '../theme'



export default function Header() {
    const { toggleColorMode, colorMode } = useColorMode()
    const topBg = useColorModeValue('green.600', 'blue.600')
    const botBg = useColorModeValue('green.500', 'blue.500')

    const topMenuButtonStyle = {
        borderRadius: '0',
        height: '100%',
        color: "whiteAlpha.900",
        display: 'flex',
        alignItems: 'center',
        _hover: { backgroundColor: 'whiteAlpha.700', color: 'blackAlpha.900' }
    }


    return (
        <Grid h={'100%'} templateRows={'30% auto'}>
            <GridItem bg={topBg} width={'100%'} margin="0 0 0 auto" display={'flex'} flexDirection="row" alignItems="center">
                <Button colorScheme={'green'} sx={topMenuButtonStyle} variant={'ghost'}>Home</Button>
                <Button colorScheme={'green'} sx={topMenuButtonStyle} variant={'ghost'}>About</Button>
                <Spacer />
                {theme.config.downloadButton ?
                    (<Link sx={topMenuButtonStyle} padding="0.5em"  href="https://github.com/JoseP-UR/blog" target={'_blank'}
                    >
                      Download source for this
                    </Link>)
                    : null}
            </GridItem>
            <GridItem bg={botBg} display={'flex'} alignItems="center" justifyContent={'space-around'}>

                <Box display={'flex'} alignItems="center" width={'auto'}>
                    <Avatar name={theme.config.blogTitle} src={theme.config.avatar} />
                    <Text display={['none', 'none', 'inline', 'inline']} ml={'1em'} color={'whiteAlpha.900'} fontSize={'2xl'}>{theme.config.blogTitle}</Text>
                </Box>

                <Box display={'flex'} width={'auto'} alignItems="center" >
                    <InputGroup size='md'>
                        <Input
                            pr='4.5rem'
                            type={'text'}
                            backgroundColor={'whiteAlpha.900'}
                            placeholder='Search'
                            _placeholder={{
                                color: 'gray.500',
                            }}
                        />
                        <InputRightElement width='4.5rem'>
                            <Button h='1.75rem' size='sm' backgroundColor={'blackAlpha.700'} color={'whiteAlpha.900'}>
                                <SearchIcon />
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                    <Button
                        w={'4.5rem'}
                        size='sm'
                        ml={'1em'}
                        backgroundColor={'whiteAlpha.900'}
                        color={'whiteAlpha.900'}
                        onClick={toggleColorMode}
                        _hover={{ backgroundColor: 'whiteAlpha.900', color: 'blackAlpha.900' }}
                    >
                        <Box
                            backgroundColor={colorMode === 'light' ? 'blue.500' : 'green.500'}
                            borderRadius={'full'}
                            h={'1rem'}
                            w={'1rem'}
                        />
                    </Button>
                </Box>
            </GridItem>
        </Grid>
    )
}