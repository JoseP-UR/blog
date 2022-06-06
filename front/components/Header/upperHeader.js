import {
    Button,
    Spacer,
    Link
} from '@chakra-ui/react'
import * as NextLink from 'next/link'
import { theme } from '../../theme'

export default function UpperHeader() {
    const topMenuButtonStyle = {
        borderRadius: '0',
        height: '100%',
        color: "whiteAlpha.900",
        display: 'flex',
        alignItems: 'center',
        _hover: { backgroundColor: 'whiteAlpha.700', color: 'blackAlpha.900' }
    }

    function generateMenu() {
        return theme.config.header.menu.map((item, index) => {
            return (
                <NextLink href={item.path} key={index} passHref>
                    <Button colorScheme={'green'} sx={topMenuButtonStyle} variant={'ghost'}>{item.name}</Button>
                </NextLink>
            )
        })
    }

    return (
        <>
            {generateMenu()}
            <Spacer />
            {
                theme.config.downloadButton ?
                    (<Link sx={topMenuButtonStyle} padding="0.5em" href="https://github.com/JoseP-UR/blog" target={'_blank'}
                    >
                        Download source for this
                    </Link>)
                    : null
            }
        </>
    )
}