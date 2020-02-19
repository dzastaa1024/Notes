import React, { Component } from 'react';
import { Button, Card } from 'semantic-ui-react'


class DisplayNotes extends Component {

    state = {}



    render() {
        return (
            <Card.Group>
                {this.props.notes.map((note) => {
                    return (
                        <Card key={note.id}>
                            <Card.Content>
                                <Card.Header>{note.author}</Card.Header>
                                <Card.Description>
                                    {note.note}
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <div className='ui two buttons'>
                                    <Button basic color='green'>
                                        Edit
                        </Button>
                                    <Button basic color='red'>
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