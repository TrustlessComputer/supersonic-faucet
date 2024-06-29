from fastapi import FastAPI, HTTPException, Header, Depends
from pydantic import BaseModel
from enum import Enum
from web3 import Web3
import os

app = FastAPI()

# Configuration
MAINNET_RPC_URL = "https://rpc.supersonic.bvm.network"
MAINNET_CHAIN_ID = 222150
TESTNET_RPC_URL = "https://rpc.testnet.supersonic2.bvm.network"
TESTNET_CHAIN_ID = 22219
PRIVATE_KEY = "df57089febbacf7ba0bc227dafbffa9fc08a93fdc68e1e42411a14efcf23656e"
AMOUNT_ETH = 5
API_KEY = "8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199"  # Replace with your actual API key

class NetworkType(str, Enum):
    MAINNET = "MAINNET"
    TESTNET = "TESTNET"

class FaucetRequest(BaseModel):
    network_type: NetworkType
    recipient_address: str  # No validation for Ethereum address

def get_web3_and_chain_id(network_type: NetworkType):
    if network_type == NetworkType.TESTNET:
        return Web3(Web3.HTTPProvider(TESTNET_RPC_URL)), TESTNET_CHAIN_ID
    return Web3(Web3.HTTPProvider(MAINNET_RPC_URL)), MAINNET_CHAIN_ID

def verify_api_key(api_key: str = Header(...)):
    if api_key != API_KEY:
        raise HTTPException(status_code=401, detail="Invalid API Key")

@app.post("/send-eth", dependencies=[Depends(verify_api_key)])
def send_eth(request: FaucetRequest):
    try:
        web3, chain_id = get_web3_and_chain_id(request.network_type)

        # Check if connected to the RPC
        if not web3.is_connected():
            raise HTTPException(status_code=500, detail="Failed to connect to the RPC URL")

        # Get the sender address from the private key
        account = web3.eth.account.from_key(PRIVATE_KEY)
        sender_address = account.address

        # Get the nonce (transaction count) for the sender address
        nonce = web3.eth.get_transaction_count(sender_address)

        # Convert the ETH amount to Wei (1 ETH = 10^18 Wei)
        amount_wei = web3.to_wei(AMOUNT_ETH, 'ether')

        # Build the transaction
        transaction = {
            'to': request.recipient_address,
            'value': amount_wei,
            'nonce': nonce,
            'chainId': chain_id,
            'from': sender_address  # Include the sender's address
        }

        # Estimate gas
        gas_estimate = web3.eth.estimate_gas(transaction)
        gas_price = web3.eth.gas_price

        # Update the transaction with gas estimates
        transaction.update({'gas': gas_estimate, 'gasPrice': gas_price})

        # Sign the transaction
        signed_transaction = account.sign_transaction(transaction)

        # Send the transaction
        tx_hash = web3.eth.send_raw_transaction(signed_transaction.rawTransaction)

        return {
            "message": "Transaction sent",
            "tx_hash": tx_hash.hex()
        }
        receipt = web3.eth.wait_for_transaction_receipt(tx_hash)

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
# To run the application, use the command: uvicorn faucet_service:app --reload
