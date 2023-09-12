import argparse
from blockchain import Blockchain

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--add-block', nargs='+', help='Add a block to the blockchain')
    parser.add_argument('--validate-chain', action='store_true', help='Validate the blockchain')
    args = parser.parse_args()

    blockchain = Blockchain()

    if args.add_block:
        transactions = args.add_block
        blockchain.add_block(transactions)

    if args.validate_chain:
        if blockchain.validate_chain():
            print('Blockchain is valid')
        else:
            print('Blockchain is not valid')

if __name__ == '__main__':
    main()
