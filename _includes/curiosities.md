<div id="modal-curiosities" class="d-none myModal-content">
  <h1 class="header-title">Você sabe de curiosidades sobre o Mundo Animal?</h1>
  <p class="text-center mt-3 mb-4">
    Escreva e envie para toda a comunidade
  </p>
  <div class="mt-3 px-md-3">
    <form id="curiosities-form" class="px-md-4">
      <div class="form">
        <div class="row">
          <div class="input-group col-12 pb-2">
            <input class="form-control" type="url" placeholder="Apelido">
          </div>
          <div class="input-group col-4 mb-3 px-0">
            <input type="text" class="col form-control shadow-none ml-3 mr-2" required placeholder="Nome" name="name"/>
          </div>
          <div class="input-group col-4 mb-3 px-0">
            <input type="email" class="col form-control shadow-none mr-3" required placeholder="E-mail"/>
          </div>
          <div class="input-group col-4 mb-3 px-0">
            <input type="number" class="col form-control shadow-none mr-3" required placeholder="Whats"/>
          </div>
        </div>
        <div class="input-group col-12 mb-3 px-0">
          <textarea class="col form-control shadow-none" required placeholder="Escreva a curiosidade" rows="8"></textarea>
        </div>
        <div class="row pb-1">
          <div class="input-group col-8 pr-0">
            <input class="form-control" type="url" placeholder="Link">
          </div>
          <div class="col-4">
            <div class="input-group px-0">
              <input id="curiosities-submit" type="Submit" class="form-control btn" required value="Enviar" onclick="hideModal()"/>
            </div>
          </div>
        </div>
        <p class="text-modal-curiosities">
          cite as fontes de onde você tirou a informação, separando-as por vírgula
        </p>
      </div>
    </form>
  </div>
</div>