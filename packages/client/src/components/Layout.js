import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row } from 'reactstrap';

export const Layout = () => (
	<Row className="w-100" tag="nav">
		<Col>
			<ul className="list-unstyled d-flex flex-row ">
				<li className="me-4">
					<Link to="/">Home</Link>
				</li>
				<li className="me-4">
					<Link to="/users">Users</Link>
				</li>
				<li>
					<Link to="/drawing">Drawing</Link>
				</li>
			</ul>
		</Col>
	</Row>
);
