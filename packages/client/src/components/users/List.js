import React, { useEffect, useState } from 'react';
import { Col, Row } from 'reactstrap';
import { getAllUsersWithAxios } from '../../query/userWithAxios';
// import { getAllUsersWithFetch } from '../../query/user';

export const UsersList = () => {
	const [user, setUser] = useState([]);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		getAllUsersWithAxios()
			.then((u) => setUser(u))
			.catch((err) => setError(err))
			.finally(() => setLoading(false));
	}, []);

	return (
		<Row tag="section">
			<Col className="border py-2">
				<h1>User List</h1>
				{ loading
					? (<p>Loading...</p>)
					: (
						<ul className="list-unstyled">
							{ user.map((u) => (
								<li key={u.id}>
									{u.lastName} <small>{u.firstName}</small>
								</li>
							))}
						</ul>
					)}
				{error && <p>{error.message}</p>}
			</Col>
		</Row>
	);
};
