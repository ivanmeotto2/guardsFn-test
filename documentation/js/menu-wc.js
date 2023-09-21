'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">guards-fn-test documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-29e2860132e7bf2d6d6fda9b2d6b96579dde5585caf2841185050eb5873891cfd6b15c0436d85574be7ebe634c3cb2d0ddf352d38e10a6df1732c3a7de87ab19"' : 'data-bs-target="#xs-components-links-module-AppModule-29e2860132e7bf2d6d6fda9b2d6b96579dde5585caf2841185050eb5873891cfd6b15c0436d85574be7ebe634c3cb2d0ddf352d38e10a6df1732c3a7de87ab19"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-29e2860132e7bf2d6d6fda9b2d6b96579dde5585caf2841185050eb5873891cfd6b15c0436d85574be7ebe634c3cb2d0ddf352d38e10a6df1732c3a7de87ab19"' :
                                            'id="xs-components-links-module-AppModule-29e2860132e7bf2d6d6fda9b2d6b96579dde5585caf2841185050eb5873891cfd6b15c0436d85574be7ebe634c3cb2d0ddf352d38e10a6df1732c3a7de87ab19"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/Route1Component.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >Route1Component</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/Route2Component.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >Route2Component</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/Route1Module.html" data-type="entity-link" >Route1Module</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-Route1Module-cbb3579fed038af9f2e206db63b662a5245e490c694cf40a96f2cee04479985539fc8a1f5bc4f64e88dede6ef97649b4d588b42357b1c782a4f8938eae8d9df7"' : 'data-bs-target="#xs-components-links-module-Route1Module-cbb3579fed038af9f2e206db63b662a5245e490c694cf40a96f2cee04479985539fc8a1f5bc4f64e88dede6ef97649b4d588b42357b1c782a4f8938eae8d9df7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-Route1Module-cbb3579fed038af9f2e206db63b662a5245e490c694cf40a96f2cee04479985539fc8a1f5bc4f64e88dede6ef97649b4d588b42357b1c782a4f8938eae8d9df7"' :
                                            'id="xs-components-links-module-Route1Module-cbb3579fed038af9f2e206db63b662a5245e490c694cf40a96f2cee04479985539fc8a1f5bc4f64e88dede6ef97649b4d588b42357b1c782a4f8938eae8d9df7"' }>
                                            <li class="link">
                                                <a href="components/Route1Child2Component.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >Route1Child2Component</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/Route1ChildComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >Route1ChildComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/Route1RoutingModule.html" data-type="entity-link" >Route1RoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/Route2Module.html" data-type="entity-link" >Route2Module</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-Route2Module-be6ef26defd0d935d6aa171d1122e5d11ab8c15923f960f9131aae2c52c999e72b05346bc1b320c2501aabaa2cfe9bb681d92d84955fabd5563bf4f06b4bf927"' : 'data-bs-target="#xs-components-links-module-Route2Module-be6ef26defd0d935d6aa171d1122e5d11ab8c15923f960f9131aae2c52c999e72b05346bc1b320c2501aabaa2cfe9bb681d92d84955fabd5563bf4f06b4bf927"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-Route2Module-be6ef26defd0d935d6aa171d1122e5d11ab8c15923f960f9131aae2c52c999e72b05346bc1b320c2501aabaa2cfe9bb681d92d84955fabd5563bf4f06b4bf927"' :
                                            'id="xs-components-links-module-Route2Module-be6ef26defd0d935d6aa171d1122e5d11ab8c15923f960f9131aae2c52c999e72b05346bc1b320c2501aabaa2cfe9bb681d92d84955fabd5563bf4f06b4bf927"' }>
                                            <li class="link">
                                                <a href="components/Route2Child2Component.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >Route2Child2Component</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/Route2ChildComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >Route2ChildComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/Route2RoutingModule.html" data-type="entity-link" >Route2RoutingModule</a>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/LocalStorageService.html" data-type="entity-link" >LocalStorageService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});