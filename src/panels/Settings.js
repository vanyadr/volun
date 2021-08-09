
import { withAdaptivity } from '@vkontakte/vkui';
import { Panel, PanelHeader, PanelHeaderBack, Header, FetchedUser, Button, Group, Cell, Div, Title, Avatar, SizeType, ViewWidth, usePlatform, VKCOM, SplitLayout, SplitCol, Epic, Tabbar, TabbarItem, View, PanelHeaderButton, Placeholder, Gradient, Text, Badge, CardGrid, ContentCard, List, CellButton, FormLayout, FormLayoutGroup, FormItem, Input, Select, Textarea, Radio, Checkbox, Link } from '@vkontakte/vkui';
import './Home.js'

const Settings = props => {
    return (
        <Panel>
            <PanelHeader left={<PanelHeaderBack onClick={props.go} data-to="home" />} >
                О приложении
            </PanelHeader>
            <Div>
                <Text style={{ marginBottom: 20, color: 'var(--text_primary)' }}>Всем привет! Вы попали в раздел с информацией о модерации заданий на Бирже. На данный момент модерация и добавление заданий на Биржу происходит вручную, а не автоматически. Задания на Биржу добавляются ежедневно с 10:00 до 11:00. Имейте это ввиду, когда захотите создать задание. Если у вас есть какие-то вопросы, вы всегда можете задать их в нашей группе "<Link href='https://vk.com/volunteer_app'>Volunteer</Link>"</Text>
                <br />
            </Div>
        </Panel>
    )
}

export default Settings;