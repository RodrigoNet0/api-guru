# 📦 APIGuru

**APIGuru** é uma biblioteca JavaScript/TypeScript que simplifica requisições HTTP usando `fetch`, oferecendo uma interface intuitiva para consumir APIs RESTful com facilidade.

---

## 🚀 Instalação

Instale via **npm**:

```sh
npm install apiguru
Ou via yarn:

sh
Copiar
Editar
yarn add apiguru
📌 Como Usar
Exemplo básico:
ts
Copiar
Editar
import { apiGuru } from "apiguru";

async function getData() {
  try {
    const response = await apiGuru.get("https://api.example.com/data");
    console.log(response);
  } catch (error) {
    console.error("Erro ao buscar os dados:", error);
  }
}

getData();
Métodos disponíveis:
ts
Copiar
Editar
apiGuru.get(url, options);
apiGuru.post(url, body, options);
apiGuru.put(url, body, options);
apiGuru.delete(url, options);
⚙️ Configuração Global
Você pode definir uma URL base e headers padrão:

ts
Copiar
Editar
import { configureApiGuru } from "apiguru";

configureApiGuru({
  baseURL: "https://api.example.com",
  headers: {
    Authorization: "Bearer token",
    "Content-Type": "application/json",
  },
});
🛠️ Recursos
✅ Interface simples e intuitiva
✅ Suporte a métodos HTTP (GET, POST, PUT, DELETE)
✅ Configuração global de baseURL e headers
✅ Tratamento de erros embutido

📄 Licença
Este projeto está licenciado sob a MIT License. Consulte o arquivo LICENSE para mais detalhes.
