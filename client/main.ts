/// <reference path="libs.d.ts" />

require('./main.scss');
declare var componentHandler: any;

import {
    bootstrap
} from 'angular2/platform/browser';
import {
    HostBinding,
    Input,
    Output,
    EventEmitter,
    Component,
    Directive,
    AfterViewInit,
    provide
} from 'angular2/core';
import {
    Router,
    RouteConfig,
    ROUTER_PROVIDERS,
    LocationStrategy,
    PathLocationStrategy,
    ROUTER_DIRECTIVES,
    APP_BASE_HREF
} from 'angular2/router';
import 'material-design-lite';

import {Hero} from './hero';
import {HomeComponent} from './home/home.component';
import {EntitiesComponent} from './entities/entities.component';
import {CodeComponent} from './code/code.component';


@Component({
    selector: 'stencil-app',
    directives: [
        ROUTER_DIRECTIVES,
        [EntitiesComponent, HomeComponent, CodeComponent]
        ],
    template: require('./main.html')
})
@RouteConfig([
    {
        path: '/home',
        name: 'VHDLModuleGenerator',
        component: HomeComponent,
        useAsDefault: true
    },
    {
        path: '/app',
        name: 'EntitiesWorkspace',
        component: EntitiesComponent
    },
    {
        path: '/code',
        name: 'OutputCode',
        component: CodeComponent
    },
])

export class StencilApp implements AfterViewInit {
    masterHero: Hero;
    pageTitle = 'VHDL Code Generator';

    constructor(private router: Router) {
        // no-op
        this.masterHero = { id: 12, name: "bobooy" };

        //this.masterHero.name = "booboy";
    }
    ngAfterViewInit() {
        componentHandler.upgradeAllRegistered();
    }
}

bootstrap(
    StencilApp, [
        ROUTER_PROVIDERS,
        provide(LocationStrategy, { useClass: PathLocationStrategy }),
        provide(APP_BASE_HREF, { useValue: '/' })
    ]
);
