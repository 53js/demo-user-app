import React, { useState } from 'react';
import {
	Alert,
	Button, Col, Form, FormGroup, Input, Label, Row,
} from 'reactstrap';
import { createUserWithAxios } from '../../query/userWithAxios';
// import PropTypes from 'prop-types';

export const UsersCreate = () => {
	const [success, setSuccess] = useState(false);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [user, setUser] = useState({
		firstName: '',
		lastName: '',
	});

	const handleChange = (e) => {
		setSuccess(false);
		const { name, value } = e.target;
		setUser((prevUser) => ({
			...prevUser,
			[name]: value,
		}));
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			setSuccess(false);
			setLoading(true);
			setError(false);
			await createUserWithAxios(user);
			setSuccess(true);
		} catch (err) {
			setError(err);
		} finally {
			setLoading(false);
		}
	};

	return (
		<Row tag="section">
			<Col className="border py-2">
				<h1>Create User</h1>
				<Form onSubmit={handleSubmit} className="d-flex flex-column align-items-start">
					<FormGroup className="d-flex flex-column align-items-start">
						<Label htmlFor="firstName">FirstName</Label>
						<Input name="firstName" value={user.firstName} onChange={handleChange} placeholder="FirstName" />
					</FormGroup>
					<FormGroup className="d-flex flex-column align-items-start">
						<Label htmlFor="lastName">LastName</Label>
						<Input name="lastName" value={user.lastName} onChange={handleChange} placeholder="LastName" />
					</FormGroup>
					<div className="d-flex flex-row align-items-center justify-content-between w-100">
						{ error && <Alert color="danger" className="mb-0 py-2">{error.message}</Alert>}
						{ success && <Alert color="success" className="mb-0 py-2">Success!</Alert> }
						<Button
							className="ms-auto"
							disabled={loading}
							color="primary"
							type="submit"
						>
							{ loading ? 'loading' : 'Créer' }
						</Button>
					</div>
				</Form>

			</Col>
		</Row>
	);
};

// Create.propTypes = {

// };
