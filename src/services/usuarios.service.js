
const API = `${import.meta.env.VITE_APP_API_HOST}`;

const login = async (alias, password) => {
  /*
    fetch("http://localhost:8080/api/usuarios/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ alias, password }),
    })
      .then((data) => data.json())
      .then((json) => {
        localStorage.setItem("token", json.token);
      });
        */
  const data = await fetch(`${API}/usuarios/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ alias, password }),
  });
  const json = await data.json();
  localStorage.setItem("token", json.token);
};

const registro = async(alias, password)=>{
  /**    
      fetch("http://localhost:8080/api/usuarios/registro", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ alias, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      }); */

  const res = await fetch(`${API}/usuarios/registro`, {
    method: "POST",
    headers:{
      "Content-Type": "application/json"
    },
    body: JSON.stringify({alias, password})
  });
  const json = await res.json()
  console.log(json);
  return json
}

const getCosas = async(token)={
  /**  fetch("http://localhost:8080/api/cosas", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setCosas(data);
        console.log(data);
      }); */
  /**terminar metodo get */
  
}
export { login, registro, getCosas };
