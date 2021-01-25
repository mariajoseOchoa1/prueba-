/* eslint no-console:0 no-alert:0 */
import React from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'

const sizes = {
    default: `py-3 px-8`,
    lg: `py-4 px-12`,
    xl: `py-5 px-16 text-lg`
  };
export default class Mailchimp extends React.Component {
    
    state = {
        name: null,
        email: null,
    }

    _handleChange = e => {
        console.log({
            [`${e.target.name}`]: e.target.value,
        })
        this.setState({
            [`${e.target.name}`]: e.target.value,
        })
    }

    _handleSubmit = e => {
        e.preventDefault()

        console.log('submit', this.state)

        addToMailchimp(this.state.email, this.state)
            .then(({ msg, result }) => {
                console.log('msg', `${result}: ${msg}`)

                if (result !== 'success') {
                    throw msg
                }
                alert(msg)
            })
            .catch(err => {
                console.log('err', err)
                alert(err)
            })
    }

    render() {
        return (
            
            <div>
                <p className="text-white">Submit the form below and check your browser console!</p>
                <div>
                    <form onSubmit={this._handleSubmit}>
                        <input
                            type="text"
                            onChange={this._handleChange}
                            placeholder="Nombre"
                            name="FNAME"
                            className="rounded px-2 my-1 mr-4 w-48 text-sm"
                        />
                        <input
                            type="text"
                            onChange={this._handleChange}
                            placeholder="Apellido"
                            name="LNAME"
                            className="rounded px-2 my-1  w-48 text-sm"
                        />
                        <br />
                        <input
                            type="email"
                            onChange={this._handleChange}
                            placeholder="E-mail"
                            name="email"
                            className="rounded px-2 my-1 w-full text-sm"
                        />
                        <br/>
                        
                        <input type="submit" value="Suscribirse"
                            className={`
                                py-0 px-2
                                bg-secondary
                                hover:bg-secondary-darker
                                rounded
                                text-white
                                text-sm
                            `}/>
                    </form>
                </div>
            </div>
        )
    }
}