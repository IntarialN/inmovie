import {observable, action, computed, makeAutoObservable} from "mobx";
import {NavigationPaths} from "../../../../../../shared/types/home/navigation-bar.types.ts";

class NavigationBarState {
  @observable isActivePath: NavigationPaths = NavigationPaths.Home
  @observable paths: { name: string, path: NavigationPaths }[] =
    [
      { name: 'home.paths.home', path: NavigationPaths.Home },
      { name: 'home.paths.movies-and-shows', path: NavigationPaths.Movies },
      { name: 'home.paths.support', path: NavigationPaths.Support },
      { name: 'home.paths.subscribe', path: NavigationPaths.Subscriptions },
    ]
  
  constructor() {
    makeAutoObservable(this);
  }
  
  @action changePath(path: NavigationPaths) {
    this.isActivePath = path;
  }
}

export default new NavigationBarState();
