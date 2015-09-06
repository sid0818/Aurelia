export class ChildRouter{
  heading = 'Child Router';

  configureRouter(config, router){
    config.map([
      { route: ['','welcome'], name: 'welcome',      moduleId: './welcome',      nav: true, title:'Welcome To PWC' },
      { route: 'users',       name: 'users',       moduleId: './users',       nav: true, title:'Staff' },
      { route: 'child-router', name: 'child-router', moduleId: './child-router', nav: true, title:'Child Router' },
      { route: 'Flickr', name: 'Flickr', moduleId: './Flickr', nav: true, title:'Flickr' }
    ]);

    this.router = router;
  }
}
