import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import { addItem, getList, editItem, deleteItem } from '../redux/actions/prosConsList';
import { createItem } from '../services';
import List from './List';
import { PROS, CONS} from '../constants';

class ProsCons extends Component {

    onListItemChange = (item, listType) => {
        let changedItem = this.props[listType];
        if(!item.name) {
            this.props.deleteItem(item.id, listType);
        } else {
            this.props.updateList(item, listType);

            if(item.id === changedItem[changedItem.length -1].id && item.name !== '') {
                this.props.addToList("", listType);
            }
        }
    }

    onDrop = (dragedItem, target) => {
        let lastTargetListItem = this.props[target][this.props[target].length - 1];

        this.props.deleteItem(dragedItem.id, dragedItem.listType);
        this.props.updateList({id: lastTargetListItem.id, name: dragedItem.name}, target);
        this.props.addToList("", target);
    }

    componentDidMount() {
        this.props.getList();

        this.props.addToList("", PROS);
        this.props.addToList("", CONS);
    }

    render() {
        let { cons, pros } = this.props;

        return (
            <div className='flex-container'>
                <div className='flex-title'>
                    Should I eat at McDonalds?
                </div>
                <div className='flex-list'>
                    <List listType={PROS} title="Pros" list={pros} onListItemChange={this.onListItemChange} onDrop={this.onDrop} />
                </div>
                <div className='flex-list'>
                    <List listType={CONS} title="Cons" list={cons} onListItemChange={this.onListItemChange} onDrop={this.onDrop} />
                </div>
            </div>
        );        
    }
}

const mapStateToProps = state => {
    return {
        pros: state.prosConsList.pros,
        cons: state.prosConsList.cons
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addToList: (name, typeList) => {
            dispatch(addItem(createItem(name), typeList));
        },
        updateList: (item, typeList) => {
            dispatch(editItem(item, typeList));
        },
        getList: typeList => {
            dispatch(getList(typeList));
        },
        deleteItem: (item, typeList) => {
            dispatch(deleteItem(item, typeList));
        },
    }
}



export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DragDropContext(HTML5Backend)(ProsCons));
