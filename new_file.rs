pub trait RGB20 {
    fn total_supply(&self) -> u64;
    fn balance_of(&self, owner: String) -> u64;
    fn transfer(&mut self, from: String, to: String, amount: u64) -> bool;
}
use rgb::prelude::*;
use rgb::type_map;
use rgb::schema::schema;
use rgb::fungible::FungibleState;
use rgb::fungible::FungibleAsset;
use rgb::ContractId;

// Define custom RGB schema
#[derive(Clone, Debug, Eq, PartialEq, Display, From, StrictEncode, StrictDecode)]
#[display(Debug)]
pub struct CustomSchema {
    pub title: String,
    pub description: String,
    pub max_supply: u32,
}

// Add custom state to the schema
#[derive(Clone, Debug, Eq, PartialEq, Display, From, StrictEncode, StrictDecode)]
#[display(Debug)]
pub struct CustomState {
    pub schema: CustomSchema,
    pub supply: u32,
}

// Implement RGB20 interface
impl FungibleState for CustomState {
    fn asset_id(&self) -> ContractId {
        self.schema.asset_id()
    }

    fn native_amount(&self) -> u32 {
        self.supply
    }
}

// Issue a new contract using the schema
pub fn issue_contract(schema: CustomSchema) -> Result<CustomState, rgb::Error> {
    let state = CustomState {
        schema,
        supply: 0,
    };
    Ok(state)
}
