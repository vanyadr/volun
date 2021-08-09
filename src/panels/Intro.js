import React, { Fragment } from 'react';

import { Panel, PanelHeader, FixedLayout, Header, FetchedUser, Button, Group, Cell, Div, Title, Avatar, withAdaptivity, SizeType, ViewWidth, usePlatform, VKCOM, SplitLayout, SplitCol, Epic, Tabbar, TabbarItem, View, PanelHeaderBack, Placeholder, Gradient, Text, Badge, CardGrid, ContentCard, List, CellButton } from '@vkontakte/vkui';


import './Intro.css';


const Intro = ({ id, go, route, fetchedUser, userHasSeenIntro }) => (
	<Panel id={id} centered={true}>
		{(fetchedUser && !userHasSeenIntro) &&
			<Fragment>
				<FixedLayout align='left'>
					<Div className='User'>
						{fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
						<h2 align='left'>Привет, {fetchedUser.first_name}</h2>
						<h3>Добро пожаловать в наше приложение volunteer! Это приложение было создано специально для тех кто хотел бы стать волонтёром, и тех, кому нужен волонтёр. В нашем приложении ты можешь отзываться на задания, помогая людям, или попросить помощи, создав задание на Бирже.</h3>
						<h3>Сейчас приложение находиться в Бета версии </h3>
					</Div>
				</FixedLayout>
				<FixedLayout vertical='bottom'>
					<Div>
						<Button className='Button' mode='commerce' size="l"	 onClick={go} data-to='home'>
							Отлично! Давай начнём!
						</Button>
					</Div>
				</FixedLayout>
			</Fragment>
		}
	</Panel>
);

export default Intro;