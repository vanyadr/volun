
import React from 'react';
import PropTypes from 'prop-types';

import { iframe, Panel, PanelHeader, PanelHeaderBack, Group, Button, CellButton, Avatar, Link } from '@vkontakte/vkui';

import { Icon28AddOutline } from '@vkontakte/icons';


const Persik2 = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderBack onClick={props.go} data-to="home"/>}
		>
			Добавление мероприятия
		</PanelHeader>
		<Group>
			<CellButton before={<Avatar shadow={false} size={72} mode="image"><Icon28AddOutline /></Avatar>}><Link href="https://docs.google.com/forms/d/e/1FAIpQLSe_lsJZNcVhr86L8ROX_CUmDGdrcY-Fu2oHQqM2SiXYXa1-Rg/viewform?usp=sf_link">Добавить задание</Link></CellButton>
		</Group>
	</Panel>
);

Persik2.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Persik2;
