import React from 'react'

function InformationToolsItem(props) {
    return (
        <div className="information-tools-item">
            <div className='tools-out'>
                <figure>
                    <img src={ `${props.src}`} alt={props.value} />
                </figure>
                <h2>{props.value}</h2>
            </div>
            { props.tools.map( tool => ( <SubTool  key={tool.name} name={tool.name} picture={tool.picture} />)) }
        </div>
    )
}

function SubTool(props) {
    return (
        <div className='tools-in'>
            <figure>
                <img src={`${props.picture}`} alt={props.name} />
            </figure>
            <h3>{props.name}</h3>
        </div>
    )
}

export { InformationToolsItem };