import axios from "axios";
import * as env from "../process.env";

export default function mint(name: string, description: string, reciver: string) {
  console.log("minting nft");

  const image_url = "https://bafybeidqsgv6i7xkfueinkr4xfxfgjucob3slm2bzbyn75q7q4ibhbxxbi.ipfs.w3s.link/vault-nft.png";

  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      Authorization: env.NFTPORT_API_KEY
    },
    body: JSON.stringify({
      chain: 'polygon',
      name: name,
      description: description,
      file_url: image_url,
      mint_to_address: reciver
    })
  };

  return fetch('https://api.nftport.xyz/v0/mints/easy/urls', options)
    .then(response => response.json())
    .then(response => {
      console.log(response);
      return response;
    })
    .catch(err => {
      console.error(err);
      return err;
    });


  // const metadata = {
  //   name: name,
  //   image: image_url,
  //   description: description,
  // }

  // const data = {
  //   jsonrpc: "2.0",
  //   id: 2,
  //   method: "cm_mintNFT",
  //   params: ["default-polygon", "polygon:" + reciver, metadata],
  // };

  // axios
  //   .post(
  //     env.QUICKNODE_URL,
  //     data,
  //     config
  //   )
  //   .then(function(response) {
  //     // handle success
  //     console.log(response.data);
  //     return { status: response.status, data: response.data };
  //   })
  //   .catch((err) => {
  //     // handle error
  //     console.log(err);
  //     return { error: err };
  //   });
}
