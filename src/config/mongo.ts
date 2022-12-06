import "dotenv/config";
import { connect } from "mongoose";

const user = "e-commerce-g";
const password = "GmnY8JlkvdGIptGo";
const dbname = "e-commerce";
const uri = `mongodb+srv://${user}:${password}@cluster0.77awifd.mongodb.net/${dbname}?retryWrites=true&w=majority`;

async function dbConnect(): Promise<void> {
  await connect(uri)
    .then(() => console.log("Base de datos conectada"))
    .catch((e: any) => console.log(e));
}

export default dbConnect;
