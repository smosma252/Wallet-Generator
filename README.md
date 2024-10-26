# Wallet-Generator

# Features

Generate Wallet: Create a new wallet and view generated private and public keys.
Toggle Visibility: Show or hide private keys and recovery phrases to enhance security.

# Future Features:
Import Wallet: Optionally enter an existing recovery phrase to generate keys.
Copy to Clipboard: Easily copy private keys, public keys, and the recovery phrase.

# Installation
Ensure you have Node.js and npm installed on your machine.

Clone the repository or add the component to your existing React project.

Install the required dependencies.
npm install


# State Management
Utilizited Atom to store states

mnemonicWords: Stores the words of the recovery phrase.
seed: Stores the seed derived from the mnemonic.
privateKeys: Stores the generated private keys.
publicKeys: Stores the generated public keys.
showMnemonic: Boolean state to toggle the visibility of the recovery phrase.

How It Works
Generating a Wallet:

Generates a new mnemonic phrase and derives the corresponding seed.
Uses the seed to generate private and public keys.
Displays the generated keys and mnemonic phrase.
