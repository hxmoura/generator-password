import React from 'react'
import './toggle.css'

export default function Toggle(props) {
    return (
        <div className="boxToggle">
            <label className="switch">
                <input type="checkbox" className="hideToggle" onClick={props.onClick} defaultChecked={`${props.checked ? 'checked' : ''}`} />
                <div className="slider">
                    <div className="button"></div>
                </div>
            </label>
            <div className="description">{props.label}</div>
        </div>
    )
}