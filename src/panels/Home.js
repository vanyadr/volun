import React from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, Header, A, Link, FetchedUser, Button, Group, Cell, Div, Title, Avatar, withAdaptivity, SizeType, ViewWidth, usePlatform, VKCOM, SplitLayout, SplitCol, Epic, Tabbar, TabbarItem, View, PanelHeaderBack, Placeholder, Gradient, Text, Badge, CardGrid, ContentCard, List, CellButton } from '@vkontakte/vkui';

import Icon28NewsfeedOutline from '@vkontakte/icons/dist/28/newsfeed_outline';
import Icon28ServicesOutline from '@vkontakte/icons/dist/28/services_outline';
import Icon28MessageOutline from '@vkontakte/icons/dist/28/message_outline';
import Icon28ClipOutline from '@vkontakte/icons/dist/28/clip_outline';
import Icon28UserCircleOutline from '@vkontakte/icons/dist/28/user_circle_outline';
import Icon56NewsfeedOutline from '@vkontakte/icons/dist/56/newsfeed_outline';
import { Icon16TearOffFlyerOutline } from '@vkontakte/icons';
import { Icon12ClockOutline } from '@vkontakte/icons';
import { Icon28BillheadOutline } from '@vkontakte/icons';
import { Icon28GridLayoutOutline } from '@vkontakte/icons';
import { Icon12Favorite } from '@vkontakte/icons';
import { Icon24Add } from '@vkontakte/icons';
import { Icon20AddCircle } from '@vkontakte/icons';
import { Icon24Newsfeed } from '@vkontakte/icons';

import '@vkontakte/vkui/dist/vkui.css';

import persik from '../img/persik.png';
import './Persik.css';
import './Intro.css';

const Example = withAdaptivity(({ viewWidth, id, icon, fetchedUser, fetchedState, sizeX, go, props, route }) => {
	const platform = usePlatform();
	const [activeStory, setActiveStory] = React.useState('profile');
	const onStoryChange = (e) => setActiveStory(e.currentTarget.dataset.story);
	const isDesktop = viewWidth >= ViewWidth.TABLET;
	const hasHeader = platform !== VKCOM;

	return (
		<SplitLayout
			header={hasHeader && <PanelHeader separator={false} />}
			style={{ justifyContent: "center" }}
		>
			{isDesktop && (
				<SplitCol fixed width="280px" maxWidth="280px">
					<Panel>
						{hasHeader && <PanelHeader />}
						<Group>
							<Cell
								disabled={activeStory === 'feed'}
								style={activeStory === 'feed' ? {
									backgroundColor: "var(--button_secondary_background)",
									borderRadius: 8
								} : {}}
								data-story="feed"
								onClick={onStoryChange}
								before={<Icon28NewsfeedOutline />}
							>
								feed
							</Cell>
							<Cell
							  disabled={activeStory === 'services'}
							  style={activeStory === 'services' ? {
								backgroundColor: "var(--button_secondary_background)",
								borderRadius: 8
							  } : {}}
							  data-story="services"
							  onClick={onStoryChange}
							  before={<Icon28ServicesOutline />}
							>
							  services
							</Cell>
							<Cell
								disabled={activeStory === 'messages'}
								style={activeStory === 'messages' ? {
									backgroundColor: "var(--button_secondary_background)",
									borderRadius: 8
								} : {}}
								data-story="messages"
								onClick={onStoryChange}
								before={<Icon28MessageOutline />}
							>
								messages
							</Cell>
							<Cell
								disabled={activeStory === 'profile'}
								style={activeStory === 'profile' ? {
									backgroundColor: "var(--button_secondary_background)",
									borderRadius: 8
								} : {}}
								data-story="profile"
								onClick={onStoryChange}
								before={<Icon28UserCircleOutline />}
							>
								profile
							</Cell>
						</Group>
					</Panel>
				</SplitCol>
			)}

			<SplitCol
				animate={!isDesktop}
				spaced={isDesktop}
				width={isDesktop ? '560px' : '100%'}
				maxWidth={isDesktop ? '560px' : '100%'}
			>
				<Epic activeStory={activeStory} tabbar={!isDesktop &&
					<Tabbar>
						<TabbarItem
							onClick={onStoryChange}
							selected={activeStory === 'services'}
							data-story="services"
							text="Новости"
						><Icon24Newsfeed /></TabbarItem>
						<TabbarItem
							onClick={onStoryChange}
							selected={activeStory === 'feed'}
							data-story="feed"
							text="Биржа"
						><Icon28GridLayoutOutline /></TabbarItem>

						<TabbarItem
							onClick={onStoryChange}
							selected={activeStory === 'messages'}
							data-story="messages"
							text="Календарь"
						><Icon28BillheadOutline /></TabbarItem>
						<TabbarItem
							onClick={onStoryChange}
							selected={activeStory === 'profile'}
							data-story="profile"
							text="Профиль"
						><Icon28UserCircleOutline /></TabbarItem>
					</Tabbar>
				}>
					<View id="services" activePanel="services">
						<Panel id="services">
							<PanelHeader>Новости</PanelHeader>
							<Group>
								<CardGrid size='l'>
									<ContentCard
										subtitle="Раздел: новости о приложении"
										header="Открытие приложения!"
										text="Всех приглашаем на открытие нашего нового приложения volunteer!"
									/>
									<ContentCard
										
										subtitle="Раздел: новости о приложении"
										header="Появление иконки volunteer"
										text="Представляем вашему вниманию иконку приложения volunteer"
										maxHeight={500}
									/>
									<ContentCard
										
										subtitle="Раздел: новости о приложении"
										header="Показ дизайн приложения volunteer"
										text="14 июля команда volunteer показывает первый основной дизайн своего приложения. С нетерпением ждём!"
										maxHeight={1400}
									/>
								</CardGrid>
								<img className="Persik" src={persik}/>
							</Group>
						</Panel>
					</View>
					<View id="feed" activePanel="feed">
						<Panel id="feed">
							<PanelHeader>Биржа</PanelHeader>
							<Group>
								<CardGrid size='l'>
									<CellButton before={<Avatar shadow={true} size={24} ><Icon20AddCircle /></Avatar>} onClick={go} data-to='cal'>Добавить задание на Биржу</CellButton>


									<ContentCard
										subtitle="Раздел: задания на Бирже"
										header="Сбор мусора в Центральном Парке"
										text="В центральном парке нужно собрать бутылки и пластик после коцерта"
										caption='Адрес: ул. Макарова 81; Баллы: 25'
										maxHeight={500}
									/>
									<CellButton before={<Icon12Favorite />}><Link href="https://vk.com/vandrug">Посмотрите на мою фотографию!</Link></CellButton>
									<ContentCard
										subtitle="Раздел: задания на Бирже"
										header="Помощь пожилым людям в доме пристарелых"
										text="Пожилым людям в доме пристарелых на улице Макарова нужна помощь в ремноте со здании."
										caption='Адрес: ул. Макарова 24; Баллы: 75'
										maxHeight={500}
									/>
									<CellButton before={<Icon12Favorite />}>Добавить в Календарь</CellButton>

									<ContentCard
										subtitle="Раздел: задания на Бирже"
										header="Помощь местной рыбной компании очистить водоём от мусора"
										text="Компания по производству рыбных изделий просит помощи в очистке водоёма от пластика и мусора"
										caption='Адрес: ул. Морская 25А; Баллы: 150'
										maxHeight={750}
									/>
									<CellButton before={<Icon12Favorite />}>Добавить в Календарь</CellButton>
								</CardGrid>
								<img className="Persik" src={persik}/>
							</Group>
						</Panel>
					</View>
					<View id="messages" activePanel="messages">
						<Panel id="messages">
							<PanelHeader>Календарь</PanelHeader>
							<Group>
								<CardGrid size='l'>
									<ContentCard
										subtitle="Календарь Июль 2020"
										header="25 Июля"
										text="В центральном парке нужно собрать бутылки и пластик после коцерта"
										caption='Заказчик - https:/vk.com/vandrug'
										maxHeight={500}
									/>
									<ContentCard
										subtitle="Календарь Июль 2020"
										header="27 Июля"
										text="Пожилым людям в доме пристарелых на улице Макарова нужна помощь в ремноте со здании."
										caption='Заказчик - https:/vk.com/andreykuba'
										maxHeight={500}
									/>
									<ContentCard
										subtitle="Календарь Июль 2020"
										header="30 Июля"
										text="Компания по производству рыбных изделий просит помощи в очистке водоёма от пластика и мусора"
										caption='Заказчик - https:/vk.com/alexdit2006'
										maxHeight={500}
									/>
								</CardGrid>
								<img className="Persik" src={persik}/>
							</Group>

						</Panel>
					</View>
					<View id="profile" activePanel="profile">
						<Panel id="profile">
							<PanelHeader>Профиль</PanelHeader>
							<Group>
								{fetchedUser &&
									<Gradient style={{
										margin: sizeX === SizeType.REGULAR ? '-7px -7px 0 -7px' : 0,
										display: 'flex',
										flexDirection: 'column',
										alignItems: 'center',
										justifyContent: 'center',
										textAlign: 'left',
										padding: 100,
									}}>
										{fetchedUser.photo_200 ? <Avatar size={200} src={fetchedUser.photo_200} /> : null}
										<Title style={{ marginBottom: 8, marginTop: 20 }} level="2" weight="bold">{`${fetchedUser.first_name} ${fetchedUser.last_name}`}</Title>
										<Text style={{ marginBottom: 8, color: 'var(--text_primary)' }}>Волонтёр/Заказчик</Text>
										<Text style={{ marginBottom: 8, color: 'var(--text_secondary)' }}>{fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}</Text>
									</Gradient>}
							</Group>
						</Panel>
					</View>
				</Epic>
			</SplitCol>
		</SplitLayout>
	);
}, {
	viewWidth: true
});

Example.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Example;



