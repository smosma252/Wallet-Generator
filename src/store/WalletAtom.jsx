import { atom } from "recoil";

export const walletState = atom({
    key: 'WalletState',
    default: []
});

export const ShowWalletState = atom({
    key: 'ShowWalletState',
    default: false
});

export const generateWalletState = atom({
    key:'generateWalletChange', 
    default: []
})