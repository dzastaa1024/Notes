import React, { Component } from 'react';
import { Button, Card } from 'semantic-ui-react'
import moment from 'moment';


class DisplayNotes extends Component {

    state = {}


    handleClick = (noteId) => {
        this.props.removeNote(noteId);
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
                                <Card.Description>
                                    {note.note}
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <div className='ui two buttons'>
                                    <Button basic color='green'>
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