const fs = require('fs');
const path = require('path');
var ProofTaskContract = artifacts.require("ApusProofTask");

module.exports = function (deployer) {
 
deployer.deploy(ProofTaskContract, "0x3fCc4dd3D00AeBFdb3aFfF12319CB315f14C9C1D").then(() => {
      if (ProofTaskContract.networks[deployer.network_id]) {
        const contractAddress = ProofTaskContract.networks[deployer.network_id].address;
        const contractData = {
          address: contractAddress
        };
        const directoryPath = path.join(__dirname, '../', 'build', 'contract_address');
        const filePath = path.join(directoryPath, 'ApusProofTask.json');

        // 创建目录
        if (!fs.existsSync(directoryPath)) {
            fs.mkdirSync(directoryPath, { recursive: true });
         }

        fs.writeFileSync(filePath, JSON.stringify(contractData, null, 2));
        console.log(`Contract address saved to ${filePath}`);
      } else {
        console.error('Contract deployment failed');
      }
    });
};