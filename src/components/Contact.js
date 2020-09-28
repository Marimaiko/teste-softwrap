import React from 'react';
import ContactForm from './ContactsForm';
import Jumbotron from 'react-bootstrap/Jumbotron'
import 'bootstrap/dist/css/bootstrap.min.css';
import fireDB from '../firebase'

const Contacts = () => {

    const addOrEdit = obj => {
        fireDB.child('contacts').push(
            obj,
            err => {
                if(err) 
                {console.log(err)}
            }
        )
    }

    return (
        <React.Fragment>
<Jumbotron fluid>
    <h1>Fluid jumbotron</h1>
    <p>
      This is a modified jumbotron that occupies the entire horizontal space of
      its parent.
    </p>
</Jumbotron>
    <div className='row'>
        <div class="col-md-8">
        <ContactForm addOrEdit={addOrEdit} />
        </div>
    </div>
    <div className='col-md-5'>
        <div> Lista de contatos</div>
    </div>
    </React.Fragment>
    )

}

export default Contacts;