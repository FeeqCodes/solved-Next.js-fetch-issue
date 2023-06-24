
//=========== To fetch data locally
import fsPromises from 'fs/promises';
import path from 'path'

export async function getLocalData() {
  // Get the path of the json file
  const filePath = path.join(process.cwd(), 'lib/data.json');
  // Read the json file
  const jsonData = await fsPromises.readFile(filePath);
  // Parse data as json
  const objectData = JSON.parse(jsonData);

  return objectData
}



//========== To fetch from an API

// export async function getData(){
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts")
//   return res.json()
// }
