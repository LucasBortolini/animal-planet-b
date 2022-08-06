<!-- modal email -->
<div id="modal-email" class="d-none myModal-content email-modal px-md-3">
  <h1 class="header-title">Cadastrar E-mail</h1>
  <form>
    <div class="d-flex justify-content-center">
      <input required type="checkbox" class="float-left checkbox-position">
      <p class="mb-0 mt-3">
        Li e aceito os
        <a href="{{ '/termos-de-uso.html' | relative_url }}">
          termos de uso
        </a>
        do serviço.
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
    <div class="d-flex justify-content-center pt-2">
      <button type="submit">
        <img src="{{ 'assets/images/modal-mail.png'  | relative_url }}" class="modal-img w-25">
        <span class="modal-icon-email font-hover font-weight-bold py-2 px-4">Receber por E-mail</span>
      </button>
    </div>
  </form>
</div> <!-- end modal email -->