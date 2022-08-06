<!-- modal indicate -->
<div id="modal-indicate" class="d-none myModal-content px-md-3">
  <h1 class="header-title">Indique!</h1>
  <p class="text-center mb-4">
    Indicar Amigos para se juntarem ao nosso grupo!
  </p>
  <!-- form modal indicate -->
  <form method="POST" action="" class="px-md-5">
    <div class="form px-md-3">
      <div class="row">
        <div class="input-group col-6 mb-3 px-0">
          <input type="text" class="form-control shadow-none ml-3 mr-2" required placeholder="Nome"/>
        </div>
        <div class="input-group col-6 mb-3 px-0">
          <input type="email" class="form-control shadow-none mr-3" required placeholder="E-mail"/>
        </div>
      </div>
      <div class="row">
        <div class="input-group col-6 mb-3 px-0">
          <input type="cel" class="form-control shadow-none ml-3 mr-2" required placeholder="whatsapp"/>
        </div>
        <div class="input-group col-6 px-0 my-0 pr-3">
          <input type="Submit" id="indicate-success" required value="Enviar" onclick="hideModal()" class="col form-control btn"/>
        </div>
      </div>
    </div>
  </form> <!-- end form modal indicate -->
</div> <!-- end modal indicate -->