import React, { Component } from 'react';

class Description extends Component {
    render() {
        const localization = this.props.localization;
        const desc = localization.description;
        return (
            <div className="panel panel-default">
                {desc}
            </div>
        )
    }
}

export default Description;