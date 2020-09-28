import React, {useState, useEffect}from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const ContactForm = (props) => {
    const initialValues = {
        name:'',
        age:'',
        status:'',
        cpf:'',
        city:'',
        state:''
    }

    const [value, setValue]=useState(initialValues);

    const handleInputChange = e => {
        const {name,value} = e.target
        setValue({
            ...value,
            [name]: value
        })
    }

    const handleFormSubmit = e => {
        e.preventDefault();
        props.addOrEdit(value);
    }

    return(
<Form onSubmit={handleFormSubmit}>
    <Form.Group controlId="formGridName" value={value.name} onChange={handleInputChange}>
      <Form.Label>Nome </Form.Label>
      <Form.Control type="name" placeholder="full Name" />
    </Form.Group>

  <Form.Row>
    <Form.Group controlId="formGridAge" value={value.age} onChange={handleInputChange}>
      <Form.Label>Idade</Form.Label>
      <Form.Control type="age" placeholder="Age" />
    </Form.Group>

    <Form.Group controlId="formGridStatus" value={value.status} onChange={handleInputChange}>
        <Form.Label>Estado civil</Form.Label>
        <Form.Control placeholder="Married, Single" />
    </Form.Group>

    <Form.Group controlId="formGridCpf" value={value.cpf} onChange={handleInputChange}>
        <Form.Label>CPF</Form.Label>
        <Form.Control placeholder="Document" />
    </Form.Group>
  </Form.Row>

  <Form.Row>
    <Form.Group controlId="formGridCity" value={value.city} onChange={handleInputChange}>
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group controlId="formGridZip" value={value.state} onChange={handleInputChange}>
      <Form.Label>Estado</Form.Label>
      <Form.Control />
    </Form.Group>
  </Form.Row>   
  
    <Button as="input" type="submit" value="Save" />
</Form>



    )
}

export default ContactForm;