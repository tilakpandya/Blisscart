import React, { useState } from 'react'
import { Form, Button, FormControl, InputGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'
import { MDBContainer } from "mdb-react-ui-kit";

function SearchBox({history}) {
    const [keyword, setKeyword] = useState('')

    //let history = useHistory()
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault()
        if (keyword) {
            navigate(`/?keyword=${keyword}&page=1`)
        } else {
            navigate(navigate(history.location.pathname))
        }
    }
    return (
        <Form onSubmit={submitHandler} inline>
            {/* <InputGroup className="mb-3">
                <FormControl
                    type='text'
                    name='q'
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="basic-addon2"
                />
                <InputGroup.Append>
                    <Button type='submit' variant='outline-success'>
                        <i className="fas fa-search"></i>
                    </Button>
                </InputGroup.Append>
            </InputGroup> */}
            <MDBContainer className="py-6">
            <input
                type="text"
                className="search-hover"
                placeholder="search here..."
                name='q'
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                aria-label="Search"
                aria-describedby="basic-addon2"
            />
            </MDBContainer>
        </Form>
    )
}

export default SearchBox