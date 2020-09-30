import React, { useState, useEffect } from 'react';
import ContactForm from './ContactsForm';
import Jumbotron from 'react-bootstrap/Jumbotron'
import 'bootstrap/dist/css/bootstrap.min.css';
import fireDB from '../firebase'
import Table from 'react-bootstrap/Table'
import logo from './logo.png'


const Contacts = () => {

    const [contactObj, setContactObj]= useState({});
    const [currentID, setCurrentID]= useState('');

    useEffect(() => {
        const unsubscribe = fireDB.child('contacts').on('value', snapshot =>{
            if (snapshot.val() != null)
            setContactObj({ 
                ...snapshot.val()
            })
        })
        return unsubscribe;
    }, [])

    const addOrEdit = obj => {
        if(currentID =='')
        fireDB.child('contact').push(
            obj,
            err => {
                if(err) 
                    {console.log(err)}
                else
                    {setCurrentID('')}
            }
        )
        else
        fireDB.child(`contact/${currentID}`).set(
            obj,
            err => {
                if (err)
                    console.log(err)
                else
                    setCurrentID('')
            }
        )
    }
    const onDelete = id => {
        if (window.confirm('Tem certeza que quer deletar?')) {
            fireDB.child(`contacts/${id}`).remove(
                err => {
                    if (err)
                        console.log(err)
                    else
                        setCurrentID('')
                })
        }
    }

    return (
        <React.Fragment>
<Jumbotron fluid 
    style={{
        backgroundColor:"#fff",
        border: "3px solid #087cfa",
        borderRadius:10
        }}>
    <img src={logo}/>
    <h1>Tabela de dados</h1>
    <p>Processo seletivo da Softwrap</p>
</Jumbotron>

    <div className='row'>
        <div class="col-md-20">
        <ContactForm {...({ currentID, contactObj, addOrEdit })} />
        </div>
    </div>

    <div className='col-md-80'>
    <Table striped bordered hover >
  <thead>
    <tr>
      <th>Nome</th>
      <th>Idade</th>
      <th>Estado civil</th>
      <th>CPF</th>
      <th>Cidade</th>
      <th>Estado</th>
    </tr>
  </thead>
  <tbody>
    {
    Object.keys(contactObj).map((key) => (
        <tr key={key}>
            <td>{contactObj[key].name}</td>
            <td>{contactObj[key].age}</td>
            <td>{contactObj[key].status}</td>
            <td>{contactObj[key].cpf}</td>
            <td>{contactObj[key].city}</td>
            <td>{contactObj[key].state}</td>

            <td className="bg-light">
                <a className="btn text-primary" onClick={() => { setCurrentID(key) }}>
                    <i className="fas fa-pencil-alt"></i>
                </a>
                <a className="btn text-danger" onClick={() => { onDelete(key) }}>
                    <i className="far fa-trash-alt"></i>
                </a>
            </td>
        </tr>
    ))
    }
  </tbody>
</Table>    </div>
    </React.Fragment>
    )

}

export default Contacts;