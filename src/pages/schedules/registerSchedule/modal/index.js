import React from 'react';

const RegisterSchedule = () => {

    const RegisterSchedule = () => {
        let modal = document.querySelector('#modalRegisterSchedule');
        modal.style.display = 'none';
    }

    return(
        <div className="modal bd-example-modal-lg" id="modalRegisterSchedule">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Agendar Cliente:</h5>
                        <button type="button" className="close" onClick={RegisterSchedule}>
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <label>Nome do Cliente</label>
                            <input type="text" className="mb-4"/>
                            <label>Data</label>
                            <input type="date" className="mb-4"/>
                            <label>Serviço</label>
                            <select>
                                <option>Selecione</option>
                                <option>Selecione</option>
                                <option>Selecione</option>
                            </select>
                        </form>
                    </div>
                    <div className="modal-footer justify-content-between">
                        <button type="button" className="btn-secundary-schedule border-0" onClick={RegisterSchedule}>Cancelar</button>
                        <button type="button" className="btn-primary-schedule border-0">Confirmar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterSchedule;