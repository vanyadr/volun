import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { View, ScreenSpinner, AdaptivityProvider, AppRoot, Snackbar, Avatar  } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import { Icon24Services } from '@vkontakte/icons';
import { Icon24Error } from '@vkontakte/icons';

import Home from './panels/Home';
import Cal from './panels/Cal';
import Intro from './panels/Intro';
import Settings from './panels/Settings'
import About_Dev from './panels/About_Dev';

const ROUTES = {
	HOME: 'home',
	INTRO: 'intro',
};

const STORAGE_KEYS = {
	STATE: 'state',
	STATUS: 'viewStatus',
};

const App = () => {
	const [activePanel, setActivePanel] = useState(ROUTES.INTRO);
	const [fetchedUser, setUser] = useState(null);
	const [fetchedState, setFetchedState] = useState(null);
	const [snackbar, setSnackbar] = useState(null);
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);
	const [userHasSeenIntro, setUserHasSeenIntro] = useState(false);

	useEffect(() => {
		bridge.subscribe(({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);
			}
		});
		async function fetchData() {
			const user = await bridge.send('VKWebAppGetUserInfo');
			const sheetState = await bridge.send('VKWebAppStorageGet', { keys: [STORAGE_KEYS.STATE, STORAGE_KEYS.STATUS]});
			if (Array.isArray(sheetState.keys)) {
				const data = {};
				sheetState.keys.forEach(({ key, value }) => {
					try {
						data[key] = value ? JSON.parse(value) : {};
						switch (key) {
							case STORAGE_KEYS.STATE:
								setFetchedState(data[STORAGE_KEYS.STATE]);
								break;
							case STORAGE_KEYS.STATUS:
								if (data[key] && data[key].hasSeenIntro) { 
									setActivePanel(ROUTES.HOME);
									setUserHasSeenIntro(true);
								}
								break;
							default:
								break;
						}
					} catch (error) {
						setSnackbar(<Snackbar
							layout='vertical'
							onClose={() => setSnackbar(null)}
							before={<Avatar size={24} style={{backgroundColor: 'var(--dynamic_red)'}}><Icon24Error fill='#fff' width={14} height={14} /></Avatar>}
							duration={900}
						>
							Проблема с получением данных из Storage
						</Snackbar>
						);
						setFetchedState({});
					}
				});
				
			} else {
				setFetchedState({});
			}
			setUser(user);
			setPopout(null);
		}
		fetchData();
	}, [])

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};
	const viewIntro = async (panel) => {
		try {
			await bridge.send('VKWebAppStorageSet', {
				key: STORAGE_KEYS.STATUS,
				value: JSON.stringify({
					hasSeenIntro: true,
				}),
			});
			go(ROUTES.INTRO);
		} catch (error) {
			setSnackbar(<Snackbar
				layout='vertical'
				onClose={() => setSnackbar(null)}
				before={<Avatar size={24} style={{backgroundColor: 'var(--dynamic_red)'}}><Icon24Error fill='#fff' width={14} height={14} /></Avatar>}
				duration={900}
			>
				Проблема с отправкой данных в Storage
			</Snackbar>
			);
		}
	}
	return (
		<AdaptivityProvider>
			<AppRoot>
				<View activePanel={activePanel} popout={popout}>
					<Home id={ROUTES.HOME} fetchedUser={fetchedUser} fetchedState={fetchedState} snackbarError={snackbar} go={go} />
					<Cal id='cal' go={go}/>
					<Settings id='settings' go={go}/>
					<About_Dev id='about_dev' go={go} fetchedUser={fetchedUser} fetchedState={fetchedState}/>
					<Intro id={ROUTES.INTRO} fetchedUser={fetchedUser} go={go} route={ROUTES.HOME} userHasSeenIntro={userHasSeenIntro} />

				</View>
			</AppRoot>
		</AdaptivityProvider>


	);


	// return (
	//   <Epic activeStory={activeStory} tabbar={
	//     <Tabbar>
	//       <TabbarItem
	//         onClick={() => setActiveStory('home')}
	//         selected={activeStory === 'home'}
	//         data-story="home"
	//         text="Главная"
	//       ><Icon24Services /></TabbarItem>
	//     </Tabbar>
	//   }>
	//     <View id="home" activePanel="home">
	// 	  <Panel id="home">
	// 	    <PanelHeader>Главная</PanelHeader>
	// 	    <UserInfo />
	// 	  </Panel>
	// 	</View>
	//   </Epic>
	// );

}

export default App;


// НАЧАЛО ЗАПАСНОГО РАБОЧЕГО
// import React, { useState, useEffect } from 'react';
// import bridge from '@vkontakte/vk-bridge';
// import { View, ScreenSpinner, AdaptivityProvider, AppRoot } from '@vkontakte/vkui';
// import '@vkontakte/vkui/dist/vkui.css';
// import { Icon24Services } from '@vkontakte/icons';

// import Home from './panels/Home';
// import Cal from './panels/Cal';
// import Intro from './panels/Intro';

// const App = () => {
// 	const [activePanel, setActivePanel] = useState('home');
// 	const [fetchedUser, setUser] = useState(null);
// 	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);

// 	useEffect(() => {
// 		bridge.subscribe(({ detail: { type, data }}) => {
// 			if (type === 'VKWebAppUpdateConfig') {
// 				const schemeAttribute = document.createAttribute('scheme');
// 				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
// 				document.body.attributes.setNamedItem(schemeAttribute);
// 			}
// 		});
// 		async function fetchData() {
// 			const user = await bridge.send('VKWebAppGetUserInfo');
// 			setUser(user);
// 			setPopout(null);
// 		}
// 		fetchData();
// 	}, []);

// 	const go = e => {
// 		setActivePanel(e.currentTarget.dataset.to);
// 	};

// 	return (
// 		<AdaptivityProvider>
// 			<AppRoot>
// 				<View activePanel={activePanel} popout={popout}>
// 					<Home id='home' fetchedUser={fetchedUser} go={go} />
// 					<Cal id='cal' go={go} />
// 					<Intro id='persik' fetchedUser={fetchedUser} go={go} />

// 				</View>
// 			</AppRoot>
// 		</AdaptivityProvider>


// 	);


// 	// return (
// 	//   <Epic activeStory={activeStory} tabbar={
// 	//     <Tabbar>
// 	//       <TabbarItem
// 	//         onClick={() => setActiveStory('home')}
// 	//         selected={activeStory === 'home'}
// 	//         data-story="home"
// 	//         text="Главная"
// 	//       ><Icon24Services /></TabbarItem>
// 	//     </Tabbar>
// 	//   }>
// 	//     <View id="home" activePanel="home">
// 	// 	  <Panel id="home">
// 	// 	    <PanelHeader>Главная</PanelHeader>
// 	// 	    <UserInfo />
// 	// 	  </Panel>
// 	// 	</View>
// 	//   </Epic>
// 	// );

// }

// export default App;