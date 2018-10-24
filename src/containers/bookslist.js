import React from 'react'
import {connect} from 'react-redux'
import {selectBook} from '../actions/index'
import {bindActionCreators} from 'redux'

class BooksList extends React.Component {

    renderBooksList(){
        return this.props.books.map( book=> <li key={book.title} onClick={()=>this.props.selectBook(book)} className='list-group-item'>{book.title}</li>)
        }

    render(){console.log(this.props.selectBook)
        return(
            <ul className='list-group col-sm-4'>{this.renderBooksList()}</ul>
        )
    }
}

function mapStateToProps (state){
    return{
        books : state.books
    }
}

function mapDispatchToProps (dispatch){
    return (
        bindActionCreators({ selectBook:selectBook },dispatch)
    )
}

export default connect(mapStateToProps,mapDispatchToProps)(BooksList)