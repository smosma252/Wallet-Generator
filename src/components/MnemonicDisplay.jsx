import { Container, Heading, Box, Button, Flex } from "@radix-ui/themes"
import { useSetRecoilState } from "recoil";
import { ShowWalletState } from "../store/WalletAtom";

export const MnemonicDisplay = () => {
    const showWallets = useSetRecoilState(ShowWalletState);

    return (
        <Container p="7">
            <Heading size="9">Secret Recovery Phrase </Heading>
            <Box pt="5">
                <Heading size="6">Save these words in safe place: </Heading>
            </Box>
            <Box pt="5">
                <Flex gap="3">
                    <Button variant="surface" size="4" color="gray" style={{backgroundColor: "var(--accent-2)", cursor:"pointer"}} 
                    onClick={()=>{showWallets(true)}}>Generate Wallet</Button>
                </Flex>
            </Box>
        </Container>
    )

}