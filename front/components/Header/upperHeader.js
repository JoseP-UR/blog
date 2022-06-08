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

    function genNavButtons() {
        return theme.config.header.menu.map((item, index) => {
            return (
                <NextLink href={item.path} key={index} passHref>
                    <Button colorScheme={'green'} sx={topMenuButtonStyle} variant={'ghost'}>{item.name}</Button>
                </NextLink>
            )
        })
    }

    function insertExternalLink(href, label) {
        if (theme.config.downloadButton) {
            return (
                <Link sx={topMenuButtonStyle} padding="0.5em" href={href} target={'_blank'}
                >
                    {label}
                </Link>
            )
        }

        return null
    }

    return (
        <>
            {genNavButtons()}
            <Spacer />
            {insertExternalLink("https://github.com/JoseP-UR/blog", "Download source for this")}
        </>
    )
}