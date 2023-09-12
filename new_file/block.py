class Block:
    def __init__(self, previous_hash, transactions):
        self.transactions = transactions
        self.previous_hash = previous_hash
        self.hash = self.calculate_hash()

    def calculate_hash(self):
        # TODO: Implement this method
        pass
