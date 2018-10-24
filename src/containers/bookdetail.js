import React from 'react'
import {connect} from 'react-redux'

class BookDetail extends React.Component{
    render(){

        if(!this.props.book){
            return(
                <div>
                    Select a book to start!
                </div>
            )
        }

        return(
            <div>
                <div>{this.props.book.title}</div>
                <div>No.of Pages:{this.props.book.pages}</div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return(
        {book:state.activeBook}
    )
}

export default connect(mapStateToProps)(BookDetail)