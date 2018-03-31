import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DropTarget } from 'react-dnd';

import ListElement from './ListElement';
import { ItemTypes } from '../constants';

const listTarget = {
    canDrop(props, monitor) {
        return monitor.getItem().name;
    },

    drop(props, monitor) {
        props.onDrop(monitor.getItem(), props.listType);
    }
};

function collect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget()
    };
}

class List extends Component {
    updateValue = (event, item) => {
        this.props.onListItemChange({id: item.id, name: event.target.value}, this.props.listType)
    }

    render() {
        const { connectDropTarget, list, listType, title } = this.props;

        let content = '';
        if(list && list.length) {
            content = connectDropTarget(
                <ol>
                    {list.map(item => 
                    <ListElement listType={listType} item={item} key={item.id}>
                        <input 
                            value={item.name}
                            onChange={(event) => this.updateValue(event,item)}
                            />
                    </ListElement>
                    )}
                </ol>)
        }
        
        return (
            <div className="list-div">
                <h1>{title}</h1>
                {content}            
            </div>             
        )
    }
}

List.propTypes = {
    connectDropTarget: PropTypes.func.isRequired
};
  
export default DropTarget(ItemTypes.PROS_CONS_ITEM, listTarget, collect)(List);