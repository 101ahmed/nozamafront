import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { CartComponent } from './pages/cart/cart.component';

import { CategoryPageComponent } from './pages/category-page/category-page.component';

import { DealsPageComponent } from './pages/deals/deals-page.component';

import { DepartmentsPageComponent } from './pages/departments/departments-page.component';

import { HomeComponent } from './pages/home/home.component';

import { StaticInfoPageComponent } from './pages/static-info/static-info-page.component';



const routes: Routes = [

  { path: '', component: HomeComponent },

  { path: 'cart', component: CartComponent },

  { path: 'deals', component: DealsPageComponent },

  { path: 'departments', component: DepartmentsPageComponent },

  {

    path: 'customer-service',

    component: StaticInfoPageComponent,

    data: {

      heading: 'Customer Service',

      body: 'Demo storefront — FAQs, live chat, and phone support would appear here.',

    },

  },

  {

    path: 'registry',

    component: StaticInfoPageComponent,

    data: {

      heading: 'Registry',

      body: 'Demo storefront — create or manage gift registries here.',

    },

  },

  {

    path: 'gift-cards',

    component: StaticInfoPageComponent,

    data: {

      heading: 'Gift Cards',

      body: 'Demo storefront — purchase or redeem gift cards here.',

    },

  },

  {

    path: 'sell',

    component: StaticInfoPageComponent,

    data: {

      heading: 'Sell on Nozama',

      body: 'Demo storefront — learn how to sell products on Nozama.',

    },

  },

  {

    path: 'sign-in',

    component: StaticInfoPageComponent,

    data: {

      heading: 'Sign in',

      body: 'Demo storefront — account sign-in would be implemented here.',

    },

  },

  {

    path: 'orders',

    component: StaticInfoPageComponent,

    data: {

      heading: 'Returns & Orders',

      body: 'Demo storefront — order history and returns would appear here.',

    },

  },

  {

    path: 'nozama-card',

    component: StaticInfoPageComponent,

    data: {

      heading: 'Nozama Card',

      body: 'Demo storefront — apply for or manage your Nozama Card, view rewards, and payment preferences.',

    },

  },

  {

    path: 'shop-with-points',

    component: StaticInfoPageComponent,

    data: {

      heading: 'Shop with Points',

      body: 'Demo storefront — redeem Nozama Points at checkout and track your rewards balance.',

    },

  },

  {

    path: 'reload-balance',

    component: StaticInfoPageComponent,

    data: {

      heading: 'Reload Your Balance',

      body: 'Demo storefront — add funds to your Nozama Balance for quicker checkout on eligible orders.',

    },

  },

  {

    path: 'affiliate',

    component: StaticInfoPageComponent,

    data: {

      heading: 'Become an Affiliate',

      body: 'Demo storefront — join the Nozama Associates Program, share links, and earn commissions on qualifying purchases.',

    },

  },

  {

    path: 'advertise',

    component: StaticInfoPageComponent,

    data: {

      heading: 'Advertise',

      body: 'Demo storefront — promote your brand with Nozama Ads and sponsored placements.',

    },

  },

  {

    path: 'careers',

    component: StaticInfoPageComponent,

    data: {

      heading: 'Careers',

      body: 'Demo storefront — explore open roles, teams, and life at Nozama.',

    },

  },

  {

    path: 'blog',

    component: StaticInfoPageComponent,

    data: {

      heading: 'Blog',

      body: 'Demo storefront — news, tips, and stories from Nozama.',

    },

  },

  {

    path: 'about',

    component: StaticInfoPageComponent,

    data: {

      heading: 'About Nozama',

      body: 'Demo storefront — learn about our mission, leadership, and global operations.',

    },

  },

  {

    path: 'investor-relations',

    component: StaticInfoPageComponent,

    data: {

      heading: 'Investor Relations',

      body: 'Demo storefront — annual reports, filings, and shareholder resources would appear here.',

    },

  },

  { path: 'category/:slug', component: CategoryPageComponent },

  { path: '**', redirectTo: '' },

];



@NgModule({

  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],

})

export class AppRoutingModule {}

