# Truffles Pet Shop Box Project

## Summary
Demonstrate the use of an Adoption Dapp, to interact with an existing website and allow people to Adopt a Pets.

## Use Case.
A pet store owner, wants to allow his website to interact with a Dapp.  The Dapp will provide his customers a decentralized gateway for handling the contractual adoption of a pet.
<br />

	  	
### Pet Shop Testnet Address

The *Pet Shop* contract has been deployed to:  Unsuccessfully deployed to Ropsten.
I've attempted to deploy using: 
   Truffle Teams:  This is so cool - It has to be my truffle.config.js seetings. 
   Truffle Develop:  
      a. compile.
      b. deploy --network ropsten --reset
         Here I get the error message listed below.  Google searches led me to change my truffle.config.js file... but no cigar (but lots of great learning... smiles).
      
      Below is the intended link to the deployed application.  
      (https://ropsten.infura.io/v3/04f838e39118400ab1ef5148836f2cb0).


## Contracts
The Ethereum Package (Ethpm package) used is @openzeppelin/contracts. 

  #	Adoption.sol
    The Adoption contract will allow Adoptors to adopt pets.
    Inherits Plausable.sol.
	
  #Pausable.sol
    Exposes the, whenNotPaused modifier.  This can be added to public methods.  It's intended as a security Kill Switch to stop activity on the Dapp.

    It is available for install through the "openzeppelin-contracts" Ethpm Pacakge.
    For Example: npm instalopenzeppelin-contracts
    It's path, once installed is: "@openzeppelin-contracts/contracts/lifecycle/Pausable.sol"
    Provides the, whenNotPaused modifier
			
  <hr />

## Beyond he Scope of this project
<br />
 Dapps will change our interactions with everything.  There are numerous Dapp business Use Cases / Opportunities for enhancing and enforcing the various workflows necessary to handle the adoption process.  Some examples include:
    a. Micro Services / "Workflow Dapps" (Added Value Dapps).  This use case exposes the need for a list of Dapps, which can be used in a Pet Adoption workflow.  Store Owners and Pet Owners (e.g. Sellers/Buyers) can select from a list/directory of other Dapps that interact with their contractual model.  
	
	b.  Workflow Dapp Examples.  Using the Pet Store example, we might want to select from a list of Dapps providing the following Services.
	  1) Inter Planetary File System (IPFS).  With IPFS the filing gateway to ensure documents are in order.  The respective pet and owner files can be used for lifelong interactions (e.g, Pedigree History, Medical History, Training, Dieteary needs).
	  
	  2) Special Pet purchasing.  (Foods, Medicines, Toys, Clothing). 
	  
	  3) Medical Record.  Spaying/Neutering, Veterinary Records, Immunization, Health, Dental).
	  
   	  4) Specific Interactions.  Enforce monitoring of specific Seller/Buyer obligations and interactions involved in the various transactions within various workflows to perform a proper Pet Adoption.

<br />

<hr />

## Testing - TestAdoption.sol

### Test 1 - testUserCanAdopPet();
Test if the User can Adopt the selected Pet.
 Determine if the id of the selected pet is for a pet in the array of available pet ids.

<br />

### Test 2 - testGetAdopterAddressByPetIdInArray();
Test if the owner of the expected pet is valid.


<br />
// Tet 
### Test 3 - testGetAdopterAddressByPetId()
Test retrieval of a singel Pet's Owner.

<br />

<hr />

<br />

## References

* [Truffle Tutorial Pet Shop](https://www.trufflesuite.com/tutorials/pet-shop)

<br />

<br />
