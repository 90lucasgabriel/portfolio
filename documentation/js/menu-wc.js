'use strict';



var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

customElements.define('compodoc-menu', function (_HTMLElement) {
    _inherits(_class, _HTMLElement);

    function _class() {
        _classCallCheck(this, _class);

        var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));

        _this.isNormalMode = _this.getAttribute('mode') === 'normal';
        return _this;
    }

    _createClass(_class, [{
        key: 'connectedCallback',
        value: function connectedCallback() {
            this.render(this.isNormalMode);
        }
    }, {
        key: 'render',
        value: function render(isNormalMode) {
            let tp = lithtml.html(
'<nav>\n    <ul class="list">\n        <li class="title">\n            \n                <a href="index.html" data-type="index-link">angular documentation</a>\n            \n        </li>\n\n        <li class="divider"></li>\n        ' + (isNormalMode ? '<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>' : '') + '\n        <li class="chapter">\n            <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>\n            <ul class="links">\n                \n                    <li class="link">\n                        <a href="overview.html" data-type="chapter-link">\n                            <span class="icon ion-ios-keypad"></span>Overview\n                        </a>\n                    </li>\n                    <li class="link">\n                        <a href="index.html" data-type="chapter-link">\n                            <span class="icon ion-ios-paper"></span>README\n                        </a>\n                    </li>\n                \n                \n                \n                    <li class="link">\n                        <a href="dependencies.html"\n                            data-type="chapter-link">\n                            <span class="icon ion-ios-list"></span>Dependencies\n                        </a>\n                    </li>\n                \n            </ul>\n        </li>\n        \n        \n        <li class="chapter modules">\n            <a data-type="chapter-link" href="modules.html">\n                <div class="menu-toggler linked" data-toggle="collapse"\n                    ' + (isNormalMode ? 'data-target="#modules-links"' : 'data-target="#xs-modules-links"') + '>\n                    <span class="icon ion-ios-archive"></span>\n                    <span class="link-name">Modules</span>\n                    <span class="icon ion-ios-arrow-down"></span>\n                </div>\n            </a>\n            <ul class="links collapse"\n            ' + (isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"') + '>\n                \n                    <li class="link">\n                        <a href="modules/AboutModule.html" data-type="entity-link">AboutModule</a>\n                        \n                            <li class="chapter inner">\n                                <div class="simple menu-toggler" data-toggle="collapse"\n                                    ' + (isNormalMode ? 'data-target="#components-links-module-AboutModule-a566177f418c0ca3f93a10eda4b694fb"' : 'data-target="#xs-components-links-module-AboutModule-a566177f418c0ca3f93a10eda4b694fb"') + '>\n                                    <span class="icon ion-md-cog"></span>\n                                    <span>Components</span>\n                                    <span class="icon ion-ios-arrow-down"></span>\n                                </div>\n                                <ul class="links collapse"\n                                    ' + (isNormalMode ? 'id="components-links-module-AboutModule-a566177f418c0ca3f93a10eda4b694fb"' : 'id="xs-components-links-module-AboutModule-a566177f418c0ca3f93a10eda4b694fb"') + '>\n                                    \n                                        <li class="link">\n                                            <a href="components/AboutListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AboutListComponent</a>\n                                        </li>\n                                    \n                                </ul>\n                            </li>\n                        \n                        \n                        \n                        \n                            <li class="chapter inner">\n                                <div class="simple menu-toggler" data-toggle="collapse"\n                                    ' + (isNormalMode ? 'data-target="#injectables-links-module-AboutModule-a566177f418c0ca3f93a10eda4b694fb"' : 'data-target="#xs-injectables-links-module-AboutModule-a566177f418c0ca3f93a10eda4b694fb"') + '>\n                                    <span class="icon ion-md-arrow-round-down"></span>\n                                    <span>Injectables</span>\n                                    <span class="icon ion-ios-arrow-down"></span>\n                                </div>\n                                <ul class="links collapse"\n                                    ' + (isNormalMode ? 'id="injectables-links-module-AboutModule-a566177f418c0ca3f93a10eda4b694fb"' : 'id="xs-injectables-links-module-AboutModule-a566177f418c0ca3f93a10eda4b694fb"') + '>\n                                    \n                                        <li class="link">\n                                            <a href="injectables/AboutService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>AboutService</a>\n                                        </li>\n                                    \n                                        <li class="link">\n                                            <a href="injectables/TagService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>TagService</a>\n                                        </li>\n                                    \n                                </ul>\n                            </li>\n                        \n                        \n                            <li class="chapter inner">\n                                <div class="simple menu-toggler" data-toggle="collapse"\n                                    ' + (isNormalMode ? 'data-target="#pipes-links-module-AboutModule-a566177f418c0ca3f93a10eda4b694fb"' : 'data-target="#xs-pipes-links-module-AboutModule-a566177f418c0ca3f93a10eda4b694fb"') + '>\n                                    <span class="icon ion-md-add"></span>\n                                    <span>Pipes</span>\n                                    <span class="icon ion-ios-arrow-down"></span>\n                                </div>\n                                <ul class="links collapse"\n                                    ' + (isNormalMode ? 'id="pipes-links-module-AboutModule-a566177f418c0ca3f93a10eda4b694fb"' : 'id="xs-pipes-links-module-AboutModule-a566177f418c0ca3f93a10eda4b694fb"') + '>\n                                    \n                                        <li class="link">\n                                            <a href="pipes/AgePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AgePipe</a>\n                                        </li>\n                                    \n                                        <li class="link">\n                                            <a href="pipes/TimestampToDatePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">TimestampToDatePipe</a>\n                                        </li>\n                                    \n                                </ul>\n                            </li>\n                        \n                    </li>\n                \n                    <li class="link">\n                        <a href="modules/AboutRoutingModule.html" data-type="entity-link">AboutRoutingModule</a>\n                        \n                        \n                        \n                        \n                        \n                    </li>\n                \n                    <li class="link">\n                        <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>\n                        \n                            <li class="chapter inner">\n                                <div class="simple menu-toggler" data-toggle="collapse"\n                                    ' + (isNormalMode ? 'data-target="#components-links-module-AppModule-58dd22de750507cb93ae901e9678a87a"' : 'data-target="#xs-components-links-module-AppModule-58dd22de750507cb93ae901e9678a87a"') + '>\n                                    <span class="icon ion-md-cog"></span>\n                                    <span>Components</span>\n                                    <span class="icon ion-ios-arrow-down"></span>\n                                </div>\n                                <ul class="links collapse"\n                                    ' + (isNormalMode ? 'id="components-links-module-AppModule-58dd22de750507cb93ae901e9678a87a"' : 'id="xs-components-links-module-AppModule-58dd22de750507cb93ae901e9678a87a"') + '>\n                                    \n                                        <li class="link">\n                                            <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>\n                                        </li>\n                                    \n                                </ul>\n                            </li>\n                        \n                        \n                        \n                        \n                            <li class="chapter inner">\n                                <div class="simple menu-toggler" data-toggle="collapse"\n                                    ' + (isNormalMode ? 'data-target="#injectables-links-module-AppModule-58dd22de750507cb93ae901e9678a87a"' : 'data-target="#xs-injectables-links-module-AppModule-58dd22de750507cb93ae901e9678a87a"') + '>\n                                    <span class="icon ion-md-arrow-round-down"></span>\n                                    <span>Injectables</span>\n                                    <span class="icon ion-ios-arrow-down"></span>\n                                </div>\n                                <ul class="links collapse"\n                                    ' + (isNormalMode ? 'id="injectables-links-module-AppModule-58dd22de750507cb93ae901e9678a87a"' : 'id="xs-injectables-links-module-AppModule-58dd22de750507cb93ae901e9678a87a"') + '>\n                                    \n                                        <li class="link">\n                                            <a href="injectables/FirestoreService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>FirestoreService</a>\n                                        </li>\n                                    \n                                        <li class="link">\n                                            <a href="injectables/LoaderService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>LoaderService</a>\n                                        </li>\n                                    \n                                </ul>\n                            </li>\n                        \n                        \n                    </li>\n                \n                    <li class="link">\n                        <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>\n                        \n                        \n                        \n                        \n                        \n                    </li>\n                \n                    <li class="link">\n                        <a href="modules/CategoryModule.html" data-type="entity-link">CategoryModule</a>\n                        \n                        \n                        \n                        \n                            <li class="chapter inner">\n                                <div class="simple menu-toggler" data-toggle="collapse"\n                                    ' + (isNormalMode ? 'data-target="#injectables-links-module-CategoryModule-182410bfbc9efa30e1b9aeb3be8ad45a"' : 'data-target="#xs-injectables-links-module-CategoryModule-182410bfbc9efa30e1b9aeb3be8ad45a"') + '>\n                                    <span class="icon ion-md-arrow-round-down"></span>\n                                    <span>Injectables</span>\n                                    <span class="icon ion-ios-arrow-down"></span>\n                                </div>\n                                <ul class="links collapse"\n                                    ' + (isNormalMode ? 'id="injectables-links-module-CategoryModule-182410bfbc9efa30e1b9aeb3be8ad45a"' : 'id="xs-injectables-links-module-CategoryModule-182410bfbc9efa30e1b9aeb3be8ad45a"') + '>\n                                    \n                                        <li class="link">\n                                            <a href="injectables/CategoryService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>CategoryService</a>\n                                        </li>\n                                    \n                                </ul>\n                            </li>\n                        \n                        \n                    </li>\n                \n                    <li class="link">\n                        <a href="modules/ContactModule.html" data-type="entity-link">ContactModule</a>\n                        \n                            <li class="chapter inner">\n                                <div class="simple menu-toggler" data-toggle="collapse"\n                                    ' + (isNormalMode ? 'data-target="#components-links-module-ContactModule-dacab31fb4e7b1f1812c40f37f5b3005"' : 'data-target="#xs-components-links-module-ContactModule-dacab31fb4e7b1f1812c40f37f5b3005"') + '>\n                                    <span class="icon ion-md-cog"></span>\n                                    <span>Components</span>\n                                    <span class="icon ion-ios-arrow-down"></span>\n                                </div>\n                                <ul class="links collapse"\n                                    ' + (isNormalMode ? 'id="components-links-module-ContactModule-dacab31fb4e7b1f1812c40f37f5b3005"' : 'id="xs-components-links-module-ContactModule-dacab31fb4e7b1f1812c40f37f5b3005"') + '>\n                                    \n                                        <li class="link">\n                                            <a href="components/ContactListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ContactListComponent</a>\n                                        </li>\n                                    \n                                </ul>\n                            </li>\n                        \n                        \n                        \n                        \n                            <li class="chapter inner">\n                                <div class="simple menu-toggler" data-toggle="collapse"\n                                    ' + (isNormalMode ? 'data-target="#injectables-links-module-ContactModule-dacab31fb4e7b1f1812c40f37f5b3005"' : 'data-target="#xs-injectables-links-module-ContactModule-dacab31fb4e7b1f1812c40f37f5b3005"') + '>\n                                    <span class="icon ion-md-arrow-round-down"></span>\n                                    <span>Injectables</span>\n                                    <span class="icon ion-ios-arrow-down"></span>\n                                </div>\n                                <ul class="links collapse"\n                                    ' + (isNormalMode ? 'id="injectables-links-module-ContactModule-dacab31fb4e7b1f1812c40f37f5b3005"' : 'id="xs-injectables-links-module-ContactModule-dacab31fb4e7b1f1812c40f37f5b3005"') + '>\n                                    \n                                        <li class="link">\n                                            <a href="injectables/ContactService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>ContactService</a>\n                                        </li>\n                                    \n                                </ul>\n                            </li>\n                        \n                        \n                    </li>\n                \n                    <li class="link">\n                        <a href="modules/ContactRoutingModule.html" data-type="entity-link">ContactRoutingModule</a>\n                        \n                        \n                        \n                        \n                        \n                    </li>\n                \n                    <li class="link">\n                        <a href="modules/MaterialModule.html" data-type="entity-link">MaterialModule</a>\n                        \n                        \n                        \n                        \n                            <li class="chapter inner">\n                                <div class="simple menu-toggler" data-toggle="collapse"\n                                    ' + (isNormalMode ? 'data-target="#injectables-links-module-MaterialModule-d481d4303726fbd58879b0aacff8722e"' : 'data-target="#xs-injectables-links-module-MaterialModule-d481d4303726fbd58879b0aacff8722e"') + '>\n                                    <span class="icon ion-md-arrow-round-down"></span>\n                                    <span>Injectables</span>\n                                    <span class="icon ion-ios-arrow-down"></span>\n                                </div>\n                                <ul class="links collapse"\n                                    ' + (isNormalMode ? 'id="injectables-links-module-MaterialModule-d481d4303726fbd58879b0aacff8722e"' : 'id="xs-injectables-links-module-MaterialModule-d481d4303726fbd58879b0aacff8722e"') + '>\n                                    \n                                        <li class="link">\n                                            <a href="injectables/MaterialService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>MaterialService</a>\n                                        </li>\n                                    \n                                </ul>\n                            </li>\n                        \n                        \n                    </li>\n                \n                    <li class="link">\n                        <a href="modules/ProjectModule.html" data-type="entity-link">ProjectModule</a>\n                        \n                            <li class="chapter inner">\n                                <div class="simple menu-toggler" data-toggle="collapse"\n                                    ' + (isNormalMode ? 'data-target="#components-links-module-ProjectModule-f11e7f3f94a131a202c08a8f535df7e7"' : 'data-target="#xs-components-links-module-ProjectModule-f11e7f3f94a131a202c08a8f535df7e7"') + '>\n                                    <span class="icon ion-md-cog"></span>\n                                    <span>Components</span>\n                                    <span class="icon ion-ios-arrow-down"></span>\n                                </div>\n                                <ul class="links collapse"\n                                    ' + (isNormalMode ? 'id="components-links-module-ProjectModule-f11e7f3f94a131a202c08a8f535df7e7"' : 'id="xs-components-links-module-ProjectModule-f11e7f3f94a131a202c08a8f535df7e7"') + '>\n                                    \n                                        <li class="link">\n                                            <a href="components/ProjectDetailsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProjectDetailsComponent</a>\n                                        </li>\n                                    \n                                        <li class="link">\n                                            <a href="components/ProjectListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProjectListComponent</a>\n                                        </li>\n                                    \n                                </ul>\n                            </li>\n                        \n                        \n                        \n                        \n                            <li class="chapter inner">\n                                <div class="simple menu-toggler" data-toggle="collapse"\n                                    ' + (isNormalMode ? 'data-target="#injectables-links-module-ProjectModule-f11e7f3f94a131a202c08a8f535df7e7"' : 'data-target="#xs-injectables-links-module-ProjectModule-f11e7f3f94a131a202c08a8f535df7e7"') + '>\n                                    <span class="icon ion-md-arrow-round-down"></span>\n                                    <span>Injectables</span>\n                                    <span class="icon ion-ios-arrow-down"></span>\n                                </div>\n                                <ul class="links collapse"\n                                    ' + (isNormalMode ? 'id="injectables-links-module-ProjectModule-f11e7f3f94a131a202c08a8f535df7e7"' : 'id="xs-injectables-links-module-ProjectModule-f11e7f3f94a131a202c08a8f535df7e7"') + '>\n                                    \n                                        <li class="link">\n                                            <a href="injectables/ProjectService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>ProjectService</a>\n                                        </li>\n                                    \n                                </ul>\n                            </li>\n                        \n                        \n                    </li>\n                \n                    <li class="link">\n                        <a href="modules/ProjectRoutingModule.html" data-type="entity-link">ProjectRoutingModule</a>\n                        \n                        \n                        \n                        \n                        \n                    </li>\n                \n            </ul>\n        </li>\n        \n        \n            \n                <li class="chapter">\n                    <div class="simple menu-toggler" data-toggle="collapse"\n                    ' + (isNormalMode ? 'data-target="#components-links"' : 'data-target="#xs-components-links"') + '>\n                        <span class="icon ion-md-cog"></span>\n                        <span>Components</span>\n                        <span class="icon ion-ios-arrow-down"></span>\n                    </div>\n                    <ul class="links collapse"\n                    ' + (isNormalMode ? 'id="components-links"' : 'id="xs-components-links"') + '>\n                        \n                            <li class="link">\n                                <a href="components/AboutListComponent.html" data-type="entity-link">AboutListComponent</a>\n                            </li>\n                        \n                            <li class="link">\n                                <a href="components/ContactListComponent.html" data-type="entity-link">ContactListComponent</a>\n                            </li>\n                        \n                            <li class="link">\n                                <a href="components/ProjectDetailsComponent.html" data-type="entity-link">ProjectDetailsComponent</a>\n                            </li>\n                        \n                            <li class="link">\n                                <a href="components/ProjectListComponent.html" data-type="entity-link">ProjectListComponent</a>\n                            </li>\n                        \n                    </ul>\n                </li>\n            \n        \n        \n        \n        \n        <li class="chapter">\n            <div class="simple menu-toggler" data-toggle="collapse"\n            ' + (isNormalMode ? 'data-target="#classes-links"' : 'data-target="#xs-classes-links"') + '>\n                <span class="icon ion-ios-paper"></span>\n                <span>Classes</span>\n                <span class="icon ion-ios-arrow-down"></span>\n            </div>\n            <ul class="links collapse"\n            ' + (isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"') + '>\n                \n                    <li class="link">\n                        <a href="classes/About.html" data-type="entity-link">About</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="classes/AppConfig.html" data-type="entity-link">AppConfig</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="classes/Category.html" data-type="entity-link">Category</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="classes/Contact.html" data-type="entity-link">Contact</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="classes/Course.html" data-type="entity-link">Course</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="classes/Education.html" data-type="entity-link">Education</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="classes/Project.html" data-type="entity-link">Project</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="classes/Ref.html" data-type="entity-link">Ref</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="classes/Social.html" data-type="entity-link">Social</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="classes/Tag.html" data-type="entity-link">Tag</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="classes/Work.html" data-type="entity-link">Work</a>\n                    </li>\n                \n            </ul>\n        </li>\n        \n        \n            \n                <li class="chapter">\n                    <div class="simple menu-toggler" data-toggle="collapse"\n                        ' + (isNormalMode ? 'data-target="#injectables-links"' : 'data-target="#xs-injectables-links"') + '>\n                        <span class="icon ion-md-arrow-round-down"></span>\n                        <span>Injectables</span>\n                        <span class="icon ion-ios-arrow-down"></span>\n                    </div>\n                    <ul class="links collapse"\n                    ' + (isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"') + '>\n                        \n                            <li class="link">\n                                <a href="injectables/AboutService.html" data-type="entity-link">AboutService</a>\n                            </li>\n                        \n                            <li class="link">\n                                <a href="injectables/CategoryService.html" data-type="entity-link">CategoryService</a>\n                            </li>\n                        \n                            <li class="link">\n                                <a href="injectables/ContactService.html" data-type="entity-link">ContactService</a>\n                            </li>\n                        \n                            <li class="link">\n                                <a href="injectables/FirestoreService.html" data-type="entity-link">FirestoreService</a>\n                            </li>\n                        \n                            <li class="link">\n                                <a href="injectables/LoaderService.html" data-type="entity-link">LoaderService</a>\n                            </li>\n                        \n                            <li class="link">\n                                <a href="injectables/MaterialService.html" data-type="entity-link">MaterialService</a>\n                            </li>\n                        \n                            <li class="link">\n                                <a href="injectables/ProjectService.html" data-type="entity-link">ProjectService</a>\n                            </li>\n                        \n                            <li class="link">\n                                <a href="injectables/RecaptchaService.html" data-type="entity-link">RecaptchaService</a>\n                            </li>\n                        \n                            <li class="link">\n                                <a href="injectables/TagService.html" data-type="entity-link">TagService</a>\n                            </li>\n                        \n                    </ul>\n                </li>\n            \n        \n        \n        <li class="chapter">\n            <div class="simple menu-toggler" data-toggle="collapse"\n            ' + (isNormalMode ? 'data-target="#interceptors-links"' : 'data-target="#xs-interceptors-links"') + '>\n                <span class="icon ion-ios-swap"></span>\n                <span>Interceptors</span>\n                <span class="icon ion-ios-arrow-down"></span>\n            </div>\n            <ul class="links collapse"\n            ' + (isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"') + '>\n                \n                    <li class="link">\n                        <a href="interceptors/HeaderInterceptor.html" data-type="entity-link">HeaderInterceptor</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="interceptors/LoaderInterceptor.html" data-type="entity-link">LoaderInterceptor</a>\n                    </li>\n                \n            </ul>\n        </li>\n        \n        \n        \n        <li class="chapter">\n            <div class="simple menu-toggler" data-toggle="collapse"\n                ' + (isNormalMode ? 'data-target="#interfaces-links"' : 'data-target="#xs-interfaces-links"') + '>\n                <span class="icon ion-md-information-circle-outline"></span>\n                <span>Interfaces</span>\n                <span class="icon ion-ios-arrow-down"></span>\n            </div>\n            <ul class="links collapse"\n            ' + (isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"') + '>\n                \n                    <li class="link">\n                        <a href="interfaces/LoaderState.html" data-type="entity-link">LoaderState</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="interfaces/ProjectImages.html" data-type="entity-link">ProjectImages</a>\n                    </li>\n                \n            </ul>\n        </li>\n        \n        \n            \n                <li class="chapter">\n                    <div class="simple menu-toggler" data-toggle="collapse"\n                    ' + (isNormalMode ? 'data-target="#pipes-links"' : 'data-target="#xs-pipes-links"') + '>\n                        <span class="icon ion-md-add"></span>\n                        <span>Pipes</span>\n                        <span class="icon ion-ios-arrow-down"></span>\n                    </div>\n                    <ul class="links collapse"\n                    ' + (isNormalMode ? 'id="pipes-links"' : 'id="xs-pipes-links"') + '>\n                        \n                            <li class="link">\n                                <a href="pipes/AgePipe.html" data-type="entity-link">AgePipe</a>\n                            </li>\n                        \n                            <li class="link">\n                                <a href="pipes/TimestampToDatePipe.html" data-type="entity-link">TimestampToDatePipe</a>\n                            </li>\n                        \n                    </ul>\n                </li>\n            \n        \n        \n        <li class="chapter">\n            <div class="simple menu-toggler" data-toggle="collapse"\n            ' + (isNormalMode ? 'data-target="#miscellaneous-links"' : 'data-target="#xs-miscellaneous-links"') + '>\n                <span class="icon ion-ios-cube"></span>\n                <span>Miscellaneous</span>\n                <span class="icon ion-ios-arrow-down"></span>\n            </div>\n            <ul class="links collapse"\n            ' + (isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"') + '>\n                \n                \n                \n                    <li class="link">\n                      <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>\n                    </li>\n                \n                \n                    <li class="link">\n                      <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>\n                    </li>\n                \n            </ul>\n        </li>\n        \n        \n            \n            <li class="chapter">\n                <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>\n            </li>\n            \n        \n        \n        <li class="chapter">\n            <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>\n        </li>\n        \n        \n        \n        <li class="divider"></li>\n        <li class="copyright">\n                Documentation generated using <a href="https://compodoc.app/" target="_blank">\n                    \n                        \n                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">\n                        \n                    \n                </a>\n        </li>\n        \n    </ul>\n</nav>'
);
        this.innerHTML = tp.strings;
        }
    }]);

    return _class;
}(HTMLElement));