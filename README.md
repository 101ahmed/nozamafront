o# Nozamafront

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# creation new project

`ng new nozamafront --routing --style=scss`

# install npm

`npm install`

# run npm 

`npm run start`

# add bootstrap

`ng add @ng-bootstrap/ng-bootstrap`

# creation modules

`ng g module core`

`ng g module shared`

`ng g module icons`

`ng g module ui`

`ng g module orders --routing`

`ng g module login --routing`

`ng g module clients --routing`

`ng g module products --routing`

`ng g module pageNotFound --routing`

## creation  components

`ng g component clients/pages/PageListClients`

`ng g component clients/pages/PageEditClient`

`ng g component clients/pages/PageAddClient`



`ng g component login/pages/PageSignIn`

`ng g component login/pages/PageSignUp`

`ng g component login/pages/PageResetPassword`

`ng g component login/pages/PageForgotPassword`


`ng g component orders/pages/PageListOrders`

`ng g component orders/pages/PageAddOrder`

`ng g component orders/pages/PageEditOrder`

`ng g component page-not-found/pages/PageNotFound`


`ng g component ui/components/Ui`

## Generate services

`ng g s core/services/version`

`ng g s clients/services/clients`

`ng g s orders/services/orders`

## Generate icons

`ng g component icons/components/IconNav --export`

`ng g component icons/components/IconClose --export`

`ng g component icons/components/IconEdit --export`

`ng g component icons/components/IconDelete --export`

`ng g component icons/components/IconSearch --export`

# JSON Server

`npm install -g json-server`

`npm run json-server`

# Ajout des composants products

`ng g component products/pages/PageListProducts `

`ng g component products/pages/PageAddProduct`

`ng g component products/pages/PageEditProduct`

`ng g component products/productForm`


# Service products

`ng g s products/services/products`

# create function search and filter product

`ng g c products/search`

`ng g c products/filter`

# Create module categories

`ng g module categories --routing`

`ng g component categories/pages/PageListCategories`

`ng g component categories/pages/PageEditCategorie`

`ng g component categories/pages/PageAddCategorie`

`ng g component categories/categoriesForm/categoriesForm`

`ng g s categories/services/categories`

`ng g component categories/search/search`

## Ajout des pages Detail product
` ng g c products/pages/PageDetailProduct`

# page login

`ng g s login/services`

# Home Page

## Header
`ng g component core/components/Header`

## Nav
`ng g component core/components/Nav`

## Footer

`ng g component core/components/Footer`

# Page Admin

`ng g module admin --routing`

`ng g c admin/components/admin`

# Page Contact et contact services


`ng g s contact/services/contact`


# Search on home page 

`ng g c search`


# pade payment
` ng g component orders/pages/PagePayment`



