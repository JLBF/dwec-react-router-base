import { useEffect, useState } from "react";
import { getCosas } from "../services/usuarios.service";

export default function MisCosas() {
  const [cosas, setCosas] = useState([]);

  const fetchCosas = async()=>{
    const token = localStorage.getItem("token");
    setCosas(await getCosas(token))
  }

  console.log(fetchCosas());
  useEffect(() => {
    fetchCosas();
  }, []);

  return <h1>Mis cosas</h1>;
}
