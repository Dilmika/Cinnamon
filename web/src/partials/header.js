import React, { Component } from 'react'
import { Menu, Input, Button } from 'semantic-ui-react'
import './header.css';

export default class header extends Component {
    state = {
        activeItem: window.location.pathname
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name },() => window.location.href = name === 'home' ? '/' : '/'+name)

    render() {
        console.log(window.location.pathname);

        const { activeItem } = this.state

        return (
                <Menu pointing stackable size='massive' style={{border: 'none'}} attached >
                <Menu.Header>
                <img src='./images/AppLogo.jpeg' width='120px' height='100%' />
                </Menu.Header>
                    <Menu.Item
                        name='home'
                        active={activeItem === '/'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='ourProducts'
                        active={activeItem === '/ourProducts'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='shop'
                        active={activeItem === '/shop'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='aboutUs'
                        active={activeItem === '/aboutUs'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item>
                        <Input className='icon' icon='search' placeholder='Search...' />
                    </Menu.Item>
                        <Button color='brown' style={{height: '45px', alignSelf: 'center'}} size='large'>Sign Up</Button>
                        <Button color='brown' style={{height: '45px', alignSelf: 'center'}} size='large' >Log in</Button>
                </Menu>
        )
    }
}