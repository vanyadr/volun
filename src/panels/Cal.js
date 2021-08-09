
import React from 'react';
import PropTypes from 'prop-types';

import { iframe, Panel, PanelHeader, PanelHeaderBack, Group, Button, CellButton, Avatar, Link, Text, Div, Gradient, Title, SizeX } from '@vkontakte/vkui';

import { Icon28AddOutline } from '@vkontakte/icons';


const Persik2 = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderBack onClick={props.go} data-to="home"/>}
		>
			Добавление мероприятия
		</PanelHeader>
		<Group>
			<Div>
				<Title style={{ marginBottom: 8, marginTop: 20 }} level="2" weight="bold">ВНИМАНИЕ!</Title>
				<Text style={{ marginBottom: 20, color: 'var(--text_primary)' }}>При нажатии на кнопку, откроется окно в браузере с Гугл-формой</Text>
				<Link href="https://docs.google.com/forms/d/e/1FAIpQLSe_lsJZNcVhr86L8ROX_CUmDGdrcY-Fu2oHQqM2SiXYXa1-Rg/viewform?usp=sf_link"><CellButton before={<Avatar shadow={false} size={72} mode="image"><Icon28AddOutline /></Avatar>}>Добавить задание</CellButton></Link>
			</Div>
		</Group>
	</Panel>
);

Persik2.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Persik2;
