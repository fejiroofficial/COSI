import * as React from "react";
import { Link } from 'react-router-dom';
import './NavBar.css';
import logo from '../../assets/images/logo.svg';
import aero from '../../assets/images/planeIcon.svg';

export interface Props {
	children?: React.ReactNode
}

export interface State {
}

export default class NavBar extends React.Component<Props, State> {

	constructor(props: Props) {
		super(props)

		this.state = {
		}
	}

	render() {
		return (
			<div className='NavContainer'>
				<Link to='/'>
					<img className='Logo' src={logo} alt='cosi' />
				</Link>
				<img src={aero} alt='aeroplane' />
			</div>
		)
	}
}
