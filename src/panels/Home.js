import React from 'react';
import PropTypes from 'prop-types';
 
import { Panel, PanelHeader, Header, SimpleCell, FetchedUser, Button, Group, Cell, Div, Title, Avatar, withAdaptivity, SizeType, ViewWidth, usePlatform, VKCOM, SplitLayout, SplitCol, Epic, Tabbar, TabbarItem, View, PanelHeaderButton, Placeholder, Gradient, Text, Badge, CardGrid, ContentCard, List, CellButton, FormLayout, FormLayoutGroup, FormItem, Input, Select, Textarea, Radio, Checkbox, Link } from '@vkontakte/vkui';
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
import { Icon28SettingsOutline } from '@vkontakte/icons';
import { Icon28PaletteOutline   } from '@vkontakte/icons';
import { Icon28UserOutline  } from '@vkontakte/icons';
import { Icon28AccessibilityOutline } from '@vkontakte/icons';
import { Icon28LinkOutline } from '@vkontakte/icons';
 
import '@vkontakte/vkui/dist/vkui.css';
 
import persik from '../img/persik.png';
import './Intro.css';
import './Settings.js'
import './About_Dev'
import './Persik.css';

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
									<Link href="https://vk.com/wall-205932920_7"><CellButton before={<Icon28LinkOutline />}>Подробнее</CellButton></Link>

									<ContentCard
										
										subtitle="Раздел: новости о приложении"
										header="Появление иконки volunteer"
										text="Представляем вашему вниманию иконку приложения volunteer"
										maxHeight={500}
									/>
									<Link href="https://vk.com/wall-205932920_6"><CellButton before={<Icon28LinkOutline />}>Подробнее</CellButton></Link>

									<ContentCard
										
										subtitle="Раздел: новости о приложении"
										header="Показан дизайн приложения volunteer"
										text="14 июля команда volunteer показывает первый основной дизайн своего приложения. С нетерпением ждём!"
										maxHeight={1400}
									/>
									<Link href="https://vk.com/wall-205932920_5"><CellButton before={<Icon28LinkOutline />}>Подробнее</CellButton></Link>

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
									<CellButton before={<Avatar shadow={false} size={30} ><Icon20AddCircle /></Avatar>} onClick={go} data-to='cal'>Добавить задание на Биржу</CellButton>

									<Link href="https://vk.com/wall-205932920_4"><ContentCard
										subtitle="Раздел: задания на Бирже"
										header="Сбор мусора в Центральном Парке"
										text="В центральном парке нужно собрать бутылки и пластик после коцерта, будем благодарны каждому откликнувшемуся"
										caption='Адрес: ул. Макарова 81; Баллы: 25'
										maxHeight={500}
									/></Link>
									<Link href="https://vk.com/write491829369"><CellButton before={<Icon12Favorite />}>Связаться с организатором</CellButton></Link>

									<Link href="https://vk.com/wall-205932920_3"><ContentCard
										subtitle="Раздел: задания на Бирже"
										header="Помощь пожилым людям в доме пристарелых"
										text="Пожилым людям в доме пристарелых на улице Макарова нужна помощь в ремноте со здании."
										caption='Адрес: ул. Макарова 24; Баллы: 75'
										maxHeight={500}
									/></Link>
									<Link href="https://vk.com/write401502480"><CellButton before={<Icon12Favorite />}>Связаться с организатором</CellButton></Link>

									<Link href="https://vk.com/wall-205932920_2"><ContentCard
										subtitle="Раздел: задания на Бирже"
										header="Помощь местной рыбной компании очистить водоём от мусора"
										text="Компания по производству рыбных изделий просит помощи в очистке водоёма от пластика и мусора"
										caption='Адрес: ул. Морская 25А; Баллы: 150'
										maxHeight={750}
									/></Link>
									<Link href="https://vk.com/write344574162"><CellButton before={<Icon12Favorite />}>Связаться с организатором</CellButton></Link>

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
										margin: sizeX === SizeType.REGULAR ? '7px -7px 0 -7px' : 0,
										display: 'flex',
										flexDirection: 'column',
										alignItems: 'center',
										justifyContent: 'center',
										textAlign: 'left',
										padding: 72,
									}}>
										{fetchedUser.photo_200 ? <Avatar size={144} src={fetchedUser.photo_200} /> : null}
										<Title style={{ marginBottom: 8, marginTop: 20 }} level="2" weight="medium">{`${fetchedUser.first_name} ${fetchedUser.last_name}`}</Title>
										<Text style={{ marginBottom: 24, color: 'var(--text_secondary)' }}>Волонтёр/Заказчик</Text>
										<Text style={{ marginBottom: 8, color: 'var(--text_primary)' }}>{fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}</Text>
										{/* <Text style={{ marginBottom: 24, color: 'var(--text_secondary)' }}></Text> */}
									</Gradient>}
								<Header mode="secondary">Настройки</Header>
								<SimpleCell onClick={go} data-to='settings' before={<Icon28SettingsOutline />}>О приложении</SimpleCell>
								<SimpleCell onClick={go} data-to='about_dev' before={<Icon28AccessibilityOutline />}>О разработчиках</SimpleCell>
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

