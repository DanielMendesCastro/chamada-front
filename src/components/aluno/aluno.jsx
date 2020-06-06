import React, { Component } from 'react'
import axios from 'axios'
import Main from '../template/Main'

const headerProps = {
    icon: 'users',
    title: 'Cadastro de Aluno',
    subtitle: 'Cadastro de Alunos'
}


const baseUrl = 'http://localhost:3001/students'
const initialState = {
    user: { name: '', email: '' },
    list: []

}


export default class UserCrud extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...initialState,
            file: '',
            imagePreviewUrl: ''
        };
        this._handleImageChange = this._handleImageChange.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
    }

    // state = {...initialState}

    
    componentWillMount() {
        axios(baseUrl).then(resp => { // Consulta trará os alunos já cadastrados
            this.setState({ list: resp.data }) // guardando os alunos
        })
    }

    clear() {
        this.setState({ user: initialState.user })
    }

    save() { // Incluindo novo aluno ou alterando aluno existente
        const user = this.state.user // obtendo aluno
        const method = user.id ? 'put' : 'post'
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl
        axios[method](url, user)
            .then(resp => {
                const list = this.getUpdatedList(resp.data)
                this.setState({ user: initialState.user, list })
            })
    }

    getUpdatedList(user, add = true) {
        const list = this.state.list.filter(u => u.id !== user.id)
        if (add) list.unshift(user)
        return list
    }

    updateField(event) {
        const user = { ...this.state.user }
        user[event.target.name] = event.target.value
        this.setState({ user })
    }

    _handleSubmit(e) {
        e.preventDefault();
        // TODO: Realizar envio foto
    }

    _handleImageChange(e) {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
        }

        reader.readAsDataURL(file)
    }

    renderForm() {
        let { imagePreviewUrl } = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
            $imagePreview = (<img className="imgPreview" src={imagePreviewUrl} />);
        }
        return (
            <div className="form">

                <div className="row">
                <div className="col-8">
                        {$imagePreview}
                    </div>                                  
                </div>
                <div className="row">
                <div className="col-12 col-md-4">
                        <input type="file" className="fileInput" onChange={this._handleImageChange} />
                    </div>                                  
                </div>
                
                <div className="row mt-4">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Nome</label>
                            <input type="text" className="form-control"
                                name="name"
                                value={this.state.user.name}
                                onChange={e => this.updateField(e)}
                                placeholder=" Digite o Nome do Aluno"
                            />
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>E-mail</label>
                            <input type="text" className="form-control"
                                name="email"
                                value={this.state.user.email}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o e-mail do aluno" />
                        </div>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-6">
                        <div className="form-group">
                            <label>Aluno Ativo:</label>
                            <input type="checkbox" 
                                name="active"
                                value={this.state.active}
                                onChange={e => this.updateField(e)}
                            />
                        </div>
                    </div>
                </div>


                <hr />
                <div className="row">
                    <div className="col-12 d-flex justify-content-end"> 
                        <button className="btn btn-primary" onClick={e => this.save(e)}> 
                            Salvar
                        </button>
                        <button className="btn btnsecondary ml-2" onClick={e => this.clear(e)}>
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    load(user) {
        this.setState({ user })
    }

    remove(user) {
        axios.delete(`${baseUrl}/${user.id}`).then(resp => {
            const list = this.getUpdatedList(user, false)
            this.setState({ list })
        })
    }

    renderTable() {
        return (
            <table className="table mt-4"> 
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Ativo</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }

    renderRows() {
        return this.state.list.map(user => { 
            return ( 
                <tr key={user.id}> 
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                        <button className="btn btn-warning" onClick={() => this.load(user)}> 
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button className="btn btn-danger ml-2" onClick={() => this.remove(user)}> 
                            <i className="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>
            )
        })
    }

    render() {
        return (
            <Main {...headerProps}>
                {this.renderForm()} 
                {this.renderTable()}
            </Main>
        )
    }
}