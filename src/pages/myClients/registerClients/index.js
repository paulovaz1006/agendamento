import React, {useState} from 'react';

const RegisterClients = () => {
    const [nome, setNome] = useState('');

    const closeModalRegisterClient = () => {
        let modal = document.querySelector('#modalRegisterClient');
        modal.style.display = 'none';
    }

    return(
        <div className="modal bd-example-modal-lg" id="modalRegisterClient">
            <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Cadastrar Novo Cliente</h5>
                        <button type="button" className="close" onClick={closeModalRegisterClient}>
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="row">
                                <div className="col col-md-6">
                                    <input className="form-control" placeholder="Nome Completo"
                                    value={nome}
                                    onChange={e => setNome(e.target.value)}/>
                                </div>
                                <div className="col col-md-6">
                                    <input className="form-control" placeholder="E-mail"
                                    value={nome}
                                    onChange={e => setNome(e.target.value)}/>
                                </div>
                                <div className="col col-md-6">
                                    <input className="form-control" placeholder="Telefone"
                                    value={nome}
                                    onChange={e => setNome(e.target.value)}/>
                                </div>
                                <div className="col col-md-6">
                                    <input placeholder="CEP"
                                        value={nome}
                                        onChange={e => setNome(e.target.value)}/>
                                </div>
                                <div className="col col-md-6">
                                    <input placeholder="RG"
                                        value={nome}
                                        onChange={e => setNome(e.target.value)}/>
                                </div>
                                <div className="col col-md-6">
                                    <input placeholder="CPF"
                                        value={nome}
                                        onChange={e => setNome(e.target.value)}/>
                                </div>
                                <div className="col col-md-6">
                                    <input placeholder="Endereço"
                                        value={nome}
                                        onChange={e => setNome(e.target.value)}/>
                                </div>
                                <div className="col col-md-6">
                                    <input placeholder="Número"
                                        value={nome}
                                        onChange={e => setNome(e.target.value)}/>
                                </div>
                                <div className="col col-md-6">
                                    <input placeholder="Bairro"
                                        value={nome}
                                        onChange={e => setNome(e.target.value)}/>
                                </div>
                                <div className="col col-md-6">
                                    <input placeholder="Cidade"
                                        value={nome}
                                        onChange={e => setNome(e.target.value)}/>
                                </div>
                                <div className="col col-md-6">
                                    <input placeholder="Estado"
                                        value={nome}
                                        onChange={e => setNome(e.target.value)}/>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer justify-content-between">
                        <button type="button" className="btn-secundary-schedule border-0" onClick={closeModalRegisterClient}>Cancelar</button>
                        <button type="button" className="btn-primary-schedule border-0">Cadastrar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterClients;