import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text } from 'native-base';
export default class StackedLabelExample extends Component {
    static navigationOptions = {
        header: null
    }
    render() {
        return (
            <Container>
                <Header />
                <Content>
                    <Form>
                        <Item stackedLabel>
                            <Label>Username</Label>
                            <Input />
                        </Item>
                        <Item stackedLabel last>
                            <Label>Password</Label>
                            <Input />
                        </Item>
                    </Form>
                    <Button style={{top: '2%'}} block warning>
                        <Text>Warning</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}