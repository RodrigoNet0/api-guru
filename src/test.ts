import { ApiClient } from "./index";

const api = new ApiClient("https://jsonplaceholder.typicode.com");

async function test() {
  try {
    const users = await api.get("/users");
    console.log(users);
  } catch (error) {
    console.error("Erro ao buscar usuários:", error);
  }
}

test();
