// Create an array to hold your NFTs
const NFTs = [];

// This function will take in some values as parameters, 
// create an NFT object using the parameters passed to it for its metadata, 
// and store it in the NFTs array.
function mintNFT(_username, _shirtColor, _shirtType, _accessories) {
  // Create the NFT object with metadata
  const NFT = {
    username: _username,
    shirtColor: _shirtColor,
    shirtType: _shirtType,
    accessories: _accessories
  };
  
  // Store the NFT in the array
  NFTs.push(NFT);
  console.log(`🎉 NFT for ${_username} has been successfully minted! 🚀`);
}

// This function will loop through the array of NFTs
// and print their metadata to the console in a stylish format.
function listNFTs() {
  console.log("\n💎💎💎 Your NFT Collection 💎💎💎");
  NFTs.forEach((nft, index) => {
    console.log(`
==========================
🔥 NFT #${index + 1} 🔥
==========================
🌟 Owner: ${nft.username.toUpperCase()}
👕 Shirt Color: ${nft.shirtColor}
👗 Shirt Type: ${nft.shirtType}
💼 Accessories: ${nft.accessories}
==========================
`);
  });
}

// This function will print the total number of NFTs minted to the console.
function getTotalSupply() {
  console.log(`\n✨ Total NFTs Minted: ${NFTs.length} ✨`);
}

// Call your functions below this line
mintNFT("Chris", "Red", "Hoodie", "Necklace");
mintNFT("Kevin", "White", "Plain", "Earing");
mintNFT("Julius", "Green", "T-shirt", "None");
mintNFT("Elgie", "Blue", "V-neck", "Watch");

listNFTs();
getTotalSupply();
