import "@radix-ui/themes/styles.css";
import "./App.css";
import { Theme } from "@radix-ui/themes"
import { Buffer } from 'buffer';
import { NavBar } from "./components/NavBar"
import { useState } from "react"
import { GenerateWallets } from "./components/GenerateWallets";
import {MnemonicDisplay} from "./components/MnemonicDisplay";
import { WalletDisplay } from "./components/WalletsDisplay"
import { useRecoilValue } from "recoil";
import { ShowWalletState } from "./store/WalletAtom";

// @ts-ignore
window.Buffer = Buffer;

function App() {
  const showWalletDisplay = useRecoilValue(ShowWalletState);
  const [dark, setdark] = useState('dark');

  return (
    <>
      <Theme appearance={dark}>
        <NavBar setdark={setdark}></NavBar>
        <MnemonicDisplay></MnemonicDisplay>
        {showWalletDisplay &&
          (<>
            <GenerateWallets></GenerateWallets>
            <WalletDisplay></WalletDisplay>
          </>)
        }
      </Theme>
    </>
  )
}

export default App
