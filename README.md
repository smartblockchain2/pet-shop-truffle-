# Truffles Pet Shop Box Project

## Summary
Demonstrate the use of an Adoption Dapp, to interact with an existing website and allow people to Adopt Pets.

## Use Case.
A pet store owner, wants to allow his website to interact with a Dapp.  The Dapp will provide his customers a decentralized gateway for handling the selection of a pet for adoption.
<br />
<hr />

## Dapp NavigationThe Pet Store website is not deployed.  
   The Pet Store website is not deployed.  
   Please follow steps below, to test this Dapp.
   
   Please watch the demo video before attempting to execute the steps below.
   The video outlines these steps.  
   The video is located at: https://drive.google.com/open?id=1deVKwOJQ3UHE7SPLZcsvxsCrfPbvcTB1
   
   
  ### Instructions for Repository and WebSite Navigation  
    Preconditions: 
       a. Chrome Browser.
       b. Metamask Installed.
       c. Linux OS.  (This was build on Ubuntu v18.04.3.
       
   ##### Setup and Configuration    
     Step 1.  The simplest way to pull this repository is to:
       a.  Open your favorite command window (e.g., Bast).
       b.  Create a working directory for this repository (to be cloned).
       c.  Execute the following commands.
	     1)  npm install
	     2)  git clone https://github.com/smartblockchain2/pet-shop-truffle-.git
	     3)  cd pet-shop-truffle-     
	     4)  npm run dev
    
      At this point the Pet Store's website should display in your browser.

  #### How to Test this Dapp

      Step 2.  One may need to ensure that Metamask is configured to point to Ropsten.  This should occur automatically, based on configuration settings in truffle-config.js... but stuff happens.
      
      Step 3.  If you don't have either in your metamask account, please navigate to a fauset and add ether.
      Step 4.  Click on the Adopt button for one of the pets you'd like to adopt.
      Step 5.  If Metamask pops up, sign into metamask and confirm the transaction.
      Step 6.  It may take 5 to 20 seconds for a black toast message to display at top center of the browser, indicating that transaction was successful.
      Step 7.  Click on the Toast message to see the transaction in etherscan.io.  Alternatively, one can open metamask, and select the last transaction.  Navigate to etherscan by selecting the arrow icon to the far right of the transaction.
      
  ### Note:  
      	     Pets that have been adopted already simply display a disabled "Success" button.
             Pets awaiting adoption display an enabled "Adopt" button.    
      

## Pet Shop Ropsten Testnet Address (https://ropsten.infura.io/v3/04f838e39118400ab1ef5148836f2cb0)
Note:  Creating a project at infura.io, provided me with the id:  04f838e39118400ab1ef5148836f2cb0.  This information is not needed for the student evaluations.

The *Pet Shop* contract has been deployed to:  Ropsten.
Here I used Infura.io and the truffle-config.js file to configure deployment to Ropsten.
I also set up the project on Truffle Teams.  This is sweet as it provides a CI/CD pipeline (not part of this current evaluation effort).
      
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
### Test 3 - testGetAdopterAddressByPetId()
Test retrieval of a singel Pet's Owner.

<br />

<hr />

<br />

## References

* [Truffle Tutorial Pet Shop](https://www.trufflesuite.com/tutorials/pet-shop)

<br />

<br />
