import React from 'react';

const NavBar = () => {
    return (
        <div class="navbar">
            <div class="container-xl">
                <div class="row flex-fill align-items-center">
                    <div class="col">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" href="./">
                                    <span class="nav-link-icon d-md-none d-lg-inline-block">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                             fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                             stroke-linejoin="round" class="icon icon-1">
                                        <path d="M5 12l-2 0l9 -9l9 9l-2 0"></path>
                                        <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"></path>
                                        <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6"></path>
                                      </svg>
                                    </span>
                                    <span class="nav-link-title"> Home </span>
                                </a>
                            </li>
                            <li class="nav-item active dropdown">
                                <a class="nav-link dropdown-toggle" href="#navbar-base" data-bs-toggle="dropdown"
                                   data-bs-auto-close="outside" role="button" aria-expanded="false">
                                    <span class="nav-link-icon d-md-none d-lg-inline-block">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                             fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                             stroke-linejoin="round" class="icon icon-1">
                                        <path d="M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5"></path>
                                        <path d="M12 12l8 -4.5"></path>
                                        <path d="M12 12l0 9"></path>
                                        <path d="M12 12l-8 -4.5"></path>
                                        <path d="M16 5.25l-8 4.5"></path>
                                      </svg>
                                    </span>
                                    <span class="nav-link-title"> Interface </span>
                                </a>
                                <div class="dropdown-menu">
                                    <div class="dropdown-menu-columns">
                                        <div class="dropdown-menu-column">
                                            <a class="dropdown-item" href="./accordion.html">
                                                Accordion
                                                <span
                                                    class="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
                                            </a>
                                            <a class="dropdown-item" href="./alerts.html"> Alerts </a>
                                            <div class="dropend">
                                                <a class="dropdown-item dropdown-toggle" href="#sidebar-authentication"
                                                   data-bs-toggle="dropdown" data-bs-auto-close="outside" role="button"
                                                   aria-expanded="false">
                                                    Authentication
                                                </a>
                                                <div class="dropdown-menu">
                                                    <a href="./sign-in.html" class="dropdown-item"> Sign in </a>
                                                    <a href="./sign-in-link.html" class="dropdown-item"> Sign in
                                                        link </a>
                                                    <a href="./sign-in-illustration.html" class="dropdown-item"> Sign in
                                                        with illustration </a>
                                                    <a href="./sign-in-cover.html" class="dropdown-item"> Sign in with
                                                        cover </a>
                                                    <a href="./sign-up.html" class="dropdown-item"> Sign up </a>
                                                    <a href="./forgot-password.html" class="dropdown-item"> Forgot
                                                        password </a>
                                                    <a href="./terms-of-service.html" class="dropdown-item"> Terms of
                                                        service </a>
                                                    <a href="./auth-lock.html" class="dropdown-item"> Lock screen </a>
                                                    <a href="./2-step-verification.html" class="dropdown-item"> 2 step
                                                        verification </a>
                                                    <a href="./2-step-verification-code.html" class="dropdown-item"> 2
                                                        step verification code </a>
                                                </div>
                                            </div>
                                            <a class="dropdown-item" href="./badges.html"> Badges </a>
                                            <a class="dropdown-item" href="./blank.html"> Blank page </a>
                                            <a class="dropdown-item" href="./buttons.html"> Buttons </a>
                                            <div class="dropend">
                                                <a class="dropdown-item dropdown-toggle" href="#sidebar-cards"
                                                   data-bs-toggle="dropdown" data-bs-auto-close="outside" role="button"
                                                   aria-expanded="false">
                                                    Cards
                                                </a>
                                                <div class="dropdown-menu">
                                                    <a href="./cards.html" class="dropdown-item"> Sample cards </a>
                                                    <a href="./card-actions.html" class="dropdown-item">
                                                        Card actions
                                                        <span
                                                            class="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
                                                    </a>
                                                    <a href="./cards-masonry.html" class="dropdown-item"> Cards
                                                        Masonry </a>
                                                </div>
                                            </div>
                                            <a class="dropdown-item" href="./carousel.html"> Carousel </a>
                                            <a class="dropdown-item" href="./colors.html"> Colors </a>
                                            <a class="dropdown-item" href="./datagrid.html"> Data grid </a>
                                            <a class="dropdown-item" href="./dropdowns.html"> Dropdowns </a>
                                            <div class="dropend">
                                                <a class="dropdown-item dropdown-toggle" href="#sidebar-error"
                                                   data-bs-toggle="dropdown" data-bs-auto-close="outside" role="button"
                                                   aria-expanded="false">
                                                    Error pages
                                                </a>
                                                <div class="dropdown-menu">
                                                    <a href="./error-404.html" class="dropdown-item"> 404 page </a>
                                                    <a href="./error-500.html" class="dropdown-item"> 500 page </a>
                                                    <a href="./error-maintenance.html"
                                                       class="dropdown-item"> Maintenance page </a>
                                                </div>
                                            </div>
                                            <a class="dropdown-item" href="./lists.html"> Lists </a>
                                            <a class="dropdown-item" href="./modals.html"> Modal </a>
                                            <a class="dropdown-item" href="./markdown.html"> Markdown </a>
                                        </div>
                                        <div class="dropdown-menu-column">
                                            <a class="dropdown-item active" href="./navigation.html"> Navigation </a>
                                            <a class="dropdown-item" href="./offcanvas.html"> Offcanvas </a>
                                            <a class="dropdown-item" href="./pagination.html"> Pagination </a>
                                            <a class="dropdown-item" href="./placeholder.html"> Placeholder </a>
                                            <a class="dropdown-item" href="./segmented-control.html">
                                                Segmented control
                                                <span
                                                    class="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
                                            </a>
                                            <a class="dropdown-item" href="./scroll-spy.html">
                                                Scroll spy
                                                <span
                                                    class="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
                                            </a>
                                            <a class="dropdown-item" href="./social-icons.html"> Social icons </a>
                                            <a class="dropdown-item" href="./stars-rating.html"> Stars rating </a>
                                            <a class="dropdown-item" href="./steps.html"> Steps </a>
                                            <a class="dropdown-item" href="./tables.html"> Tables </a>
                                            <a class="dropdown-item" href="./tabs.html"> Tabs </a>
                                            <a class="dropdown-item" href="./tags.html"> Tags </a>
                                            <a class="dropdown-item" href="./toasts.html"> Toasts </a>
                                            <a class="dropdown-item" href="./typography.html"> Typography </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="./form-elements.html">
                        <span class="nav-link-icon d-md-none d-lg-inline-block">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                 stroke-linejoin="round" class="icon icon-1">
                            <path d="M9 11l3 3l8 -8"></path>
                            <path d="M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9"></path>
                          </svg>
                        </span>
                                    <span class="nav-link-title"> Form elements </span>
                                </a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#navbar-extra" data-bs-toggle="dropdown"
                                   data-bs-auto-close="outside" role="button" aria-expanded="false">
                        <span class="nav-link-icon d-md-none d-lg-inline-block">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                 stroke-linejoin="round" class="icon icon-1">
                            <path
                                d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path>
                          </svg>
                        </span>
                                    <span class="nav-link-title"> Extra </span>
                                </a>
                                <div class="dropdown-menu">
                                    <div class="dropdown-menu-columns">
                                        <div class="dropdown-menu-column">
                                            <a class="dropdown-item" href="./activity.html"> Activity </a>
                                            <a class="dropdown-item" href="./chat.html"> Chat </a>
                                            <a class="dropdown-item" href="./cookie-banner.html"> Cookie banner </a>
                                            <a class="dropdown-item" href="./empty.html"> Empty page </a>
                                            <a class="dropdown-item" href="./faq.html"> FAQ </a>
                                            <a class="dropdown-item" href="./gallery.html"> Gallery </a>
                                            <a class="dropdown-item" href="./invoice.html"> Invoice </a>
                                            <a class="dropdown-item" href="./job-listing.html"> Job listing </a>
                                            <a class="dropdown-item" href="./license.html"> License </a>
                                            <a class="dropdown-item" href="./logs.html"> Logs </a>
                                            <a class="dropdown-item" href="./marketing/index.html"> Marketing </a>
                                            <a class="dropdown-item" href="./music.html"> Music </a>
                                            <a class="dropdown-item" href="./page-loader.html"> Page loader </a>
                                        </div>
                                        <div class="dropdown-menu-column">
                                            <a class="dropdown-item" href="./photogrid.html"> Photogrid </a>
                                            <a class="dropdown-item" href="./pricing.html"> Pricing cards </a>
                                            <a class="dropdown-item" href="./pricing-table.html"> Pricing table </a>
                                            <a class="dropdown-item" href="./search-results.html"> Search results </a>
                                            <a class="dropdown-item" href="./settings.html"> Settings </a>
                                            <a class="dropdown-item" href="./signatures.html">
                                                Signatures
                                                <span
                                                    class="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
                                            </a>
                                            <a class="dropdown-item" href="./tasks.html"> Tasks </a>
                                            <a class="dropdown-item" href="./trial-ended.html"> Trial ended </a>
                                            <a class="dropdown-item" href="./uptime.html"> Uptime monitor </a>
                                            <a class="dropdown-item" href="./users.html"> Users </a>
                                            <a class="dropdown-item" href="./widgets.html"> Widgets </a>
                                            <a class="dropdown-item" href="./wizard.html"> Wizard </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#navbar-layout" data-bs-toggle="dropdown"
                                   data-bs-auto-close="outside" role="button" aria-expanded="false">
                        <span class="nav-link-icon d-md-none d-lg-inline-block">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                 stroke-linejoin="round" class="icon icon-1">
                            <path
                                d="M4 4m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v1a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"></path>
                            <path
                                d="M4 13m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"></path>
                            <path
                                d="M14 4m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"></path>
                            <path
                                d="M14 15m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v1a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"></path>
                          </svg>
                        </span>
                                    <span class="nav-link-title"> Layout </span>
                                </a>
                                <div class="dropdown-menu">
                                    <div class="dropdown-menu-columns">
                                        <div class="dropdown-menu-column">
                                            <a class="dropdown-item" href="./layout-boxed.html"> Boxed </a>
                                            <a class="dropdown-item" href="./layout-combo.html"> Combined </a>
                                            <a class="dropdown-item" href="./layout-condensed.html"> Condensed </a>
                                            <a class="dropdown-item" href="./layout-fluid.html"> Fluid </a>
                                            <a class="dropdown-item" href="./layout-fluid-vertical.html"> Fluid
                                                vertical </a>
                                            <a class="dropdown-item" href="./layout-horizontal.html"> Horizontal </a>
                                            <a class="dropdown-item" href="./layout-navbar-dark.html"> Navbar dark </a>
                                        </div>
                                        <div class="dropdown-menu-column">
                                            <a class="dropdown-item" href="./layout-navbar-overlap.html"> Navbar
                                                overlap </a>
                                            <a class="dropdown-item" href="./layout-navbar-sticky.html"> Navbar
                                                sticky </a>
                                            <a class="dropdown-item" href="./layout-vertical-right.html"> Right
                                                vertical </a>
                                            <a class="dropdown-item" href="./layout-rtl.html"> RTL mode </a>
                                            <a class="dropdown-item" href="./layout-vertical.html"> Vertical </a>
                                            <a class="dropdown-item" href="./layout-vertical-transparent.html"> Vertical
                                                transparent </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#navbar-plugins" data-bs-toggle="dropdown"
                                   data-bs-auto-close="outside" role="button" aria-expanded="false">
                        <span class="nav-link-icon d-md-none d-lg-inline-block">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                 stroke-linejoin="round" class="icon icon-1">
                            <path
                                d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1"></path>
                          </svg>
                        </span>
                                    <span class="nav-link-title"> Plugins </span>
                                </a>
                                <div class="dropdown-menu">
                                    <a class="dropdown-item" href="./charts.html"> Charts </a>
                                    <a class="dropdown-item" href="./colorpicker.html"> Color picker </a>
                                    <a class="dropdown-item" href="./datatables.html"> Datatables </a>
                                    <a class="dropdown-item" href="./dropzone.html"> Dropzone </a>
                                    <a class="dropdown-item" href="./inline-player.html"> Inline player </a>
                                    <a class="dropdown-item" href="./lightbox.html"> Lightbox </a>
                                    <a class="dropdown-item" href="./maps.html"> Map </a>
                                    <a class="dropdown-item" href="./map-fullsize.html"> Map fullsize </a>
                                    <a class="dropdown-item" href="./maps-vector.html"> Map vector </a>
                                    <a class="dropdown-item" href="./tinymce.html"> TinyMCE </a>
                                </div>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#navbar-addons" data-bs-toggle="dropdown"
                                   data-bs-auto-close="outside" role="button" aria-expanded="false">
                        <span class="nav-link-icon d-md-none d-lg-inline-block">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                 stroke-linejoin="round" class="icon icon-1">
                            <path d="M12 5l0 14"></path>
                            <path d="M5 12l14 0"></path>
                          </svg>
                        </span>
                                    <span class="nav-link-title"> Addons </span>
                                </a>
                                <div class="dropdown-menu">
                                    <a class="dropdown-item" href="./icons.html"> Icons </a>
                                    <a class="dropdown-item" href="./emails.html"> Emails </a>
                                    <a class="dropdown-item" href="./flags.html"> Flags </a>
                                    <a class="dropdown-item" href="./illustrations.html"> Illustrations </a>
                                    <a class="dropdown-item" href="./payment-providers.html"> Payment providers </a>
                                </div>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#navbar-help" data-bs-toggle="dropdown"
                                   data-bs-auto-close="outside" role="button" aria-expanded="false">
                        <span class="nav-link-icon d-md-none d-lg-inline-block">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                 stroke-linejoin="round" class="icon icon-1">
                            <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                            <path d="M15 15l3.35 3.35"></path>
                            <path d="M9 15l-3.35 3.35"></path>
                            <path d="M5.65 5.65l3.35 3.35"></path>
                            <path d="M18.35 5.65l-3.35 3.35"></path>
                          </svg>
                        </span>
                                    <span class="nav-link-title"> Help </span>
                                </a>
                                <div class="dropdown-menu">
                                    <a class="dropdown-item" href="https://tabler.io/docs" target="_blank"
                                       rel="noopener"> Documentation </a>
                                    <a class="dropdown-item" href="./changelog.html"> Changelog </a>
                                    <a class="dropdown-item" href="https://github.com/tabler/tabler" target="_blank"
                                       rel="noopener"> Source code </a>
                                    <a class="dropdown-item text-pink" href="https://github.com/sponsors/codecalm"
                                       target="_blank" rel="noopener">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                             viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                             stroke-linecap="round" stroke-linejoin="round"
                                             class="icon icon-inline me-1 icon-2">
                                            <path
                                                d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"></path>
                                        </svg>
                                        Sponsor project!
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="col-2 d-none d-xxl-block">
                        <div class="my-2 my-md-0 flex-grow-1 flex-md-grow-0 order-first order-md-last">
                            <form action="./" method="get" autocomplete="off" novalidate="">
                                <div class="input-icon">
                        <span class="input-icon-addon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                 stroke-linejoin="round" class="icon icon-1">
                            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
                            <path d="M21 21l-6 -6"></path>
                          </svg>
                        </span>
                                    <input type="text" value="" class="form-control" placeholder="Search…"
                                           aria-label="Search in website"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavBar;