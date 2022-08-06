<!-- modal telegram -->
<div id="modal-telegram" class="d-none myModal-content px-md-3">
  <h1 class="header-title mb-3">Entrar no Grupo</h1>
  <!-- form modal telegram -->
  <form>
    <div>
      <input required type="checkbox" class="float-left checkbox-position">
      <p class="mb-0">
        "Li e aceito os
        <a href="{{ '/#' | relative_url }}">
          termos de uso
        </a>
        do serviço. Me comprometo a respeitar o
        <a href="{{ '/#' | relative_url }}">
          manual de boas práticas
        </a>
        , inclusive não enviando aos demais participantes do grupo conteúdos inadequados ou que não tenham relação com os temas propostos."
      </p>
    </div>
    <div class="input-group mt-3 px-md-5">
      <div class="form-group col-6 px-1">
        <input Type="text" class="form-control" required placeholder="Nome">
      </div>
      <div class="form-group col-6 px-1">
        <input type="email" class="form-control" required placeholder="E-mail">
      </div>
    </div>
    <div class="d-flex justify-content-center">
      <button type="submit">
        <img src="{{ 'assets/images/modal-telegram.png' | relative_url }}" class="modal-img w-25">
        <span class="modal-icon-telegram font-hover font-weight-bold py-1 px-4">Entrar no Grupo</span>
      </button>
    </div>
  </form> <!-- form modal telegram -->
</div> <!-- end modal telegram -->