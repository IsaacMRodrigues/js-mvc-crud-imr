const formNewUser = {
  build: () => {
    const root = document.getElementById("root");
    const formTemplate = document.createElement("form");
    formTemplate.className = "form-control";
    formTemplate.setAttribute("id", "signForm");
    formTemplate.innerHTML = `
              <label for="nome" class="form-label">Nome</label> 
              <input class="form-control" type="text" id="nome" >
  
              <label for="idade" class="form-label">Idade</label>
              <input class="form-control" type="number" id="idade" >
  
              <label for="login" class="form-label">Login</label>
              <input class="form-control" type="text" id="login" >
  
              <label for="senha" class="form-label">Senha</label>
              <input class="form-control" type="password" id="senha" >
              
              <button id="btnSub" type="submit" class="btn btn-primary" style="margin-top: 20px;">Salvar</button>
              <p id="alerta" style="color: red;"></p>
              `;
    root.appendChild(formTemplate);
  },
  update: (user) => {
    nome.value = user.getNome();
    idade.value = user.getIdade();
    login.value = user.getLogin();
    senha.value = user.getSenha();
  },
};

export { formNewUser };
