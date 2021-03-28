import React, { Component } from 'react';
import ErrorMessage from '../error-message';

import './post-add-form.css';

export default class PostAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
        this.onValueChange = this.onValueChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onValueChange(e) {
        const { text } = this.state;
        this.setState({
            text: e.target.value
        })
        if (text.length > 0) {
            this.setState({
                error: false
            })
        }
    }

    onSubmit(e) {
        e.preventDefault();
        const { onAdd } = this.props;
        const { text, error } = this.state;
        if (text.length > 0) {
            onAdd(text);
            this.setState({
                text: '',
                error: false
            })
            console.log(error);
        } else {
            this.setState({
                error: true
            })
            console.log(error);
        }
    }

    render() {
        const { error } = this.state;

        const errorMessage = error ? <ErrorMessage /> : null;

        return (
            <>
                <form
                    className="bottom-panel d-flex"
                    onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        placeholder="О чем вы думаете сейчас?"
                        className="form-control new-post-label"
                        onChange={this.onValueChange}
                        value={this.state.text}
                    />
                    <button
                        type="submit"
                        className="btn btn-outline-secondary">
                        Добавить
                </button>
                </form>
                {errorMessage}
            </>
        )
    }
}