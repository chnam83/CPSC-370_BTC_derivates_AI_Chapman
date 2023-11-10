pub trait RGB20 {
    fn total_supply(&self) -> u64;
    fn balance_of(&self, owner: String) -> u64;
    fn transfer(&mut self, from: String, to: String, amount: u64) -> bool;
}
