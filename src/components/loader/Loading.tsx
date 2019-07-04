import * as React from 'react';
import {LoadingComponentProps } from 'react-loadable';
import Loader from 'react-loader-spinner'


export default class Loading extends React.Component<LoadingComponentProps, {}> {
    render() {
        return(
            <Loader
                type="Puff"
                color="#00BFFF"
                height="500"
                width="500"
            />
        );
    }
}



