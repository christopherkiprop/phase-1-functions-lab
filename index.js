// Code your solution in this file!
// Function to calculate distance in blocks from Scuber headquarters
function distanceFromHqInBlocks(pickupBlock) {
    const headquarters = 42;
    return Math.abs(pickupBlock - headquarters);
  }
  
  // Function to convert blocks to feet
  function distanceFromHqInFeet(pickupBlock) {
    const blockLength = 264; // feet
    return distanceFromHqInBlocks(pickupBlock) * blockLength;
  }
  
  // Function to calculate total feet travelled
  function distanceTravelledInFeet(startBlock, endBlock) {
    const blockLength = 264; // feet
    return Math.abs(endBlock - startBlock) * blockLength;
  }
  
  // Function to calculate fare price based on distance travelled
  function calculatesFarePrice(startBlock, endBlock) {
    const distance = distanceTravelledInFeet(startBlock, endBlock);
    let farePrice;
  
    if (distance <= 400) {
      farePrice = 0;
    } else if (distance > 400 && distance <= 2000) {
      farePrice = (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
      farePrice = 25;
    } else if (distance > 2500) {
      farePrice = 'cannot travel that far';
    }
  
    return farePrice;
  }
  
  // Exporting functions to be accessible in other modules
  module.exports = {
    distanceFromHqInBlocks,
    distanceFromHqInFeet,
    distanceTravelledInFeet,
    calculatesFarePrice
  };
  