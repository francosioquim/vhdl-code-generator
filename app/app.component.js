System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var AppComponent, Hero, Pig, HEROES, PIGS;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = 'Tour of Heroes';
                    this.heroes = HEROES;
                    this.pigs = PIGS;
                }
                AppComponent.prototype.onSelectPig = function (piggy) {
                    this.selectedPig = piggy;
                };
                AppComponent.prototype.onSelect = function (hero) {
                    this.selectedHero = hero;
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        styles: ["\n\t.selected {\n\t\tbackground-color: #CFD8DC !important;\n\t\tcolor: white;\n\t}\n\t.heroes {\n\t\tmargin: 0 0 2em 0;\n\t\tlist-style-type: none;\n\t\tpadding: 0;\n\t\twidth: 15em;\n\t}\n\t.heroes li {\n\t\tcursor: pointer;\n\t\tposition: relative;\n\t\tleft: 0;\n\t\tbackground-color: #EEE;\n\t\tmargin: .5em;\n\t\tpadding: .3em 0;\n\t\theight: 1.6em;\n\t\tborder-radius: 4px;\n\t}\n\t.heroes li.selected:hover {\n\t\tbackground-color: #BBD8DC !important;\n\t\tcolor: white;\n\t}\n\t.heroes li:hover {\n\t\tcolor: #607D8B;\n\t\tbackground-color: #DDD;\n\t\tleft: .1em;\n\t}\n\t.heroes .text {\n\t\tposition: relative;\n\t\ttop: -3px;\n\t}\n\t.heroes .badge {\n\t\tdisplay: inline-block;\n\t\tfont-size: small;\n\t\tcolor: white;\n\t\tpadding: 0.8em 0.7em 0 0.7em;\n\t\tbackground-color: #607D8B;\n\t\tline-height: 1em;\n\t\tposition: relative;\n\t\tleft: -1px;\n\t\ttop: -4px;\n\t\theight: 1.8em;\n\t\tmargin-right: .8em;\n\t\tborder-radius: 4px 0 0 4px;\n\t}\n\t"],
                        template: "\n\t\t<h2>My Heroes</h2>\n\t\t<ul class=\"heroes\">\n\t\t\t<li *ngFor=\"#hero of heroes\"\n\t\t\t  [class.selected]=\"hero === selectedHero\"\n\t\t\t  (click)=\"onSelect(hero)\">\n\t\t\t  <span class=\"badge\">{{hero.id}}</span> {{hero.name}}\n\t\t\t</li>\n\t\t</ul>\n\t\t<div *ngIf=\"selectedHero\">\n\t\t  <h2>{{selectedHero.name}} details!</h2>\n\t\t  <div><label>id: </label>{{selectedHero.id}}</div>\n\t\t  <div>\n\t\t    <label>name: </label>\n\t\t    <input [(ngModel)]=\"selectedHero.name\" placeholder=\"name\"/>\n\t\t  </div>\n\t\t</div>\n\n\t\t<ul class=\"heroes\">\n\t\t\t<li *ngFor=\"#piggy of pigs\"\n\t\t\t  [class.selected]=\"piggy === selectedPig\"\n\t\t\t  (click)=\"onSelectPig(piggy)\">\n\t\t\t<span class=\"badge\">{{piggy.name}}</span>{{piggy.size}}\n\t\t\t</li>\n\t\t</ul>\n\t\t<div *ngIf=\"selectedPig\">\n\t\t  <h2>{{selectedPig.name}} details!</h2>\n\t\t  <div><label>size: </label>{{selectedPig.size}}</div>\n\t\t  <div>\n\t\t    <label>name: </label>\n\t\t    <input [(ngModel)]=\"selectedPig.name\" placeholder=\"name\"/>\n\t\t  </div>\n\n\t\t</div>\n\n\t\t"
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
            Hero = (function () {
                function Hero() {
                }
                return Hero;
            }());
            exports_1("Hero", Hero);
            Pig = (function () {
                function Pig() {
                }
                return Pig;
            }());
            exports_1("Pig", Pig);
            HEROES = [
                { "id": 11, "name": "Mr. Nice" },
                { "id": 12, "name": "Narco" },
                { "id": 13, "name": "Bombasto" },
                { "id": 14, "name": "Celeritas" },
                { "id": 15, "name": "Magneta" },
                { "id": 16, "name": "RubberMan" },
                { "id": 17, "name": "Dynama" },
                { "id": 18, "name": "Dr IQ" },
                { "id": 19, "name": "Magma" },
                { "id": 20, "name": "Tornado" }
            ];
            PIGS = [
                { "name": "Baby Baboy", "size": 12 },
                { "name": "Kuya Baboy", "size": 16 },
                { "name": "Baboylicious", "size": 32 },
            ];
        }
    }
});
//# sourceMappingURL=app.component.js.map