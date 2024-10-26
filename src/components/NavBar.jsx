import {
    Heading,
    Container,
    Switch,
    Flex
} from "@radix-ui/themes"

import { useState } from "react"

export const NavBar = ({setdark}) => {
    const [checked, setChecked] = useState(false);
    return (
        <Container py="5">
            <Flex justify="between">
                <Heading size="8">GenWallet</Heading>
                <Switch size="3" variant="soft" checked={checked} onCheckedChange={()=>{
                    setChecked(!checked);
                    console.log(checked);
                    setdark(checked? 'dark': 'light');
                    }}></Switch>
            </Flex>
        </Container>
    )

}