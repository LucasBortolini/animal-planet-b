<!-- modal curiosities -->
<div id="modal-curiosities" class="d-none myModal-content">
  <!-- text modal curiosities -->
  <h1 class="header-title">Você sabe de curiosidades sobre o Mundo Animal?</h1>
  <p class="text-center mt-3 mb-4">
    Escreva e envie para toda a comunidade
  </p> <!-- end text modal curiosities -->
  <div class="mt-3 px-md-3">
    <!-- form modal curiosities -->
    <form id="curiosities-form" class="px-md-4">
      <div class="form">
        <div class="row">
          <!-- input nickname -->
          <div class="input-group col-12 pb-2">
            <input class="form-control" type="url" placeholder="Apelido">
          </div> <!-- end input nickname -->
          <!-- input name -->
          <div class="input-group col-4 mb-3 px-0">
            <input type="text" class="col form-control shadow-none ml-3 mr-2" required placeholder="Nome" name="name"/>
          </div> <!-- input name -->
          <!-- input email -->
          <div class="input-group col-4 mb-3 px-0">
            <input type="email" class="col form-control shadow-none mr-3" required placeholder="E-mail"/>
          </div> <!-- input email -->
          <!-- input whatsapp -->
          <div class="input-group col-4 mb-3 px-0">
            <input type="number" class="col form-control shadow-none mr-3" required placeholder="Whats"/>
          </div> <!-- input whatsapp -->
        </div>
        <!-- input type curiosities -->
        <div class="input-group col-12 mb-3 px-0">
          <textarea class="col form-control shadow-none" required placeholder="Escreva a curiosidade" rows="8"></textarea>
        </div> <!-- end input type curiosity -->
        <div class="row pb-1">
          <!-- input link -->
          <div class="input-group col-8 pr-0">
            <input class="form-control" type="url" placeholder="Link">
          </div> <!-- input link -->
          <div class="col-4">
            <!-- btn modal curiosities -->
            <div class="input-group px-0">
              <input id="curiosities-submit" type="Submit" class="form-control btn" required value="Enviar" onclick="hideModal()"/>
            </div> <!-- end btn modal curiosities -->
          </div>
        </div>
        <p class="text-modal-curiosities">
          cite as fontes de onde você tirou a informação, separando-as por vírgula
        </p>
      </div>
    </form> <!-- form modal curiosities -->
  </div>
</div> <!-- end modal curiosities -->