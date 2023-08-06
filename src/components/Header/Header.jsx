import { Container } from '../GlobalStyles'; import HeaderSearch from '../HeaderSearch/HeaderSearch';

import SelectLang from '../SelectLang/SelectLang';
import { Head, Logo, Wraper } from './Header.styled';

const Header = () => {
    return (
        <Head>
            <Container>
                <Wraper>
                <Logo>Event Planner</Logo>
                <HeaderSearch  />
                    <SelectLang />
                    </Wraper>
                </Container>
        </Head>
    )
}
export default Header;