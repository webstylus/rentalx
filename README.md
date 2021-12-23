# API NodeJS RentX

API Restful com conceitos de SOLID implementados

### Cadastro de carros

**RF**

- Deve ser possível cadastrar um novo carro.
- Deve ser possível listar todas as categorias.

**RN**

- Não deve ser possível cadastrar um carro com uma placa já existente.
- Não deve ser possível alterar a placa de um carro ja cadastrado.
- O carro deve ser cadastrado com disponibilidade `true` por padrão.
- O usuário responsável pelo cadastro deve ser um administrador.

### Listagem de carros

**RF**

- Deve ser possível listar todos os carros disponíveis.
- Deve ser possível listar todos os carros disponíveis pelo nome da marca.
- Deve ser possível listar todos os carros disponíveis pelo nome do carro.

**RN**

- O usuário não precisa estar logado no sistema.

### Cadastro de especificação no carro

**RF**

- Deve ser possível cadastrar uma especificação para um carro.
- Deve ser possível listar todas as especificações.
- Deve ser possível listar todos os carros.

**RN**

- Não deve ser possível cadastrar uma especificação para um carro não cadastrado.
- Não deve ser possível cadastrar uma especificação já existente para o mesmo carro.
- O usuário responsável pelo cadastro deve ser um administrador.

### Cadastro de imagens do carro

**RF**

- Deve ser possível cadastrar a imagem do carro.
- Deve ser possível listar todos os carros.

**RNF**

- Utilizar o multer para upload dos arquivos

**RN**

- O usuário deve poder cadastrar mais de uma imagem para o mesmo carro.
- O usuário responsável pelo cadastro deve ser um administrador.

### Aluguel de carro

**RF**

- Deve ser possível cadastrar um aluguel.

**RN**

- O aluguel deve ter duração mínima de 24 horas.
- Não deve ser possível cadastrar um novo aluguel caso ja exista um aberto para o mesmo usuário.
- Não deve ser possível cadastrar um novo aluguel caso ja exista um aberto para o mesmo carro.

Bibliotecas usadas

- [express](https://www.npmjs.com/package/express)
- [uuid](https://www.npmjs.com/package/uuid)
- [multer](https://www.npmjs.com/package/multer)
- [csv-parse](https://www.npmjs.com/package/csv-parse)
- [swagger-ui-express](https://www.npmjs.com/package/swagger-ui-express)
- [swagger-ui-themes]()
- [typeorm](https://typeorm.io/#/)
- [tsyringe](https://github.com/microsoft/tsyringe)
- [reflect-metadata]()
- [bcryptjs](https://www.npmjs.com/package/bcryptjs)
- [pg]()
- [ts-node-dev]()
- [jsonwebtoken]()
- [express-async-erros]()
- [eslint]()
- [prettier]()
- [jest]()
- [ts-jest]()
- [tsconfig-paths]()
