import React, { Component } from 'react'
import { Card, Image } from 'semantic-ui-react'

export default class productList extends Component {
    render() {
        return (
            <div>
                <Card.Group stackable centered itemsPerRow={4} style={{margin: '0 auto'}}>
                    <Card>
                        <Card.Header>Test Product</Card.Header>
                        <Card.Content><img src='https://upload.wikimedia.org/wikipedia/commons/d/de/Cinnamomum_verum_spices.jpg' style={{maxWidth: '200px', maxHeight: '300px'}}  /></Card.Content>
                        <Card.Description>Test Desc</Card.Description>
                    </Card>
                    <Card>
                        <Card.Header>Test Product</Card.Header>
                    </Card>
                    <Card>
                        test
                    </Card>
                    <Card>
                        test
                    </Card>
                    <Card>
                        test
                    </Card>
                    <Card>
                        test
                    </Card>
                    <Card>
                        test
                    </Card>
                    <Card>
                        test
                    </Card>
                    <Card>
                        test
                    </Card>
                    <Card>
                        test
                    </Card>
                </Card.Group>
            </div>
        )
    }
}
