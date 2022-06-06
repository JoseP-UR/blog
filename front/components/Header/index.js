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
import { theme } from '../../theme'
import UpperHeader from './upperHeader'



export default function Header() {
    const { toggleColorMode, colorMode } = useColorMode()
    const topBg = useColorModeValue('green.600', 'blue.600')
    const botBg = useColorModeValue('green.500', 'blue.500')

    return (
        <Grid h={'100%'} templateRows={'30% auto'}>
            <GridItem bg={topBg} width={'100%'} margin="0 0 0 auto" display={'flex'} flexDirection="row" alignItems="center">
                <UpperHeader />
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
                            sx={{
                                animationName: 'ballCloseOpen',
                                animationDuration: '1s',
                            }}
                        />
                    </Button>
                </Box>
            </GridItem>
        </Grid>
    )
}