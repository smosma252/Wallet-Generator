import { Button, Container, Flex, Heading, Section, Card, Text } from "@radix-ui/themes"
import { useRecoilState, useSetRecoilState } from "recoil";
import { walletState, generateWalletState, ShowWalletState } from "../store/WalletAtom";

export const WalletDisplay = () => {
    const [wallets, setWallet] = useRecoilState(walletState);
    const generateWalletTrigger = useSetRecoilState(generateWalletState);
    const showwallet = useSetRecoilState(ShowWalletState);

    const resetWallet = () => {
        setWallet([]);
        showwallet(false);
        localStorage.clear();
    }
    return (
        <Container>
            <Flex justify="between">
                <Heading size="8">Your Wallets</Heading>
                <Flex gap="3">
                    <Button size="4" color="white" variant="soft" onClick={()=>generateWalletTrigger(wallets.length+1)}>Add Wallet</Button>
                    <Button size="4" color="red" variant="soft" onClick={resetWallet}>Clear Wallets</Button>
                </Flex>
            </Flex>
            {wallets.map((wallet, i)=>{
                return (
                    <Section mt="5" p="5" style={{border: "1px solid var(--gray-a4)", borderRadius:"10px"}}>
                        <Heading size="6">Wallet {i+1}</Heading>
                            <Card mt="5">
                                <Section p="5">
                                    <Text size="5" weight="bold">Public Key: </Text>
                                </Section>
                                <Section p="5">
                                    <Text size="2">{wallet.signingKey.publicKey} </Text>
                                </Section>  
                                <Section p="5">
                                    <Text size="5" weight="bold">Public Key: </Text>
                                </Section>  
                                <Section p="5">
                                    <Text size="2">{wallet.privateKey}</Text>
                                </Section>  
                            </Card>
                    </Section>
                )
            })}

        </Container>
    )
}