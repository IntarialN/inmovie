import './styles.scss';
import {Layout} from "../../../../components/layout";
import {IconLogo} from "../../../../components/icons";
import {observer} from "mobx-react";
import {useTranslation} from "react-i18next";
import NavigationBarStore from './store.ts'
import {NavigationPaths} from "../../../../../../shared/types/home/navigation-bar.types.ts";
import {BellIcon, MagnifyingGlassIcon} from "@heroicons/react/24/outline";

export const NavigationBar = observer(() => {
  const {t} = useTranslation();
  
  const clickHandler = (path: NavigationPaths) => {
    NavigationBarStore.changePath(path)
  }
  
  return (
    <Layout
      absolute
    >
      <nav>
        <a className='navbar-brand'>
          { IconLogo.desktop }
        </a>
        <div className='navbar-navigation'>
          <ul>
            {
              NavigationBarStore.paths.map(
                path => (
                  <li
                    data-active={ path.path === NavigationBarStore.isActivePath }
                    onClick={ () => clickHandler(path.path) }
                  >
                    {
                      t(path.name)
                    }
                  </li>
                )
              )
            }
          </ul>
        </div>
        <div className='navbar-menu'>
          <MagnifyingGlassIcon
            color='white'
            width='25'
            height='25'
          />
          <BellIcon
            color='white'
            width='25'
            height='25'
          />
        </div>
      </nav>
    </Layout>
  )
})
