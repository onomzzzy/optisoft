import axios from "axios";
const uri = "https://onome.s3.us-east-2.amazonaws.com/FocusMall";

const MakeApiCall = () => {
    return ( 
        getItemfromServer()
     );
}
 
export default MakeApiCall;
 async function getItemfromServer() {
    await axios
      .get(uri)
      .then((res) => {
        console.log(res.data)
        return res.data;
      })
      .catch((err) => {
        console.log(`error ocurr ${err}`);
      });
  }