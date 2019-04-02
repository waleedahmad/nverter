import React, {Fragment} from "react";
import {Component} from 'react';
import toastr from 'toastr';
import "./Encoder.scss";
import Progress from "./Progress";
import Cookie from 'js-cookie';
import socketIOClient from 'socket.io-client';


export default class Encoder extends Component {
    constructor(props){
        super(props);
        this.state = {
            file: props.file,
            encoded_file: '',
            convert_ext: props.convert_ext,
            progress: 0,
            eta: '',
        }
    }

    componentDidMount(){
        this.socket = socketIOClient('ws://127.0.0.1:'+location.port);

        this.socket.emit('encode', {
            file : this.state.file,
            user : Cookie('_uid'),
            convert_ext : this.state.convert_ext
        });

        this.socket.on('progress', function (data) {
            this.setState({
                progress : data.percentage,
                eta : data.eta
            });
        }.bind(this));

        this.socket.on('complete', function (data) {
            this.setState({
                encoded_file : data.encoded_file
            });
            toastr.success('Encoding complete');
        }.bind(this));
    }

    componentWillUnmount(){
        this.socket.disconnect();
        this.props.newEncode();
    }

    render(){
        let filename = this.state.file;
        return (
            <div className="encoder">
                <h3>
                    {filename.substring(filename.indexOf('_') + 1)} <br/>
                    <small>
                        ETA : {this.state.eta.trim().length ? this.state.eta : 'calculating ... ' }
                    </small>
                </h3>
                <Progress title="" progress={this.state.progress}/>

                {this.state.encoded_file ? (
                    <div>
                        <a href={ '/encoded/' + Cookie('_uid') + '/' + this.state.encoded_file}
                            download>
                            <button>Download</button>
                        </a>

                        <button onClick={this.props.newEncode}>New Upload</button>
                    </div>
                ) : <button onClick={this.props.newEncode}>Cancel Encoding</button>}
            </div>
        )
    }
}
