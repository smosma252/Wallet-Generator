import { generateMnemonic, mnemonicToSeedSync } from "bip39";
import { ethers, Wallet } from "ethers";
import { useEffect, useState } from "react"
import { ChevronDownIcon, ChevronLeftIcon } from "@radix-ui/react-icons"
import { Container, Heading, Flex, Section, IconButton, Card, Text, Grid} from "@radix-ui/themes"
import { useRecoilValue, useRecoilState } from "recoil";
import { ShowWalletState, walletState, generateWalletState } from "../store/WalletAtom";


export const GenerateWallets = () => {
    const showWalletDisplay = useRecoilValue(ShowWalletState)
    const [wallets, setWallet] = useRecoilState(walletState);
    const newWalletFlag = useRecoilValue(generateWalletState)


    const [viewSecret, setViewSecret] = useState(false);
    const [secretPhrase, setSecretPhrase] = useState([]);


    const generateSeed = (mnemonic) => {
        const seed = mnemonicToSeedSync(mnemonic);
        return seed;
    }
    const getPrivateKey = (seed, derivationPath) => {
        const hasNode = ethers.HDNodeWallet.fromSeed(seed);
        const child = hasNode.derivePath(derivationPath);
        return child.privateKey;
    }
    const getNewWallet = (privateKey) => {
        return new Wallet(privateKey);
    }
    
    useEffect(()=>{
        let mnemonic = localStorage.getItem('mnemonic');
        let seed;
        if (!mnemonic){
            console.log("GENERATE");
            mnemonic = generateMnemonic();
            seed = generateSeed(mnemonic);
            setSecretPhrase(mnemonic.split(" "));
            localStorage.setItem('mnemonic', mnemonic);
        }
        seed = generateSeed(mnemonic);
        const path = `m/44/60/${wallets.length}/0`;
        const privateKey = getPrivateKey(seed, path);
        const newWallet = getNewWallet(privateKey);
        
        console.log(newWallet);
        setWallet([...wallets, newWallet])
    }, [showWalletDisplay, newWalletFlag])

    return (
        <Container p="7">
            <Section p="6" style={{ backgroundColor: "var(--gray-a2)", borderRadius:"20px"}}>
                <Flex justify="between">
                    <Heading size="7">Your Secret Phrase</Heading>
                    <IconButton color="gray" size="3" variant="soft" onClick={()=>{setViewSecret(!viewSecret)}}>
                        {!viewSecret? <ChevronLeftIcon/> : <ChevronDownIcon />}
                    </IconButton>
                </Flex>
                {viewSecret && 
                <Section>
                    <Grid columns="4" gap="3">
                        {
                        secretPhrase.map((phrase)=>{
                            return (
                                <Card asChild size="2">
                                    <a href="javascript:void(0)">
                                    <Text as="div" size="5" weight="bold" style={{textAlign:"center"}}>
                                        {phrase}
                                    </Text></a>
                                </Card>
                            )
                        })
                        }
                    </Grid>
                </Section>   
                }
            </Section>
        </Container>
    )
}