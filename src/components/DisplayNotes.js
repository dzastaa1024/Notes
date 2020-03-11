import React, { Component } from 'react';
import { Button, Card, Form, TextArea } from 'semantic-ui-react'
import moment from 'moment';


class DisplayNotes extends Component {

    state = {
        isEdit: false,
    }


    handleClick = (noteId) => {
        this.props.removeNote(noteId);
    }

    handleEdit = () => {
        this.setState({
            isEdit: !this.state.isEdit,
        })
    }


    render() {
        return (
            <Card.Group>
                {this.props.notes.map((note) => {
                    return (
                        <Card key={note.id}>
                            <Card.Content>
                                <Card.Header>{note.author}</Card.Header>
                                <Card.Meta>
                                    <span className='date'>{moment(note.createdAt).format("DD/MM/YYYY")}</span>
                                </Card.Meta>
                                {this.state.isEdit ? (
                                    <Form>
                                        <TextArea value={note.note} />
                                    </Form>
                                ) : (
                                        <Card.Description>
                                            {note.note}
                                        </Card.Description>
                                    )}
                            </Card.Content>
                            <Card.Content extra>
                                <div className='ui two buttons'>
                                    <Button basic color='green' onClick={this.handleEdit}>
                                        Edit
                                    </Button>
                                    <Button basic color='red' onClick={() => this.handleClick(note.id)}>
                                        Delete
                                    </Button>
                                </div>
                            </Card.Content>
                        </Card>
                    )
                })}

            </Card.Group>
        );
    }
}

export default DisplayNotes;