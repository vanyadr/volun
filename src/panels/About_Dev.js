import { UsersStack, withAdaptivity } from '@vkontakte/vkui';
import { Panel, PanelHeader, PanelHeaderBack, SimpleCell, getAvatarUrl, Header, FetchedUser, Button, Group, Cell, Div, Title, Avatar, SizeType, ViewWidth, usePlatform, VKCOM, SplitLayout, SplitCol, Epic, Tabbar, TabbarItem, View, PanelHeaderButton, Placeholder, Gradient, Text, Badge, CardGrid, ContentCard, List, CellButton, FormLayout, FormLayoutGroup, FormItem, Input, Select, Textarea, Radio, Checkbox, Link } from '@vkontakte/vkui';
import './Home.js'

import { Icon28Dice1Outline } from '@vkontakte/icons';
import { Icon28Dice2Outline } from '@vkontakte/icons';
import { Icon28Dice3Outline } from '@vkontakte/icons';

const About = props => {
    return (
        <Panel>
            <PanelHeader left={<PanelHeaderBack onClick={props.go} data-to="home" />} >
                О разработчиках
            </PanelHeader>
            <Div>
                <Text style={{ marginBottom: 20, color: 'var(--text_primary)' }}>На данный момент над нашим приложением работают 3 разработчика, если у вас остались какие-то вопросы, вы всегда можете их задать:</Text>
                <Link href="https://vk.com/andreykuba"><CellButton before={<Icon28Dice1Outline />}>Андрей Куба</CellButton></Link>
                <Link href="https://vk.com/vandrug"><CellButton before={<Icon28Dice2Outline />}>Иван Другов</CellButton></Link>
                <Link href="https://vk.com/alexdit2006"><CellButton before={<Icon28Dice3Outline />}>Александр Дитковский</CellButton></Link>
            </Div>
        </Panel>
    )
}

export default About;