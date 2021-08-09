import { UsersStack, withAdaptivity } from '@vkontakte/vkui';
import { Panel, PanelHeader, PanelHeaderBack, SimpleCell, getAvatarUrl, Header, FetchedUser, Button, Group, Cell, Div, Title, Avatar, SizeType, ViewWidth, usePlatform, VKCOM, SplitLayout, SplitCol, Epic, Tabbar, TabbarItem, View, PanelHeaderButton, Placeholder, Gradient, Text, Badge, CardGrid, ContentCard, List, CellButton, FormLayout, FormLayoutGroup, FormItem, Input, Select, Textarea, Radio, Checkbox, Link } from '@vkontakte/vkui';
import './Home.js'

const About = props => {
    return (
        <Panel>
            <PanelHeader left={<PanelHeaderBack onClick={props.go} data-to="home" />} >
                О разработчиках
            </PanelHeader>
            <Div style={{ color: 'black' }}>
                На данный момент над нашим приложением работают 3 разработчика:
                <br />
                <Link href='https://content-available-to-author-only.com/alexdit2006'>Александр Дитковский</Link>
                <br />
                <Link href='https://content-available-to-author-only.com/andreykuba'>Андрей Куба</Link>
                <br />
                <Link href='https://content-available-to-author-only.com/vandrug'>Иван Другов</Link>
            </Div>
        </Panel>
    )
}

export default About;