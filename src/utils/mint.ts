import axios from "axios";
import * as env from "../.process.env";

export default function mint(name: string, description: string, reciver: string) {
  console.log("minting nft");
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const image_url = "https://www.arweave.net/I5Hh_7aHWH21giaelic-Tah1p3kwA71fFur4yw5Bcls?ext=png";

  const metadata = {
    name: name,
    image: image_url,
    description: description,
  }

  const data = {
    jsonrpc: "2.0",
    id: 1,
    method: "cm_mintNFT",
    params: ["default-solana", "sol:" + reciver, metadata],
  };

  axios
    .post(
      env.QUICKNODE_URL,
      data,
      config
    )
    .then(function(response) {
      // handle success
      console.log(response.data);
      return { status: response.status, data: response.data };
    })
    .catch((err) => {
      // handle error
      console.log(err);
      return { error: err };
    });
}

