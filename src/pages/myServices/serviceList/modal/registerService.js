import React, {useState} from 'react';

const RegisterService = () => {
    const [nome, setNome] = useState('');

    const closeModalRegisterService = () => {
        let modal = document.querySelector('#modalRegisterService');
        modal.style.display = 'none';
    }

    return(
        <div className="modal bd-example-modal-lg" id="modalRegisterService">
            <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Cadastrar Novo Serviço</h5>
                        <button type="button" className="close" onClick={closeModalRegisterService}>
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="row">
                                <div className="col col-md-6">
                                    <input className="form-control" placeholder="Nome do Serviço"
                                    value={nome}
                                    onChange={e => setNome(e.target.value)}/>
                                </div>
                                <div className="col col-md-6">
                                    <input className="form-control" placeholder="Valor"
                                    value={nome}
                                    onChange={e => setNome(e.target.value)}/>
                                </div>
                                <div className="col col-md-12">
                                    <input className="form-control" placeholder="Descrição"
                                    value={nome}
                                    onChange={e => setNome(e.target.value)}/>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer justify-content-between">
                        <button type="button" className="btn-secundary-schedule border-0" onClick={closeModalRegisterService}>Cancelar</button>
                        <button type="button" className="btn-primary-schedule border-0">Cadastrar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterService;