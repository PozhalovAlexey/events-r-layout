import React from 'react';
import IconSwitch from './IconSwitch';
import ListView from './ListView';
import CardsView from './CardsView';

export default class Store extends React.Component {
    constructor(props) {
        super(props)
        this.products = props.products;
        this.state = {icon: 'view_list'};
        this.click = this.click.bind(this);
    }

    click() {
        if (this.state.icon === 'view_list') {
            this.setState(() => {
                return {icon: 'view_module'}
            })
        }
        if (this.state.icon === 'view_module') {
            this.setState(() => {
                return {icon: 'view_list'}
            })
        }
    }

    render() {
        return (
            <div className='wrapper'>
                <IconSwitch icon={this.state} onSwitch={this.click}/>
                {this.state.icon === 'view_list' ? <ListView items={this.products}/> :
                    <CardsView cards={this.products}/>}
            </div>
        )
    }
}