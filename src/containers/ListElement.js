import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd';

import { ItemTypes } from '../constants';

const listElementSource = {
    beginDrag(props) {
        const { item, listType} = props;
        
        return {
            id: item.id, 
            name: item.name, 
            listType: listType
        };
    }
};

function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    }
}

class ListElement extends Component {
    render() {
        const { connectDragSource, isDragging } = this.props;

        return connectDragSource(
            <li style={{
                opacity: isDragging ? 0.5 : 1,
                fontSize: 25,
                fontWeight: 'bold',
                cursor: 'move'
            }}>
                {this.props.children}
            </li>
        );
      }
}

ListElement.propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired
};

export default DragSource(ItemTypes.PROS_CONS_ITEM, listElementSource, collect)(ListElement);