const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Greeter", function () {
  it("Should return the new greeting once it's changed", async function () {
    const Greeter = await ethers.getContractFactory("UTA");
    const greeter = await Greeter.deploy();
    await greeter.deployed();

    expect(await greeter.greet()).to.equal();

    const setGreetingTx = await greeter.setGreeting();

    // wait until the transaction is mined
    await setGreetingTx.wait();

    expect(await greeter.greet()).to.equal();
  });
});
