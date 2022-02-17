# feeling.

Esta plataforma foi um trabalho em equipe realizado pelos desenvolvedores:
- Boris Gaibor - Quality Assurance
- Daniel Mateus Satiro - Quality Assurance
- Guilherme Couto - Tech Leader
- Inti Ferreira - Product Owner
- Pedro Basilio - Scrum Master

Através de uma api já pré-desenvolvida e posteriormente adaptada pelos integrantes da equipe de acordo com suas necessidades foi criada uma plataforma motivacional que busca diversas frases como forma de gerar um ânimo para quem quer que a utilize.

***Obs.:** Projeto de conclusão do curso de Front End da Kenzie Academy apresentado em 04 de julho de 2022.*

### Vídeo de Apresentação da plataforma feeling. 
[![APRESENTACAO PLATAFORMA FEELING.](https://img.youtube.com/vi/P02ulthnT6k/0.jpg)](https://www.youtube.com/watch?v=P02ulthnT6k)

Esta é a versão do Front end desenvolvido em **React** com algumas últimas refatorações realizadas por Daniel Mateus Satiro após fork do projeto original no github. https://feeling-eight.vercel.app/

### Algumas features:
- A chave de autenticação expira dentro de 1 hora, sendo que a página forçará o logout do usuário após este período;
- Após o primeiro cadastro o usuário já é logado, sendo necessário fazer login somente quando ele voltar a visitar a página;
- A cada login o usuário recebe uma frase aleatória, mas pode solicitar qualquer outra, se desejar;
- Cada frase pode ser favoritada pelo usuário;
- Cada frase possui uma página de discussão. O usuário pode criar comentários, bem como deletar e alterar seus próprios comentários;
- O usuário também pode fazer pesquisas direcionadas sobre as frases através do título e se não encontrar correspondência, pelo nome do autor.

### Tecnologias utilizadas:
- `Chakra UI`.
- `Context API para os providers`
- `@chakra-ui/react`
- `@emotion/styled`
- `framer-motion`
- `axios`
- `yup`
- `react-hook-form`
- `@hookform/resolvers`
- `emotion`
- `react-router-dom@5`
- `react-icons`
- `Vercel`

Este é o endpoint da API utilizada já com um endereço atualizado: https://feeling-api-q2-g1-jul21.herokuapp.com/

Esta é uma documentação provisória da API que foi desenvolvida utilizado-se do Insomnia: https://feeling-api-q2-g1-jul21.vercel.app/
