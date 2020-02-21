import React from 'react';
import {Link} from 'react-router-dom';

const Gnb = (props) =>(
    <ul className="gnb">
        <li>
            <Link to = "/?day=mon" className={ props.day === 'mon' ? 'tab_day on ' : 'tab_day' }>Monday</Link>
        </li>
        <li>
            <Link to = "/?day=tue" className={ props.day === 'tue' ? 'tab_day on ' : 'tab_day' }>Tuesday</Link>
        </li>
        <li>
            <Link to = "/?day=wed" className={ props.day === 'wed' ? 'tab_day on ' : 'tab_day' }>Wednesday</Link>
        </li>
        <li>
            <Link to = "/?day=thu" className={ props.day === 'thu' ? 'tab_day on ' : 'tab_day' }>Thursday</Link>
        </li>
        <li>
            <Link to = "/?day=fri" className={ props.day === 'fri' ? 'tab_day on ' : 'tab_day' }>Friday</Link>
        </li>
        <li>
            <Link to = "/?day=sat" className={ props.day === 'sat' ? 'tab_day on ' : 'tab_day' }>Saturday</Link>
        </li>
        <li>
            <Link to = "/?day=sun" className={ props.day === 'sun' ? 'tab_day on ' : 'tab_day' }>Sunday</Link>
        </li>
    </ul>
)

export default Gnb;