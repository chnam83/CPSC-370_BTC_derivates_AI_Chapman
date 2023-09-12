from flask import Blueprint
from blockchain import Blockchain

blockchain_blueprint = Blueprint('blockchain', __name__)
blockchain = Blockchain()

@blockchain_blueprint.route('/chain', methods=['GET'])
def full_chain():
    response = {
        'chain': blockchain.chain,
        'length': len(blockchain.chain),
    }
    return jsonify(response), 200
