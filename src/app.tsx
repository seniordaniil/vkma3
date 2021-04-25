import React, { FC, useState } from 'react';
import {
  View,
  Panel,
  useAdaptivity,
  AppRoot,
  SplitLayout,
  SplitCol,
  ViewWidth,
  IconButton,
  Text,
  Title,
  Link,
  FixedLayout,
  Button,
  Div,
  ModalPage,
  ModalRoot,
  CellButton,
} from '@vkontakte/vkui';
import Logo from 'ui/logo';
import VKLogo from 'ui/vk-logo';
import { Icon28MenuOutline } from '@vkontakte/icons';
import styled from 'styled-components';
import { SpaceProps, space } from 'styled-system';
import RubiconLogo from 'ui/rub1.png';
import SbLogo from 'ui/sb-logo';
import SenlaLogo from 'ui/senla-logo';
import MaximasterLogo from 'ui/maximaster-logo';
import { Icon28Users3Outline } from '@vkontakte/icons';
import { Icon28FireOutline } from '@vkontakte/icons';
import { Icon28HelpCircleOutline } from '@vkontakte/icons';

const Box = styled.div<SpaceProps>`
  ${space}
`;

const Main = styled.div`
  margin-top: 24px;
  padding: 0 24px;
`;

const Header = styled.div`
  padding: 0 24px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const MenuButton = styled(IconButton)`
  color: var(--button_primary_background);
`;

export const App: FC = () => {
  const { viewWidth } = useAdaptivity();
  const [modal, setModal] = useState<React.ReactNode>(null);

  return (
    <AppRoot>
      <SplitLayout>
        <SplitCol spaced={Number(viewWidth) > ViewWidth.MOBILE}>
          <View activePanel={'main'} modal={modal}>
            <Panel id={'main'}>
              <Header>
                <Logo />
                <MenuButton
                  onClick={() =>
                    setModal(<Modal onClose={() => setModal(null)} />)
                  }
                >
                  <Icon28MenuOutline />
                </MenuButton>
              </Header>
              <Main>
                <Text weight={'regular'}>24 - 25 апреля • online</Text>
                <Box mt={'12px'}>
                  <Title weight={'bold'} level={'1'}>
                    IT-марафон «Вездекод» в Туле 🚀
                  </Title>
                </Box>
                <Box mt={'16px'}>
                  <Text weight={'regular'}>
                    Первый этап IT-марафона “Вездекод” для разработчиков и
                    дизайнеров от Команды Вконтакте. Участники с лучшими
                    результатами получат приглашение на финал в
                    Санкт-Петербурге, а лидеры — денежный приз в размере 100 000
                    рублей
                  </Text>
                </Box>
                <Box mt={'40px'}>
                  <Title weight={'bold'} level={'1'}>
                    Организаторы и <br /> партнеры 👋🏻
                  </Title>
                </Box>
                <Box mt={'48px'}>
                  <VKLogo />
                </Box>
                <Box mt={'16px'}>
                  <Title weight={'semibold'} level={'3'}>
                    Команда Вконтакте
                  </Title>
                </Box>
                <Box mt={'8px'}>
                  <Text weight={'regular'}>
                    Команда, которая создает ВКонтакте - крупнейшую социальную
                    сеть в России и странах СНГ
                  </Text>
                </Box>
                <Box mt={'36px'}>
                  <img alt={''} src={RubiconLogo} />
                </Box>
                <Box mt={'4px'}>
                  <Title weight={'semibold'} level={'3'}>
                    РУБИКОН
                  </Title>
                </Box>
                <Box mt={'8px'}>
                  <Text weight={'regular'}>
                    Академия, которая специализируется на профессиональном
                    компьютерном образовании
                  </Text>
                </Box>
                <Box mt={'60px'}>
                  <SbLogo />
                </Box>
                <Box mt={'28px'}>
                  <Title weight={'semibold'} level={'3'}>
                    SmartBear
                  </Title>
                </Box>
                <Box mt={'8px'}>
                  <Text weight={'regular'}>
                    Компания, создающая решения для управления жизненным циклом
                    API, автоматизации тестирования, тест-менеджмента,
                    нагрузочного тестирования и код-ревью
                  </Text>
                </Box>
                <Box mt={'48px'}>
                  <SenlaLogo />
                </Box>
                <Box mt={'16px'}>
                  <Title weight={'semibold'} level={'3'}>
                    Senla
                  </Title>
                </Box>
                <Box mt={'8px'}>
                  <Text weight={'regular'}>
                    Международная компания по разработке заказного ПО в областях
                    финансовых технологий, медицины, фармацевтики, нефтегазового
                    сектора, машиностроения и производства, онлайн-бизнеса и
                    других.
                  </Text>
                </Box>
                <Box mt={'55px'}>
                  <MaximasterLogo />
                </Box>
                <Box mt={'16px'}>
                  <Title weight={'semibold'} level={'3'}>
                    Веб-интегратор Максимастер
                  </Title>
                </Box>
                <Box mt={'8px'}>
                  <Text weight={'regular'}>
                    Веб-интегратор, который с 2002 года разрабатывает и
                    поддерживает технически сложные высоконагруженные
                    веб-проекты для лидеров российского бизнеса.
                  </Text>
                </Box>
                <Box mt={'40px'}>
                  <Title weight={'bold'} level={'1'}>
                    Призы 🔥
                  </Title>
                </Box>
                <Box mt={'32px'}>
                  <Title weight={'semibold'} level={'3'}>
                    Отборочный этап в Туле
                  </Title>
                </Box>
                <Box mt={'16px'}>
                  <Text weight={'regular'}>1 место - 100 000 руб</Text>
                </Box>
                <Box mt={'10px'}>
                  <Text weight={'regular'}>
                    Топ-8 лучших получат приглашение на финал в Санкт-Петербурге
                  </Text>
                </Box>
                <Box mt={'32px'}>
                  <Title weight={'semibold'} level={'3'}>
                    Весь марафон Вездекод
                  </Title>
                </Box>
                <Box mt={'16px'}>
                  <Text weight={'regular'}>1 место - 500 000 руб</Text>
                </Box>
                <Box mt={'10px'}>
                  <Text weight={'regular'}>2 место - 300 000 руб</Text>
                </Box>
                <Box mt={'10px'}>
                  <Text weight={'regular'}>3 место - 200 000 руб</Text>
                </Box>
                <Box mt={'32px'} mb={'102px'}>
                  <Link>Читать FAQ и правила соревнования </Link>
                </Box>
              </Main>
              <FixedLayout filled vertical={'bottom'}>
                <Div>
                  <Button size={'l'} stretched>
                    Принять участие
                  </Button>
                </Div>
              </FixedLayout>
            </Panel>
          </View>
        </SplitCol>
      </SplitLayout>
    </AppRoot>
  );
};

interface ModalProps {
  onClose: () => void;
}

const Modal: FC<ModalProps> = ({ onClose }) => {
  return (
    <ModalRoot activeModal={'main'} onClose={onClose}>
      <ModalPage id={'main'} onClose={onClose}>
        <CellButton before={<Icon28Users3Outline />}>Организаторы</CellButton>
        <CellButton before={<Icon28FireOutline />}>Призы</CellButton>
        <CellButton before={<Icon28HelpCircleOutline />}>FAQ</CellButton>
      </ModalPage>
    </ModalRoot>
  );
};
