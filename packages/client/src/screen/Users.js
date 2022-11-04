import { Col, Row } from 'reactstrap';
import { UsersCreate } from '../components/users/Create';
import { UsersList } from '../components/users/List';

export const ScreenUsers = () => (
	<Row>
		<Col xs="12" md="6">
			<UsersCreate />
		</Col>
		<Col xs="12" md="6">
			<UsersList />
		</Col>
	</Row>
);
