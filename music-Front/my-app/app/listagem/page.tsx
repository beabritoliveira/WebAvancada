'use serve'
import { Login } from "../login/uploading";
import Home from "../page";
async function Requisicao() {
  const res = await fetch('http://localhost:5000/musicAlbum')
  return res.json()
}

export default async function Page() {
  const data = await Requisicao()
  
}
